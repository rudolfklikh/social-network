export interface ArrayInterface {
    results : Array<Obj>
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
