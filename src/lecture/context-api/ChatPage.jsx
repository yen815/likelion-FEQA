// 새로운 JSX 변환(transform) 엔진 사용하기 때문 (v17+)
// https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

// [학습 주제]
// 3. 컨텍스트 API 활용 (글로벌 또는 특정 컨텍스트 상태 관리)
// 3-1. 컨텍스트 생성
// const INITIAL_CHAT_CONTEXT_VALUE = {
//   userInfo: {
//     id: 'temp',
//     name: '언노운',
//     role: 'GUEST',
//   },
//   messages: [],
// };

// [legacy API] ~ 2018
// render(children) props pattern
// <ChatContext.Consumer>
//  { (contextValue) => <div>{contextValue}</div>}
// </ChatContext.Consumer>

// 3-3. useContext 훅
// 3-4. 컨텍스트 프로바이더 래퍼 컴포넌트
// 3-5. 컨텍스트 값을 공급하는 커스텀 훅
// 3-6. 효율적인 리-렌더링 관리 (프로파일링 & 메모)

import { ChatProvider } from '@/contexts/Chat';
import ChatRoomList from './ChatRoomList';
import NavBar from './NavBar';

function ChatPage() {
  return (
    <ChatProvider>
      <div className="flex flex-col space-y-5 bg-slate-100 text-slate-800 p-5 shadow-sm">
        <h3 className="text-xl font-extralight">ChatPage</h3>
        <NavBar />
        <ChatRoomList />
      </div>
    </ChatProvider>
  );
}

export default ChatPage;
