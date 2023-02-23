import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board-dto';
//게시물에 관한 로직을 처리하는 곳

@Injectable()
export class BoardsService {
  //private를 안하면, 다른 컴포넌트에서 배열의 값을 수정할 수 있음.
  //그리고 이미 이 보드에서 어떻게 값이 들어올질 정의를 해뒀기때문에 데이터
  //타입을 Board로 넣을수 있는것.
  //타입을 정해주면 좋은 이유?
  //원하는 타입과 다른 코드를 사용할 시 에러가 발생함.
  //코드가 잘 읽힌다
  private boards: Board[] = [];

  //리턴값이 어떻게 들어올지?
  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    //find로 찾은 id랑 파라미터로 넘어온 id가 같은 친구를 찾음
    return this.boards.find((board) => board.id === id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }

  deleteBoard(id: string): void {
    //아이디가 다른것만 남기면 삭제됨!
    this.boards = this.boards.filter((board) => board.id !== id);
  }
}
