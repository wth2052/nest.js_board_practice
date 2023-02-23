// 모델은 인터페이스와 클래스로 정의가 가능하며
// 인터페이스는 변수의 타입만을 체크하고
// 클래스는 변수의 타입도 체크하고 인스턴스 또한 생성이 가능하다.

export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
