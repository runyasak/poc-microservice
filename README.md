# POC - Microservice
This an experimental project of microservice with nest.

### Running services
* `npm install` in each services.
* `docker-compose up`

### Note
* These services are using TCP network. Change host IP in `poc-api/global-config.ts`.
* Getting host IP by inspect in docker network.

```
docker network inspect <network-name>
```

### Ref
* [สิ่งที่ควรทำก่อนจะเริ่ม Microservices](http://www.somkiat.cc/todo-lists-before-start-microservices/)
* [Microservice คืออะไร และสำคัญอย่างไร](http://www.somkiat.cc/introduction-to-microservice/)
* [Mastering Chaos - A Netflix Guide to Microservices - YouTube](https://www.youtube.com/watch?v=CZ3wIuvmHeM)
* [Microservice Architecture at Medium – Medium Engineering](https://medium.engineering/microservice-architecture-at-medium-9c33805eb74f)
* [9. Microservices - Nest.js: A Progressive Node.js Framework Book](https://learning.oreilly.com/library/view/nestjs-a-progressive/9781939902627/ch09.html)
