import { ConnectionStatus } from "src/_enums/connectionStatus";

export interface Connection {
  id?: string;
  userOneId?: string;
  userTwoId?: string;
  status?: ConnectionStatus;
  actionUserId?: string;
}
