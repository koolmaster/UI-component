import { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { Tab } from './style';

const Tabs = ({ data }) => {
  const [active, setActive] = useState();
  const handleActive = (index) => {
    if (active === index) {
      setActive(undefined);
    } else {
      setActive(index);
    }
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <Tab className={active === index ? 'active' : ''} key={index}>
            <div className="label" onClick={() => handleActive(index)}>
              <span>{`0${index + 1}`}</span>
              <span>{item.title}</span>
              <IoIosAdd />
            </div>
            <div className="content">
              {item.type === 'html' ? (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              ) : (
                <p dangerouslySetInnerHTML={{ __html: item.content }} />
              )}
            </div>
          </Tab>
        );
      })}
    </>
  );
};

export default Tabs;
