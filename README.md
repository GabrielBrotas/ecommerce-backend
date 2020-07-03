# ecommerce-backend
  Nesse backend configuramos nossa API para o frontend consumir através do Axios. 
  Utilizamos o banco de dados MongoDB para guardar as informações dos produtos, usuarios e pagamentos.
  As imagens dos produtos no modo produção ficam guardados na aws s3 para não ocupar espaço no nosso servidor, já no modo dev guardamos na pasta temp/uploads.
  
## Libraries

  express
  body-parser
  jsonwebtoken 
  dotenv
  bcryptjs  # gerar senhas hash para os usuarios
  mongoose  # se conectar com o mongodb
  morgan    # HTTP request logger middleware 
  multer    # Permitir enviar arquivos para fazer upload
  multer-s3 # Criar conexao com o servidor da aws -3
  aws-sdk   # Servidor da amazon
 
  
