// msw를 브라우저와 통합해서 사용할 수도 있고 노드와 통합해서 사용할 수도 있는데 jest와 같이 쓰려면 노드 통합 방법을 써야 하고 이를 위해서는 서버를 생성해야함. 기존에 만든 handler를 넣어주면 서버가 생성됨.

import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// mocking server 생성
export const server = setupServer(...handlers);
