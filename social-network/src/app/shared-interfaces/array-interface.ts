import { filter } from 'rxjs/operators';

export interface ArrayInterface {
    results : Array<Obj>
    filter
}

interface Obj {
    name?: {
        first : string,
        last : string
      },
      picture? : {
        large : string
      },
      location?: {
        street : string,
        state : string,
        city : string
      }
}
