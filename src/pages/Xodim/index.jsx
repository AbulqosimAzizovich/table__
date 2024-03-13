import React from 'react';
import {Collapse} from 'antd';
import {PhoneFilled, AliwangwangFilled} from '@ant-design/icons';
import './style.scss';

const items = [
  {
    key: '1',
    label: "XODIM MA'LUMOTLARI",
    children: (
      <div>
        <div className='user__inform'>
          <div className='first__1'>
            <div>
              <p>ISMI:</p>
              <span>Asrorbek</span>
            </div>

            <div>
              <p>FAMILIYASI:</p>
              <span>Asrorbek</span>
            </div>

            <div>
              <p>TUG'ILGAN KUN SANASI:</p>
              <span>Iyun 18, 1988</span>
            </div>

            <div>
              <p>TELEFONI:</p>

              <a href='#'>
                <PhoneFilled />
                +971563603500
              </a>
            </div>
          </div>

          <div className='first__1'>
            <div>
              <p>JINSI:</p>
              <span>Erkak</span>
            </div>

            <div>
              <p>OILAVIY AHVOLI:</p>
              <span>Erkak</span>
            </div>

            <div>
              <p>MILLATI:</p>
              <span>United States of America</span>
            </div>

            <div>
              <p>E-POCHTA MANZILI:</p>

              <a href='#'>
                <PhoneFilled />
                munir@kpi.com
              </a>
            </div>
          </div>

          <img
            src='https://workforcetrack.s3.amazonaws.com/c64646/u1/f2d6765b-8042-4b61-a322-a6e18fae3390?AWSAccessKeyId=AKIAIROQMC77E5UKWBWQ&Expires=1710412752&Signature=L9CSZRVzZxsrB7JeXvE%2FV%2F6m1sY%3D'
            alt='sss'
          />
        </div>
      </div>
    ),
  },
  {
    key: '2',
    label: "BANDLIK MA'LUMOTLARI",
    children: <div></div>,
  },
  {
    key: '3',
    label: "SHAXSIY IDENTIFIKATSIYA MA'LUMOTI",
    children: <div></div>,
  },
  {
    key: '4',
    label: "TO'LOV/USHLANMA TOIFASI JADVALI",
    children: <div></div>,
  },
  {
    key: '5',
    label: "BANK HISOBVARAG'I MA'LUMOTLARI",
    children: <div></div>,
  },
  {
    key: '6',
    label: 'BIRIKTIRMALAR',
    children: <div></div>,
  },
  {
    key: '7',
    label: "AKKAUNT HAQIDA MA'LUMOT",
    children: <div></div>,
  },
];
const App = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
  );
};
export default App;
