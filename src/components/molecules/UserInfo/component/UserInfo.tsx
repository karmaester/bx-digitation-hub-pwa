import UserDetails from './UserDetails';
import UserId from './UserId';
import {
  AccordionBody,
  AccordionButton,
  AccordionHeader,
  AccordionItem,
} from '@components/atoms/Accordion';
import { ChevronIcon } from '@components/atoms/icons';

type UserInforPropsT = {
  user: any;
};

const UserInfo = ({ user }: UserInforPropsT) => {
  const { id, ...userDetails} = user;
  return (
    <AccordionItem>
      <AccordionHeader>
        <UserId id={id}/>
        <AccordionButton>
          <ChevronIcon angle={180} />
        </AccordionButton>
      </AccordionHeader>
      <AccordionBody>
        <UserDetails {...userDetails}/>
      </AccordionBody>
    </AccordionItem>
  );
};

export default UserInfo;
