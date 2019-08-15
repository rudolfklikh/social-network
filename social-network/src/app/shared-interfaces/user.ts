export interface User {
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
