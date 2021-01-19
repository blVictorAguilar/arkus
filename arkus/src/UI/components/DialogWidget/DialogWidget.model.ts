import { ContactItem } from "../../../features/types/types";

export interface DialogProps {
  isOpen: boolean;
  handleOpen: () => any;
  actionType?: string;
  contact?: ContactItem;
}
