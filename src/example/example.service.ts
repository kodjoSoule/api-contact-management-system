import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  getHello() {
    return "Je suis un exemple de service ! ";
  }
}
