import Proptypes from 'prop-types'


export function FirstApp( { title , subTitle, name} ) {

  if(!title){
    throw new Error('el title no existe')
  }  
  return (
    <>
      {/* 
      <code>{ JSON.stringify(newMessage) }</code> 
      */}
      <h1 data-testid='test-title'> {title} </h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
}

FirstApp.propTypes = {
  title: Proptypes.string.isRequired,
  subTitle: Proptypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Javier Mendoza',
  subTitle: 'No hay  subtitulo',
  title: 'No hay titulo',
}