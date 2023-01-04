const  Sequelize  =  require ( 'sequelize' )
const  sequelize  =  new  Sequelize ( 'sistemadecadastro' ,  'root' ,  'riquelmefeio' ,  {
    host : "localhost" ,
    dialeto : 'mysql'
} )

sequelize . autenticar ( ) . então ( função ( ) {
    console . log ( "conectado com sucesso" )
} ) . catch ( função ( erro ) {
    console . log ( "falha ao se conectar: ​​"  +  erro )
} )
