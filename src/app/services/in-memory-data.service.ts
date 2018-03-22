// 初期的内存数据库
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
      return {
        heroes1 : MyDataBase.heroes1, // api/heroes1
        heroes2 : MyDataBase.heroes2, // api/heroes2
        heroes3 : MyDataBase.heroes3, // api/heroes3
      };
  }
}


// 数据库信息
class MyDataBase {
   static heroes1 = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

   static heroes2 = [
    { id: 21, name: 'Mr. Nice' },
    { id: 22, name: 'Narco' },
    { id: 23, name: 'Bombasto' },
    { id: 24, name: 'Celeritas' },
    { id: 25, name: 'Magneta' },
    { id: 26, name: 'RubberMan' },
    { id: 27, name: 'Dynama' },
    { id: 28, name: 'Dr IQ' },
    { id: 29, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

    static heroes3 = [
    { id: 31, name: 'Mr. Nice' },
    { id: 32, name: 'Narco' },
    { id: 33, name: 'Bombasto' },
    { id: 34, name: 'Celeritas' },
    { id: 35, name: 'Magneta' },
    { id: 36, name: 'RubberMan' },
    { id: 37, name: 'Dynama' },
    { id: 38, name: 'Dr IQ' },
    { id: 39, name: 'Magma' },
    { id: 30, name: 'Tornado' }
  ];
}

