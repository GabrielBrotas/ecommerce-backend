# ecommerce-backend
  Nesse backend configuramos nossa API para o frontend consumir através do Axios. 
  Utilizamos o banco de dados MongoDB para guardar as informações dos produtos, usuarios e pagamentos.
  As imagens dos produtos no modo produção ficam guardados na aws s3 para não ocupar espaço no nosso servidor, já no modo dev guardamos na pasta temp/uploads.
  
## Libraries

  express; </br>
  body-parser; </br>
  jsonwebtoken; </br>
  dotenv; </br>
  bcryptjs;     # gerar senhas hash para os usuarios </br>
  mongoose;     # se conectar com o mongodb </br>
  morgan  ;     # HTTP request logger middleware </br>
  multer;       # Permitir enviar arquivos para fazer upload </br>
  multer-s3;    # Criar conexao com o servidor da aws -3 </br>
  aws-sdk;      # Servidor da amazon </br>
 
  
