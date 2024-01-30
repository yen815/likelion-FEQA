import { useState } from 'react';
import catsData from '../data/cats.json';
import { getStaticImage } from '../utils';

const createCatsList = () =>
  catsData.map((cat) => {
    // 구조분해 할당 => 생일 추가
    const [year] = cat.birthday.split('-');
    // 나이 계산
    const age = new Date().getFullYear() - year;
    return { ...cat, age };
  });

// dummy data
const newCat = createCatsList()[1]; // [cat, cat, cat] 중에 0번

function CatsList() {
  const [
    /* 상태 = 현재 컴포넌트에서 데이터 스냅샷 (수정 불가능) */
    cats,
    /* 상태 업데이트 함수 실행 (트리거 -> 렌더 -> 커밋) */
    setCats,
  ] = useState(/* 초기화 함수 참조 */ createCatsList);

  const handleDeleteCat = (deleteCatId) => {
    setCats(cats.filter((cat) => cat.id !== deleteCatId));
  };

  // const handleAddCat = () => {
  //   const newCatId = crypto.randomUUID();

  //   setCats([{ ...newCat, id: newCatId }, ...cats]);
  // };

  const handleAddCat = () => {
    setCats([{ ...newCat, id: crypto.randomUUID() }, ...cats]);
  };

  // const handleIncreaseAge = (updateCatId) => {
  //   // console.log(`${updateCatId} age +1`);
  //   setCats((/* previous cats */ cats) =>
  //     cats.map((cat) => {
  //       if (cat.id === updateCatId) {
  //         return { ...cat, age: cat.age + 1 };
  //       } else {
  //         return cat;
  //       }
  //     })
  //   );
  // };

  const handleIncreaseAge = (updateCatId) =>
    setCats(
      cats.map((cat) =>
        cat.id === updateCatId ? { ...cat, age: cat.age + 1 } : cat
      )
    );

  // const handleDecreaseAge = (updateCatId) => {
  //   // console.log(`${updateCatId} age -1`);
  //   setCats((cats) =>
  //     cats.map((cat) => {
  //       if (cat.id === updateCatId) {
  //         return { ...cat, age: cat.age - 1 };
  //       } else {
  //         return cat;
  //       }
  //     })
  //   );
  // };

  const handleDecreaseAge = (updateCatId) => {
    const nextCats = cats.map((cat) => {
      if (cat.id === updateCatId) {
        return { ...cat, age: cat.age - 1 };
      } else {
        return cat;
      }
    });

    setCats(nextCats);
  };

  // jsx => markup ( + data )
  return (
    <>
      <button type="button" onClick={handleAddCat} style={{ marginBlock: 20 }}>
        NEW CAT
      </button>
      <ul
        style={{
          listStyle: 'none',
          paddingInlineStart: 0,
          marginBlock: 0,
        }}
      >
        {cats.map((cat) => (
          <li key={cat.id}>
            <img
              height={100}
              src={getStaticImage(cat.imageSrc)}
              alt={cat.imageAlt}
            />
            <div
              role="group"
              style={{
                display: 'flex',
                gap: 4,
                marginBlockEnd: 16,
              }}
            >
              <button
                type="button"
                aria-label="고양이 나이 1 증가"
                onClick={() => handleIncreaseAge(cat.id)}
              >
                +
              </button>
              <button
                type="button"
                aria-label="고양이 나이 1 감소"
                onClick={() => handleDecreaseAge(cat.id)}
              >
                -
              </button>
              <button
                type="button"
                aria-label="삭제"
                title="삭제"
                onClick={() => handleDeleteCat(cat.id)}
              >
                ⅹ (<span className="age">{cat.age}</span>)
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Exercise() {
  return (
    <div>
      <h2>객체형 상태 관리</h2>
      <CatsList></CatsList>
    </div>
  );
}
