import { ConnectionStatus } from "src/_enums/connectionStatus";

export interface Connection {
  userOneId?: number;
  userTwoId?: number;
  status?: ConnectionStatus;
  actionUserId?: number;
}
