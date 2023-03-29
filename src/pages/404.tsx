import React from 'react';

const Page404 = () => (
  <div
    style={{
      marginTop: '160px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <div style={{ marginBottom: '20px', color: '#777', fontSize: '60px' }}>Ошибка 404</div>
    <div
      style={{
        marginTop: '50px',
        width: '50%',
        fontSize: '20px',
        textAlign: 'center',
      }}
    >
      Кажется что-то пошло не так! Страница, которую вы запрашиваете не существует. Возможно она
      устарела, была удалена или был введен неверный адрес в адресной строке
    </div>
  </div>
);

export default Page404;
