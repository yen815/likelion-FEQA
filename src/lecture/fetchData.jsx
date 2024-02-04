import { Stack } from '@/components';
import { useEffect, useState } from 'react';

function fetchData(options) {
  // Promise 객체
  return (
    fetch('https://jsonplaceholder.typicode.com/users', options)
      // 응답
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error(error);
      })
  );
}

function Exercise() {
  // 사용자 목록 정보를 상태로 관리
  const [users, setUsers] = useState(null);
  // 이펙트 함수 (사용 목적 : 상태 업데이트 될 때마다 함수 실행)
  useEffect(() => {
    console.log('users 상태가 변경되었습니다.');
  }, [users]);

  // 이펙트 함수 (사용 목적 : 네트워크 요청 1회)
  useEffect(() => {
    // 네트워크 요청을 중단 인터페이스 제공
    const controller = new AbortController();

    // 네트워크 1회 요청
    fetchData({
      signal: controller.signal,
    }).then((jsonData) => {
      setUsers(jsonData);
    });

    return () => {
      controller.abort();
    };
  }, []);

  const [count, setCount] = useState(10);
  useEffect(() => {
    console.log('count 상태가 변경되었습니다.');
  }, [count]);

  useEffect(() => {
    console.log('users, count 상태 중 하나가 변경되었습니다.');
  }, [count, users]);

  // 사용자 목록 정보 순환 조회된 사용자 정보 표시
  // 리스트 렌더링
  return (
    <>
      <Stack vertical gap={6}>
        {users?.map((user) => {
          return (
            <button
              type="button"
              key={user.id}
              onClick={() => {
                const nextUsers = users.filter((u) => u.id !== user.id);
                setUsers(nextUsers);
              }}
            >
              {user.email}
            </button>
          );
        })}
      </Stack>

      <button type="button" onClick={() => setCount((c) => c + 2)}>
        {count}
      </button>
    </>
  );
}

export default Exercise;
