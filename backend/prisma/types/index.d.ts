
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Login
 * 
 */
export type Login = $Result.DefaultSelection<Prisma.$LoginPayload>
/**
 * Model Icon
 * 
 */
export type Icon = $Result.DefaultSelection<Prisma.$IconPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model contactInfo
 * 
 */
export type contactInfo = $Result.DefaultSelection<Prisma.$contactInfoPayload>
/**
 * Model RoadTripInfo
 * 
 */
export type RoadTripInfo = $Result.DefaultSelection<Prisma.$RoadTripInfoPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model VisaType
 * 
 */
export type VisaType = $Result.DefaultSelection<Prisma.$VisaTypePayload>
/**
 * Model VisaRequest
 * 
 */
export type VisaRequest = $Result.DefaultSelection<Prisma.$VisaRequestPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model LocationType
 * 
 */
export type LocationType = $Result.DefaultSelection<Prisma.$LocationTypePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PermissionActionEnum: {
  ALL: 'ALL',
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DETAILS: 'DETAILS',
  SELF: 'SELF'
};

export type PermissionActionEnum = (typeof PermissionActionEnum)[keyof typeof PermissionActionEnum]


export const EntityEnum: {
  Company: 'Company',
  Customer: 'Customer',
  Gym: 'Gym'
};

export type EntityEnum = (typeof EntityEnum)[keyof typeof EntityEnum]


export const CardRequestEnum: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REFUSED: 'REFUSED'
};

export type CardRequestEnum = (typeof CardRequestEnum)[keyof typeof CardRequestEnum]


export const LoginEnum: {
  CUSTOMER: 'CUSTOMER',
  USER: 'USER'
};

export type LoginEnum = (typeof LoginEnum)[keyof typeof LoginEnum]

}

export type PermissionActionEnum = $Enums.PermissionActionEnum

export const PermissionActionEnum: typeof $Enums.PermissionActionEnum

export type EntityEnum = $Enums.EntityEnum

export const EntityEnum: typeof $Enums.EntityEnum

export type CardRequestEnum = $Enums.CardRequestEnum

export const CardRequestEnum: typeof $Enums.CardRequestEnum

export type LoginEnum = $Enums.LoginEnum

export const LoginEnum: typeof $Enums.LoginEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Logins
 * const logins = await prisma.login.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Logins
   * const logins = await prisma.login.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.login`: Exposes CRUD operations for the **Login** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logins
    * const logins = await prisma.login.findMany()
    * ```
    */
  get login(): Prisma.LoginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.icon`: Exposes CRUD operations for the **Icon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Icons
    * const icons = await prisma.icon.findMany()
    * ```
    */
  get icon(): Prisma.IconDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInfo`: Exposes CRUD operations for the **contactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfos
    * const contactInfos = await prisma.contactInfo.findMany()
    * ```
    */
  get contactInfo(): Prisma.contactInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roadTripInfo`: Exposes CRUD operations for the **RoadTripInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoadTripInfos
    * const roadTripInfos = await prisma.roadTripInfo.findMany()
    * ```
    */
  get roadTripInfo(): Prisma.RoadTripInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visaType`: Exposes CRUD operations for the **VisaType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisaTypes
    * const visaTypes = await prisma.visaType.findMany()
    * ```
    */
  get visaType(): Prisma.VisaTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visaRequest`: Exposes CRUD operations for the **VisaRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisaRequests
    * const visaRequests = await prisma.visaRequest.findMany()
    * ```
    */
  get visaRequest(): Prisma.VisaRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locationType`: Exposes CRUD operations for the **LocationType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationTypes
    * const locationTypes = await prisma.locationType.findMany()
    * ```
    */
  get locationType(): Prisma.LocationTypeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Login: 'Login',
    Icon: 'Icon',
    Customer: 'Customer',
    contactInfo: 'contactInfo',
    RoadTripInfo: 'RoadTripInfo',
    User: 'User',
    Role: 'Role',
    RolePermission: 'RolePermission',
    Permission: 'Permission',
    Module: 'Module',
    Activity: 'Activity',
    VisaType: 'VisaType',
    VisaRequest: 'VisaRequest',
    Location: 'Location',
    LocationType: 'LocationType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "login" | "icon" | "customer" | "contactInfo" | "roadTripInfo" | "user" | "role" | "rolePermission" | "permission" | "module" | "activity" | "visaType" | "visaRequest" | "location" | "locationType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Login: {
        payload: Prisma.$LoginPayload<ExtArgs>
        fields: Prisma.LoginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          findFirst: {
            args: Prisma.LoginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          findMany: {
            args: Prisma.LoginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>[]
          }
          create: {
            args: Prisma.LoginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          createMany: {
            args: Prisma.LoginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          update: {
            args: Prisma.LoginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          deleteMany: {
            args: Prisma.LoginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          aggregate: {
            args: Prisma.LoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogin>
          }
          groupBy: {
            args: Prisma.LoginGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginCountArgs<ExtArgs>
            result: $Utils.Optional<LoginCountAggregateOutputType> | number
          }
        }
      }
      Icon: {
        payload: Prisma.$IconPayload<ExtArgs>
        fields: Prisma.IconFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IconFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IconFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          findFirst: {
            args: Prisma.IconFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IconFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          findMany: {
            args: Prisma.IconFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>[]
          }
          create: {
            args: Prisma.IconCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          createMany: {
            args: Prisma.IconCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IconDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          update: {
            args: Prisma.IconUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          deleteMany: {
            args: Prisma.IconDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IconUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IconUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          aggregate: {
            args: Prisma.IconAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIcon>
          }
          groupBy: {
            args: Prisma.IconGroupByArgs<ExtArgs>
            result: $Utils.Optional<IconGroupByOutputType>[]
          }
          count: {
            args: Prisma.IconCountArgs<ExtArgs>
            result: $Utils.Optional<IconCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      contactInfo: {
        payload: Prisma.$contactInfoPayload<ExtArgs>
        fields: Prisma.contactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactInfoPayload>
          }
          findFirst: {
            args: Prisma.contactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactInfoPayload>
          }
          findMany: {
            args: Prisma.contactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactInfoPayload>[]
          }
          create: {
            args: Prisma.contactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactInfoPayload>
          }
          createMany: {
            args: Prisma.contactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.contactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactInfoPayload>
          }
          update: {
            args: Prisma.contactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactInfoPayload>
          }
          deleteMany: {
            args: Prisma.contactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactInfoPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfo>
          }
          groupBy: {
            args: Prisma.contactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoCountAggregateOutputType> | number
          }
        }
      }
      RoadTripInfo: {
        payload: Prisma.$RoadTripInfoPayload<ExtArgs>
        fields: Prisma.RoadTripInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoadTripInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadTripInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoadTripInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadTripInfoPayload>
          }
          findFirst: {
            args: Prisma.RoadTripInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadTripInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoadTripInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadTripInfoPayload>
          }
          findMany: {
            args: Prisma.RoadTripInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadTripInfoPayload>[]
          }
          create: {
            args: Prisma.RoadTripInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadTripInfoPayload>
          }
          createMany: {
            args: Prisma.RoadTripInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoadTripInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadTripInfoPayload>
          }
          update: {
            args: Prisma.RoadTripInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadTripInfoPayload>
          }
          deleteMany: {
            args: Prisma.RoadTripInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoadTripInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoadTripInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadTripInfoPayload>
          }
          aggregate: {
            args: Prisma.RoadTripInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoadTripInfo>
          }
          groupBy: {
            args: Prisma.RoadTripInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoadTripInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoadTripInfoCountArgs<ExtArgs>
            result: $Utils.Optional<RoadTripInfoCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      VisaType: {
        payload: Prisma.$VisaTypePayload<ExtArgs>
        fields: Prisma.VisaTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisaTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisaTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaTypePayload>
          }
          findFirst: {
            args: Prisma.VisaTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisaTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaTypePayload>
          }
          findMany: {
            args: Prisma.VisaTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaTypePayload>[]
          }
          create: {
            args: Prisma.VisaTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaTypePayload>
          }
          createMany: {
            args: Prisma.VisaTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VisaTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaTypePayload>
          }
          update: {
            args: Prisma.VisaTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaTypePayload>
          }
          deleteMany: {
            args: Prisma.VisaTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisaTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VisaTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaTypePayload>
          }
          aggregate: {
            args: Prisma.VisaTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisaType>
          }
          groupBy: {
            args: Prisma.VisaTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisaTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisaTypeCountArgs<ExtArgs>
            result: $Utils.Optional<VisaTypeCountAggregateOutputType> | number
          }
        }
      }
      VisaRequest: {
        payload: Prisma.$VisaRequestPayload<ExtArgs>
        fields: Prisma.VisaRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisaRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisaRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          findFirst: {
            args: Prisma.VisaRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisaRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          findMany: {
            args: Prisma.VisaRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>[]
          }
          create: {
            args: Prisma.VisaRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          createMany: {
            args: Prisma.VisaRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VisaRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          update: {
            args: Prisma.VisaRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          deleteMany: {
            args: Prisma.VisaRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisaRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VisaRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaRequestPayload>
          }
          aggregate: {
            args: Prisma.VisaRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisaRequest>
          }
          groupBy: {
            args: Prisma.VisaRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisaRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisaRequestCountArgs<ExtArgs>
            result: $Utils.Optional<VisaRequestCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      LocationType: {
        payload: Prisma.$LocationTypePayload<ExtArgs>
        fields: Prisma.LocationTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTypePayload>
          }
          findFirst: {
            args: Prisma.LocationTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTypePayload>
          }
          findMany: {
            args: Prisma.LocationTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTypePayload>[]
          }
          create: {
            args: Prisma.LocationTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTypePayload>
          }
          createMany: {
            args: Prisma.LocationTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocationTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTypePayload>
          }
          update: {
            args: Prisma.LocationTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTypePayload>
          }
          deleteMany: {
            args: Prisma.LocationTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTypePayload>
          }
          aggregate: {
            args: Prisma.LocationTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocationType>
          }
          groupBy: {
            args: Prisma.LocationTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationTypeCountArgs<ExtArgs>
            result: $Utils.Optional<LocationTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    login?: LoginOmit
    icon?: IconOmit
    customer?: CustomerOmit
    contactInfo?: contactInfoOmit
    roadTripInfo?: RoadTripInfoOmit
    user?: UserOmit
    role?: RoleOmit
    rolePermission?: RolePermissionOmit
    permission?: PermissionOmit
    module?: ModuleOmit
    activity?: ActivityOmit
    visaType?: VisaTypeOmit
    visaRequest?: VisaRequestOmit
    location?: LocationOmit
    locationType?: LocationTypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LoginCountOutputType
   */

  export type LoginCountOutputType = {
    user: number
    Customer: number
  }

  export type LoginCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LoginCountOutputTypeCountUserArgs
    Customer?: boolean | LoginCountOutputTypeCountCustomerArgs
  }

  // Custom InputTypes
  /**
   * LoginCountOutputType without action
   */
  export type LoginCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginCountOutputType
     */
    select?: LoginCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoginCountOutputType without action
   */
  export type LoginCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * LoginCountOutputType without action
   */
  export type LoginCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    VisaRequest: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VisaRequest?: boolean | CustomerCountOutputTypeCountVisaRequestArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountVisaRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaRequestWhereInput
  }


  /**
   * Count Type RoadTripInfoCountOutputType
   */

  export type RoadTripInfoCountOutputType = {
    visaRequest: number
  }

  export type RoadTripInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visaRequest?: boolean | RoadTripInfoCountOutputTypeCountVisaRequestArgs
  }

  // Custom InputTypes
  /**
   * RoadTripInfoCountOutputType without action
   */
  export type RoadTripInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfoCountOutputType
     */
    select?: RoadTripInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoadTripInfoCountOutputType without action
   */
  export type RoadTripInfoCountOutputTypeCountVisaRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaRequestWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    rolePermission: number
    login: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermission?: boolean | RoleCountOutputTypeCountRolePermissionArgs
    login?: boolean | RoleCountOutputTypeCountLoginArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountLoginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    rolePermission: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermission?: boolean | PermissionCountOutputTypeCountRolePermissionArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    permission: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | ModuleCountOutputTypeCountPermissionArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    customer: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | ActivityCountOutputTypeCountCustomerArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }


  /**
   * Count Type VisaTypeCountOutputType
   */

  export type VisaTypeCountOutputType = {
    visaRequest: number
  }

  export type VisaTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visaRequest?: boolean | VisaTypeCountOutputTypeCountVisaRequestArgs
  }

  // Custom InputTypes
  /**
   * VisaTypeCountOutputType without action
   */
  export type VisaTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaTypeCountOutputType
     */
    select?: VisaTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisaTypeCountOutputType without action
   */
  export type VisaTypeCountOutputTypeCountVisaRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaRequestWhereInput
  }


  /**
   * Count Type VisaRequestCountOutputType
   */

  export type VisaRequestCountOutputType = {
    contacts: number
  }

  export type VisaRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | VisaRequestCountOutputTypeCountContactsArgs
  }

  // Custom InputTypes
  /**
   * VisaRequestCountOutputType without action
   */
  export type VisaRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequestCountOutputType
     */
    select?: VisaRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisaRequestCountOutputType without action
   */
  export type VisaRequestCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactInfoWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    departureBy: number
    arrivalBy: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departureBy?: boolean | LocationCountOutputTypeCountDepartureByArgs
    arrivalBy?: boolean | LocationCountOutputTypeCountArrivalByArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountDepartureByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadTripInfoWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountArrivalByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadTripInfoWhereInput
  }


  /**
   * Count Type LocationTypeCountOutputType
   */

  export type LocationTypeCountOutputType = {
    location: number
  }

  export type LocationTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationTypeCountOutputTypeCountLocationArgs
  }

  // Custom InputTypes
  /**
   * LocationTypeCountOutputType without action
   */
  export type LocationTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTypeCountOutputType
     */
    select?: LocationTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationTypeCountOutputType without action
   */
  export type LocationTypeCountOutputTypeCountLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Login
   */

  export type AggregateLogin = {
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  export type LoginAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type LoginSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type LoginMinAggregateOutputType = {
    id: number | null
    type: $Enums.LoginEnum | null
    username: string | null
    password: string | null
    roleId: number | null
  }

  export type LoginMaxAggregateOutputType = {
    id: number | null
    type: $Enums.LoginEnum | null
    username: string | null
    password: string | null
    roleId: number | null
  }

  export type LoginCountAggregateOutputType = {
    id: number
    type: number
    username: number
    password: number
    roleId: number
    _all: number
  }


  export type LoginAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type LoginSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type LoginMinAggregateInputType = {
    id?: true
    type?: true
    username?: true
    password?: true
    roleId?: true
  }

  export type LoginMaxAggregateInputType = {
    id?: true
    type?: true
    username?: true
    password?: true
    roleId?: true
  }

  export type LoginCountAggregateInputType = {
    id?: true
    type?: true
    username?: true
    password?: true
    roleId?: true
    _all?: true
  }

  export type LoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Login to aggregate.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logins
    **/
    _count?: true | LoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginMaxAggregateInputType
  }

  export type GetLoginAggregateType<T extends LoginAggregateArgs> = {
        [P in keyof T & keyof AggregateLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogin[P]>
      : GetScalarType<T[P], AggregateLogin[P]>
  }




  export type LoginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginWhereInput
    orderBy?: LoginOrderByWithAggregationInput | LoginOrderByWithAggregationInput[]
    by: LoginScalarFieldEnum[] | LoginScalarFieldEnum
    having?: LoginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginCountAggregateInputType | true
    _avg?: LoginAvgAggregateInputType
    _sum?: LoginSumAggregateInputType
    _min?: LoginMinAggregateInputType
    _max?: LoginMaxAggregateInputType
  }

  export type LoginGroupByOutputType = {
    id: number
    type: $Enums.LoginEnum
    username: string
    password: string
    roleId: number | null
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  type GetLoginGroupByPayload<T extends LoginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginGroupByOutputType[P]>
            : GetScalarType<T[P], LoginGroupByOutputType[P]>
        }
      >
    >


  export type LoginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    username?: boolean
    password?: boolean
    roleId?: boolean
    user?: boolean | Login$userArgs<ExtArgs>
    Customer?: boolean | Login$CustomerArgs<ExtArgs>
    role?: boolean | Login$roleArgs<ExtArgs>
    _count?: boolean | LoginCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["login"]>



  export type LoginSelectScalar = {
    id?: boolean
    type?: boolean
    username?: boolean
    password?: boolean
    roleId?: boolean
  }

  export type LoginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "username" | "password" | "roleId", ExtArgs["result"]["login"]>
  export type LoginInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Login$userArgs<ExtArgs>
    Customer?: boolean | Login$CustomerArgs<ExtArgs>
    role?: boolean | Login$roleArgs<ExtArgs>
    _count?: boolean | LoginCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Login"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      Customer: Prisma.$CustomerPayload<ExtArgs>[]
      role: Prisma.$RolePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.LoginEnum
      username: string
      password: string
      roleId: number | null
    }, ExtArgs["result"]["login"]>
    composites: {}
  }

  type LoginGetPayload<S extends boolean | null | undefined | LoginDefaultArgs> = $Result.GetResult<Prisma.$LoginPayload, S>

  type LoginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginCountAggregateInputType | true
    }

  export interface LoginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Login'], meta: { name: 'Login' } }
    /**
     * Find zero or one Login that matches the filter.
     * @param {LoginFindUniqueArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginFindUniqueArgs>(args: SelectSubset<T, LoginFindUniqueArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Login that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoginFindUniqueOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Login that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindFirstArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginFindFirstArgs>(args?: SelectSubset<T, LoginFindFirstArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Login that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindFirstOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logins
     * const logins = await prisma.login.findMany()
     * 
     * // Get first 10 Logins
     * const logins = await prisma.login.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginWithIdOnly = await prisma.login.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginFindManyArgs>(args?: SelectSubset<T, LoginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Login.
     * @param {LoginCreateArgs} args - Arguments to create a Login.
     * @example
     * // Create one Login
     * const Login = await prisma.login.create({
     *   data: {
     *     // ... data to create a Login
     *   }
     * })
     * 
     */
    create<T extends LoginCreateArgs>(args: SelectSubset<T, LoginCreateArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Logins.
     * @param {LoginCreateManyArgs} args - Arguments to create many Logins.
     * @example
     * // Create many Logins
     * const login = await prisma.login.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginCreateManyArgs>(args?: SelectSubset<T, LoginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Login.
     * @param {LoginDeleteArgs} args - Arguments to delete one Login.
     * @example
     * // Delete one Login
     * const Login = await prisma.login.delete({
     *   where: {
     *     // ... filter to delete one Login
     *   }
     * })
     * 
     */
    delete<T extends LoginDeleteArgs>(args: SelectSubset<T, LoginDeleteArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Login.
     * @param {LoginUpdateArgs} args - Arguments to update one Login.
     * @example
     * // Update one Login
     * const login = await prisma.login.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginUpdateArgs>(args: SelectSubset<T, LoginUpdateArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Logins.
     * @param {LoginDeleteManyArgs} args - Arguments to filter Logins to delete.
     * @example
     * // Delete a few Logins
     * const { count } = await prisma.login.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginDeleteManyArgs>(args?: SelectSubset<T, LoginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logins
     * const login = await prisma.login.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginUpdateManyArgs>(args: SelectSubset<T, LoginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Login.
     * @param {LoginUpsertArgs} args - Arguments to update or create a Login.
     * @example
     * // Update or create a Login
     * const login = await prisma.login.upsert({
     *   create: {
     *     // ... data to create a Login
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Login we want to update
     *   }
     * })
     */
    upsert<T extends LoginUpsertArgs>(args: SelectSubset<T, LoginUpsertArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginCountArgs} args - Arguments to filter Logins to count.
     * @example
     * // Count the number of Logins
     * const count = await prisma.login.count({
     *   where: {
     *     // ... the filter for the Logins we want to count
     *   }
     * })
    **/
    count<T extends LoginCountArgs>(
      args?: Subset<T, LoginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoginAggregateArgs>(args: Subset<T, LoginAggregateArgs>): Prisma.PrismaPromise<GetLoginAggregateType<T>>

    /**
     * Group by Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginGroupByArgs['orderBy'] }
        : { orderBy?: LoginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Login model
   */
  readonly fields: LoginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Login.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Login$userArgs<ExtArgs> = {}>(args?: Subset<T, Login$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Customer<T extends Login$CustomerArgs<ExtArgs> = {}>(args?: Subset<T, Login$CustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    role<T extends Login$roleArgs<ExtArgs> = {}>(args?: Subset<T, Login$roleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Login model
   */ 
  interface LoginFieldRefs {
    readonly id: FieldRef<"Login", 'Int'>
    readonly type: FieldRef<"Login", 'LoginEnum'>
    readonly username: FieldRef<"Login", 'String'>
    readonly password: FieldRef<"Login", 'String'>
    readonly roleId: FieldRef<"Login", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Login findUnique
   */
  export type LoginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login findUniqueOrThrow
   */
  export type LoginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login findFirst
   */
  export type LoginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login findFirstOrThrow
   */
  export type LoginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login findMany
   */
  export type LoginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter, which Logins to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login create
   */
  export type LoginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * The data needed to create a Login.
     */
    data: XOR<LoginCreateInput, LoginUncheckedCreateInput>
  }

  /**
   * Login createMany
   */
  export type LoginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logins.
     */
    data: LoginCreateManyInput | LoginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Login update
   */
  export type LoginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * The data needed to update a Login.
     */
    data: XOR<LoginUpdateInput, LoginUncheckedUpdateInput>
    /**
     * Choose, which Login to update.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login updateMany
   */
  export type LoginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logins.
     */
    data: XOR<LoginUpdateManyMutationInput, LoginUncheckedUpdateManyInput>
    /**
     * Filter which Logins to update
     */
    where?: LoginWhereInput
  }

  /**
   * Login upsert
   */
  export type LoginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * The filter to search for the Login to update in case it exists.
     */
    where: LoginWhereUniqueInput
    /**
     * In case the Login found by the `where` argument doesn't exist, create a new Login with this data.
     */
    create: XOR<LoginCreateInput, LoginUncheckedCreateInput>
    /**
     * In case the Login was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginUpdateInput, LoginUncheckedUpdateInput>
  }

  /**
   * Login delete
   */
  export type LoginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter which Login to delete.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login deleteMany
   */
  export type LoginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logins to delete
     */
    where?: LoginWhereInput
  }

  /**
   * Login.user
   */
  export type Login$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Login.Customer
   */
  export type Login$CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Login.role
   */
  export type Login$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * Login without action
   */
  export type LoginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
  }


  /**
   * Model Icon
   */

  export type AggregateIcon = {
    _count: IconCountAggregateOutputType | null
    _avg: IconAvgAggregateOutputType | null
    _sum: IconSumAggregateOutputType | null
    _min: IconMinAggregateOutputType | null
    _max: IconMaxAggregateOutputType | null
  }

  export type IconAvgAggregateOutputType = {
    id: number | null
  }

  export type IconSumAggregateOutputType = {
    id: number | null
  }

  export type IconMinAggregateOutputType = {
    id: number | null
    path: string | null
    code: string | null
    comment: string | null
  }

  export type IconMaxAggregateOutputType = {
    id: number | null
    path: string | null
    code: string | null
    comment: string | null
  }

  export type IconCountAggregateOutputType = {
    id: number
    path: number
    code: number
    comment: number
    _all: number
  }


  export type IconAvgAggregateInputType = {
    id?: true
  }

  export type IconSumAggregateInputType = {
    id?: true
  }

  export type IconMinAggregateInputType = {
    id?: true
    path?: true
    code?: true
    comment?: true
  }

  export type IconMaxAggregateInputType = {
    id?: true
    path?: true
    code?: true
    comment?: true
  }

  export type IconCountAggregateInputType = {
    id?: true
    path?: true
    code?: true
    comment?: true
    _all?: true
  }

  export type IconAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Icon to aggregate.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Icons
    **/
    _count?: true | IconCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IconAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IconSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IconMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IconMaxAggregateInputType
  }

  export type GetIconAggregateType<T extends IconAggregateArgs> = {
        [P in keyof T & keyof AggregateIcon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIcon[P]>
      : GetScalarType<T[P], AggregateIcon[P]>
  }




  export type IconGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IconWhereInput
    orderBy?: IconOrderByWithAggregationInput | IconOrderByWithAggregationInput[]
    by: IconScalarFieldEnum[] | IconScalarFieldEnum
    having?: IconScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IconCountAggregateInputType | true
    _avg?: IconAvgAggregateInputType
    _sum?: IconSumAggregateInputType
    _min?: IconMinAggregateInputType
    _max?: IconMaxAggregateInputType
  }

  export type IconGroupByOutputType = {
    id: number
    path: string
    code: string
    comment: string
    _count: IconCountAggregateOutputType | null
    _avg: IconAvgAggregateOutputType | null
    _sum: IconSumAggregateOutputType | null
    _min: IconMinAggregateOutputType | null
    _max: IconMaxAggregateOutputType | null
  }

  type GetIconGroupByPayload<T extends IconGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IconGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IconGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IconGroupByOutputType[P]>
            : GetScalarType<T[P], IconGroupByOutputType[P]>
        }
      >
    >


  export type IconSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    code?: boolean
    comment?: boolean
  }, ExtArgs["result"]["icon"]>



  export type IconSelectScalar = {
    id?: boolean
    path?: boolean
    code?: boolean
    comment?: boolean
  }

  export type IconOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "code" | "comment", ExtArgs["result"]["icon"]>

  export type $IconPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Icon"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      path: string
      code: string
      comment: string
    }, ExtArgs["result"]["icon"]>
    composites: {}
  }

  type IconGetPayload<S extends boolean | null | undefined | IconDefaultArgs> = $Result.GetResult<Prisma.$IconPayload, S>

  type IconCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IconFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IconCountAggregateInputType | true
    }

  export interface IconDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Icon'], meta: { name: 'Icon' } }
    /**
     * Find zero or one Icon that matches the filter.
     * @param {IconFindUniqueArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IconFindUniqueArgs>(args: SelectSubset<T, IconFindUniqueArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Icon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IconFindUniqueOrThrowArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IconFindUniqueOrThrowArgs>(args: SelectSubset<T, IconFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Icon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconFindFirstArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IconFindFirstArgs>(args?: SelectSubset<T, IconFindFirstArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Icon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconFindFirstOrThrowArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IconFindFirstOrThrowArgs>(args?: SelectSubset<T, IconFindFirstOrThrowArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Icons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Icons
     * const icons = await prisma.icon.findMany()
     * 
     * // Get first 10 Icons
     * const icons = await prisma.icon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iconWithIdOnly = await prisma.icon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IconFindManyArgs>(args?: SelectSubset<T, IconFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Icon.
     * @param {IconCreateArgs} args - Arguments to create a Icon.
     * @example
     * // Create one Icon
     * const Icon = await prisma.icon.create({
     *   data: {
     *     // ... data to create a Icon
     *   }
     * })
     * 
     */
    create<T extends IconCreateArgs>(args: SelectSubset<T, IconCreateArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Icons.
     * @param {IconCreateManyArgs} args - Arguments to create many Icons.
     * @example
     * // Create many Icons
     * const icon = await prisma.icon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IconCreateManyArgs>(args?: SelectSubset<T, IconCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Icon.
     * @param {IconDeleteArgs} args - Arguments to delete one Icon.
     * @example
     * // Delete one Icon
     * const Icon = await prisma.icon.delete({
     *   where: {
     *     // ... filter to delete one Icon
     *   }
     * })
     * 
     */
    delete<T extends IconDeleteArgs>(args: SelectSubset<T, IconDeleteArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Icon.
     * @param {IconUpdateArgs} args - Arguments to update one Icon.
     * @example
     * // Update one Icon
     * const icon = await prisma.icon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IconUpdateArgs>(args: SelectSubset<T, IconUpdateArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Icons.
     * @param {IconDeleteManyArgs} args - Arguments to filter Icons to delete.
     * @example
     * // Delete a few Icons
     * const { count } = await prisma.icon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IconDeleteManyArgs>(args?: SelectSubset<T, IconDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Icons
     * const icon = await prisma.icon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IconUpdateManyArgs>(args: SelectSubset<T, IconUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Icon.
     * @param {IconUpsertArgs} args - Arguments to update or create a Icon.
     * @example
     * // Update or create a Icon
     * const icon = await prisma.icon.upsert({
     *   create: {
     *     // ... data to create a Icon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Icon we want to update
     *   }
     * })
     */
    upsert<T extends IconUpsertArgs>(args: SelectSubset<T, IconUpsertArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconCountArgs} args - Arguments to filter Icons to count.
     * @example
     * // Count the number of Icons
     * const count = await prisma.icon.count({
     *   where: {
     *     // ... the filter for the Icons we want to count
     *   }
     * })
    **/
    count<T extends IconCountArgs>(
      args?: Subset<T, IconCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IconCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Icon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IconAggregateArgs>(args: Subset<T, IconAggregateArgs>): Prisma.PrismaPromise<GetIconAggregateType<T>>

    /**
     * Group by Icon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IconGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IconGroupByArgs['orderBy'] }
        : { orderBy?: IconGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IconGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIconGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Icon model
   */
  readonly fields: IconFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Icon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IconClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Icon model
   */ 
  interface IconFieldRefs {
    readonly id: FieldRef<"Icon", 'Int'>
    readonly path: FieldRef<"Icon", 'String'>
    readonly code: FieldRef<"Icon", 'String'>
    readonly comment: FieldRef<"Icon", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Icon findUnique
   */
  export type IconFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon findUniqueOrThrow
   */
  export type IconFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon findFirst
   */
  export type IconFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Icons.
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Icons.
     */
    distinct?: IconScalarFieldEnum | IconScalarFieldEnum[]
  }

  /**
   * Icon findFirstOrThrow
   */
  export type IconFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Icons.
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Icons.
     */
    distinct?: IconScalarFieldEnum | IconScalarFieldEnum[]
  }

  /**
   * Icon findMany
   */
  export type IconFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Filter, which Icons to fetch.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Icons.
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    distinct?: IconScalarFieldEnum | IconScalarFieldEnum[]
  }

  /**
   * Icon create
   */
  export type IconCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * The data needed to create a Icon.
     */
    data: XOR<IconCreateInput, IconUncheckedCreateInput>
  }

  /**
   * Icon createMany
   */
  export type IconCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Icons.
     */
    data: IconCreateManyInput | IconCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Icon update
   */
  export type IconUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * The data needed to update a Icon.
     */
    data: XOR<IconUpdateInput, IconUncheckedUpdateInput>
    /**
     * Choose, which Icon to update.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon updateMany
   */
  export type IconUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Icons.
     */
    data: XOR<IconUpdateManyMutationInput, IconUncheckedUpdateManyInput>
    /**
     * Filter which Icons to update
     */
    where?: IconWhereInput
  }

  /**
   * Icon upsert
   */
  export type IconUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * The filter to search for the Icon to update in case it exists.
     */
    where: IconWhereUniqueInput
    /**
     * In case the Icon found by the `where` argument doesn't exist, create a new Icon with this data.
     */
    create: XOR<IconCreateInput, IconUncheckedCreateInput>
    /**
     * In case the Icon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IconUpdateInput, IconUncheckedUpdateInput>
  }

  /**
   * Icon delete
   */
  export type IconDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Filter which Icon to delete.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon deleteMany
   */
  export type IconDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Icons to delete
     */
    where?: IconWhereInput
  }

  /**
   * Icon without action
   */
  export type IconDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    activityId: number | null
    loginId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    activityId: number | null
    loginId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    displayname: string | null
    dateOfBirth: string | null
    selfPath: string | null
    passportPath: string | null
    passportReference: string | null
    passportValidity: Date | null
    address: string | null
    latitude: string | null
    longitude: string | null
    email: string | null
    activityId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    loginId: number | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    displayname: string | null
    dateOfBirth: string | null
    selfPath: string | null
    passportPath: string | null
    passportReference: string | null
    passportValidity: Date | null
    address: string | null
    latitude: string | null
    longitude: string | null
    email: string | null
    activityId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    loginId: number | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    displayname: number
    dateOfBirth: number
    selfPath: number
    passportPath: number
    passportReference: number
    passportValidity: number
    address: number
    latitude: number
    longitude: number
    email: number
    activityId: number
    createdAt: number
    updatedAt: number
    loginId: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    activityId?: true
    loginId?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    activityId?: true
    loginId?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    displayname?: true
    dateOfBirth?: true
    selfPath?: true
    passportPath?: true
    passportReference?: true
    passportValidity?: true
    address?: true
    latitude?: true
    longitude?: true
    email?: true
    activityId?: true
    createdAt?: true
    updatedAt?: true
    loginId?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    displayname?: true
    dateOfBirth?: true
    selfPath?: true
    passportPath?: true
    passportReference?: true
    passportValidity?: true
    address?: true
    latitude?: true
    longitude?: true
    email?: true
    activityId?: true
    createdAt?: true
    updatedAt?: true
    loginId?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    displayname?: true
    dateOfBirth?: true
    selfPath?: true
    passportPath?: true
    passportReference?: true
    passportValidity?: true
    address?: true
    latitude?: true
    longitude?: true
    email?: true
    activityId?: true
    createdAt?: true
    updatedAt?: true
    loginId?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date
    address: string
    latitude: string
    longitude: string
    email: string
    activityId: number
    createdAt: Date
    updatedAt: Date
    loginId: number
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayname?: boolean
    dateOfBirth?: boolean
    selfPath?: boolean
    passportPath?: boolean
    passportReference?: boolean
    passportValidity?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    email?: boolean
    activityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loginId?: boolean
    login?: boolean | LoginDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    VisaRequest?: boolean | Customer$VisaRequestArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    id?: boolean
    displayname?: boolean
    dateOfBirth?: boolean
    selfPath?: boolean
    passportPath?: boolean
    passportReference?: boolean
    passportValidity?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    email?: boolean
    activityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loginId?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayname" | "dateOfBirth" | "selfPath" | "passportPath" | "passportReference" | "passportValidity" | "address" | "latitude" | "longitude" | "email" | "activityId" | "createdAt" | "updatedAt" | "loginId", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    login?: boolean | LoginDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    VisaRequest?: boolean | Customer$VisaRequestArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      login: Prisma.$LoginPayload<ExtArgs>
      activity: Prisma.$ActivityPayload<ExtArgs>
      VisaRequest: Prisma.$VisaRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      displayname: string
      dateOfBirth: string
      selfPath: string
      passportPath: string
      passportReference: string
      passportValidity: Date
      address: string
      latitude: string
      longitude: string
      email: string
      activityId: number
      createdAt: Date
      updatedAt: Date
      loginId: number
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    login<T extends LoginDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoginDefaultArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    VisaRequest<T extends Customer$VisaRequestArgs<ExtArgs> = {}>(args?: Subset<T, Customer$VisaRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly displayname: FieldRef<"Customer", 'String'>
    readonly dateOfBirth: FieldRef<"Customer", 'String'>
    readonly selfPath: FieldRef<"Customer", 'String'>
    readonly passportPath: FieldRef<"Customer", 'String'>
    readonly passportReference: FieldRef<"Customer", 'String'>
    readonly passportValidity: FieldRef<"Customer", 'DateTime'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly latitude: FieldRef<"Customer", 'String'>
    readonly longitude: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly activityId: FieldRef<"Customer", 'Int'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly loginId: FieldRef<"Customer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.VisaRequest
   */
  export type Customer$VisaRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    where?: VisaRequestWhereInput
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    cursor?: VisaRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisaRequestScalarFieldEnum | VisaRequestScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model contactInfo
   */

  export type AggregateContactInfo = {
    _count: ContactInfoCountAggregateOutputType | null
    _avg: ContactInfoAvgAggregateOutputType | null
    _sum: ContactInfoSumAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  export type ContactInfoAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    visaRequestId: number | null
  }

  export type ContactInfoSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    visaRequestId: number | null
  }

  export type ContactInfoMinAggregateOutputType = {
    id: number | null
    displayname: string | null
    phone: string | null
    customerId: number | null
    visaRequestId: number | null
  }

  export type ContactInfoMaxAggregateOutputType = {
    id: number | null
    displayname: string | null
    phone: string | null
    customerId: number | null
    visaRequestId: number | null
  }

  export type ContactInfoCountAggregateOutputType = {
    id: number
    displayname: number
    phone: number
    customerId: number
    visaRequestId: number
    _all: number
  }


  export type ContactInfoAvgAggregateInputType = {
    id?: true
    customerId?: true
    visaRequestId?: true
  }

  export type ContactInfoSumAggregateInputType = {
    id?: true
    customerId?: true
    visaRequestId?: true
  }

  export type ContactInfoMinAggregateInputType = {
    id?: true
    displayname?: true
    phone?: true
    customerId?: true
    visaRequestId?: true
  }

  export type ContactInfoMaxAggregateInputType = {
    id?: true
    displayname?: true
    phone?: true
    customerId?: true
    visaRequestId?: true
  }

  export type ContactInfoCountAggregateInputType = {
    id?: true
    displayname?: true
    phone?: true
    customerId?: true
    visaRequestId?: true
    _all?: true
  }

  export type ContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contactInfo to aggregate.
     */
    where?: contactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactInfos to fetch.
     */
    orderBy?: contactInfoOrderByWithRelationInput | contactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contactInfos
    **/
    _count?: true | ContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoMaxAggregateInputType
  }

  export type GetContactInfoAggregateType<T extends ContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfo[P]>
      : GetScalarType<T[P], AggregateContactInfo[P]>
  }




  export type contactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactInfoWhereInput
    orderBy?: contactInfoOrderByWithAggregationInput | contactInfoOrderByWithAggregationInput[]
    by: ContactInfoScalarFieldEnum[] | ContactInfoScalarFieldEnum
    having?: contactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoCountAggregateInputType | true
    _avg?: ContactInfoAvgAggregateInputType
    _sum?: ContactInfoSumAggregateInputType
    _min?: ContactInfoMinAggregateInputType
    _max?: ContactInfoMaxAggregateInputType
  }

  export type ContactInfoGroupByOutputType = {
    id: number
    displayname: string
    phone: string
    customerId: number | null
    visaRequestId: number | null
    _count: ContactInfoCountAggregateOutputType | null
    _avg: ContactInfoAvgAggregateOutputType | null
    _sum: ContactInfoSumAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  type GetContactInfoGroupByPayload<T extends contactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type contactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayname?: boolean
    phone?: boolean
    customerId?: boolean
    visaRequestId?: boolean
    visaRequest?: boolean | contactInfo$visaRequestArgs<ExtArgs>
  }, ExtArgs["result"]["contactInfo"]>



  export type contactInfoSelectScalar = {
    id?: boolean
    displayname?: boolean
    phone?: boolean
    customerId?: boolean
    visaRequestId?: boolean
  }

  export type contactInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayname" | "phone" | "customerId" | "visaRequestId", ExtArgs["result"]["contactInfo"]>
  export type contactInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visaRequest?: boolean | contactInfo$visaRequestArgs<ExtArgs>
  }

  export type $contactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contactInfo"
    objects: {
      visaRequest: Prisma.$VisaRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      displayname: string
      phone: string
      customerId: number | null
      visaRequestId: number | null
    }, ExtArgs["result"]["contactInfo"]>
    composites: {}
  }

  type contactInfoGetPayload<S extends boolean | null | undefined | contactInfoDefaultArgs> = $Result.GetResult<Prisma.$contactInfoPayload, S>

  type contactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contactInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInfoCountAggregateInputType | true
    }

  export interface contactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contactInfo'], meta: { name: 'contactInfo' } }
    /**
     * Find zero or one ContactInfo that matches the filter.
     * @param {contactInfoFindUniqueArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactInfoFindUniqueArgs>(args: SelectSubset<T, contactInfoFindUniqueArgs<ExtArgs>>): Prisma__contactInfoClient<$Result.GetResult<Prisma.$contactInfoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ContactInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contactInfoFindUniqueOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, contactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactInfoClient<$Result.GetResult<Prisma.$contactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactInfoFindFirstArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactInfoFindFirstArgs>(args?: SelectSubset<T, contactInfoFindFirstArgs<ExtArgs>>): Prisma__contactInfoClient<$Result.GetResult<Prisma.$contactInfoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactInfoFindFirstOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, contactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactInfoClient<$Result.GetResult<Prisma.$contactInfoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany()
     * 
     * // Get first 10 ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contactInfoFindManyArgs>(args?: SelectSubset<T, contactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactInfoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ContactInfo.
     * @param {contactInfoCreateArgs} args - Arguments to create a ContactInfo.
     * @example
     * // Create one ContactInfo
     * const ContactInfo = await prisma.contactInfo.create({
     *   data: {
     *     // ... data to create a ContactInfo
     *   }
     * })
     * 
     */
    create<T extends contactInfoCreateArgs>(args: SelectSubset<T, contactInfoCreateArgs<ExtArgs>>): Prisma__contactInfoClient<$Result.GetResult<Prisma.$contactInfoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ContactInfos.
     * @param {contactInfoCreateManyArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contactInfoCreateManyArgs>(args?: SelectSubset<T, contactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactInfo.
     * @param {contactInfoDeleteArgs} args - Arguments to delete one ContactInfo.
     * @example
     * // Delete one ContactInfo
     * const ContactInfo = await prisma.contactInfo.delete({
     *   where: {
     *     // ... filter to delete one ContactInfo
     *   }
     * })
     * 
     */
    delete<T extends contactInfoDeleteArgs>(args: SelectSubset<T, contactInfoDeleteArgs<ExtArgs>>): Prisma__contactInfoClient<$Result.GetResult<Prisma.$contactInfoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ContactInfo.
     * @param {contactInfoUpdateArgs} args - Arguments to update one ContactInfo.
     * @example
     * // Update one ContactInfo
     * const contactInfo = await prisma.contactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contactInfoUpdateArgs>(args: SelectSubset<T, contactInfoUpdateArgs<ExtArgs>>): Prisma__contactInfoClient<$Result.GetResult<Prisma.$contactInfoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ContactInfos.
     * @param {contactInfoDeleteManyArgs} args - Arguments to filter ContactInfos to delete.
     * @example
     * // Delete a few ContactInfos
     * const { count } = await prisma.contactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contactInfoDeleteManyArgs>(args?: SelectSubset<T, contactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contactInfoUpdateManyArgs>(args: SelectSubset<T, contactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactInfo.
     * @param {contactInfoUpsertArgs} args - Arguments to update or create a ContactInfo.
     * @example
     * // Update or create a ContactInfo
     * const contactInfo = await prisma.contactInfo.upsert({
     *   create: {
     *     // ... data to create a ContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends contactInfoUpsertArgs>(args: SelectSubset<T, contactInfoUpsertArgs<ExtArgs>>): Prisma__contactInfoClient<$Result.GetResult<Prisma.$contactInfoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactInfoCountArgs} args - Arguments to filter ContactInfos to count.
     * @example
     * // Count the number of ContactInfos
     * const count = await prisma.contactInfo.count({
     *   where: {
     *     // ... the filter for the ContactInfos we want to count
     *   }
     * })
    **/
    count<T extends contactInfoCountArgs>(
      args?: Subset<T, contactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactInfoAggregateArgs>(args: Subset<T, ContactInfoAggregateArgs>): Prisma.PrismaPromise<GetContactInfoAggregateType<T>>

    /**
     * Group by ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactInfoGroupByArgs['orderBy'] }
        : { orderBy?: contactInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contactInfo model
   */
  readonly fields: contactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visaRequest<T extends contactInfo$visaRequestArgs<ExtArgs> = {}>(args?: Subset<T, contactInfo$visaRequestArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contactInfo model
   */ 
  interface contactInfoFieldRefs {
    readonly id: FieldRef<"contactInfo", 'Int'>
    readonly displayname: FieldRef<"contactInfo", 'String'>
    readonly phone: FieldRef<"contactInfo", 'String'>
    readonly customerId: FieldRef<"contactInfo", 'Int'>
    readonly visaRequestId: FieldRef<"contactInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * contactInfo findUnique
   */
  export type contactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactInfo
     */
    select?: contactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactInfo
     */
    omit?: contactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInfoInclude<ExtArgs> | null
    /**
     * Filter, which contactInfo to fetch.
     */
    where: contactInfoWhereUniqueInput
  }

  /**
   * contactInfo findUniqueOrThrow
   */
  export type contactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactInfo
     */
    select?: contactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactInfo
     */
    omit?: contactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInfoInclude<ExtArgs> | null
    /**
     * Filter, which contactInfo to fetch.
     */
    where: contactInfoWhereUniqueInput
  }

  /**
   * contactInfo findFirst
   */
  export type contactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactInfo
     */
    select?: contactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactInfo
     */
    omit?: contactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInfoInclude<ExtArgs> | null
    /**
     * Filter, which contactInfo to fetch.
     */
    where?: contactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactInfos to fetch.
     */
    orderBy?: contactInfoOrderByWithRelationInput | contactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactInfos.
     */
    cursor?: contactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * contactInfo findFirstOrThrow
   */
  export type contactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactInfo
     */
    select?: contactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactInfo
     */
    omit?: contactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInfoInclude<ExtArgs> | null
    /**
     * Filter, which contactInfo to fetch.
     */
    where?: contactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactInfos to fetch.
     */
    orderBy?: contactInfoOrderByWithRelationInput | contactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactInfos.
     */
    cursor?: contactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * contactInfo findMany
   */
  export type contactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactInfo
     */
    select?: contactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactInfo
     */
    omit?: contactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInfoInclude<ExtArgs> | null
    /**
     * Filter, which contactInfos to fetch.
     */
    where?: contactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactInfos to fetch.
     */
    orderBy?: contactInfoOrderByWithRelationInput | contactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contactInfos.
     */
    cursor?: contactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactInfos.
     */
    skip?: number
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * contactInfo create
   */
  export type contactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactInfo
     */
    select?: contactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactInfo
     */
    omit?: contactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a contactInfo.
     */
    data: XOR<contactInfoCreateInput, contactInfoUncheckedCreateInput>
  }

  /**
   * contactInfo createMany
   */
  export type contactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contactInfos.
     */
    data: contactInfoCreateManyInput | contactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contactInfo update
   */
  export type contactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactInfo
     */
    select?: contactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactInfo
     */
    omit?: contactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a contactInfo.
     */
    data: XOR<contactInfoUpdateInput, contactInfoUncheckedUpdateInput>
    /**
     * Choose, which contactInfo to update.
     */
    where: contactInfoWhereUniqueInput
  }

  /**
   * contactInfo updateMany
   */
  export type contactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contactInfos.
     */
    data: XOR<contactInfoUpdateManyMutationInput, contactInfoUncheckedUpdateManyInput>
    /**
     * Filter which contactInfos to update
     */
    where?: contactInfoWhereInput
  }

  /**
   * contactInfo upsert
   */
  export type contactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactInfo
     */
    select?: contactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactInfo
     */
    omit?: contactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the contactInfo to update in case it exists.
     */
    where: contactInfoWhereUniqueInput
    /**
     * In case the contactInfo found by the `where` argument doesn't exist, create a new contactInfo with this data.
     */
    create: XOR<contactInfoCreateInput, contactInfoUncheckedCreateInput>
    /**
     * In case the contactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactInfoUpdateInput, contactInfoUncheckedUpdateInput>
  }

  /**
   * contactInfo delete
   */
  export type contactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactInfo
     */
    select?: contactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactInfo
     */
    omit?: contactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInfoInclude<ExtArgs> | null
    /**
     * Filter which contactInfo to delete.
     */
    where: contactInfoWhereUniqueInput
  }

  /**
   * contactInfo deleteMany
   */
  export type contactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contactInfos to delete
     */
    where?: contactInfoWhereInput
  }

  /**
   * contactInfo.visaRequest
   */
  export type contactInfo$visaRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    where?: VisaRequestWhereInput
  }

  /**
   * contactInfo without action
   */
  export type contactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactInfo
     */
    select?: contactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactInfo
     */
    omit?: contactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInfoInclude<ExtArgs> | null
  }


  /**
   * Model RoadTripInfo
   */

  export type AggregateRoadTripInfo = {
    _count: RoadTripInfoCountAggregateOutputType | null
    _avg: RoadTripInfoAvgAggregateOutputType | null
    _sum: RoadTripInfoSumAggregateOutputType | null
    _min: RoadTripInfoMinAggregateOutputType | null
    _max: RoadTripInfoMaxAggregateOutputType | null
  }

  export type RoadTripInfoAvgAggregateOutputType = {
    id: number | null
    arrivalById: number | null
    departureToId: number | null
    locationId: number | null
  }

  export type RoadTripInfoSumAggregateOutputType = {
    id: number | null
    arrivalById: number | null
    departureToId: number | null
    locationId: number | null
  }

  export type RoadTripInfoMinAggregateOutputType = {
    id: number | null
    motif: string | null
    arrivalFrom: string | null
    arrivalDate: Date | null
    arrivalById: number | null
    departureTo: string | null
    departureDate: Date | null
    departureToId: number | null
    locationId: number | null
  }

  export type RoadTripInfoMaxAggregateOutputType = {
    id: number | null
    motif: string | null
    arrivalFrom: string | null
    arrivalDate: Date | null
    arrivalById: number | null
    departureTo: string | null
    departureDate: Date | null
    departureToId: number | null
    locationId: number | null
  }

  export type RoadTripInfoCountAggregateOutputType = {
    id: number
    motif: number
    arrivalFrom: number
    arrivalDate: number
    arrivalById: number
    departureTo: number
    departureDate: number
    departureToId: number
    locationId: number
    _all: number
  }


  export type RoadTripInfoAvgAggregateInputType = {
    id?: true
    arrivalById?: true
    departureToId?: true
    locationId?: true
  }

  export type RoadTripInfoSumAggregateInputType = {
    id?: true
    arrivalById?: true
    departureToId?: true
    locationId?: true
  }

  export type RoadTripInfoMinAggregateInputType = {
    id?: true
    motif?: true
    arrivalFrom?: true
    arrivalDate?: true
    arrivalById?: true
    departureTo?: true
    departureDate?: true
    departureToId?: true
    locationId?: true
  }

  export type RoadTripInfoMaxAggregateInputType = {
    id?: true
    motif?: true
    arrivalFrom?: true
    arrivalDate?: true
    arrivalById?: true
    departureTo?: true
    departureDate?: true
    departureToId?: true
    locationId?: true
  }

  export type RoadTripInfoCountAggregateInputType = {
    id?: true
    motif?: true
    arrivalFrom?: true
    arrivalDate?: true
    arrivalById?: true
    departureTo?: true
    departureDate?: true
    departureToId?: true
    locationId?: true
    _all?: true
  }

  export type RoadTripInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadTripInfo to aggregate.
     */
    where?: RoadTripInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadTripInfos to fetch.
     */
    orderBy?: RoadTripInfoOrderByWithRelationInput | RoadTripInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoadTripInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadTripInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadTripInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoadTripInfos
    **/
    _count?: true | RoadTripInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoadTripInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoadTripInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoadTripInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoadTripInfoMaxAggregateInputType
  }

  export type GetRoadTripInfoAggregateType<T extends RoadTripInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateRoadTripInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoadTripInfo[P]>
      : GetScalarType<T[P], AggregateRoadTripInfo[P]>
  }




  export type RoadTripInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadTripInfoWhereInput
    orderBy?: RoadTripInfoOrderByWithAggregationInput | RoadTripInfoOrderByWithAggregationInput[]
    by: RoadTripInfoScalarFieldEnum[] | RoadTripInfoScalarFieldEnum
    having?: RoadTripInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoadTripInfoCountAggregateInputType | true
    _avg?: RoadTripInfoAvgAggregateInputType
    _sum?: RoadTripInfoSumAggregateInputType
    _min?: RoadTripInfoMinAggregateInputType
    _max?: RoadTripInfoMaxAggregateInputType
  }

  export type RoadTripInfoGroupByOutputType = {
    id: number
    motif: string
    arrivalFrom: string
    arrivalDate: Date
    arrivalById: number
    departureTo: string
    departureDate: Date
    departureToId: number
    locationId: number | null
    _count: RoadTripInfoCountAggregateOutputType | null
    _avg: RoadTripInfoAvgAggregateOutputType | null
    _sum: RoadTripInfoSumAggregateOutputType | null
    _min: RoadTripInfoMinAggregateOutputType | null
    _max: RoadTripInfoMaxAggregateOutputType | null
  }

  type GetRoadTripInfoGroupByPayload<T extends RoadTripInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoadTripInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoadTripInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoadTripInfoGroupByOutputType[P]>
            : GetScalarType<T[P], RoadTripInfoGroupByOutputType[P]>
        }
      >
    >


  export type RoadTripInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motif?: boolean
    arrivalFrom?: boolean
    arrivalDate?: boolean
    arrivalById?: boolean
    departureTo?: boolean
    departureDate?: boolean
    departureToId?: boolean
    locationId?: boolean
    arrivalBy?: boolean | LocationDefaultArgs<ExtArgs>
    departureBy?: boolean | LocationDefaultArgs<ExtArgs>
    visaRequest?: boolean | RoadTripInfo$visaRequestArgs<ExtArgs>
    _count?: boolean | RoadTripInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadTripInfo"]>



  export type RoadTripInfoSelectScalar = {
    id?: boolean
    motif?: boolean
    arrivalFrom?: boolean
    arrivalDate?: boolean
    arrivalById?: boolean
    departureTo?: boolean
    departureDate?: boolean
    departureToId?: boolean
    locationId?: boolean
  }

  export type RoadTripInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "motif" | "arrivalFrom" | "arrivalDate" | "arrivalById" | "departureTo" | "departureDate" | "departureToId" | "locationId", ExtArgs["result"]["roadTripInfo"]>
  export type RoadTripInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arrivalBy?: boolean | LocationDefaultArgs<ExtArgs>
    departureBy?: boolean | LocationDefaultArgs<ExtArgs>
    visaRequest?: boolean | RoadTripInfo$visaRequestArgs<ExtArgs>
    _count?: boolean | RoadTripInfoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoadTripInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoadTripInfo"
    objects: {
      arrivalBy: Prisma.$LocationPayload<ExtArgs>
      departureBy: Prisma.$LocationPayload<ExtArgs>
      visaRequest: Prisma.$VisaRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      motif: string
      arrivalFrom: string
      arrivalDate: Date
      arrivalById: number
      departureTo: string
      departureDate: Date
      departureToId: number
      locationId: number | null
    }, ExtArgs["result"]["roadTripInfo"]>
    composites: {}
  }

  type RoadTripInfoGetPayload<S extends boolean | null | undefined | RoadTripInfoDefaultArgs> = $Result.GetResult<Prisma.$RoadTripInfoPayload, S>

  type RoadTripInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoadTripInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoadTripInfoCountAggregateInputType | true
    }

  export interface RoadTripInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoadTripInfo'], meta: { name: 'RoadTripInfo' } }
    /**
     * Find zero or one RoadTripInfo that matches the filter.
     * @param {RoadTripInfoFindUniqueArgs} args - Arguments to find a RoadTripInfo
     * @example
     * // Get one RoadTripInfo
     * const roadTripInfo = await prisma.roadTripInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoadTripInfoFindUniqueArgs>(args: SelectSubset<T, RoadTripInfoFindUniqueArgs<ExtArgs>>): Prisma__RoadTripInfoClient<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RoadTripInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoadTripInfoFindUniqueOrThrowArgs} args - Arguments to find a RoadTripInfo
     * @example
     * // Get one RoadTripInfo
     * const roadTripInfo = await prisma.roadTripInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoadTripInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, RoadTripInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoadTripInfoClient<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RoadTripInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadTripInfoFindFirstArgs} args - Arguments to find a RoadTripInfo
     * @example
     * // Get one RoadTripInfo
     * const roadTripInfo = await prisma.roadTripInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoadTripInfoFindFirstArgs>(args?: SelectSubset<T, RoadTripInfoFindFirstArgs<ExtArgs>>): Prisma__RoadTripInfoClient<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RoadTripInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadTripInfoFindFirstOrThrowArgs} args - Arguments to find a RoadTripInfo
     * @example
     * // Get one RoadTripInfo
     * const roadTripInfo = await prisma.roadTripInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoadTripInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, RoadTripInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoadTripInfoClient<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RoadTripInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadTripInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoadTripInfos
     * const roadTripInfos = await prisma.roadTripInfo.findMany()
     * 
     * // Get first 10 RoadTripInfos
     * const roadTripInfos = await prisma.roadTripInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roadTripInfoWithIdOnly = await prisma.roadTripInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoadTripInfoFindManyArgs>(args?: SelectSubset<T, RoadTripInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RoadTripInfo.
     * @param {RoadTripInfoCreateArgs} args - Arguments to create a RoadTripInfo.
     * @example
     * // Create one RoadTripInfo
     * const RoadTripInfo = await prisma.roadTripInfo.create({
     *   data: {
     *     // ... data to create a RoadTripInfo
     *   }
     * })
     * 
     */
    create<T extends RoadTripInfoCreateArgs>(args: SelectSubset<T, RoadTripInfoCreateArgs<ExtArgs>>): Prisma__RoadTripInfoClient<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RoadTripInfos.
     * @param {RoadTripInfoCreateManyArgs} args - Arguments to create many RoadTripInfos.
     * @example
     * // Create many RoadTripInfos
     * const roadTripInfo = await prisma.roadTripInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoadTripInfoCreateManyArgs>(args?: SelectSubset<T, RoadTripInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoadTripInfo.
     * @param {RoadTripInfoDeleteArgs} args - Arguments to delete one RoadTripInfo.
     * @example
     * // Delete one RoadTripInfo
     * const RoadTripInfo = await prisma.roadTripInfo.delete({
     *   where: {
     *     // ... filter to delete one RoadTripInfo
     *   }
     * })
     * 
     */
    delete<T extends RoadTripInfoDeleteArgs>(args: SelectSubset<T, RoadTripInfoDeleteArgs<ExtArgs>>): Prisma__RoadTripInfoClient<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RoadTripInfo.
     * @param {RoadTripInfoUpdateArgs} args - Arguments to update one RoadTripInfo.
     * @example
     * // Update one RoadTripInfo
     * const roadTripInfo = await prisma.roadTripInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoadTripInfoUpdateArgs>(args: SelectSubset<T, RoadTripInfoUpdateArgs<ExtArgs>>): Prisma__RoadTripInfoClient<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RoadTripInfos.
     * @param {RoadTripInfoDeleteManyArgs} args - Arguments to filter RoadTripInfos to delete.
     * @example
     * // Delete a few RoadTripInfos
     * const { count } = await prisma.roadTripInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoadTripInfoDeleteManyArgs>(args?: SelectSubset<T, RoadTripInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoadTripInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadTripInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoadTripInfos
     * const roadTripInfo = await prisma.roadTripInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoadTripInfoUpdateManyArgs>(args: SelectSubset<T, RoadTripInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoadTripInfo.
     * @param {RoadTripInfoUpsertArgs} args - Arguments to update or create a RoadTripInfo.
     * @example
     * // Update or create a RoadTripInfo
     * const roadTripInfo = await prisma.roadTripInfo.upsert({
     *   create: {
     *     // ... data to create a RoadTripInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoadTripInfo we want to update
     *   }
     * })
     */
    upsert<T extends RoadTripInfoUpsertArgs>(args: SelectSubset<T, RoadTripInfoUpsertArgs<ExtArgs>>): Prisma__RoadTripInfoClient<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RoadTripInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadTripInfoCountArgs} args - Arguments to filter RoadTripInfos to count.
     * @example
     * // Count the number of RoadTripInfos
     * const count = await prisma.roadTripInfo.count({
     *   where: {
     *     // ... the filter for the RoadTripInfos we want to count
     *   }
     * })
    **/
    count<T extends RoadTripInfoCountArgs>(
      args?: Subset<T, RoadTripInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoadTripInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoadTripInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadTripInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoadTripInfoAggregateArgs>(args: Subset<T, RoadTripInfoAggregateArgs>): Prisma.PrismaPromise<GetRoadTripInfoAggregateType<T>>

    /**
     * Group by RoadTripInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadTripInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoadTripInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoadTripInfoGroupByArgs['orderBy'] }
        : { orderBy?: RoadTripInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoadTripInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoadTripInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoadTripInfo model
   */
  readonly fields: RoadTripInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoadTripInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoadTripInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    arrivalBy<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    departureBy<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    visaRequest<T extends RoadTripInfo$visaRequestArgs<ExtArgs> = {}>(args?: Subset<T, RoadTripInfo$visaRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoadTripInfo model
   */ 
  interface RoadTripInfoFieldRefs {
    readonly id: FieldRef<"RoadTripInfo", 'Int'>
    readonly motif: FieldRef<"RoadTripInfo", 'String'>
    readonly arrivalFrom: FieldRef<"RoadTripInfo", 'String'>
    readonly arrivalDate: FieldRef<"RoadTripInfo", 'DateTime'>
    readonly arrivalById: FieldRef<"RoadTripInfo", 'Int'>
    readonly departureTo: FieldRef<"RoadTripInfo", 'String'>
    readonly departureDate: FieldRef<"RoadTripInfo", 'DateTime'>
    readonly departureToId: FieldRef<"RoadTripInfo", 'Int'>
    readonly locationId: FieldRef<"RoadTripInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoadTripInfo findUnique
   */
  export type RoadTripInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
    /**
     * Filter, which RoadTripInfo to fetch.
     */
    where: RoadTripInfoWhereUniqueInput
  }

  /**
   * RoadTripInfo findUniqueOrThrow
   */
  export type RoadTripInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
    /**
     * Filter, which RoadTripInfo to fetch.
     */
    where: RoadTripInfoWhereUniqueInput
  }

  /**
   * RoadTripInfo findFirst
   */
  export type RoadTripInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
    /**
     * Filter, which RoadTripInfo to fetch.
     */
    where?: RoadTripInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadTripInfos to fetch.
     */
    orderBy?: RoadTripInfoOrderByWithRelationInput | RoadTripInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadTripInfos.
     */
    cursor?: RoadTripInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadTripInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadTripInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadTripInfos.
     */
    distinct?: RoadTripInfoScalarFieldEnum | RoadTripInfoScalarFieldEnum[]
  }

  /**
   * RoadTripInfo findFirstOrThrow
   */
  export type RoadTripInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
    /**
     * Filter, which RoadTripInfo to fetch.
     */
    where?: RoadTripInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadTripInfos to fetch.
     */
    orderBy?: RoadTripInfoOrderByWithRelationInput | RoadTripInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadTripInfos.
     */
    cursor?: RoadTripInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadTripInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadTripInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadTripInfos.
     */
    distinct?: RoadTripInfoScalarFieldEnum | RoadTripInfoScalarFieldEnum[]
  }

  /**
   * RoadTripInfo findMany
   */
  export type RoadTripInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
    /**
     * Filter, which RoadTripInfos to fetch.
     */
    where?: RoadTripInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadTripInfos to fetch.
     */
    orderBy?: RoadTripInfoOrderByWithRelationInput | RoadTripInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoadTripInfos.
     */
    cursor?: RoadTripInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadTripInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadTripInfos.
     */
    skip?: number
    distinct?: RoadTripInfoScalarFieldEnum | RoadTripInfoScalarFieldEnum[]
  }

  /**
   * RoadTripInfo create
   */
  export type RoadTripInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a RoadTripInfo.
     */
    data: XOR<RoadTripInfoCreateInput, RoadTripInfoUncheckedCreateInput>
  }

  /**
   * RoadTripInfo createMany
   */
  export type RoadTripInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoadTripInfos.
     */
    data: RoadTripInfoCreateManyInput | RoadTripInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoadTripInfo update
   */
  export type RoadTripInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a RoadTripInfo.
     */
    data: XOR<RoadTripInfoUpdateInput, RoadTripInfoUncheckedUpdateInput>
    /**
     * Choose, which RoadTripInfo to update.
     */
    where: RoadTripInfoWhereUniqueInput
  }

  /**
   * RoadTripInfo updateMany
   */
  export type RoadTripInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoadTripInfos.
     */
    data: XOR<RoadTripInfoUpdateManyMutationInput, RoadTripInfoUncheckedUpdateManyInput>
    /**
     * Filter which RoadTripInfos to update
     */
    where?: RoadTripInfoWhereInput
  }

  /**
   * RoadTripInfo upsert
   */
  export type RoadTripInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the RoadTripInfo to update in case it exists.
     */
    where: RoadTripInfoWhereUniqueInput
    /**
     * In case the RoadTripInfo found by the `where` argument doesn't exist, create a new RoadTripInfo with this data.
     */
    create: XOR<RoadTripInfoCreateInput, RoadTripInfoUncheckedCreateInput>
    /**
     * In case the RoadTripInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoadTripInfoUpdateInput, RoadTripInfoUncheckedUpdateInput>
  }

  /**
   * RoadTripInfo delete
   */
  export type RoadTripInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
    /**
     * Filter which RoadTripInfo to delete.
     */
    where: RoadTripInfoWhereUniqueInput
  }

  /**
   * RoadTripInfo deleteMany
   */
  export type RoadTripInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadTripInfos to delete
     */
    where?: RoadTripInfoWhereInput
  }

  /**
   * RoadTripInfo.visaRequest
   */
  export type RoadTripInfo$visaRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    where?: VisaRequestWhereInput
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    cursor?: VisaRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisaRequestScalarFieldEnum | VisaRequestScalarFieldEnum[]
  }

  /**
   * RoadTripInfo without action
   */
  export type RoadTripInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    loginId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    loginId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    displayname: string | null
    phone: string | null
    email: string | null
    address: string | null
    loginId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    displayname: string | null
    phone: string | null
    email: string | null
    address: string | null
    loginId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    displayname: number
    phone: number
    email: number
    address: number
    loginId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    loginId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    loginId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    displayname?: true
    phone?: true
    email?: true
    address?: true
    loginId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    displayname?: true
    phone?: true
    email?: true
    address?: true
    loginId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    displayname?: true
    phone?: true
    email?: true
    address?: true
    loginId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    displayname: string
    phone: string
    email: string
    address: string | null
    loginId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayname?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    loginId?: boolean
    login?: boolean | User$loginArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    displayname?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    loginId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayname" | "phone" | "email" | "address" | "loginId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    login?: boolean | User$loginArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      login: Prisma.$LoginPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      displayname: string
      phone: string
      email: string
      address: string | null
      loginId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    login<T extends User$loginArgs<ExtArgs> = {}>(args?: Subset<T, User$loginArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly displayname: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly loginId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.login
   */
  export type User$loginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    where?: LoginWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
    byId: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
    byId: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    comment: string | null
    byId: number | null
    isActive: boolean | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    comment: string | null
    byId: number | null
    isActive: boolean | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    comment: number
    byId: number
    isActive: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
    byId?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
    byId?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    comment?: true
    byId?: true
    isActive?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    comment?: true
    byId?: true
    isActive?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    comment?: true
    byId?: true
    isActive?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    createdAt: Date | null
    updatedAt: Date | null
    comment: string | null
    byId: number | null
    isActive: boolean
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean
    byId?: boolean
    isActive?: boolean
    rolePermission?: boolean | Role$rolePermissionArgs<ExtArgs>
    login?: boolean | Role$loginArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean
    byId?: boolean
    isActive?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "comment" | "byId" | "isActive", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermission?: boolean | Role$rolePermissionArgs<ExtArgs>
    login?: boolean | Role$loginArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      rolePermission: Prisma.$RolePermissionPayload<ExtArgs>[]
      login: Prisma.$LoginPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date | null
      updatedAt: Date | null
      comment: string | null
      byId: number | null
      isActive: boolean
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolePermission<T extends Role$rolePermissionArgs<ExtArgs> = {}>(args?: Subset<T, Role$rolePermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    login<T extends Role$loginArgs<ExtArgs> = {}>(args?: Subset<T, Role$loginArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly comment: FieldRef<"Role", 'String'>
    readonly byId: FieldRef<"Role", 'Int'>
    readonly isActive: FieldRef<"Role", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.rolePermission
   */
  export type Role$rolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Role.login
   */
  export type Role$loginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    where?: LoginWhereInput
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    cursor?: LoginWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionAvgAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionSumAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionMinAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionCountAggregateOutputType = {
    roleId: number
    permissionId: number
    _all: number
  }


  export type RolePermissionAvgAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionSumAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionMinAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionCountAggregateInputType = {
    roleId?: true
    permissionId?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolePermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolePermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _avg?: RolePermissionAvgAggregateInputType
    _sum?: RolePermissionSumAggregateInputType
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    roleId: number
    permissionId: number
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>



  export type RolePermissionSelectScalar = {
    roleId?: boolean
    permissionId?: boolean
  }

  export type RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "permissionId", ExtArgs["result"]["rolePermission"]>
  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      permissionId: number
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolePermission model
   */ 
  interface RolePermissionFieldRefs {
    readonly roleId: FieldRef<"RolePermission", 'Int'>
    readonly permissionId: FieldRef<"RolePermission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
    moduleId: number | null
    byId: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
    moduleId: number | null
    byId: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    code: string | null
    comment: string | null
    moduleId: number | null
    action: $Enums.PermissionActionEnum | null
    byId: number | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    code: string | null
    comment: string | null
    moduleId: number | null
    action: $Enums.PermissionActionEnum | null
    byId: number | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    code: number
    comment: number
    moduleId: number
    action: number
    byId: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
    moduleId?: true
    byId?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
    moduleId?: true
    byId?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    code?: true
    comment?: true
    moduleId?: true
    action?: true
    byId?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    code?: true
    comment?: true
    moduleId?: true
    action?: true
    byId?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    code?: true
    comment?: true
    moduleId?: true
    action?: true
    byId?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    code: string
    comment: string | null
    moduleId: number
    action: $Enums.PermissionActionEnum
    byId: number | null
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    comment?: boolean
    moduleId?: boolean
    action?: boolean
    byId?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    rolePermission?: boolean | Permission$rolePermissionArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>



  export type PermissionSelectScalar = {
    id?: boolean
    code?: boolean
    comment?: boolean
    moduleId?: boolean
    action?: boolean
    byId?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "comment" | "moduleId" | "action" | "byId", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    rolePermission?: boolean | Permission$rolePermissionArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
      rolePermission: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      comment: string | null
      moduleId: number
      action: $Enums.PermissionActionEnum
      byId: number | null
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    rolePermission<T extends Permission$rolePermissionArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolePermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */ 
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'Int'>
    readonly code: FieldRef<"Permission", 'String'>
    readonly comment: FieldRef<"Permission", 'String'>
    readonly moduleId: FieldRef<"Permission", 'Int'>
    readonly action: FieldRef<"Permission", 'PermissionActionEnum'>
    readonly byId: FieldRef<"Permission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission.rolePermission
   */
  export type Permission$rolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    id: number | null
  }

  export type ModuleSumAggregateOutputType = {
    id: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    id?: true
  }

  export type ModuleSumAggregateInputType = {
    id?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: number
    name: string
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    permission?: boolean | Module$permissionArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>



  export type ModuleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | Module$permissionArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      permission: Prisma.$PermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends Module$permissionArgs<ExtArgs> = {}>(args?: Subset<T, Module$permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Module model
   */ 
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'Int'>
    readonly name: FieldRef<"Module", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
  }

  /**
   * Module.permission
   */
  export type Module$permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    id: number | null
  }

  export type ActivitySumAggregateOutputType = {
    id: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    id?: true
  }

  export type ActivitySumAggregateInputType = {
    id?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    customer?: boolean | Activity$customerArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>



  export type ActivitySelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Activity$customerArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends Activity$customerArgs<ExtArgs> = {}>(args?: Subset<T, Activity$customerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */ 
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'Int'>
    readonly name: FieldRef<"Activity", 'String'>
    readonly isActive: FieldRef<"Activity", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity.customer
   */
  export type Activity$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model VisaType
   */

  export type AggregateVisaType = {
    _count: VisaTypeCountAggregateOutputType | null
    _avg: VisaTypeAvgAggregateOutputType | null
    _sum: VisaTypeSumAggregateOutputType | null
    _min: VisaTypeMinAggregateOutputType | null
    _max: VisaTypeMaxAggregateOutputType | null
  }

  export type VisaTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type VisaTypeSumAggregateOutputType = {
    id: number | null
  }

  export type VisaTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    comment: string | null
    isActive: boolean | null
  }

  export type VisaTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    comment: string | null
    isActive: boolean | null
  }

  export type VisaTypeCountAggregateOutputType = {
    id: number
    name: number
    comment: number
    isActive: number
    _all: number
  }


  export type VisaTypeAvgAggregateInputType = {
    id?: true
  }

  export type VisaTypeSumAggregateInputType = {
    id?: true
  }

  export type VisaTypeMinAggregateInputType = {
    id?: true
    name?: true
    comment?: true
    isActive?: true
  }

  export type VisaTypeMaxAggregateInputType = {
    id?: true
    name?: true
    comment?: true
    isActive?: true
  }

  export type VisaTypeCountAggregateInputType = {
    id?: true
    name?: true
    comment?: true
    isActive?: true
    _all?: true
  }

  export type VisaTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisaType to aggregate.
     */
    where?: VisaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaTypes to fetch.
     */
    orderBy?: VisaTypeOrderByWithRelationInput | VisaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisaTypes
    **/
    _count?: true | VisaTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisaTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisaTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisaTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisaTypeMaxAggregateInputType
  }

  export type GetVisaTypeAggregateType<T extends VisaTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVisaType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisaType[P]>
      : GetScalarType<T[P], AggregateVisaType[P]>
  }




  export type VisaTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaTypeWhereInput
    orderBy?: VisaTypeOrderByWithAggregationInput | VisaTypeOrderByWithAggregationInput[]
    by: VisaTypeScalarFieldEnum[] | VisaTypeScalarFieldEnum
    having?: VisaTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisaTypeCountAggregateInputType | true
    _avg?: VisaTypeAvgAggregateInputType
    _sum?: VisaTypeSumAggregateInputType
    _min?: VisaTypeMinAggregateInputType
    _max?: VisaTypeMaxAggregateInputType
  }

  export type VisaTypeGroupByOutputType = {
    id: number
    name: string
    comment: string
    isActive: boolean
    _count: VisaTypeCountAggregateOutputType | null
    _avg: VisaTypeAvgAggregateOutputType | null
    _sum: VisaTypeSumAggregateOutputType | null
    _min: VisaTypeMinAggregateOutputType | null
    _max: VisaTypeMaxAggregateOutputType | null
  }

  type GetVisaTypeGroupByPayload<T extends VisaTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisaTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisaTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisaTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VisaTypeGroupByOutputType[P]>
        }
      >
    >


  export type VisaTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    comment?: boolean
    isActive?: boolean
    visaRequest?: boolean | VisaType$visaRequestArgs<ExtArgs>
    _count?: boolean | VisaTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visaType"]>



  export type VisaTypeSelectScalar = {
    id?: boolean
    name?: boolean
    comment?: boolean
    isActive?: boolean
  }

  export type VisaTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "comment" | "isActive", ExtArgs["result"]["visaType"]>
  export type VisaTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visaRequest?: boolean | VisaType$visaRequestArgs<ExtArgs>
    _count?: boolean | VisaTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VisaTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisaType"
    objects: {
      visaRequest: Prisma.$VisaRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      comment: string
      isActive: boolean
    }, ExtArgs["result"]["visaType"]>
    composites: {}
  }

  type VisaTypeGetPayload<S extends boolean | null | undefined | VisaTypeDefaultArgs> = $Result.GetResult<Prisma.$VisaTypePayload, S>

  type VisaTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisaTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisaTypeCountAggregateInputType | true
    }

  export interface VisaTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisaType'], meta: { name: 'VisaType' } }
    /**
     * Find zero or one VisaType that matches the filter.
     * @param {VisaTypeFindUniqueArgs} args - Arguments to find a VisaType
     * @example
     * // Get one VisaType
     * const visaType = await prisma.visaType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisaTypeFindUniqueArgs>(args: SelectSubset<T, VisaTypeFindUniqueArgs<ExtArgs>>): Prisma__VisaTypeClient<$Result.GetResult<Prisma.$VisaTypePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one VisaType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisaTypeFindUniqueOrThrowArgs} args - Arguments to find a VisaType
     * @example
     * // Get one VisaType
     * const visaType = await prisma.visaType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisaTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, VisaTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisaTypeClient<$Result.GetResult<Prisma.$VisaTypePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first VisaType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaTypeFindFirstArgs} args - Arguments to find a VisaType
     * @example
     * // Get one VisaType
     * const visaType = await prisma.visaType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisaTypeFindFirstArgs>(args?: SelectSubset<T, VisaTypeFindFirstArgs<ExtArgs>>): Prisma__VisaTypeClient<$Result.GetResult<Prisma.$VisaTypePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first VisaType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaTypeFindFirstOrThrowArgs} args - Arguments to find a VisaType
     * @example
     * // Get one VisaType
     * const visaType = await prisma.visaType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisaTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, VisaTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisaTypeClient<$Result.GetResult<Prisma.$VisaTypePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more VisaTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisaTypes
     * const visaTypes = await prisma.visaType.findMany()
     * 
     * // Get first 10 VisaTypes
     * const visaTypes = await prisma.visaType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visaTypeWithIdOnly = await prisma.visaType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisaTypeFindManyArgs>(args?: SelectSubset<T, VisaTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaTypePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a VisaType.
     * @param {VisaTypeCreateArgs} args - Arguments to create a VisaType.
     * @example
     * // Create one VisaType
     * const VisaType = await prisma.visaType.create({
     *   data: {
     *     // ... data to create a VisaType
     *   }
     * })
     * 
     */
    create<T extends VisaTypeCreateArgs>(args: SelectSubset<T, VisaTypeCreateArgs<ExtArgs>>): Prisma__VisaTypeClient<$Result.GetResult<Prisma.$VisaTypePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many VisaTypes.
     * @param {VisaTypeCreateManyArgs} args - Arguments to create many VisaTypes.
     * @example
     * // Create many VisaTypes
     * const visaType = await prisma.visaType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisaTypeCreateManyArgs>(args?: SelectSubset<T, VisaTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VisaType.
     * @param {VisaTypeDeleteArgs} args - Arguments to delete one VisaType.
     * @example
     * // Delete one VisaType
     * const VisaType = await prisma.visaType.delete({
     *   where: {
     *     // ... filter to delete one VisaType
     *   }
     * })
     * 
     */
    delete<T extends VisaTypeDeleteArgs>(args: SelectSubset<T, VisaTypeDeleteArgs<ExtArgs>>): Prisma__VisaTypeClient<$Result.GetResult<Prisma.$VisaTypePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one VisaType.
     * @param {VisaTypeUpdateArgs} args - Arguments to update one VisaType.
     * @example
     * // Update one VisaType
     * const visaType = await prisma.visaType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisaTypeUpdateArgs>(args: SelectSubset<T, VisaTypeUpdateArgs<ExtArgs>>): Prisma__VisaTypeClient<$Result.GetResult<Prisma.$VisaTypePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more VisaTypes.
     * @param {VisaTypeDeleteManyArgs} args - Arguments to filter VisaTypes to delete.
     * @example
     * // Delete a few VisaTypes
     * const { count } = await prisma.visaType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisaTypeDeleteManyArgs>(args?: SelectSubset<T, VisaTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisaTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisaTypes
     * const visaType = await prisma.visaType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisaTypeUpdateManyArgs>(args: SelectSubset<T, VisaTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VisaType.
     * @param {VisaTypeUpsertArgs} args - Arguments to update or create a VisaType.
     * @example
     * // Update or create a VisaType
     * const visaType = await prisma.visaType.upsert({
     *   create: {
     *     // ... data to create a VisaType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisaType we want to update
     *   }
     * })
     */
    upsert<T extends VisaTypeUpsertArgs>(args: SelectSubset<T, VisaTypeUpsertArgs<ExtArgs>>): Prisma__VisaTypeClient<$Result.GetResult<Prisma.$VisaTypePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of VisaTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaTypeCountArgs} args - Arguments to filter VisaTypes to count.
     * @example
     * // Count the number of VisaTypes
     * const count = await prisma.visaType.count({
     *   where: {
     *     // ... the filter for the VisaTypes we want to count
     *   }
     * })
    **/
    count<T extends VisaTypeCountArgs>(
      args?: Subset<T, VisaTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisaTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisaType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisaTypeAggregateArgs>(args: Subset<T, VisaTypeAggregateArgs>): Prisma.PrismaPromise<GetVisaTypeAggregateType<T>>

    /**
     * Group by VisaType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisaTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisaTypeGroupByArgs['orderBy'] }
        : { orderBy?: VisaTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisaTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisaTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisaType model
   */
  readonly fields: VisaTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisaType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisaTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visaRequest<T extends VisaType$visaRequestArgs<ExtArgs> = {}>(args?: Subset<T, VisaType$visaRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VisaType model
   */ 
  interface VisaTypeFieldRefs {
    readonly id: FieldRef<"VisaType", 'Int'>
    readonly name: FieldRef<"VisaType", 'String'>
    readonly comment: FieldRef<"VisaType", 'String'>
    readonly isActive: FieldRef<"VisaType", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VisaType findUnique
   */
  export type VisaTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaType
     */
    select?: VisaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaType
     */
    omit?: VisaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaTypeInclude<ExtArgs> | null
    /**
     * Filter, which VisaType to fetch.
     */
    where: VisaTypeWhereUniqueInput
  }

  /**
   * VisaType findUniqueOrThrow
   */
  export type VisaTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaType
     */
    select?: VisaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaType
     */
    omit?: VisaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaTypeInclude<ExtArgs> | null
    /**
     * Filter, which VisaType to fetch.
     */
    where: VisaTypeWhereUniqueInput
  }

  /**
   * VisaType findFirst
   */
  export type VisaTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaType
     */
    select?: VisaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaType
     */
    omit?: VisaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaTypeInclude<ExtArgs> | null
    /**
     * Filter, which VisaType to fetch.
     */
    where?: VisaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaTypes to fetch.
     */
    orderBy?: VisaTypeOrderByWithRelationInput | VisaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisaTypes.
     */
    cursor?: VisaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisaTypes.
     */
    distinct?: VisaTypeScalarFieldEnum | VisaTypeScalarFieldEnum[]
  }

  /**
   * VisaType findFirstOrThrow
   */
  export type VisaTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaType
     */
    select?: VisaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaType
     */
    omit?: VisaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaTypeInclude<ExtArgs> | null
    /**
     * Filter, which VisaType to fetch.
     */
    where?: VisaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaTypes to fetch.
     */
    orderBy?: VisaTypeOrderByWithRelationInput | VisaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisaTypes.
     */
    cursor?: VisaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisaTypes.
     */
    distinct?: VisaTypeScalarFieldEnum | VisaTypeScalarFieldEnum[]
  }

  /**
   * VisaType findMany
   */
  export type VisaTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaType
     */
    select?: VisaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaType
     */
    omit?: VisaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaTypeInclude<ExtArgs> | null
    /**
     * Filter, which VisaTypes to fetch.
     */
    where?: VisaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaTypes to fetch.
     */
    orderBy?: VisaTypeOrderByWithRelationInput | VisaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisaTypes.
     */
    cursor?: VisaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaTypes.
     */
    skip?: number
    distinct?: VisaTypeScalarFieldEnum | VisaTypeScalarFieldEnum[]
  }

  /**
   * VisaType create
   */
  export type VisaTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaType
     */
    select?: VisaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaType
     */
    omit?: VisaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a VisaType.
     */
    data: XOR<VisaTypeCreateInput, VisaTypeUncheckedCreateInput>
  }

  /**
   * VisaType createMany
   */
  export type VisaTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisaTypes.
     */
    data: VisaTypeCreateManyInput | VisaTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisaType update
   */
  export type VisaTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaType
     */
    select?: VisaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaType
     */
    omit?: VisaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a VisaType.
     */
    data: XOR<VisaTypeUpdateInput, VisaTypeUncheckedUpdateInput>
    /**
     * Choose, which VisaType to update.
     */
    where: VisaTypeWhereUniqueInput
  }

  /**
   * VisaType updateMany
   */
  export type VisaTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisaTypes.
     */
    data: XOR<VisaTypeUpdateManyMutationInput, VisaTypeUncheckedUpdateManyInput>
    /**
     * Filter which VisaTypes to update
     */
    where?: VisaTypeWhereInput
  }

  /**
   * VisaType upsert
   */
  export type VisaTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaType
     */
    select?: VisaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaType
     */
    omit?: VisaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the VisaType to update in case it exists.
     */
    where: VisaTypeWhereUniqueInput
    /**
     * In case the VisaType found by the `where` argument doesn't exist, create a new VisaType with this data.
     */
    create: XOR<VisaTypeCreateInput, VisaTypeUncheckedCreateInput>
    /**
     * In case the VisaType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisaTypeUpdateInput, VisaTypeUncheckedUpdateInput>
  }

  /**
   * VisaType delete
   */
  export type VisaTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaType
     */
    select?: VisaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaType
     */
    omit?: VisaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaTypeInclude<ExtArgs> | null
    /**
     * Filter which VisaType to delete.
     */
    where: VisaTypeWhereUniqueInput
  }

  /**
   * VisaType deleteMany
   */
  export type VisaTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisaTypes to delete
     */
    where?: VisaTypeWhereInput
  }

  /**
   * VisaType.visaRequest
   */
  export type VisaType$visaRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    where?: VisaRequestWhereInput
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    cursor?: VisaRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisaRequestScalarFieldEnum | VisaRequestScalarFieldEnum[]
  }

  /**
   * VisaType without action
   */
  export type VisaTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaType
     */
    select?: VisaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaType
     */
    omit?: VisaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaTypeInclude<ExtArgs> | null
  }


  /**
   * Model VisaRequest
   */

  export type AggregateVisaRequest = {
    _count: VisaRequestCountAggregateOutputType | null
    _avg: VisaRequestAvgAggregateOutputType | null
    _sum: VisaRequestSumAggregateOutputType | null
    _min: VisaRequestMinAggregateOutputType | null
    _max: VisaRequestMaxAggregateOutputType | null
  }

  export type VisaRequestAvgAggregateOutputType = {
    id: number | null
    visaTypeId: number | null
    roadTripInfoId: number | null
    customerId: number | null
  }

  export type VisaRequestSumAggregateOutputType = {
    id: number | null
    visaTypeId: number | null
    roadTripInfoId: number | null
    customerId: number | null
  }

  export type VisaRequestMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    visaTypeId: number | null
    roadTripInfoId: number | null
    customerId: number | null
  }

  export type VisaRequestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    visaTypeId: number | null
    roadTripInfoId: number | null
    customerId: number | null
  }

  export type VisaRequestCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    visaTypeId: number
    roadTripInfoId: number
    customerId: number
    _all: number
  }


  export type VisaRequestAvgAggregateInputType = {
    id?: true
    visaTypeId?: true
    roadTripInfoId?: true
    customerId?: true
  }

  export type VisaRequestSumAggregateInputType = {
    id?: true
    visaTypeId?: true
    roadTripInfoId?: true
    customerId?: true
  }

  export type VisaRequestMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    visaTypeId?: true
    roadTripInfoId?: true
    customerId?: true
  }

  export type VisaRequestMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    visaTypeId?: true
    roadTripInfoId?: true
    customerId?: true
  }

  export type VisaRequestCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    visaTypeId?: true
    roadTripInfoId?: true
    customerId?: true
    _all?: true
  }

  export type VisaRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisaRequest to aggregate.
     */
    where?: VisaRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaRequests to fetch.
     */
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisaRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisaRequests
    **/
    _count?: true | VisaRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisaRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisaRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisaRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisaRequestMaxAggregateInputType
  }

  export type GetVisaRequestAggregateType<T extends VisaRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateVisaRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisaRequest[P]>
      : GetScalarType<T[P], AggregateVisaRequest[P]>
  }




  export type VisaRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaRequestWhereInput
    orderBy?: VisaRequestOrderByWithAggregationInput | VisaRequestOrderByWithAggregationInput[]
    by: VisaRequestScalarFieldEnum[] | VisaRequestScalarFieldEnum
    having?: VisaRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisaRequestCountAggregateInputType | true
    _avg?: VisaRequestAvgAggregateInputType
    _sum?: VisaRequestSumAggregateInputType
    _min?: VisaRequestMinAggregateInputType
    _max?: VisaRequestMaxAggregateInputType
  }

  export type VisaRequestGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    createdAt: Date
    visaTypeId: number
    roadTripInfoId: number
    customerId: number
    _count: VisaRequestCountAggregateOutputType | null
    _avg: VisaRequestAvgAggregateOutputType | null
    _sum: VisaRequestSumAggregateOutputType | null
    _min: VisaRequestMinAggregateOutputType | null
    _max: VisaRequestMaxAggregateOutputType | null
  }

  type GetVisaRequestGroupByPayload<T extends VisaRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisaRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisaRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisaRequestGroupByOutputType[P]>
            : GetScalarType<T[P], VisaRequestGroupByOutputType[P]>
        }
      >
    >


  export type VisaRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    visaTypeId?: boolean
    roadTripInfoId?: boolean
    customerId?: boolean
    contacts?: boolean | VisaRequest$contactsArgs<ExtArgs>
    visaType?: boolean | VisaTypeDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    roadTrip?: boolean | RoadTripInfoDefaultArgs<ExtArgs>
    _count?: boolean | VisaRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visaRequest"]>



  export type VisaRequestSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    visaTypeId?: boolean
    roadTripInfoId?: boolean
    customerId?: boolean
  }

  export type VisaRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "createdAt" | "visaTypeId" | "roadTripInfoId" | "customerId", ExtArgs["result"]["visaRequest"]>
  export type VisaRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | VisaRequest$contactsArgs<ExtArgs>
    visaType?: boolean | VisaTypeDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    roadTrip?: boolean | RoadTripInfoDefaultArgs<ExtArgs>
    _count?: boolean | VisaRequestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VisaRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisaRequest"
    objects: {
      contacts: Prisma.$contactInfoPayload<ExtArgs>[]
      visaType: Prisma.$VisaTypePayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      roadTrip: Prisma.$RoadTripInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
      createdAt: Date
      visaTypeId: number
      roadTripInfoId: number
      customerId: number
    }, ExtArgs["result"]["visaRequest"]>
    composites: {}
  }

  type VisaRequestGetPayload<S extends boolean | null | undefined | VisaRequestDefaultArgs> = $Result.GetResult<Prisma.$VisaRequestPayload, S>

  type VisaRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisaRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisaRequestCountAggregateInputType | true
    }

  export interface VisaRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisaRequest'], meta: { name: 'VisaRequest' } }
    /**
     * Find zero or one VisaRequest that matches the filter.
     * @param {VisaRequestFindUniqueArgs} args - Arguments to find a VisaRequest
     * @example
     * // Get one VisaRequest
     * const visaRequest = await prisma.visaRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisaRequestFindUniqueArgs>(args: SelectSubset<T, VisaRequestFindUniqueArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one VisaRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisaRequestFindUniqueOrThrowArgs} args - Arguments to find a VisaRequest
     * @example
     * // Get one VisaRequest
     * const visaRequest = await prisma.visaRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisaRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, VisaRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first VisaRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestFindFirstArgs} args - Arguments to find a VisaRequest
     * @example
     * // Get one VisaRequest
     * const visaRequest = await prisma.visaRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisaRequestFindFirstArgs>(args?: SelectSubset<T, VisaRequestFindFirstArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first VisaRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestFindFirstOrThrowArgs} args - Arguments to find a VisaRequest
     * @example
     * // Get one VisaRequest
     * const visaRequest = await prisma.visaRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisaRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, VisaRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more VisaRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisaRequests
     * const visaRequests = await prisma.visaRequest.findMany()
     * 
     * // Get first 10 VisaRequests
     * const visaRequests = await prisma.visaRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visaRequestWithIdOnly = await prisma.visaRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisaRequestFindManyArgs>(args?: SelectSubset<T, VisaRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a VisaRequest.
     * @param {VisaRequestCreateArgs} args - Arguments to create a VisaRequest.
     * @example
     * // Create one VisaRequest
     * const VisaRequest = await prisma.visaRequest.create({
     *   data: {
     *     // ... data to create a VisaRequest
     *   }
     * })
     * 
     */
    create<T extends VisaRequestCreateArgs>(args: SelectSubset<T, VisaRequestCreateArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many VisaRequests.
     * @param {VisaRequestCreateManyArgs} args - Arguments to create many VisaRequests.
     * @example
     * // Create many VisaRequests
     * const visaRequest = await prisma.visaRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisaRequestCreateManyArgs>(args?: SelectSubset<T, VisaRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VisaRequest.
     * @param {VisaRequestDeleteArgs} args - Arguments to delete one VisaRequest.
     * @example
     * // Delete one VisaRequest
     * const VisaRequest = await prisma.visaRequest.delete({
     *   where: {
     *     // ... filter to delete one VisaRequest
     *   }
     * })
     * 
     */
    delete<T extends VisaRequestDeleteArgs>(args: SelectSubset<T, VisaRequestDeleteArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one VisaRequest.
     * @param {VisaRequestUpdateArgs} args - Arguments to update one VisaRequest.
     * @example
     * // Update one VisaRequest
     * const visaRequest = await prisma.visaRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisaRequestUpdateArgs>(args: SelectSubset<T, VisaRequestUpdateArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more VisaRequests.
     * @param {VisaRequestDeleteManyArgs} args - Arguments to filter VisaRequests to delete.
     * @example
     * // Delete a few VisaRequests
     * const { count } = await prisma.visaRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisaRequestDeleteManyArgs>(args?: SelectSubset<T, VisaRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisaRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisaRequests
     * const visaRequest = await prisma.visaRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisaRequestUpdateManyArgs>(args: SelectSubset<T, VisaRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VisaRequest.
     * @param {VisaRequestUpsertArgs} args - Arguments to update or create a VisaRequest.
     * @example
     * // Update or create a VisaRequest
     * const visaRequest = await prisma.visaRequest.upsert({
     *   create: {
     *     // ... data to create a VisaRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisaRequest we want to update
     *   }
     * })
     */
    upsert<T extends VisaRequestUpsertArgs>(args: SelectSubset<T, VisaRequestUpsertArgs<ExtArgs>>): Prisma__VisaRequestClient<$Result.GetResult<Prisma.$VisaRequestPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of VisaRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestCountArgs} args - Arguments to filter VisaRequests to count.
     * @example
     * // Count the number of VisaRequests
     * const count = await prisma.visaRequest.count({
     *   where: {
     *     // ... the filter for the VisaRequests we want to count
     *   }
     * })
    **/
    count<T extends VisaRequestCountArgs>(
      args?: Subset<T, VisaRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisaRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisaRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisaRequestAggregateArgs>(args: Subset<T, VisaRequestAggregateArgs>): Prisma.PrismaPromise<GetVisaRequestAggregateType<T>>

    /**
     * Group by VisaRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisaRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisaRequestGroupByArgs['orderBy'] }
        : { orderBy?: VisaRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisaRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisaRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisaRequest model
   */
  readonly fields: VisaRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisaRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisaRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contacts<T extends VisaRequest$contactsArgs<ExtArgs> = {}>(args?: Subset<T, VisaRequest$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactInfoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    visaType<T extends VisaTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisaTypeDefaultArgs<ExtArgs>>): Prisma__VisaTypeClient<$Result.GetResult<Prisma.$VisaTypePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    roadTrip<T extends RoadTripInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoadTripInfoDefaultArgs<ExtArgs>>): Prisma__RoadTripInfoClient<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VisaRequest model
   */ 
  interface VisaRequestFieldRefs {
    readonly id: FieldRef<"VisaRequest", 'Int'>
    readonly name: FieldRef<"VisaRequest", 'String'>
    readonly isActive: FieldRef<"VisaRequest", 'Boolean'>
    readonly createdAt: FieldRef<"VisaRequest", 'DateTime'>
    readonly visaTypeId: FieldRef<"VisaRequest", 'Int'>
    readonly roadTripInfoId: FieldRef<"VisaRequest", 'Int'>
    readonly customerId: FieldRef<"VisaRequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VisaRequest findUnique
   */
  export type VisaRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter, which VisaRequest to fetch.
     */
    where: VisaRequestWhereUniqueInput
  }

  /**
   * VisaRequest findUniqueOrThrow
   */
  export type VisaRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter, which VisaRequest to fetch.
     */
    where: VisaRequestWhereUniqueInput
  }

  /**
   * VisaRequest findFirst
   */
  export type VisaRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter, which VisaRequest to fetch.
     */
    where?: VisaRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaRequests to fetch.
     */
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisaRequests.
     */
    cursor?: VisaRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisaRequests.
     */
    distinct?: VisaRequestScalarFieldEnum | VisaRequestScalarFieldEnum[]
  }

  /**
   * VisaRequest findFirstOrThrow
   */
  export type VisaRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter, which VisaRequest to fetch.
     */
    where?: VisaRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaRequests to fetch.
     */
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisaRequests.
     */
    cursor?: VisaRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisaRequests.
     */
    distinct?: VisaRequestScalarFieldEnum | VisaRequestScalarFieldEnum[]
  }

  /**
   * VisaRequest findMany
   */
  export type VisaRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter, which VisaRequests to fetch.
     */
    where?: VisaRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisaRequests to fetch.
     */
    orderBy?: VisaRequestOrderByWithRelationInput | VisaRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisaRequests.
     */
    cursor?: VisaRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisaRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisaRequests.
     */
    skip?: number
    distinct?: VisaRequestScalarFieldEnum | VisaRequestScalarFieldEnum[]
  }

  /**
   * VisaRequest create
   */
  export type VisaRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a VisaRequest.
     */
    data: XOR<VisaRequestCreateInput, VisaRequestUncheckedCreateInput>
  }

  /**
   * VisaRequest createMany
   */
  export type VisaRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisaRequests.
     */
    data: VisaRequestCreateManyInput | VisaRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisaRequest update
   */
  export type VisaRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a VisaRequest.
     */
    data: XOR<VisaRequestUpdateInput, VisaRequestUncheckedUpdateInput>
    /**
     * Choose, which VisaRequest to update.
     */
    where: VisaRequestWhereUniqueInput
  }

  /**
   * VisaRequest updateMany
   */
  export type VisaRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisaRequests.
     */
    data: XOR<VisaRequestUpdateManyMutationInput, VisaRequestUncheckedUpdateManyInput>
    /**
     * Filter which VisaRequests to update
     */
    where?: VisaRequestWhereInput
  }

  /**
   * VisaRequest upsert
   */
  export type VisaRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the VisaRequest to update in case it exists.
     */
    where: VisaRequestWhereUniqueInput
    /**
     * In case the VisaRequest found by the `where` argument doesn't exist, create a new VisaRequest with this data.
     */
    create: XOR<VisaRequestCreateInput, VisaRequestUncheckedCreateInput>
    /**
     * In case the VisaRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisaRequestUpdateInput, VisaRequestUncheckedUpdateInput>
  }

  /**
   * VisaRequest delete
   */
  export type VisaRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
    /**
     * Filter which VisaRequest to delete.
     */
    where: VisaRequestWhereUniqueInput
  }

  /**
   * VisaRequest deleteMany
   */
  export type VisaRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisaRequests to delete
     */
    where?: VisaRequestWhereInput
  }

  /**
   * VisaRequest.contacts
   */
  export type VisaRequest$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactInfo
     */
    select?: contactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactInfo
     */
    omit?: contactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInfoInclude<ExtArgs> | null
    where?: contactInfoWhereInput
    orderBy?: contactInfoOrderByWithRelationInput | contactInfoOrderByWithRelationInput[]
    cursor?: contactInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * VisaRequest without action
   */
  export type VisaRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisaRequest
     */
    select?: VisaRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisaRequest
     */
    omit?: VisaRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaRequestInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    locationTypeId: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    locationTypeId: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    locationTypeId: number | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    locationTypeId: number | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    locationTypeId: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    locationTypeId?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    locationTypeId?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    locationTypeId?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    locationTypeId?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    locationTypeId?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    locationTypeId: number
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    locationTypeId?: boolean
    locationType?: boolean | LocationTypeDefaultArgs<ExtArgs>
    departureBy?: boolean | Location$departureByArgs<ExtArgs>
    arrivalBy?: boolean | Location$arrivalByArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>



  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    locationTypeId?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "locationTypeId", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationType?: boolean | LocationTypeDefaultArgs<ExtArgs>
    departureBy?: boolean | Location$departureByArgs<ExtArgs>
    arrivalBy?: boolean | Location$arrivalByArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      locationType: Prisma.$LocationTypePayload<ExtArgs>
      departureBy: Prisma.$RoadTripInfoPayload<ExtArgs>[]
      arrivalBy: Prisma.$RoadTripInfoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
      locationTypeId: number
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locationType<T extends LocationTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationTypeDefaultArgs<ExtArgs>>): Prisma__LocationTypeClient<$Result.GetResult<Prisma.$LocationTypePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    departureBy<T extends Location$departureByArgs<ExtArgs> = {}>(args?: Subset<T, Location$departureByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    arrivalBy<T extends Location$arrivalByArgs<ExtArgs> = {}>(args?: Subset<T, Location$arrivalByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadTripInfoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly name: FieldRef<"Location", 'String'>
    readonly isActive: FieldRef<"Location", 'Boolean'>
    readonly locationTypeId: FieldRef<"Location", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
  }

  /**
   * Location.departureBy
   */
  export type Location$departureByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
    where?: RoadTripInfoWhereInput
    orderBy?: RoadTripInfoOrderByWithRelationInput | RoadTripInfoOrderByWithRelationInput[]
    cursor?: RoadTripInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoadTripInfoScalarFieldEnum | RoadTripInfoScalarFieldEnum[]
  }

  /**
   * Location.arrivalBy
   */
  export type Location$arrivalByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadTripInfo
     */
    select?: RoadTripInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadTripInfo
     */
    omit?: RoadTripInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadTripInfoInclude<ExtArgs> | null
    where?: RoadTripInfoWhereInput
    orderBy?: RoadTripInfoOrderByWithRelationInput | RoadTripInfoOrderByWithRelationInput[]
    cursor?: RoadTripInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoadTripInfoScalarFieldEnum | RoadTripInfoScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model LocationType
   */

  export type AggregateLocationType = {
    _count: LocationTypeCountAggregateOutputType | null
    _avg: LocationTypeAvgAggregateOutputType | null
    _sum: LocationTypeSumAggregateOutputType | null
    _min: LocationTypeMinAggregateOutputType | null
    _max: LocationTypeMaxAggregateOutputType | null
  }

  export type LocationTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationTypeSumAggregateOutputType = {
    id: number | null
  }

  export type LocationTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
  }

  export type LocationTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
  }

  export type LocationTypeCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    _all: number
  }


  export type LocationTypeAvgAggregateInputType = {
    id?: true
  }

  export type LocationTypeSumAggregateInputType = {
    id?: true
  }

  export type LocationTypeMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
  }

  export type LocationTypeMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
  }

  export type LocationTypeCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    _all?: true
  }

  export type LocationTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationType to aggregate.
     */
    where?: LocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTypes to fetch.
     */
    orderBy?: LocationTypeOrderByWithRelationInput | LocationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationTypes
    **/
    _count?: true | LocationTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationTypeMaxAggregateInputType
  }

  export type GetLocationTypeAggregateType<T extends LocationTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationType[P]>
      : GetScalarType<T[P], AggregateLocationType[P]>
  }




  export type LocationTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationTypeWhereInput
    orderBy?: LocationTypeOrderByWithAggregationInput | LocationTypeOrderByWithAggregationInput[]
    by: LocationTypeScalarFieldEnum[] | LocationTypeScalarFieldEnum
    having?: LocationTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationTypeCountAggregateInputType | true
    _avg?: LocationTypeAvgAggregateInputType
    _sum?: LocationTypeSumAggregateInputType
    _min?: LocationTypeMinAggregateInputType
    _max?: LocationTypeMaxAggregateInputType
  }

  export type LocationTypeGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    _count: LocationTypeCountAggregateOutputType | null
    _avg: LocationTypeAvgAggregateOutputType | null
    _sum: LocationTypeSumAggregateOutputType | null
    _min: LocationTypeMinAggregateOutputType | null
    _max: LocationTypeMaxAggregateOutputType | null
  }

  type GetLocationTypeGroupByPayload<T extends LocationTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationTypeGroupByOutputType[P]>
            : GetScalarType<T[P], LocationTypeGroupByOutputType[P]>
        }
      >
    >


  export type LocationTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    location?: boolean | LocationType$locationArgs<ExtArgs>
    _count?: boolean | LocationTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationType"]>



  export type LocationTypeSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
  }

  export type LocationTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive", ExtArgs["result"]["locationType"]>
  export type LocationTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationType$locationArgs<ExtArgs>
    _count?: boolean | LocationTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocationTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocationType"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
    }, ExtArgs["result"]["locationType"]>
    composites: {}
  }

  type LocationTypeGetPayload<S extends boolean | null | undefined | LocationTypeDefaultArgs> = $Result.GetResult<Prisma.$LocationTypePayload, S>

  type LocationTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationTypeCountAggregateInputType | true
    }

  export interface LocationTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocationType'], meta: { name: 'LocationType' } }
    /**
     * Find zero or one LocationType that matches the filter.
     * @param {LocationTypeFindUniqueArgs} args - Arguments to find a LocationType
     * @example
     * // Get one LocationType
     * const locationType = await prisma.locationType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationTypeFindUniqueArgs>(args: SelectSubset<T, LocationTypeFindUniqueArgs<ExtArgs>>): Prisma__LocationTypeClient<$Result.GetResult<Prisma.$LocationTypePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one LocationType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationTypeFindUniqueOrThrowArgs} args - Arguments to find a LocationType
     * @example
     * // Get one LocationType
     * const locationType = await prisma.locationType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationTypeClient<$Result.GetResult<Prisma.$LocationTypePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first LocationType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeFindFirstArgs} args - Arguments to find a LocationType
     * @example
     * // Get one LocationType
     * const locationType = await prisma.locationType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationTypeFindFirstArgs>(args?: SelectSubset<T, LocationTypeFindFirstArgs<ExtArgs>>): Prisma__LocationTypeClient<$Result.GetResult<Prisma.$LocationTypePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first LocationType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeFindFirstOrThrowArgs} args - Arguments to find a LocationType
     * @example
     * // Get one LocationType
     * const locationType = await prisma.locationType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationTypeClient<$Result.GetResult<Prisma.$LocationTypePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more LocationTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationTypes
     * const locationTypes = await prisma.locationType.findMany()
     * 
     * // Get first 10 LocationTypes
     * const locationTypes = await prisma.locationType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationTypeWithIdOnly = await prisma.locationType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationTypeFindManyArgs>(args?: SelectSubset<T, LocationTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationTypePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a LocationType.
     * @param {LocationTypeCreateArgs} args - Arguments to create a LocationType.
     * @example
     * // Create one LocationType
     * const LocationType = await prisma.locationType.create({
     *   data: {
     *     // ... data to create a LocationType
     *   }
     * })
     * 
     */
    create<T extends LocationTypeCreateArgs>(args: SelectSubset<T, LocationTypeCreateArgs<ExtArgs>>): Prisma__LocationTypeClient<$Result.GetResult<Prisma.$LocationTypePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many LocationTypes.
     * @param {LocationTypeCreateManyArgs} args - Arguments to create many LocationTypes.
     * @example
     * // Create many LocationTypes
     * const locationType = await prisma.locationType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationTypeCreateManyArgs>(args?: SelectSubset<T, LocationTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LocationType.
     * @param {LocationTypeDeleteArgs} args - Arguments to delete one LocationType.
     * @example
     * // Delete one LocationType
     * const LocationType = await prisma.locationType.delete({
     *   where: {
     *     // ... filter to delete one LocationType
     *   }
     * })
     * 
     */
    delete<T extends LocationTypeDeleteArgs>(args: SelectSubset<T, LocationTypeDeleteArgs<ExtArgs>>): Prisma__LocationTypeClient<$Result.GetResult<Prisma.$LocationTypePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one LocationType.
     * @param {LocationTypeUpdateArgs} args - Arguments to update one LocationType.
     * @example
     * // Update one LocationType
     * const locationType = await prisma.locationType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationTypeUpdateArgs>(args: SelectSubset<T, LocationTypeUpdateArgs<ExtArgs>>): Prisma__LocationTypeClient<$Result.GetResult<Prisma.$LocationTypePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more LocationTypes.
     * @param {LocationTypeDeleteManyArgs} args - Arguments to filter LocationTypes to delete.
     * @example
     * // Delete a few LocationTypes
     * const { count } = await prisma.locationType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationTypeDeleteManyArgs>(args?: SelectSubset<T, LocationTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationTypes
     * const locationType = await prisma.locationType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationTypeUpdateManyArgs>(args: SelectSubset<T, LocationTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LocationType.
     * @param {LocationTypeUpsertArgs} args - Arguments to update or create a LocationType.
     * @example
     * // Update or create a LocationType
     * const locationType = await prisma.locationType.upsert({
     *   create: {
     *     // ... data to create a LocationType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationType we want to update
     *   }
     * })
     */
    upsert<T extends LocationTypeUpsertArgs>(args: SelectSubset<T, LocationTypeUpsertArgs<ExtArgs>>): Prisma__LocationTypeClient<$Result.GetResult<Prisma.$LocationTypePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of LocationTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeCountArgs} args - Arguments to filter LocationTypes to count.
     * @example
     * // Count the number of LocationTypes
     * const count = await prisma.locationType.count({
     *   where: {
     *     // ... the filter for the LocationTypes we want to count
     *   }
     * })
    **/
    count<T extends LocationTypeCountArgs>(
      args?: Subset<T, LocationTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationTypeAggregateArgs>(args: Subset<T, LocationTypeAggregateArgs>): Prisma.PrismaPromise<GetLocationTypeAggregateType<T>>

    /**
     * Group by LocationType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationTypeGroupByArgs['orderBy'] }
        : { orderBy?: LocationTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocationType model
   */
  readonly fields: LocationTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationType$locationArgs<ExtArgs> = {}>(args?: Subset<T, LocationType$locationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LocationType model
   */ 
  interface LocationTypeFieldRefs {
    readonly id: FieldRef<"LocationType", 'Int'>
    readonly name: FieldRef<"LocationType", 'String'>
    readonly isActive: FieldRef<"LocationType", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * LocationType findUnique
   */
  export type LocationTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationType
     */
    omit?: LocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTypeInclude<ExtArgs> | null
    /**
     * Filter, which LocationType to fetch.
     */
    where: LocationTypeWhereUniqueInput
  }

  /**
   * LocationType findUniqueOrThrow
   */
  export type LocationTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationType
     */
    omit?: LocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTypeInclude<ExtArgs> | null
    /**
     * Filter, which LocationType to fetch.
     */
    where: LocationTypeWhereUniqueInput
  }

  /**
   * LocationType findFirst
   */
  export type LocationTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationType
     */
    omit?: LocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTypeInclude<ExtArgs> | null
    /**
     * Filter, which LocationType to fetch.
     */
    where?: LocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTypes to fetch.
     */
    orderBy?: LocationTypeOrderByWithRelationInput | LocationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationTypes.
     */
    cursor?: LocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationTypes.
     */
    distinct?: LocationTypeScalarFieldEnum | LocationTypeScalarFieldEnum[]
  }

  /**
   * LocationType findFirstOrThrow
   */
  export type LocationTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationType
     */
    omit?: LocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTypeInclude<ExtArgs> | null
    /**
     * Filter, which LocationType to fetch.
     */
    where?: LocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTypes to fetch.
     */
    orderBy?: LocationTypeOrderByWithRelationInput | LocationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationTypes.
     */
    cursor?: LocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationTypes.
     */
    distinct?: LocationTypeScalarFieldEnum | LocationTypeScalarFieldEnum[]
  }

  /**
   * LocationType findMany
   */
  export type LocationTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationType
     */
    omit?: LocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTypeInclude<ExtArgs> | null
    /**
     * Filter, which LocationTypes to fetch.
     */
    where?: LocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTypes to fetch.
     */
    orderBy?: LocationTypeOrderByWithRelationInput | LocationTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationTypes.
     */
    cursor?: LocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTypes.
     */
    skip?: number
    distinct?: LocationTypeScalarFieldEnum | LocationTypeScalarFieldEnum[]
  }

  /**
   * LocationType create
   */
  export type LocationTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationType
     */
    omit?: LocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a LocationType.
     */
    data: XOR<LocationTypeCreateInput, LocationTypeUncheckedCreateInput>
  }

  /**
   * LocationType createMany
   */
  export type LocationTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationTypes.
     */
    data: LocationTypeCreateManyInput | LocationTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocationType update
   */
  export type LocationTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationType
     */
    omit?: LocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a LocationType.
     */
    data: XOR<LocationTypeUpdateInput, LocationTypeUncheckedUpdateInput>
    /**
     * Choose, which LocationType to update.
     */
    where: LocationTypeWhereUniqueInput
  }

  /**
   * LocationType updateMany
   */
  export type LocationTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationTypes.
     */
    data: XOR<LocationTypeUpdateManyMutationInput, LocationTypeUncheckedUpdateManyInput>
    /**
     * Filter which LocationTypes to update
     */
    where?: LocationTypeWhereInput
  }

  /**
   * LocationType upsert
   */
  export type LocationTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationType
     */
    omit?: LocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the LocationType to update in case it exists.
     */
    where: LocationTypeWhereUniqueInput
    /**
     * In case the LocationType found by the `where` argument doesn't exist, create a new LocationType with this data.
     */
    create: XOR<LocationTypeCreateInput, LocationTypeUncheckedCreateInput>
    /**
     * In case the LocationType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationTypeUpdateInput, LocationTypeUncheckedUpdateInput>
  }

  /**
   * LocationType delete
   */
  export type LocationTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationType
     */
    omit?: LocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTypeInclude<ExtArgs> | null
    /**
     * Filter which LocationType to delete.
     */
    where: LocationTypeWhereUniqueInput
  }

  /**
   * LocationType deleteMany
   */
  export type LocationTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationTypes to delete
     */
    where?: LocationTypeWhereInput
  }

  /**
   * LocationType.location
   */
  export type LocationType$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * LocationType without action
   */
  export type LocationTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationType
     */
    omit?: LocationTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTypeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LoginScalarFieldEnum: {
    id: 'id',
    type: 'type',
    username: 'username',
    password: 'password',
    roleId: 'roleId'
  };

  export type LoginScalarFieldEnum = (typeof LoginScalarFieldEnum)[keyof typeof LoginScalarFieldEnum]


  export const IconScalarFieldEnum: {
    id: 'id',
    path: 'path',
    code: 'code',
    comment: 'comment'
  };

  export type IconScalarFieldEnum = (typeof IconScalarFieldEnum)[keyof typeof IconScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    displayname: 'displayname',
    dateOfBirth: 'dateOfBirth',
    selfPath: 'selfPath',
    passportPath: 'passportPath',
    passportReference: 'passportReference',
    passportValidity: 'passportValidity',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    email: 'email',
    activityId: 'activityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    loginId: 'loginId'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ContactInfoScalarFieldEnum: {
    id: 'id',
    displayname: 'displayname',
    phone: 'phone',
    customerId: 'customerId',
    visaRequestId: 'visaRequestId'
  };

  export type ContactInfoScalarFieldEnum = (typeof ContactInfoScalarFieldEnum)[keyof typeof ContactInfoScalarFieldEnum]


  export const RoadTripInfoScalarFieldEnum: {
    id: 'id',
    motif: 'motif',
    arrivalFrom: 'arrivalFrom',
    arrivalDate: 'arrivalDate',
    arrivalById: 'arrivalById',
    departureTo: 'departureTo',
    departureDate: 'departureDate',
    departureToId: 'departureToId',
    locationId: 'locationId'
  };

  export type RoadTripInfoScalarFieldEnum = (typeof RoadTripInfoScalarFieldEnum)[keyof typeof RoadTripInfoScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    displayname: 'displayname',
    phone: 'phone',
    email: 'email',
    address: 'address',
    loginId: 'loginId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    comment: 'comment',
    byId: 'byId',
    isActive: 'isActive'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    roleId: 'roleId',
    permissionId: 'permissionId'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    comment: 'comment',
    moduleId: 'moduleId',
    action: 'action',
    byId: 'byId'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const VisaTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    comment: 'comment',
    isActive: 'isActive'
  };

  export type VisaTypeScalarFieldEnum = (typeof VisaTypeScalarFieldEnum)[keyof typeof VisaTypeScalarFieldEnum]


  export const VisaRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    visaTypeId: 'visaTypeId',
    roadTripInfoId: 'roadTripInfoId',
    customerId: 'customerId'
  };

  export type VisaRequestScalarFieldEnum = (typeof VisaRequestScalarFieldEnum)[keyof typeof VisaRequestScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    locationTypeId: 'locationTypeId'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const LocationTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive'
  };

  export type LocationTypeScalarFieldEnum = (typeof LocationTypeScalarFieldEnum)[keyof typeof LocationTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const LoginOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type LoginOrderByRelevanceFieldEnum = (typeof LoginOrderByRelevanceFieldEnum)[keyof typeof LoginOrderByRelevanceFieldEnum]


  export const IconOrderByRelevanceFieldEnum: {
    path: 'path',
    code: 'code',
    comment: 'comment'
  };

  export type IconOrderByRelevanceFieldEnum = (typeof IconOrderByRelevanceFieldEnum)[keyof typeof IconOrderByRelevanceFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    displayname: 'displayname',
    dateOfBirth: 'dateOfBirth',
    selfPath: 'selfPath',
    passportPath: 'passportPath',
    passportReference: 'passportReference',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    email: 'email'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const contactInfoOrderByRelevanceFieldEnum: {
    displayname: 'displayname',
    phone: 'phone'
  };

  export type contactInfoOrderByRelevanceFieldEnum = (typeof contactInfoOrderByRelevanceFieldEnum)[keyof typeof contactInfoOrderByRelevanceFieldEnum]


  export const RoadTripInfoOrderByRelevanceFieldEnum: {
    motif: 'motif',
    arrivalFrom: 'arrivalFrom',
    departureTo: 'departureTo'
  };

  export type RoadTripInfoOrderByRelevanceFieldEnum = (typeof RoadTripInfoOrderByRelevanceFieldEnum)[keyof typeof RoadTripInfoOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    displayname: 'displayname',
    phone: 'phone',
    email: 'email',
    address: 'address'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    name: 'name',
    comment: 'comment'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const PermissionOrderByRelevanceFieldEnum: {
    code: 'code',
    comment: 'comment'
  };

  export type PermissionOrderByRelevanceFieldEnum = (typeof PermissionOrderByRelevanceFieldEnum)[keyof typeof PermissionOrderByRelevanceFieldEnum]


  export const ModuleOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ModuleOrderByRelevanceFieldEnum = (typeof ModuleOrderByRelevanceFieldEnum)[keyof typeof ModuleOrderByRelevanceFieldEnum]


  export const ActivityOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ActivityOrderByRelevanceFieldEnum = (typeof ActivityOrderByRelevanceFieldEnum)[keyof typeof ActivityOrderByRelevanceFieldEnum]


  export const VisaTypeOrderByRelevanceFieldEnum: {
    name: 'name',
    comment: 'comment'
  };

  export type VisaTypeOrderByRelevanceFieldEnum = (typeof VisaTypeOrderByRelevanceFieldEnum)[keyof typeof VisaTypeOrderByRelevanceFieldEnum]


  export const VisaRequestOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type VisaRequestOrderByRelevanceFieldEnum = (typeof VisaRequestOrderByRelevanceFieldEnum)[keyof typeof VisaRequestOrderByRelevanceFieldEnum]


  export const LocationOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type LocationOrderByRelevanceFieldEnum = (typeof LocationOrderByRelevanceFieldEnum)[keyof typeof LocationOrderByRelevanceFieldEnum]


  export const LocationTypeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type LocationTypeOrderByRelevanceFieldEnum = (typeof LocationTypeOrderByRelevanceFieldEnum)[keyof typeof LocationTypeOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'LoginEnum'
   */
  export type EnumLoginEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoginEnum'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PermissionActionEnum'
   */
  export type EnumPermissionActionEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionActionEnum'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type LoginWhereInput = {
    AND?: LoginWhereInput | LoginWhereInput[]
    OR?: LoginWhereInput[]
    NOT?: LoginWhereInput | LoginWhereInput[]
    id?: IntFilter<"Login"> | number
    type?: EnumLoginEnumFilter<"Login"> | $Enums.LoginEnum
    username?: StringFilter<"Login"> | string
    password?: StringFilter<"Login"> | string
    roleId?: IntNullableFilter<"Login"> | number | null
    user?: UserListRelationFilter
    Customer?: CustomerListRelationFilter
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
  }

  export type LoginOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    username?: SortOrder
    password?: SortOrder
    roleId?: SortOrderInput | SortOrder
    user?: UserOrderByRelationAggregateInput
    Customer?: CustomerOrderByRelationAggregateInput
    role?: RoleOrderByWithRelationInput
    _relevance?: LoginOrderByRelevanceInput
  }

  export type LoginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    type_username?: LoginTypeUsernameCompoundUniqueInput
    AND?: LoginWhereInput | LoginWhereInput[]
    OR?: LoginWhereInput[]
    NOT?: LoginWhereInput | LoginWhereInput[]
    type?: EnumLoginEnumFilter<"Login"> | $Enums.LoginEnum
    username?: StringFilter<"Login"> | string
    password?: StringFilter<"Login"> | string
    roleId?: IntNullableFilter<"Login"> | number | null
    user?: UserListRelationFilter
    Customer?: CustomerListRelationFilter
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
  }, "id" | "type_username">

  export type LoginOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    username?: SortOrder
    password?: SortOrder
    roleId?: SortOrderInput | SortOrder
    _count?: LoginCountOrderByAggregateInput
    _avg?: LoginAvgOrderByAggregateInput
    _max?: LoginMaxOrderByAggregateInput
    _min?: LoginMinOrderByAggregateInput
    _sum?: LoginSumOrderByAggregateInput
  }

  export type LoginScalarWhereWithAggregatesInput = {
    AND?: LoginScalarWhereWithAggregatesInput | LoginScalarWhereWithAggregatesInput[]
    OR?: LoginScalarWhereWithAggregatesInput[]
    NOT?: LoginScalarWhereWithAggregatesInput | LoginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Login"> | number
    type?: EnumLoginEnumWithAggregatesFilter<"Login"> | $Enums.LoginEnum
    username?: StringWithAggregatesFilter<"Login"> | string
    password?: StringWithAggregatesFilter<"Login"> | string
    roleId?: IntNullableWithAggregatesFilter<"Login"> | number | null
  }

  export type IconWhereInput = {
    AND?: IconWhereInput | IconWhereInput[]
    OR?: IconWhereInput[]
    NOT?: IconWhereInput | IconWhereInput[]
    id?: IntFilter<"Icon"> | number
    path?: StringFilter<"Icon"> | string
    code?: StringFilter<"Icon"> | string
    comment?: StringFilter<"Icon"> | string
  }

  export type IconOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    code?: SortOrder
    comment?: SortOrder
    _relevance?: IconOrderByRelevanceInput
  }

  export type IconWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IconWhereInput | IconWhereInput[]
    OR?: IconWhereInput[]
    NOT?: IconWhereInput | IconWhereInput[]
    path?: StringFilter<"Icon"> | string
    code?: StringFilter<"Icon"> | string
    comment?: StringFilter<"Icon"> | string
  }, "id">

  export type IconOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    code?: SortOrder
    comment?: SortOrder
    _count?: IconCountOrderByAggregateInput
    _avg?: IconAvgOrderByAggregateInput
    _max?: IconMaxOrderByAggregateInput
    _min?: IconMinOrderByAggregateInput
    _sum?: IconSumOrderByAggregateInput
  }

  export type IconScalarWhereWithAggregatesInput = {
    AND?: IconScalarWhereWithAggregatesInput | IconScalarWhereWithAggregatesInput[]
    OR?: IconScalarWhereWithAggregatesInput[]
    NOT?: IconScalarWhereWithAggregatesInput | IconScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Icon"> | number
    path?: StringWithAggregatesFilter<"Icon"> | string
    code?: StringWithAggregatesFilter<"Icon"> | string
    comment?: StringWithAggregatesFilter<"Icon"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    displayname?: StringFilter<"Customer"> | string
    dateOfBirth?: StringFilter<"Customer"> | string
    selfPath?: StringFilter<"Customer"> | string
    passportPath?: StringFilter<"Customer"> | string
    passportReference?: StringFilter<"Customer"> | string
    passportValidity?: DateTimeFilter<"Customer"> | Date | string
    address?: StringFilter<"Customer"> | string
    latitude?: StringFilter<"Customer"> | string
    longitude?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    activityId?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    loginId?: IntFilter<"Customer"> | number
    login?: XOR<LoginScalarRelationFilter, LoginWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    VisaRequest?: VisaRequestListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    displayname?: SortOrder
    dateOfBirth?: SortOrder
    selfPath?: SortOrder
    passportPath?: SortOrder
    passportReference?: SortOrder
    passportValidity?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    email?: SortOrder
    activityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loginId?: SortOrder
    login?: LoginOrderByWithRelationInput
    activity?: ActivityOrderByWithRelationInput
    VisaRequest?: VisaRequestOrderByRelationAggregateInput
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    displayname?: StringFilter<"Customer"> | string
    dateOfBirth?: StringFilter<"Customer"> | string
    selfPath?: StringFilter<"Customer"> | string
    passportPath?: StringFilter<"Customer"> | string
    passportReference?: StringFilter<"Customer"> | string
    passportValidity?: DateTimeFilter<"Customer"> | Date | string
    address?: StringFilter<"Customer"> | string
    latitude?: StringFilter<"Customer"> | string
    longitude?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    activityId?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    loginId?: IntFilter<"Customer"> | number
    login?: XOR<LoginScalarRelationFilter, LoginWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    VisaRequest?: VisaRequestListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    displayname?: SortOrder
    dateOfBirth?: SortOrder
    selfPath?: SortOrder
    passportPath?: SortOrder
    passportReference?: SortOrder
    passportValidity?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    email?: SortOrder
    activityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loginId?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    displayname?: StringWithAggregatesFilter<"Customer"> | string
    dateOfBirth?: StringWithAggregatesFilter<"Customer"> | string
    selfPath?: StringWithAggregatesFilter<"Customer"> | string
    passportPath?: StringWithAggregatesFilter<"Customer"> | string
    passportReference?: StringWithAggregatesFilter<"Customer"> | string
    passportValidity?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    address?: StringWithAggregatesFilter<"Customer"> | string
    latitude?: StringWithAggregatesFilter<"Customer"> | string
    longitude?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    activityId?: IntWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    loginId?: IntWithAggregatesFilter<"Customer"> | number
  }

  export type contactInfoWhereInput = {
    AND?: contactInfoWhereInput | contactInfoWhereInput[]
    OR?: contactInfoWhereInput[]
    NOT?: contactInfoWhereInput | contactInfoWhereInput[]
    id?: IntFilter<"contactInfo"> | number
    displayname?: StringFilter<"contactInfo"> | string
    phone?: StringFilter<"contactInfo"> | string
    customerId?: IntNullableFilter<"contactInfo"> | number | null
    visaRequestId?: IntNullableFilter<"contactInfo"> | number | null
    visaRequest?: XOR<VisaRequestNullableScalarRelationFilter, VisaRequestWhereInput> | null
  }

  export type contactInfoOrderByWithRelationInput = {
    id?: SortOrder
    displayname?: SortOrder
    phone?: SortOrder
    customerId?: SortOrderInput | SortOrder
    visaRequestId?: SortOrderInput | SortOrder
    visaRequest?: VisaRequestOrderByWithRelationInput
    _relevance?: contactInfoOrderByRelevanceInput
  }

  export type contactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contactInfoWhereInput | contactInfoWhereInput[]
    OR?: contactInfoWhereInput[]
    NOT?: contactInfoWhereInput | contactInfoWhereInput[]
    displayname?: StringFilter<"contactInfo"> | string
    phone?: StringFilter<"contactInfo"> | string
    customerId?: IntNullableFilter<"contactInfo"> | number | null
    visaRequestId?: IntNullableFilter<"contactInfo"> | number | null
    visaRequest?: XOR<VisaRequestNullableScalarRelationFilter, VisaRequestWhereInput> | null
  }, "id">

  export type contactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    displayname?: SortOrder
    phone?: SortOrder
    customerId?: SortOrderInput | SortOrder
    visaRequestId?: SortOrderInput | SortOrder
    _count?: contactInfoCountOrderByAggregateInput
    _avg?: contactInfoAvgOrderByAggregateInput
    _max?: contactInfoMaxOrderByAggregateInput
    _min?: contactInfoMinOrderByAggregateInput
    _sum?: contactInfoSumOrderByAggregateInput
  }

  export type contactInfoScalarWhereWithAggregatesInput = {
    AND?: contactInfoScalarWhereWithAggregatesInput | contactInfoScalarWhereWithAggregatesInput[]
    OR?: contactInfoScalarWhereWithAggregatesInput[]
    NOT?: contactInfoScalarWhereWithAggregatesInput | contactInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contactInfo"> | number
    displayname?: StringWithAggregatesFilter<"contactInfo"> | string
    phone?: StringWithAggregatesFilter<"contactInfo"> | string
    customerId?: IntNullableWithAggregatesFilter<"contactInfo"> | number | null
    visaRequestId?: IntNullableWithAggregatesFilter<"contactInfo"> | number | null
  }

  export type RoadTripInfoWhereInput = {
    AND?: RoadTripInfoWhereInput | RoadTripInfoWhereInput[]
    OR?: RoadTripInfoWhereInput[]
    NOT?: RoadTripInfoWhereInput | RoadTripInfoWhereInput[]
    id?: IntFilter<"RoadTripInfo"> | number
    motif?: StringFilter<"RoadTripInfo"> | string
    arrivalFrom?: StringFilter<"RoadTripInfo"> | string
    arrivalDate?: DateTimeFilter<"RoadTripInfo"> | Date | string
    arrivalById?: IntFilter<"RoadTripInfo"> | number
    departureTo?: StringFilter<"RoadTripInfo"> | string
    departureDate?: DateTimeFilter<"RoadTripInfo"> | Date | string
    departureToId?: IntFilter<"RoadTripInfo"> | number
    locationId?: IntNullableFilter<"RoadTripInfo"> | number | null
    arrivalBy?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    departureBy?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    visaRequest?: VisaRequestListRelationFilter
  }

  export type RoadTripInfoOrderByWithRelationInput = {
    id?: SortOrder
    motif?: SortOrder
    arrivalFrom?: SortOrder
    arrivalDate?: SortOrder
    arrivalById?: SortOrder
    departureTo?: SortOrder
    departureDate?: SortOrder
    departureToId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    arrivalBy?: LocationOrderByWithRelationInput
    departureBy?: LocationOrderByWithRelationInput
    visaRequest?: VisaRequestOrderByRelationAggregateInput
    _relevance?: RoadTripInfoOrderByRelevanceInput
  }

  export type RoadTripInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoadTripInfoWhereInput | RoadTripInfoWhereInput[]
    OR?: RoadTripInfoWhereInput[]
    NOT?: RoadTripInfoWhereInput | RoadTripInfoWhereInput[]
    motif?: StringFilter<"RoadTripInfo"> | string
    arrivalFrom?: StringFilter<"RoadTripInfo"> | string
    arrivalDate?: DateTimeFilter<"RoadTripInfo"> | Date | string
    arrivalById?: IntFilter<"RoadTripInfo"> | number
    departureTo?: StringFilter<"RoadTripInfo"> | string
    departureDate?: DateTimeFilter<"RoadTripInfo"> | Date | string
    departureToId?: IntFilter<"RoadTripInfo"> | number
    locationId?: IntNullableFilter<"RoadTripInfo"> | number | null
    arrivalBy?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    departureBy?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    visaRequest?: VisaRequestListRelationFilter
  }, "id">

  export type RoadTripInfoOrderByWithAggregationInput = {
    id?: SortOrder
    motif?: SortOrder
    arrivalFrom?: SortOrder
    arrivalDate?: SortOrder
    arrivalById?: SortOrder
    departureTo?: SortOrder
    departureDate?: SortOrder
    departureToId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    _count?: RoadTripInfoCountOrderByAggregateInput
    _avg?: RoadTripInfoAvgOrderByAggregateInput
    _max?: RoadTripInfoMaxOrderByAggregateInput
    _min?: RoadTripInfoMinOrderByAggregateInput
    _sum?: RoadTripInfoSumOrderByAggregateInput
  }

  export type RoadTripInfoScalarWhereWithAggregatesInput = {
    AND?: RoadTripInfoScalarWhereWithAggregatesInput | RoadTripInfoScalarWhereWithAggregatesInput[]
    OR?: RoadTripInfoScalarWhereWithAggregatesInput[]
    NOT?: RoadTripInfoScalarWhereWithAggregatesInput | RoadTripInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoadTripInfo"> | number
    motif?: StringWithAggregatesFilter<"RoadTripInfo"> | string
    arrivalFrom?: StringWithAggregatesFilter<"RoadTripInfo"> | string
    arrivalDate?: DateTimeWithAggregatesFilter<"RoadTripInfo"> | Date | string
    arrivalById?: IntWithAggregatesFilter<"RoadTripInfo"> | number
    departureTo?: StringWithAggregatesFilter<"RoadTripInfo"> | string
    departureDate?: DateTimeWithAggregatesFilter<"RoadTripInfo"> | Date | string
    departureToId?: IntWithAggregatesFilter<"RoadTripInfo"> | number
    locationId?: IntNullableWithAggregatesFilter<"RoadTripInfo"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    displayname?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    loginId?: IntNullableFilter<"User"> | number | null
    login?: XOR<LoginNullableScalarRelationFilter, LoginWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    displayname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    loginId?: SortOrderInput | SortOrder
    login?: LoginOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayname?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    loginId?: IntNullableFilter<"User"> | number | null
    login?: XOR<LoginNullableScalarRelationFilter, LoginWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    displayname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    loginId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    displayname?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    loginId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    comment?: StringNullableFilter<"Role"> | string | null
    byId?: IntNullableFilter<"Role"> | number | null
    isActive?: BoolFilter<"Role"> | boolean
    rolePermission?: RolePermissionListRelationFilter
    login?: LoginListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    byId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    rolePermission?: RolePermissionOrderByRelationAggregateInput
    login?: LoginOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    comment?: StringNullableFilter<"Role"> | string | null
    byId?: IntNullableFilter<"Role"> | number | null
    isActive?: BoolFilter<"Role"> | boolean
    rolePermission?: RolePermissionListRelationFilter
    login?: LoginListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    byId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    comment?: StringNullableWithAggregatesFilter<"Role"> | string | null
    byId?: IntNullableWithAggregatesFilter<"Role"> | number | null
    isActive?: BoolWithAggregatesFilter<"Role"> | boolean
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    role?: RoleOrderByWithRelationInput
    permission?: PermissionOrderByWithRelationInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    roleId_permissionId?: RolePermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }, "roleId_permissionId">

  export type RolePermissionOrderByWithAggregationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _avg?: RolePermissionAvgOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
    _sum?: RolePermissionSumOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"RolePermission"> | number
    permissionId?: IntWithAggregatesFilter<"RolePermission"> | number
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: IntFilter<"Permission"> | number
    code?: StringFilter<"Permission"> | string
    comment?: StringNullableFilter<"Permission"> | string | null
    moduleId?: IntFilter<"Permission"> | number
    action?: EnumPermissionActionEnumFilter<"Permission"> | $Enums.PermissionActionEnum
    byId?: IntNullableFilter<"Permission"> | number | null
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    rolePermission?: RolePermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    comment?: SortOrderInput | SortOrder
    moduleId?: SortOrder
    action?: SortOrder
    byId?: SortOrderInput | SortOrder
    module?: ModuleOrderByWithRelationInput
    rolePermission?: RolePermissionOrderByRelationAggregateInput
    _relevance?: PermissionOrderByRelevanceInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    comment?: StringNullableFilter<"Permission"> | string | null
    moduleId?: IntFilter<"Permission"> | number
    action?: EnumPermissionActionEnumFilter<"Permission"> | $Enums.PermissionActionEnum
    byId?: IntNullableFilter<"Permission"> | number | null
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    rolePermission?: RolePermissionListRelationFilter
  }, "id" | "code">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    comment?: SortOrderInput | SortOrder
    moduleId?: SortOrder
    action?: SortOrder
    byId?: SortOrderInput | SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permission"> | number
    code?: StringWithAggregatesFilter<"Permission"> | string
    comment?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    moduleId?: IntWithAggregatesFilter<"Permission"> | number
    action?: EnumPermissionActionEnumWithAggregatesFilter<"Permission"> | $Enums.PermissionActionEnum
    byId?: IntNullableWithAggregatesFilter<"Permission"> | number | null
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: IntFilter<"Module"> | number
    name?: StringFilter<"Module"> | string
    permission?: PermissionListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    permission?: PermissionOrderByRelationAggregateInput
    _relevance?: ModuleOrderByRelevanceInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    permission?: PermissionListRelationFilter
  }, "id" | "name">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Module"> | number
    name?: StringWithAggregatesFilter<"Module"> | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: IntFilter<"Activity"> | number
    name?: StringFilter<"Activity"> | string
    isActive?: BoolFilter<"Activity"> | boolean
    customer?: CustomerListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    customer?: CustomerOrderByRelationAggregateInput
    _relevance?: ActivityOrderByRelevanceInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    isActive?: BoolFilter<"Activity"> | boolean
    customer?: CustomerListRelationFilter
  }, "id" | "name">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activity"> | number
    name?: StringWithAggregatesFilter<"Activity"> | string
    isActive?: BoolWithAggregatesFilter<"Activity"> | boolean
  }

  export type VisaTypeWhereInput = {
    AND?: VisaTypeWhereInput | VisaTypeWhereInput[]
    OR?: VisaTypeWhereInput[]
    NOT?: VisaTypeWhereInput | VisaTypeWhereInput[]
    id?: IntFilter<"VisaType"> | number
    name?: StringFilter<"VisaType"> | string
    comment?: StringFilter<"VisaType"> | string
    isActive?: BoolFilter<"VisaType"> | boolean
    visaRequest?: VisaRequestListRelationFilter
  }

  export type VisaTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    isActive?: SortOrder
    visaRequest?: VisaRequestOrderByRelationAggregateInput
    _relevance?: VisaTypeOrderByRelevanceInput
  }

  export type VisaTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: VisaTypeWhereInput | VisaTypeWhereInput[]
    OR?: VisaTypeWhereInput[]
    NOT?: VisaTypeWhereInput | VisaTypeWhereInput[]
    comment?: StringFilter<"VisaType"> | string
    isActive?: BoolFilter<"VisaType"> | boolean
    visaRequest?: VisaRequestListRelationFilter
  }, "id" | "name">

  export type VisaTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    isActive?: SortOrder
    _count?: VisaTypeCountOrderByAggregateInput
    _avg?: VisaTypeAvgOrderByAggregateInput
    _max?: VisaTypeMaxOrderByAggregateInput
    _min?: VisaTypeMinOrderByAggregateInput
    _sum?: VisaTypeSumOrderByAggregateInput
  }

  export type VisaTypeScalarWhereWithAggregatesInput = {
    AND?: VisaTypeScalarWhereWithAggregatesInput | VisaTypeScalarWhereWithAggregatesInput[]
    OR?: VisaTypeScalarWhereWithAggregatesInput[]
    NOT?: VisaTypeScalarWhereWithAggregatesInput | VisaTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VisaType"> | number
    name?: StringWithAggregatesFilter<"VisaType"> | string
    comment?: StringWithAggregatesFilter<"VisaType"> | string
    isActive?: BoolWithAggregatesFilter<"VisaType"> | boolean
  }

  export type VisaRequestWhereInput = {
    AND?: VisaRequestWhereInput | VisaRequestWhereInput[]
    OR?: VisaRequestWhereInput[]
    NOT?: VisaRequestWhereInput | VisaRequestWhereInput[]
    id?: IntFilter<"VisaRequest"> | number
    name?: StringFilter<"VisaRequest"> | string
    isActive?: BoolFilter<"VisaRequest"> | boolean
    createdAt?: DateTimeFilter<"VisaRequest"> | Date | string
    visaTypeId?: IntFilter<"VisaRequest"> | number
    roadTripInfoId?: IntFilter<"VisaRequest"> | number
    customerId?: IntFilter<"VisaRequest"> | number
    contacts?: ContactInfoListRelationFilter
    visaType?: XOR<VisaTypeScalarRelationFilter, VisaTypeWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    roadTrip?: XOR<RoadTripInfoScalarRelationFilter, RoadTripInfoWhereInput>
  }

  export type VisaRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    visaTypeId?: SortOrder
    roadTripInfoId?: SortOrder
    customerId?: SortOrder
    contacts?: contactInfoOrderByRelationAggregateInput
    visaType?: VisaTypeOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    roadTrip?: RoadTripInfoOrderByWithRelationInput
    _relevance?: VisaRequestOrderByRelevanceInput
  }

  export type VisaRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: VisaRequestWhereInput | VisaRequestWhereInput[]
    OR?: VisaRequestWhereInput[]
    NOT?: VisaRequestWhereInput | VisaRequestWhereInput[]
    isActive?: BoolFilter<"VisaRequest"> | boolean
    createdAt?: DateTimeFilter<"VisaRequest"> | Date | string
    visaTypeId?: IntFilter<"VisaRequest"> | number
    roadTripInfoId?: IntFilter<"VisaRequest"> | number
    customerId?: IntFilter<"VisaRequest"> | number
    contacts?: ContactInfoListRelationFilter
    visaType?: XOR<VisaTypeScalarRelationFilter, VisaTypeWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    roadTrip?: XOR<RoadTripInfoScalarRelationFilter, RoadTripInfoWhereInput>
  }, "id" | "name">

  export type VisaRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    visaTypeId?: SortOrder
    roadTripInfoId?: SortOrder
    customerId?: SortOrder
    _count?: VisaRequestCountOrderByAggregateInput
    _avg?: VisaRequestAvgOrderByAggregateInput
    _max?: VisaRequestMaxOrderByAggregateInput
    _min?: VisaRequestMinOrderByAggregateInput
    _sum?: VisaRequestSumOrderByAggregateInput
  }

  export type VisaRequestScalarWhereWithAggregatesInput = {
    AND?: VisaRequestScalarWhereWithAggregatesInput | VisaRequestScalarWhereWithAggregatesInput[]
    OR?: VisaRequestScalarWhereWithAggregatesInput[]
    NOT?: VisaRequestScalarWhereWithAggregatesInput | VisaRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VisaRequest"> | number
    name?: StringWithAggregatesFilter<"VisaRequest"> | string
    isActive?: BoolWithAggregatesFilter<"VisaRequest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"VisaRequest"> | Date | string
    visaTypeId?: IntWithAggregatesFilter<"VisaRequest"> | number
    roadTripInfoId?: IntWithAggregatesFilter<"VisaRequest"> | number
    customerId?: IntWithAggregatesFilter<"VisaRequest"> | number
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    name?: StringFilter<"Location"> | string
    isActive?: BoolFilter<"Location"> | boolean
    locationTypeId?: IntFilter<"Location"> | number
    locationType?: XOR<LocationTypeScalarRelationFilter, LocationTypeWhereInput>
    departureBy?: RoadTripInfoListRelationFilter
    arrivalBy?: RoadTripInfoListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    locationTypeId?: SortOrder
    locationType?: LocationTypeOrderByWithRelationInput
    departureBy?: RoadTripInfoOrderByRelationAggregateInput
    arrivalBy?: RoadTripInfoOrderByRelationAggregateInput
    _relevance?: LocationOrderByRelevanceInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    isActive?: BoolFilter<"Location"> | boolean
    locationTypeId?: IntFilter<"Location"> | number
    locationType?: XOR<LocationTypeScalarRelationFilter, LocationTypeWhereInput>
    departureBy?: RoadTripInfoListRelationFilter
    arrivalBy?: RoadTripInfoListRelationFilter
  }, "id" | "name">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    locationTypeId?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    name?: StringWithAggregatesFilter<"Location"> | string
    isActive?: BoolWithAggregatesFilter<"Location"> | boolean
    locationTypeId?: IntWithAggregatesFilter<"Location"> | number
  }

  export type LocationTypeWhereInput = {
    AND?: LocationTypeWhereInput | LocationTypeWhereInput[]
    OR?: LocationTypeWhereInput[]
    NOT?: LocationTypeWhereInput | LocationTypeWhereInput[]
    id?: IntFilter<"LocationType"> | number
    name?: StringFilter<"LocationType"> | string
    isActive?: BoolFilter<"LocationType"> | boolean
    location?: LocationListRelationFilter
  }

  export type LocationTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    location?: LocationOrderByRelationAggregateInput
    _relevance?: LocationTypeOrderByRelevanceInput
  }

  export type LocationTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LocationTypeWhereInput | LocationTypeWhereInput[]
    OR?: LocationTypeWhereInput[]
    NOT?: LocationTypeWhereInput | LocationTypeWhereInput[]
    isActive?: BoolFilter<"LocationType"> | boolean
    location?: LocationListRelationFilter
  }, "id" | "name">

  export type LocationTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    _count?: LocationTypeCountOrderByAggregateInput
    _avg?: LocationTypeAvgOrderByAggregateInput
    _max?: LocationTypeMaxOrderByAggregateInput
    _min?: LocationTypeMinOrderByAggregateInput
    _sum?: LocationTypeSumOrderByAggregateInput
  }

  export type LocationTypeScalarWhereWithAggregatesInput = {
    AND?: LocationTypeScalarWhereWithAggregatesInput | LocationTypeScalarWhereWithAggregatesInput[]
    OR?: LocationTypeScalarWhereWithAggregatesInput[]
    NOT?: LocationTypeScalarWhereWithAggregatesInput | LocationTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LocationType"> | number
    name?: StringWithAggregatesFilter<"LocationType"> | string
    isActive?: BoolWithAggregatesFilter<"LocationType"> | boolean
  }

  export type LoginCreateInput = {
    type: $Enums.LoginEnum
    username: string
    password: string
    user?: UserCreateNestedManyWithoutLoginInput
    Customer?: CustomerCreateNestedManyWithoutLoginInput
    role?: RoleCreateNestedOneWithoutLoginInput
  }

  export type LoginUncheckedCreateInput = {
    id?: number
    type: $Enums.LoginEnum
    username: string
    password: string
    roleId?: number | null
    user?: UserUncheckedCreateNestedManyWithoutLoginInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutLoginInput
  }

  export type LoginUpdateInput = {
    type?: EnumLoginEnumFieldUpdateOperationsInput | $Enums.LoginEnum
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutLoginNestedInput
    Customer?: CustomerUpdateManyWithoutLoginNestedInput
    role?: RoleUpdateOneWithoutLoginNestedInput
  }

  export type LoginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumLoginEnumFieldUpdateOperationsInput | $Enums.LoginEnum
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUncheckedUpdateManyWithoutLoginNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutLoginNestedInput
  }

  export type LoginCreateManyInput = {
    id?: number
    type: $Enums.LoginEnum
    username: string
    password: string
    roleId?: number | null
  }

  export type LoginUpdateManyMutationInput = {
    type?: EnumLoginEnumFieldUpdateOperationsInput | $Enums.LoginEnum
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type LoginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumLoginEnumFieldUpdateOperationsInput | $Enums.LoginEnum
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IconCreateInput = {
    path: string
    code: string
    comment: string
  }

  export type IconUncheckedCreateInput = {
    id?: number
    path: string
    code: string
    comment: string
  }

  export type IconUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type IconUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type IconCreateManyInput = {
    id?: number
    path: string
    code: string
    comment: string
  }

  export type IconUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type IconUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date | string
    address: string
    latitude: string
    longitude: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    login: LoginCreateNestedOneWithoutCustomerInput
    activity: ActivityCreateNestedOneWithoutCustomerInput
    VisaRequest?: VisaRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date | string
    address: string
    latitude: string
    longitude: string
    email: string
    activityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loginId: number
    VisaRequest?: VisaRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    login?: LoginUpdateOneRequiredWithoutCustomerNestedInput
    activity?: ActivityUpdateOneRequiredWithoutCustomerNestedInput
    VisaRequest?: VisaRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: IntFieldUpdateOperationsInput | number
    VisaRequest?: VisaRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date | string
    address: string
    latitude: string
    longitude: string
    email: string
    activityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loginId: number
  }

  export type CustomerUpdateManyMutationInput = {
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: IntFieldUpdateOperationsInput | number
  }

  export type contactInfoCreateInput = {
    displayname: string
    phone: string
    customerId?: number | null
    visaRequest?: VisaRequestCreateNestedOneWithoutContactsInput
  }

  export type contactInfoUncheckedCreateInput = {
    id?: number
    displayname: string
    phone: string
    customerId?: number | null
    visaRequestId?: number | null
  }

  export type contactInfoUpdateInput = {
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    visaRequest?: VisaRequestUpdateOneWithoutContactsNestedInput
  }

  export type contactInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    visaRequestId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type contactInfoCreateManyInput = {
    id?: number
    displayname: string
    phone: string
    customerId?: number | null
    visaRequestId?: number | null
  }

  export type contactInfoUpdateManyMutationInput = {
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type contactInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    visaRequestId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoadTripInfoCreateInput = {
    motif: string
    arrivalFrom: string
    arrivalDate: Date | string
    departureTo: string
    departureDate: Date | string
    locationId?: number | null
    arrivalBy: LocationCreateNestedOneWithoutArrivalByInput
    departureBy: LocationCreateNestedOneWithoutDepartureByInput
    visaRequest?: VisaRequestCreateNestedManyWithoutRoadTripInput
  }

  export type RoadTripInfoUncheckedCreateInput = {
    id?: number
    motif: string
    arrivalFrom: string
    arrivalDate: Date | string
    arrivalById: number
    departureTo: string
    departureDate: Date | string
    departureToId: number
    locationId?: number | null
    visaRequest?: VisaRequestUncheckedCreateNestedManyWithoutRoadTripInput
  }

  export type RoadTripInfoUpdateInput = {
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    arrivalBy?: LocationUpdateOneRequiredWithoutArrivalByNestedInput
    departureBy?: LocationUpdateOneRequiredWithoutDepartureByNestedInput
    visaRequest?: VisaRequestUpdateManyWithoutRoadTripNestedInput
  }

  export type RoadTripInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalById?: IntFieldUpdateOperationsInput | number
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureToId?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    visaRequest?: VisaRequestUncheckedUpdateManyWithoutRoadTripNestedInput
  }

  export type RoadTripInfoCreateManyInput = {
    id?: number
    motif: string
    arrivalFrom: string
    arrivalDate: Date | string
    arrivalById: number
    departureTo: string
    departureDate: Date | string
    departureToId: number
    locationId?: number | null
  }

  export type RoadTripInfoUpdateManyMutationInput = {
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoadTripInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalById?: IntFieldUpdateOperationsInput | number
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureToId?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    displayname: string
    phone: string
    email: string
    address?: string | null
    login?: LoginCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    displayname: string
    phone: string
    email: string
    address?: string | null
    loginId?: number | null
  }

  export type UserUpdateInput = {
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    login?: LoginUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loginId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyInput = {
    id?: number
    displayname: string
    phone: string
    email: string
    address?: string | null
    loginId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loginId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoleCreateInput = {
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comment?: string | null
    byId?: number | null
    isActive?: boolean
    rolePermission?: RolePermissionCreateNestedManyWithoutRoleInput
    login?: LoginCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comment?: string | null
    byId?: number | null
    isActive?: boolean
    rolePermission?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    login?: LoginUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rolePermission?: RolePermissionUpdateManyWithoutRoleNestedInput
    login?: LoginUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rolePermission?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    login?: LoginUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comment?: string | null
    byId?: number | null
    isActive?: boolean
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolePermissionCreateInput = {
    role: RoleCreateNestedOneWithoutRolePermissionInput
    permission: PermissionCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionUpdateInput = {
    role?: RoleUpdateOneRequiredWithoutRolePermissionNestedInput
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionCreateManyInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionUpdateManyMutationInput = {

  }

  export type RolePermissionUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionCreateInput = {
    code: string
    comment?: string | null
    action: $Enums.PermissionActionEnum
    byId?: number | null
    module: ModuleCreateNestedOneWithoutPermissionInput
    rolePermission?: RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    code: string
    comment?: string | null
    moduleId: number
    action: $Enums.PermissionActionEnum
    byId?: number | null
    rolePermission?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumPermissionActionEnumFieldUpdateOperationsInput | $Enums.PermissionActionEnum
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    module?: ModuleUpdateOneRequiredWithoutPermissionNestedInput
    rolePermission?: RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: IntFieldUpdateOperationsInput | number
    action?: EnumPermissionActionEnumFieldUpdateOperationsInput | $Enums.PermissionActionEnum
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    rolePermission?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: number
    code: string
    comment?: string | null
    moduleId: number
    action: $Enums.PermissionActionEnum
    byId?: number | null
  }

  export type PermissionUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumPermissionActionEnumFieldUpdateOperationsInput | $Enums.PermissionActionEnum
    byId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: IntFieldUpdateOperationsInput | number
    action?: EnumPermissionActionEnumFieldUpdateOperationsInput | $Enums.PermissionActionEnum
    byId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ModuleCreateInput = {
    name: string
    permission?: PermissionCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: number
    name: string
    permission?: PermissionUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    permission?: PermissionUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    permission?: PermissionUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: number
    name: string
  }

  export type ModuleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityCreateInput = {
    name: string
    isActive?: boolean
    customer?: CustomerCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    customer?: CustomerUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
  }

  export type ActivityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VisaTypeCreateInput = {
    name: string
    comment: string
    isActive?: boolean
    visaRequest?: VisaRequestCreateNestedManyWithoutVisaTypeInput
  }

  export type VisaTypeUncheckedCreateInput = {
    id?: number
    name: string
    comment: string
    isActive?: boolean
    visaRequest?: VisaRequestUncheckedCreateNestedManyWithoutVisaTypeInput
  }

  export type VisaTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    visaRequest?: VisaRequestUpdateManyWithoutVisaTypeNestedInput
  }

  export type VisaTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    visaRequest?: VisaRequestUncheckedUpdateManyWithoutVisaTypeNestedInput
  }

  export type VisaTypeCreateManyInput = {
    id?: number
    name: string
    comment: string
    isActive?: boolean
  }

  export type VisaTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VisaTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VisaRequestCreateInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    contacts?: contactInfoCreateNestedManyWithoutVisaRequestInput
    visaType: VisaTypeCreateNestedOneWithoutVisaRequestInput
    customer: CustomerCreateNestedOneWithoutVisaRequestInput
    roadTrip: RoadTripInfoCreateNestedOneWithoutVisaRequestInput
  }

  export type VisaRequestUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    visaTypeId: number
    roadTripInfoId: number
    customerId: number
    contacts?: contactInfoUncheckedCreateNestedManyWithoutVisaRequestInput
  }

  export type VisaRequestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: contactInfoUpdateManyWithoutVisaRequestNestedInput
    visaType?: VisaTypeUpdateOneRequiredWithoutVisaRequestNestedInput
    customer?: CustomerUpdateOneRequiredWithoutVisaRequestNestedInput
    roadTrip?: RoadTripInfoUpdateOneRequiredWithoutVisaRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visaTypeId?: IntFieldUpdateOperationsInput | number
    roadTripInfoId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    contacts?: contactInfoUncheckedUpdateManyWithoutVisaRequestNestedInput
  }

  export type VisaRequestCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    visaTypeId: number
    roadTripInfoId: number
    customerId: number
  }

  export type VisaRequestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visaTypeId?: IntFieldUpdateOperationsInput | number
    roadTripInfoId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type LocationCreateInput = {
    name: string
    isActive?: boolean
    locationType: LocationTypeCreateNestedOneWithoutLocationInput
    departureBy?: RoadTripInfoCreateNestedManyWithoutDepartureByInput
    arrivalBy?: RoadTripInfoCreateNestedManyWithoutArrivalByInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    locationTypeId: number
    departureBy?: RoadTripInfoUncheckedCreateNestedManyWithoutDepartureByInput
    arrivalBy?: RoadTripInfoUncheckedCreateNestedManyWithoutArrivalByInput
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    locationType?: LocationTypeUpdateOneRequiredWithoutLocationNestedInput
    departureBy?: RoadTripInfoUpdateManyWithoutDepartureByNestedInput
    arrivalBy?: RoadTripInfoUpdateManyWithoutArrivalByNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    locationTypeId?: IntFieldUpdateOperationsInput | number
    departureBy?: RoadTripInfoUncheckedUpdateManyWithoutDepartureByNestedInput
    arrivalBy?: RoadTripInfoUncheckedUpdateManyWithoutArrivalByNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
    locationTypeId: number
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    locationTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type LocationTypeCreateInput = {
    name: string
    isActive?: boolean
    location?: LocationCreateNestedManyWithoutLocationTypeInput
  }

  export type LocationTypeUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    location?: LocationUncheckedCreateNestedManyWithoutLocationTypeInput
  }

  export type LocationTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUpdateManyWithoutLocationTypeNestedInput
  }

  export type LocationTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUncheckedUpdateManyWithoutLocationTypeNestedInput
  }

  export type LocationTypeCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
  }

  export type LocationTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LocationTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumLoginEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginEnum | EnumLoginEnumFieldRefInput<$PrismaModel>
    in?: $Enums.LoginEnum[]
    notIn?: $Enums.LoginEnum[]
    not?: NestedEnumLoginEnumFilter<$PrismaModel> | $Enums.LoginEnum
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type RoleNullableScalarRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoginOrderByRelevanceInput = {
    fields: LoginOrderByRelevanceFieldEnum | LoginOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LoginTypeUsernameCompoundUniqueInput = {
    type: $Enums.LoginEnum
    username: string
  }

  export type LoginCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    username?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
  }

  export type LoginAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type LoginMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    username?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
  }

  export type LoginMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    username?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
  }

  export type LoginSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumLoginEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginEnum | EnumLoginEnumFieldRefInput<$PrismaModel>
    in?: $Enums.LoginEnum[]
    notIn?: $Enums.LoginEnum[]
    not?: NestedEnumLoginEnumWithAggregatesFilter<$PrismaModel> | $Enums.LoginEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoginEnumFilter<$PrismaModel>
    _max?: NestedEnumLoginEnumFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IconOrderByRelevanceInput = {
    fields: IconOrderByRelevanceFieldEnum | IconOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IconCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    code?: SortOrder
    comment?: SortOrder
  }

  export type IconAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IconMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    code?: SortOrder
    comment?: SortOrder
  }

  export type IconMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    code?: SortOrder
    comment?: SortOrder
  }

  export type IconSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LoginScalarRelationFilter = {
    is?: LoginWhereInput
    isNot?: LoginWhereInput
  }

  export type ActivityScalarRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type VisaRequestListRelationFilter = {
    every?: VisaRequestWhereInput
    some?: VisaRequestWhereInput
    none?: VisaRequestWhereInput
  }

  export type VisaRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelevanceInput = {
    fields: CustomerOrderByRelevanceFieldEnum | CustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    displayname?: SortOrder
    dateOfBirth?: SortOrder
    selfPath?: SortOrder
    passportPath?: SortOrder
    passportReference?: SortOrder
    passportValidity?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    email?: SortOrder
    activityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loginId?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    loginId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    displayname?: SortOrder
    dateOfBirth?: SortOrder
    selfPath?: SortOrder
    passportPath?: SortOrder
    passportReference?: SortOrder
    passportValidity?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    email?: SortOrder
    activityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loginId?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    displayname?: SortOrder
    dateOfBirth?: SortOrder
    selfPath?: SortOrder
    passportPath?: SortOrder
    passportReference?: SortOrder
    passportValidity?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    email?: SortOrder
    activityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loginId?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    loginId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VisaRequestNullableScalarRelationFilter = {
    is?: VisaRequestWhereInput | null
    isNot?: VisaRequestWhereInput | null
  }

  export type contactInfoOrderByRelevanceInput = {
    fields: contactInfoOrderByRelevanceFieldEnum | contactInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type contactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    displayname?: SortOrder
    phone?: SortOrder
    customerId?: SortOrder
    visaRequestId?: SortOrder
  }

  export type contactInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    visaRequestId?: SortOrder
  }

  export type contactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    displayname?: SortOrder
    phone?: SortOrder
    customerId?: SortOrder
    visaRequestId?: SortOrder
  }

  export type contactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    displayname?: SortOrder
    phone?: SortOrder
    customerId?: SortOrder
    visaRequestId?: SortOrder
  }

  export type contactInfoSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    visaRequestId?: SortOrder
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type RoadTripInfoOrderByRelevanceInput = {
    fields: RoadTripInfoOrderByRelevanceFieldEnum | RoadTripInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoadTripInfoCountOrderByAggregateInput = {
    id?: SortOrder
    motif?: SortOrder
    arrivalFrom?: SortOrder
    arrivalDate?: SortOrder
    arrivalById?: SortOrder
    departureTo?: SortOrder
    departureDate?: SortOrder
    departureToId?: SortOrder
    locationId?: SortOrder
  }

  export type RoadTripInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    arrivalById?: SortOrder
    departureToId?: SortOrder
    locationId?: SortOrder
  }

  export type RoadTripInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    motif?: SortOrder
    arrivalFrom?: SortOrder
    arrivalDate?: SortOrder
    arrivalById?: SortOrder
    departureTo?: SortOrder
    departureDate?: SortOrder
    departureToId?: SortOrder
    locationId?: SortOrder
  }

  export type RoadTripInfoMinOrderByAggregateInput = {
    id?: SortOrder
    motif?: SortOrder
    arrivalFrom?: SortOrder
    arrivalDate?: SortOrder
    arrivalById?: SortOrder
    departureTo?: SortOrder
    departureDate?: SortOrder
    departureToId?: SortOrder
    locationId?: SortOrder
  }

  export type RoadTripInfoSumOrderByAggregateInput = {
    id?: SortOrder
    arrivalById?: SortOrder
    departureToId?: SortOrder
    locationId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LoginNullableScalarRelationFilter = {
    is?: LoginWhereInput | null
    isNot?: LoginWhereInput | null
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    displayname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    loginId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    loginId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    displayname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    loginId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    displayname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    loginId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    loginId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type LoginListRelationFilter = {
    every?: LoginWhereInput
    some?: LoginWhereInput
    none?: LoginWhereInput
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoginOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    byId?: SortOrder
    isActive?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
    byId?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    byId?: SortOrder
    isActive?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    byId?: SortOrder
    isActive?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
    byId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type PermissionScalarRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionCountOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionAvgOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionSumOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type EnumPermissionActionEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionActionEnum | EnumPermissionActionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionActionEnum[]
    notIn?: $Enums.PermissionActionEnum[]
    not?: NestedEnumPermissionActionEnumFilter<$PrismaModel> | $Enums.PermissionActionEnum
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type PermissionOrderByRelevanceInput = {
    fields: PermissionOrderByRelevanceFieldEnum | PermissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    comment?: SortOrder
    moduleId?: SortOrder
    action?: SortOrder
    byId?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    byId?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    comment?: SortOrder
    moduleId?: SortOrder
    action?: SortOrder
    byId?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    comment?: SortOrder
    moduleId?: SortOrder
    action?: SortOrder
    byId?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    byId?: SortOrder
  }

  export type EnumPermissionActionEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionActionEnum | EnumPermissionActionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionActionEnum[]
    notIn?: $Enums.PermissionActionEnum[]
    not?: NestedEnumPermissionActionEnumWithAggregatesFilter<$PrismaModel> | $Enums.PermissionActionEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionActionEnumFilter<$PrismaModel>
    _max?: NestedEnumPermissionActionEnumFilter<$PrismaModel>
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleOrderByRelevanceInput = {
    fields: ModuleOrderByRelevanceFieldEnum | ModuleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityOrderByRelevanceInput = {
    fields: ActivityOrderByRelevanceFieldEnum | ActivityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisaTypeOrderByRelevanceInput = {
    fields: VisaTypeOrderByRelevanceFieldEnum | VisaTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VisaTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    isActive?: SortOrder
  }

  export type VisaTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisaTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    isActive?: SortOrder
  }

  export type VisaTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    isActive?: SortOrder
  }

  export type VisaTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactInfoListRelationFilter = {
    every?: contactInfoWhereInput
    some?: contactInfoWhereInput
    none?: contactInfoWhereInput
  }

  export type VisaTypeScalarRelationFilter = {
    is?: VisaTypeWhereInput
    isNot?: VisaTypeWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type RoadTripInfoScalarRelationFilter = {
    is?: RoadTripInfoWhereInput
    isNot?: RoadTripInfoWhereInput
  }

  export type contactInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisaRequestOrderByRelevanceInput = {
    fields: VisaRequestOrderByRelevanceFieldEnum | VisaRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VisaRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    visaTypeId?: SortOrder
    roadTripInfoId?: SortOrder
    customerId?: SortOrder
  }

  export type VisaRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    visaTypeId?: SortOrder
    roadTripInfoId?: SortOrder
    customerId?: SortOrder
  }

  export type VisaRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    visaTypeId?: SortOrder
    roadTripInfoId?: SortOrder
    customerId?: SortOrder
  }

  export type VisaRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    visaTypeId?: SortOrder
    roadTripInfoId?: SortOrder
    customerId?: SortOrder
  }

  export type VisaRequestSumOrderByAggregateInput = {
    id?: SortOrder
    visaTypeId?: SortOrder
    roadTripInfoId?: SortOrder
    customerId?: SortOrder
  }

  export type LocationTypeScalarRelationFilter = {
    is?: LocationTypeWhereInput
    isNot?: LocationTypeWhereInput
  }

  export type RoadTripInfoListRelationFilter = {
    every?: RoadTripInfoWhereInput
    some?: RoadTripInfoWhereInput
    none?: RoadTripInfoWhereInput
  }

  export type RoadTripInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationOrderByRelevanceInput = {
    fields: LocationOrderByRelevanceFieldEnum | LocationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    locationTypeId?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    locationTypeId?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    locationTypeId?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    locationTypeId?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    locationTypeId?: SortOrder
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationTypeOrderByRelevanceInput = {
    fields: LocationTypeOrderByRelevanceFieldEnum | LocationTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LocationTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type LocationTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type LocationTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type LocationTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedManyWithoutLoginInput = {
    create?: XOR<UserCreateWithoutLoginInput, UserUncheckedCreateWithoutLoginInput> | UserCreateWithoutLoginInput[] | UserUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLoginInput | UserCreateOrConnectWithoutLoginInput[]
    createMany?: UserCreateManyLoginInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutLoginInput = {
    create?: XOR<CustomerCreateWithoutLoginInput, CustomerUncheckedCreateWithoutLoginInput> | CustomerCreateWithoutLoginInput[] | CustomerUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutLoginInput | CustomerCreateOrConnectWithoutLoginInput[]
    createMany?: CustomerCreateManyLoginInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutLoginInput = {
    create?: XOR<RoleCreateWithoutLoginInput, RoleUncheckedCreateWithoutLoginInput>
    connectOrCreate?: RoleCreateOrConnectWithoutLoginInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutLoginInput = {
    create?: XOR<UserCreateWithoutLoginInput, UserUncheckedCreateWithoutLoginInput> | UserCreateWithoutLoginInput[] | UserUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLoginInput | UserCreateOrConnectWithoutLoginInput[]
    createMany?: UserCreateManyLoginInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutLoginInput = {
    create?: XOR<CustomerCreateWithoutLoginInput, CustomerUncheckedCreateWithoutLoginInput> | CustomerCreateWithoutLoginInput[] | CustomerUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutLoginInput | CustomerCreateOrConnectWithoutLoginInput[]
    createMany?: CustomerCreateManyLoginInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type EnumLoginEnumFieldUpdateOperationsInput = {
    set?: $Enums.LoginEnum
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutLoginNestedInput = {
    create?: XOR<UserCreateWithoutLoginInput, UserUncheckedCreateWithoutLoginInput> | UserCreateWithoutLoginInput[] | UserUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLoginInput | UserCreateOrConnectWithoutLoginInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLoginInput | UserUpsertWithWhereUniqueWithoutLoginInput[]
    createMany?: UserCreateManyLoginInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLoginInput | UserUpdateWithWhereUniqueWithoutLoginInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLoginInput | UserUpdateManyWithWhereWithoutLoginInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutLoginNestedInput = {
    create?: XOR<CustomerCreateWithoutLoginInput, CustomerUncheckedCreateWithoutLoginInput> | CustomerCreateWithoutLoginInput[] | CustomerUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutLoginInput | CustomerCreateOrConnectWithoutLoginInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutLoginInput | CustomerUpsertWithWhereUniqueWithoutLoginInput[]
    createMany?: CustomerCreateManyLoginInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutLoginInput | CustomerUpdateWithWhereUniqueWithoutLoginInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutLoginInput | CustomerUpdateManyWithWhereWithoutLoginInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type RoleUpdateOneWithoutLoginNestedInput = {
    create?: XOR<RoleCreateWithoutLoginInput, RoleUncheckedCreateWithoutLoginInput>
    connectOrCreate?: RoleCreateOrConnectWithoutLoginInput
    upsert?: RoleUpsertWithoutLoginInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutLoginInput, RoleUpdateWithoutLoginInput>, RoleUncheckedUpdateWithoutLoginInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutLoginNestedInput = {
    create?: XOR<UserCreateWithoutLoginInput, UserUncheckedCreateWithoutLoginInput> | UserCreateWithoutLoginInput[] | UserUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLoginInput | UserCreateOrConnectWithoutLoginInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLoginInput | UserUpsertWithWhereUniqueWithoutLoginInput[]
    createMany?: UserCreateManyLoginInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLoginInput | UserUpdateWithWhereUniqueWithoutLoginInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLoginInput | UserUpdateManyWithWhereWithoutLoginInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutLoginNestedInput = {
    create?: XOR<CustomerCreateWithoutLoginInput, CustomerUncheckedCreateWithoutLoginInput> | CustomerCreateWithoutLoginInput[] | CustomerUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutLoginInput | CustomerCreateOrConnectWithoutLoginInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutLoginInput | CustomerUpsertWithWhereUniqueWithoutLoginInput[]
    createMany?: CustomerCreateManyLoginInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutLoginInput | CustomerUpdateWithWhereUniqueWithoutLoginInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutLoginInput | CustomerUpdateManyWithWhereWithoutLoginInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type LoginCreateNestedOneWithoutCustomerInput = {
    create?: XOR<LoginCreateWithoutCustomerInput, LoginUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: LoginCreateOrConnectWithoutCustomerInput
    connect?: LoginWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutCustomerInput = {
    create?: XOR<ActivityCreateWithoutCustomerInput, ActivityUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutCustomerInput
    connect?: ActivityWhereUniqueInput
  }

  export type VisaRequestCreateNestedManyWithoutCustomerInput = {
    create?: XOR<VisaRequestCreateWithoutCustomerInput, VisaRequestUncheckedCreateWithoutCustomerInput> | VisaRequestCreateWithoutCustomerInput[] | VisaRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutCustomerInput | VisaRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: VisaRequestCreateManyCustomerInputEnvelope
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
  }

  export type VisaRequestUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<VisaRequestCreateWithoutCustomerInput, VisaRequestUncheckedCreateWithoutCustomerInput> | VisaRequestCreateWithoutCustomerInput[] | VisaRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutCustomerInput | VisaRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: VisaRequestCreateManyCustomerInputEnvelope
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LoginUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<LoginCreateWithoutCustomerInput, LoginUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: LoginCreateOrConnectWithoutCustomerInput
    upsert?: LoginUpsertWithoutCustomerInput
    connect?: LoginWhereUniqueInput
    update?: XOR<XOR<LoginUpdateToOneWithWhereWithoutCustomerInput, LoginUpdateWithoutCustomerInput>, LoginUncheckedUpdateWithoutCustomerInput>
  }

  export type ActivityUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<ActivityCreateWithoutCustomerInput, ActivityUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutCustomerInput
    upsert?: ActivityUpsertWithoutCustomerInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutCustomerInput, ActivityUpdateWithoutCustomerInput>, ActivityUncheckedUpdateWithoutCustomerInput>
  }

  export type VisaRequestUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<VisaRequestCreateWithoutCustomerInput, VisaRequestUncheckedCreateWithoutCustomerInput> | VisaRequestCreateWithoutCustomerInput[] | VisaRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutCustomerInput | VisaRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: VisaRequestUpsertWithWhereUniqueWithoutCustomerInput | VisaRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: VisaRequestCreateManyCustomerInputEnvelope
    set?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    disconnect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    delete?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    update?: VisaRequestUpdateWithWhereUniqueWithoutCustomerInput | VisaRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: VisaRequestUpdateManyWithWhereWithoutCustomerInput | VisaRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
  }

  export type VisaRequestUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<VisaRequestCreateWithoutCustomerInput, VisaRequestUncheckedCreateWithoutCustomerInput> | VisaRequestCreateWithoutCustomerInput[] | VisaRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutCustomerInput | VisaRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: VisaRequestUpsertWithWhereUniqueWithoutCustomerInput | VisaRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: VisaRequestCreateManyCustomerInputEnvelope
    set?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    disconnect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    delete?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    update?: VisaRequestUpdateWithWhereUniqueWithoutCustomerInput | VisaRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: VisaRequestUpdateManyWithWhereWithoutCustomerInput | VisaRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
  }

  export type VisaRequestCreateNestedOneWithoutContactsInput = {
    create?: XOR<VisaRequestCreateWithoutContactsInput, VisaRequestUncheckedCreateWithoutContactsInput>
    connectOrCreate?: VisaRequestCreateOrConnectWithoutContactsInput
    connect?: VisaRequestWhereUniqueInput
  }

  export type VisaRequestUpdateOneWithoutContactsNestedInput = {
    create?: XOR<VisaRequestCreateWithoutContactsInput, VisaRequestUncheckedCreateWithoutContactsInput>
    connectOrCreate?: VisaRequestCreateOrConnectWithoutContactsInput
    upsert?: VisaRequestUpsertWithoutContactsInput
    disconnect?: VisaRequestWhereInput | boolean
    delete?: VisaRequestWhereInput | boolean
    connect?: VisaRequestWhereUniqueInput
    update?: XOR<XOR<VisaRequestUpdateToOneWithWhereWithoutContactsInput, VisaRequestUpdateWithoutContactsInput>, VisaRequestUncheckedUpdateWithoutContactsInput>
  }

  export type LocationCreateNestedOneWithoutArrivalByInput = {
    create?: XOR<LocationCreateWithoutArrivalByInput, LocationUncheckedCreateWithoutArrivalByInput>
    connectOrCreate?: LocationCreateOrConnectWithoutArrivalByInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutDepartureByInput = {
    create?: XOR<LocationCreateWithoutDepartureByInput, LocationUncheckedCreateWithoutDepartureByInput>
    connectOrCreate?: LocationCreateOrConnectWithoutDepartureByInput
    connect?: LocationWhereUniqueInput
  }

  export type VisaRequestCreateNestedManyWithoutRoadTripInput = {
    create?: XOR<VisaRequestCreateWithoutRoadTripInput, VisaRequestUncheckedCreateWithoutRoadTripInput> | VisaRequestCreateWithoutRoadTripInput[] | VisaRequestUncheckedCreateWithoutRoadTripInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutRoadTripInput | VisaRequestCreateOrConnectWithoutRoadTripInput[]
    createMany?: VisaRequestCreateManyRoadTripInputEnvelope
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
  }

  export type VisaRequestUncheckedCreateNestedManyWithoutRoadTripInput = {
    create?: XOR<VisaRequestCreateWithoutRoadTripInput, VisaRequestUncheckedCreateWithoutRoadTripInput> | VisaRequestCreateWithoutRoadTripInput[] | VisaRequestUncheckedCreateWithoutRoadTripInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutRoadTripInput | VisaRequestCreateOrConnectWithoutRoadTripInput[]
    createMany?: VisaRequestCreateManyRoadTripInputEnvelope
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
  }

  export type LocationUpdateOneRequiredWithoutArrivalByNestedInput = {
    create?: XOR<LocationCreateWithoutArrivalByInput, LocationUncheckedCreateWithoutArrivalByInput>
    connectOrCreate?: LocationCreateOrConnectWithoutArrivalByInput
    upsert?: LocationUpsertWithoutArrivalByInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutArrivalByInput, LocationUpdateWithoutArrivalByInput>, LocationUncheckedUpdateWithoutArrivalByInput>
  }

  export type LocationUpdateOneRequiredWithoutDepartureByNestedInput = {
    create?: XOR<LocationCreateWithoutDepartureByInput, LocationUncheckedCreateWithoutDepartureByInput>
    connectOrCreate?: LocationCreateOrConnectWithoutDepartureByInput
    upsert?: LocationUpsertWithoutDepartureByInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutDepartureByInput, LocationUpdateWithoutDepartureByInput>, LocationUncheckedUpdateWithoutDepartureByInput>
  }

  export type VisaRequestUpdateManyWithoutRoadTripNestedInput = {
    create?: XOR<VisaRequestCreateWithoutRoadTripInput, VisaRequestUncheckedCreateWithoutRoadTripInput> | VisaRequestCreateWithoutRoadTripInput[] | VisaRequestUncheckedCreateWithoutRoadTripInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutRoadTripInput | VisaRequestCreateOrConnectWithoutRoadTripInput[]
    upsert?: VisaRequestUpsertWithWhereUniqueWithoutRoadTripInput | VisaRequestUpsertWithWhereUniqueWithoutRoadTripInput[]
    createMany?: VisaRequestCreateManyRoadTripInputEnvelope
    set?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    disconnect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    delete?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    update?: VisaRequestUpdateWithWhereUniqueWithoutRoadTripInput | VisaRequestUpdateWithWhereUniqueWithoutRoadTripInput[]
    updateMany?: VisaRequestUpdateManyWithWhereWithoutRoadTripInput | VisaRequestUpdateManyWithWhereWithoutRoadTripInput[]
    deleteMany?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
  }

  export type VisaRequestUncheckedUpdateManyWithoutRoadTripNestedInput = {
    create?: XOR<VisaRequestCreateWithoutRoadTripInput, VisaRequestUncheckedCreateWithoutRoadTripInput> | VisaRequestCreateWithoutRoadTripInput[] | VisaRequestUncheckedCreateWithoutRoadTripInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutRoadTripInput | VisaRequestCreateOrConnectWithoutRoadTripInput[]
    upsert?: VisaRequestUpsertWithWhereUniqueWithoutRoadTripInput | VisaRequestUpsertWithWhereUniqueWithoutRoadTripInput[]
    createMany?: VisaRequestCreateManyRoadTripInputEnvelope
    set?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    disconnect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    delete?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    update?: VisaRequestUpdateWithWhereUniqueWithoutRoadTripInput | VisaRequestUpdateWithWhereUniqueWithoutRoadTripInput[]
    updateMany?: VisaRequestUpdateManyWithWhereWithoutRoadTripInput | VisaRequestUpdateManyWithWhereWithoutRoadTripInput[]
    deleteMany?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
  }

  export type LoginCreateNestedOneWithoutUserInput = {
    create?: XOR<LoginCreateWithoutUserInput, LoginUncheckedCreateWithoutUserInput>
    connectOrCreate?: LoginCreateOrConnectWithoutUserInput
    connect?: LoginWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LoginUpdateOneWithoutUserNestedInput = {
    create?: XOR<LoginCreateWithoutUserInput, LoginUncheckedCreateWithoutUserInput>
    connectOrCreate?: LoginCreateOrConnectWithoutUserInput
    upsert?: LoginUpsertWithoutUserInput
    disconnect?: LoginWhereInput | boolean
    delete?: LoginWhereInput | boolean
    connect?: LoginWhereUniqueInput
    update?: XOR<XOR<LoginUpdateToOneWithWhereWithoutUserInput, LoginUpdateWithoutUserInput>, LoginUncheckedUpdateWithoutUserInput>
  }

  export type RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type LoginCreateNestedManyWithoutRoleInput = {
    create?: XOR<LoginCreateWithoutRoleInput, LoginUncheckedCreateWithoutRoleInput> | LoginCreateWithoutRoleInput[] | LoginUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: LoginCreateOrConnectWithoutRoleInput | LoginCreateOrConnectWithoutRoleInput[]
    createMany?: LoginCreateManyRoleInputEnvelope
    connect?: LoginWhereUniqueInput | LoginWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type LoginUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<LoginCreateWithoutRoleInput, LoginUncheckedCreateWithoutRoleInput> | LoginCreateWithoutRoleInput[] | LoginUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: LoginCreateOrConnectWithoutRoleInput | LoginCreateOrConnectWithoutRoleInput[]
    createMany?: LoginCreateManyRoleInputEnvelope
    connect?: LoginWhereUniqueInput | LoginWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type LoginUpdateManyWithoutRoleNestedInput = {
    create?: XOR<LoginCreateWithoutRoleInput, LoginUncheckedCreateWithoutRoleInput> | LoginCreateWithoutRoleInput[] | LoginUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: LoginCreateOrConnectWithoutRoleInput | LoginCreateOrConnectWithoutRoleInput[]
    upsert?: LoginUpsertWithWhereUniqueWithoutRoleInput | LoginUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: LoginCreateManyRoleInputEnvelope
    set?: LoginWhereUniqueInput | LoginWhereUniqueInput[]
    disconnect?: LoginWhereUniqueInput | LoginWhereUniqueInput[]
    delete?: LoginWhereUniqueInput | LoginWhereUniqueInput[]
    connect?: LoginWhereUniqueInput | LoginWhereUniqueInput[]
    update?: LoginUpdateWithWhereUniqueWithoutRoleInput | LoginUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: LoginUpdateManyWithWhereWithoutRoleInput | LoginUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: LoginScalarWhereInput | LoginScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type LoginUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<LoginCreateWithoutRoleInput, LoginUncheckedCreateWithoutRoleInput> | LoginCreateWithoutRoleInput[] | LoginUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: LoginCreateOrConnectWithoutRoleInput | LoginCreateOrConnectWithoutRoleInput[]
    upsert?: LoginUpsertWithWhereUniqueWithoutRoleInput | LoginUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: LoginCreateManyRoleInputEnvelope
    set?: LoginWhereUniqueInput | LoginWhereUniqueInput[]
    disconnect?: LoginWhereUniqueInput | LoginWhereUniqueInput[]
    delete?: LoginWhereUniqueInput | LoginWhereUniqueInput[]
    connect?: LoginWhereUniqueInput | LoginWhereUniqueInput[]
    update?: LoginUpdateWithWhereUniqueWithoutRoleInput | LoginUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: LoginUpdateManyWithWhereWithoutRoleInput | LoginUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: LoginScalarWhereInput | LoginScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutRolePermissionInput = {
    create?: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionCreateNestedOneWithoutRolePermissionInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionInput
    connect?: PermissionWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRolePermissionNestedInput = {
    create?: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionInput
    upsert?: RoleUpsertWithoutRolePermissionInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolePermissionInput, RoleUpdateWithoutRolePermissionInput>, RoleUncheckedUpdateWithoutRolePermissionInput>
  }

  export type PermissionUpdateOneRequiredWithoutRolePermissionNestedInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionInput
    upsert?: PermissionUpsertWithoutRolePermissionInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutRolePermissionInput, PermissionUpdateWithoutRolePermissionInput>, PermissionUncheckedUpdateWithoutRolePermissionInput>
  }

  export type ModuleCreateNestedOneWithoutPermissionInput = {
    create?: XOR<ModuleCreateWithoutPermissionInput, ModuleUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutPermissionInput
    connect?: ModuleWhereUniqueInput
  }

  export type RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type EnumPermissionActionEnumFieldUpdateOperationsInput = {
    set?: $Enums.PermissionActionEnum
  }

  export type ModuleUpdateOneRequiredWithoutPermissionNestedInput = {
    create?: XOR<ModuleCreateWithoutPermissionInput, ModuleUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutPermissionInput
    upsert?: ModuleUpsertWithoutPermissionInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutPermissionInput, ModuleUpdateWithoutPermissionInput>, ModuleUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type PermissionCreateNestedManyWithoutModuleInput = {
    create?: XOR<PermissionCreateWithoutModuleInput, PermissionUncheckedCreateWithoutModuleInput> | PermissionCreateWithoutModuleInput[] | PermissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutModuleInput | PermissionCreateOrConnectWithoutModuleInput[]
    createMany?: PermissionCreateManyModuleInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<PermissionCreateWithoutModuleInput, PermissionUncheckedCreateWithoutModuleInput> | PermissionCreateWithoutModuleInput[] | PermissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutModuleInput | PermissionCreateOrConnectWithoutModuleInput[]
    createMany?: PermissionCreateManyModuleInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type PermissionUpdateManyWithoutModuleNestedInput = {
    create?: XOR<PermissionCreateWithoutModuleInput, PermissionUncheckedCreateWithoutModuleInput> | PermissionCreateWithoutModuleInput[] | PermissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutModuleInput | PermissionCreateOrConnectWithoutModuleInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutModuleInput | PermissionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: PermissionCreateManyModuleInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutModuleInput | PermissionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutModuleInput | PermissionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<PermissionCreateWithoutModuleInput, PermissionUncheckedCreateWithoutModuleInput> | PermissionCreateWithoutModuleInput[] | PermissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutModuleInput | PermissionCreateOrConnectWithoutModuleInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutModuleInput | PermissionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: PermissionCreateManyModuleInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutModuleInput | PermissionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutModuleInput | PermissionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type CustomerCreateNestedManyWithoutActivityInput = {
    create?: XOR<CustomerCreateWithoutActivityInput, CustomerUncheckedCreateWithoutActivityInput> | CustomerCreateWithoutActivityInput[] | CustomerUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutActivityInput | CustomerCreateOrConnectWithoutActivityInput[]
    createMany?: CustomerCreateManyActivityInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<CustomerCreateWithoutActivityInput, CustomerUncheckedCreateWithoutActivityInput> | CustomerCreateWithoutActivityInput[] | CustomerUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutActivityInput | CustomerCreateOrConnectWithoutActivityInput[]
    createMany?: CustomerCreateManyActivityInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CustomerUpdateManyWithoutActivityNestedInput = {
    create?: XOR<CustomerCreateWithoutActivityInput, CustomerUncheckedCreateWithoutActivityInput> | CustomerCreateWithoutActivityInput[] | CustomerUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutActivityInput | CustomerCreateOrConnectWithoutActivityInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutActivityInput | CustomerUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: CustomerCreateManyActivityInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutActivityInput | CustomerUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutActivityInput | CustomerUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<CustomerCreateWithoutActivityInput, CustomerUncheckedCreateWithoutActivityInput> | CustomerCreateWithoutActivityInput[] | CustomerUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutActivityInput | CustomerCreateOrConnectWithoutActivityInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutActivityInput | CustomerUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: CustomerCreateManyActivityInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutActivityInput | CustomerUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutActivityInput | CustomerUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type VisaRequestCreateNestedManyWithoutVisaTypeInput = {
    create?: XOR<VisaRequestCreateWithoutVisaTypeInput, VisaRequestUncheckedCreateWithoutVisaTypeInput> | VisaRequestCreateWithoutVisaTypeInput[] | VisaRequestUncheckedCreateWithoutVisaTypeInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutVisaTypeInput | VisaRequestCreateOrConnectWithoutVisaTypeInput[]
    createMany?: VisaRequestCreateManyVisaTypeInputEnvelope
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
  }

  export type VisaRequestUncheckedCreateNestedManyWithoutVisaTypeInput = {
    create?: XOR<VisaRequestCreateWithoutVisaTypeInput, VisaRequestUncheckedCreateWithoutVisaTypeInput> | VisaRequestCreateWithoutVisaTypeInput[] | VisaRequestUncheckedCreateWithoutVisaTypeInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutVisaTypeInput | VisaRequestCreateOrConnectWithoutVisaTypeInput[]
    createMany?: VisaRequestCreateManyVisaTypeInputEnvelope
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
  }

  export type VisaRequestUpdateManyWithoutVisaTypeNestedInput = {
    create?: XOR<VisaRequestCreateWithoutVisaTypeInput, VisaRequestUncheckedCreateWithoutVisaTypeInput> | VisaRequestCreateWithoutVisaTypeInput[] | VisaRequestUncheckedCreateWithoutVisaTypeInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutVisaTypeInput | VisaRequestCreateOrConnectWithoutVisaTypeInput[]
    upsert?: VisaRequestUpsertWithWhereUniqueWithoutVisaTypeInput | VisaRequestUpsertWithWhereUniqueWithoutVisaTypeInput[]
    createMany?: VisaRequestCreateManyVisaTypeInputEnvelope
    set?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    disconnect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    delete?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    update?: VisaRequestUpdateWithWhereUniqueWithoutVisaTypeInput | VisaRequestUpdateWithWhereUniqueWithoutVisaTypeInput[]
    updateMany?: VisaRequestUpdateManyWithWhereWithoutVisaTypeInput | VisaRequestUpdateManyWithWhereWithoutVisaTypeInput[]
    deleteMany?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
  }

  export type VisaRequestUncheckedUpdateManyWithoutVisaTypeNestedInput = {
    create?: XOR<VisaRequestCreateWithoutVisaTypeInput, VisaRequestUncheckedCreateWithoutVisaTypeInput> | VisaRequestCreateWithoutVisaTypeInput[] | VisaRequestUncheckedCreateWithoutVisaTypeInput[]
    connectOrCreate?: VisaRequestCreateOrConnectWithoutVisaTypeInput | VisaRequestCreateOrConnectWithoutVisaTypeInput[]
    upsert?: VisaRequestUpsertWithWhereUniqueWithoutVisaTypeInput | VisaRequestUpsertWithWhereUniqueWithoutVisaTypeInput[]
    createMany?: VisaRequestCreateManyVisaTypeInputEnvelope
    set?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    disconnect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    delete?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    connect?: VisaRequestWhereUniqueInput | VisaRequestWhereUniqueInput[]
    update?: VisaRequestUpdateWithWhereUniqueWithoutVisaTypeInput | VisaRequestUpdateWithWhereUniqueWithoutVisaTypeInput[]
    updateMany?: VisaRequestUpdateManyWithWhereWithoutVisaTypeInput | VisaRequestUpdateManyWithWhereWithoutVisaTypeInput[]
    deleteMany?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
  }

  export type contactInfoCreateNestedManyWithoutVisaRequestInput = {
    create?: XOR<contactInfoCreateWithoutVisaRequestInput, contactInfoUncheckedCreateWithoutVisaRequestInput> | contactInfoCreateWithoutVisaRequestInput[] | contactInfoUncheckedCreateWithoutVisaRequestInput[]
    connectOrCreate?: contactInfoCreateOrConnectWithoutVisaRequestInput | contactInfoCreateOrConnectWithoutVisaRequestInput[]
    createMany?: contactInfoCreateManyVisaRequestInputEnvelope
    connect?: contactInfoWhereUniqueInput | contactInfoWhereUniqueInput[]
  }

  export type VisaTypeCreateNestedOneWithoutVisaRequestInput = {
    create?: XOR<VisaTypeCreateWithoutVisaRequestInput, VisaTypeUncheckedCreateWithoutVisaRequestInput>
    connectOrCreate?: VisaTypeCreateOrConnectWithoutVisaRequestInput
    connect?: VisaTypeWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutVisaRequestInput = {
    create?: XOR<CustomerCreateWithoutVisaRequestInput, CustomerUncheckedCreateWithoutVisaRequestInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutVisaRequestInput
    connect?: CustomerWhereUniqueInput
  }

  export type RoadTripInfoCreateNestedOneWithoutVisaRequestInput = {
    create?: XOR<RoadTripInfoCreateWithoutVisaRequestInput, RoadTripInfoUncheckedCreateWithoutVisaRequestInput>
    connectOrCreate?: RoadTripInfoCreateOrConnectWithoutVisaRequestInput
    connect?: RoadTripInfoWhereUniqueInput
  }

  export type contactInfoUncheckedCreateNestedManyWithoutVisaRequestInput = {
    create?: XOR<contactInfoCreateWithoutVisaRequestInput, contactInfoUncheckedCreateWithoutVisaRequestInput> | contactInfoCreateWithoutVisaRequestInput[] | contactInfoUncheckedCreateWithoutVisaRequestInput[]
    connectOrCreate?: contactInfoCreateOrConnectWithoutVisaRequestInput | contactInfoCreateOrConnectWithoutVisaRequestInput[]
    createMany?: contactInfoCreateManyVisaRequestInputEnvelope
    connect?: contactInfoWhereUniqueInput | contactInfoWhereUniqueInput[]
  }

  export type contactInfoUpdateManyWithoutVisaRequestNestedInput = {
    create?: XOR<contactInfoCreateWithoutVisaRequestInput, contactInfoUncheckedCreateWithoutVisaRequestInput> | contactInfoCreateWithoutVisaRequestInput[] | contactInfoUncheckedCreateWithoutVisaRequestInput[]
    connectOrCreate?: contactInfoCreateOrConnectWithoutVisaRequestInput | contactInfoCreateOrConnectWithoutVisaRequestInput[]
    upsert?: contactInfoUpsertWithWhereUniqueWithoutVisaRequestInput | contactInfoUpsertWithWhereUniqueWithoutVisaRequestInput[]
    createMany?: contactInfoCreateManyVisaRequestInputEnvelope
    set?: contactInfoWhereUniqueInput | contactInfoWhereUniqueInput[]
    disconnect?: contactInfoWhereUniqueInput | contactInfoWhereUniqueInput[]
    delete?: contactInfoWhereUniqueInput | contactInfoWhereUniqueInput[]
    connect?: contactInfoWhereUniqueInput | contactInfoWhereUniqueInput[]
    update?: contactInfoUpdateWithWhereUniqueWithoutVisaRequestInput | contactInfoUpdateWithWhereUniqueWithoutVisaRequestInput[]
    updateMany?: contactInfoUpdateManyWithWhereWithoutVisaRequestInput | contactInfoUpdateManyWithWhereWithoutVisaRequestInput[]
    deleteMany?: contactInfoScalarWhereInput | contactInfoScalarWhereInput[]
  }

  export type VisaTypeUpdateOneRequiredWithoutVisaRequestNestedInput = {
    create?: XOR<VisaTypeCreateWithoutVisaRequestInput, VisaTypeUncheckedCreateWithoutVisaRequestInput>
    connectOrCreate?: VisaTypeCreateOrConnectWithoutVisaRequestInput
    upsert?: VisaTypeUpsertWithoutVisaRequestInput
    connect?: VisaTypeWhereUniqueInput
    update?: XOR<XOR<VisaTypeUpdateToOneWithWhereWithoutVisaRequestInput, VisaTypeUpdateWithoutVisaRequestInput>, VisaTypeUncheckedUpdateWithoutVisaRequestInput>
  }

  export type CustomerUpdateOneRequiredWithoutVisaRequestNestedInput = {
    create?: XOR<CustomerCreateWithoutVisaRequestInput, CustomerUncheckedCreateWithoutVisaRequestInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutVisaRequestInput
    upsert?: CustomerUpsertWithoutVisaRequestInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutVisaRequestInput, CustomerUpdateWithoutVisaRequestInput>, CustomerUncheckedUpdateWithoutVisaRequestInput>
  }

  export type RoadTripInfoUpdateOneRequiredWithoutVisaRequestNestedInput = {
    create?: XOR<RoadTripInfoCreateWithoutVisaRequestInput, RoadTripInfoUncheckedCreateWithoutVisaRequestInput>
    connectOrCreate?: RoadTripInfoCreateOrConnectWithoutVisaRequestInput
    upsert?: RoadTripInfoUpsertWithoutVisaRequestInput
    connect?: RoadTripInfoWhereUniqueInput
    update?: XOR<XOR<RoadTripInfoUpdateToOneWithWhereWithoutVisaRequestInput, RoadTripInfoUpdateWithoutVisaRequestInput>, RoadTripInfoUncheckedUpdateWithoutVisaRequestInput>
  }

  export type contactInfoUncheckedUpdateManyWithoutVisaRequestNestedInput = {
    create?: XOR<contactInfoCreateWithoutVisaRequestInput, contactInfoUncheckedCreateWithoutVisaRequestInput> | contactInfoCreateWithoutVisaRequestInput[] | contactInfoUncheckedCreateWithoutVisaRequestInput[]
    connectOrCreate?: contactInfoCreateOrConnectWithoutVisaRequestInput | contactInfoCreateOrConnectWithoutVisaRequestInput[]
    upsert?: contactInfoUpsertWithWhereUniqueWithoutVisaRequestInput | contactInfoUpsertWithWhereUniqueWithoutVisaRequestInput[]
    createMany?: contactInfoCreateManyVisaRequestInputEnvelope
    set?: contactInfoWhereUniqueInput | contactInfoWhereUniqueInput[]
    disconnect?: contactInfoWhereUniqueInput | contactInfoWhereUniqueInput[]
    delete?: contactInfoWhereUniqueInput | contactInfoWhereUniqueInput[]
    connect?: contactInfoWhereUniqueInput | contactInfoWhereUniqueInput[]
    update?: contactInfoUpdateWithWhereUniqueWithoutVisaRequestInput | contactInfoUpdateWithWhereUniqueWithoutVisaRequestInput[]
    updateMany?: contactInfoUpdateManyWithWhereWithoutVisaRequestInput | contactInfoUpdateManyWithWhereWithoutVisaRequestInput[]
    deleteMany?: contactInfoScalarWhereInput | contactInfoScalarWhereInput[]
  }

  export type LocationTypeCreateNestedOneWithoutLocationInput = {
    create?: XOR<LocationTypeCreateWithoutLocationInput, LocationTypeUncheckedCreateWithoutLocationInput>
    connectOrCreate?: LocationTypeCreateOrConnectWithoutLocationInput
    connect?: LocationTypeWhereUniqueInput
  }

  export type RoadTripInfoCreateNestedManyWithoutDepartureByInput = {
    create?: XOR<RoadTripInfoCreateWithoutDepartureByInput, RoadTripInfoUncheckedCreateWithoutDepartureByInput> | RoadTripInfoCreateWithoutDepartureByInput[] | RoadTripInfoUncheckedCreateWithoutDepartureByInput[]
    connectOrCreate?: RoadTripInfoCreateOrConnectWithoutDepartureByInput | RoadTripInfoCreateOrConnectWithoutDepartureByInput[]
    createMany?: RoadTripInfoCreateManyDepartureByInputEnvelope
    connect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
  }

  export type RoadTripInfoCreateNestedManyWithoutArrivalByInput = {
    create?: XOR<RoadTripInfoCreateWithoutArrivalByInput, RoadTripInfoUncheckedCreateWithoutArrivalByInput> | RoadTripInfoCreateWithoutArrivalByInput[] | RoadTripInfoUncheckedCreateWithoutArrivalByInput[]
    connectOrCreate?: RoadTripInfoCreateOrConnectWithoutArrivalByInput | RoadTripInfoCreateOrConnectWithoutArrivalByInput[]
    createMany?: RoadTripInfoCreateManyArrivalByInputEnvelope
    connect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
  }

  export type RoadTripInfoUncheckedCreateNestedManyWithoutDepartureByInput = {
    create?: XOR<RoadTripInfoCreateWithoutDepartureByInput, RoadTripInfoUncheckedCreateWithoutDepartureByInput> | RoadTripInfoCreateWithoutDepartureByInput[] | RoadTripInfoUncheckedCreateWithoutDepartureByInput[]
    connectOrCreate?: RoadTripInfoCreateOrConnectWithoutDepartureByInput | RoadTripInfoCreateOrConnectWithoutDepartureByInput[]
    createMany?: RoadTripInfoCreateManyDepartureByInputEnvelope
    connect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
  }

  export type RoadTripInfoUncheckedCreateNestedManyWithoutArrivalByInput = {
    create?: XOR<RoadTripInfoCreateWithoutArrivalByInput, RoadTripInfoUncheckedCreateWithoutArrivalByInput> | RoadTripInfoCreateWithoutArrivalByInput[] | RoadTripInfoUncheckedCreateWithoutArrivalByInput[]
    connectOrCreate?: RoadTripInfoCreateOrConnectWithoutArrivalByInput | RoadTripInfoCreateOrConnectWithoutArrivalByInput[]
    createMany?: RoadTripInfoCreateManyArrivalByInputEnvelope
    connect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
  }

  export type LocationTypeUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<LocationTypeCreateWithoutLocationInput, LocationTypeUncheckedCreateWithoutLocationInput>
    connectOrCreate?: LocationTypeCreateOrConnectWithoutLocationInput
    upsert?: LocationTypeUpsertWithoutLocationInput
    connect?: LocationTypeWhereUniqueInput
    update?: XOR<XOR<LocationTypeUpdateToOneWithWhereWithoutLocationInput, LocationTypeUpdateWithoutLocationInput>, LocationTypeUncheckedUpdateWithoutLocationInput>
  }

  export type RoadTripInfoUpdateManyWithoutDepartureByNestedInput = {
    create?: XOR<RoadTripInfoCreateWithoutDepartureByInput, RoadTripInfoUncheckedCreateWithoutDepartureByInput> | RoadTripInfoCreateWithoutDepartureByInput[] | RoadTripInfoUncheckedCreateWithoutDepartureByInput[]
    connectOrCreate?: RoadTripInfoCreateOrConnectWithoutDepartureByInput | RoadTripInfoCreateOrConnectWithoutDepartureByInput[]
    upsert?: RoadTripInfoUpsertWithWhereUniqueWithoutDepartureByInput | RoadTripInfoUpsertWithWhereUniqueWithoutDepartureByInput[]
    createMany?: RoadTripInfoCreateManyDepartureByInputEnvelope
    set?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    disconnect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    delete?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    connect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    update?: RoadTripInfoUpdateWithWhereUniqueWithoutDepartureByInput | RoadTripInfoUpdateWithWhereUniqueWithoutDepartureByInput[]
    updateMany?: RoadTripInfoUpdateManyWithWhereWithoutDepartureByInput | RoadTripInfoUpdateManyWithWhereWithoutDepartureByInput[]
    deleteMany?: RoadTripInfoScalarWhereInput | RoadTripInfoScalarWhereInput[]
  }

  export type RoadTripInfoUpdateManyWithoutArrivalByNestedInput = {
    create?: XOR<RoadTripInfoCreateWithoutArrivalByInput, RoadTripInfoUncheckedCreateWithoutArrivalByInput> | RoadTripInfoCreateWithoutArrivalByInput[] | RoadTripInfoUncheckedCreateWithoutArrivalByInput[]
    connectOrCreate?: RoadTripInfoCreateOrConnectWithoutArrivalByInput | RoadTripInfoCreateOrConnectWithoutArrivalByInput[]
    upsert?: RoadTripInfoUpsertWithWhereUniqueWithoutArrivalByInput | RoadTripInfoUpsertWithWhereUniqueWithoutArrivalByInput[]
    createMany?: RoadTripInfoCreateManyArrivalByInputEnvelope
    set?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    disconnect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    delete?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    connect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    update?: RoadTripInfoUpdateWithWhereUniqueWithoutArrivalByInput | RoadTripInfoUpdateWithWhereUniqueWithoutArrivalByInput[]
    updateMany?: RoadTripInfoUpdateManyWithWhereWithoutArrivalByInput | RoadTripInfoUpdateManyWithWhereWithoutArrivalByInput[]
    deleteMany?: RoadTripInfoScalarWhereInput | RoadTripInfoScalarWhereInput[]
  }

  export type RoadTripInfoUncheckedUpdateManyWithoutDepartureByNestedInput = {
    create?: XOR<RoadTripInfoCreateWithoutDepartureByInput, RoadTripInfoUncheckedCreateWithoutDepartureByInput> | RoadTripInfoCreateWithoutDepartureByInput[] | RoadTripInfoUncheckedCreateWithoutDepartureByInput[]
    connectOrCreate?: RoadTripInfoCreateOrConnectWithoutDepartureByInput | RoadTripInfoCreateOrConnectWithoutDepartureByInput[]
    upsert?: RoadTripInfoUpsertWithWhereUniqueWithoutDepartureByInput | RoadTripInfoUpsertWithWhereUniqueWithoutDepartureByInput[]
    createMany?: RoadTripInfoCreateManyDepartureByInputEnvelope
    set?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    disconnect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    delete?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    connect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    update?: RoadTripInfoUpdateWithWhereUniqueWithoutDepartureByInput | RoadTripInfoUpdateWithWhereUniqueWithoutDepartureByInput[]
    updateMany?: RoadTripInfoUpdateManyWithWhereWithoutDepartureByInput | RoadTripInfoUpdateManyWithWhereWithoutDepartureByInput[]
    deleteMany?: RoadTripInfoScalarWhereInput | RoadTripInfoScalarWhereInput[]
  }

  export type RoadTripInfoUncheckedUpdateManyWithoutArrivalByNestedInput = {
    create?: XOR<RoadTripInfoCreateWithoutArrivalByInput, RoadTripInfoUncheckedCreateWithoutArrivalByInput> | RoadTripInfoCreateWithoutArrivalByInput[] | RoadTripInfoUncheckedCreateWithoutArrivalByInput[]
    connectOrCreate?: RoadTripInfoCreateOrConnectWithoutArrivalByInput | RoadTripInfoCreateOrConnectWithoutArrivalByInput[]
    upsert?: RoadTripInfoUpsertWithWhereUniqueWithoutArrivalByInput | RoadTripInfoUpsertWithWhereUniqueWithoutArrivalByInput[]
    createMany?: RoadTripInfoCreateManyArrivalByInputEnvelope
    set?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    disconnect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    delete?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    connect?: RoadTripInfoWhereUniqueInput | RoadTripInfoWhereUniqueInput[]
    update?: RoadTripInfoUpdateWithWhereUniqueWithoutArrivalByInput | RoadTripInfoUpdateWithWhereUniqueWithoutArrivalByInput[]
    updateMany?: RoadTripInfoUpdateManyWithWhereWithoutArrivalByInput | RoadTripInfoUpdateManyWithWhereWithoutArrivalByInput[]
    deleteMany?: RoadTripInfoScalarWhereInput | RoadTripInfoScalarWhereInput[]
  }

  export type LocationCreateNestedManyWithoutLocationTypeInput = {
    create?: XOR<LocationCreateWithoutLocationTypeInput, LocationUncheckedCreateWithoutLocationTypeInput> | LocationCreateWithoutLocationTypeInput[] | LocationUncheckedCreateWithoutLocationTypeInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutLocationTypeInput | LocationCreateOrConnectWithoutLocationTypeInput[]
    createMany?: LocationCreateManyLocationTypeInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutLocationTypeInput = {
    create?: XOR<LocationCreateWithoutLocationTypeInput, LocationUncheckedCreateWithoutLocationTypeInput> | LocationCreateWithoutLocationTypeInput[] | LocationUncheckedCreateWithoutLocationTypeInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutLocationTypeInput | LocationCreateOrConnectWithoutLocationTypeInput[]
    createMany?: LocationCreateManyLocationTypeInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUpdateManyWithoutLocationTypeNestedInput = {
    create?: XOR<LocationCreateWithoutLocationTypeInput, LocationUncheckedCreateWithoutLocationTypeInput> | LocationCreateWithoutLocationTypeInput[] | LocationUncheckedCreateWithoutLocationTypeInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutLocationTypeInput | LocationCreateOrConnectWithoutLocationTypeInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutLocationTypeInput | LocationUpsertWithWhereUniqueWithoutLocationTypeInput[]
    createMany?: LocationCreateManyLocationTypeInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutLocationTypeInput | LocationUpdateWithWhereUniqueWithoutLocationTypeInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutLocationTypeInput | LocationUpdateManyWithWhereWithoutLocationTypeInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutLocationTypeNestedInput = {
    create?: XOR<LocationCreateWithoutLocationTypeInput, LocationUncheckedCreateWithoutLocationTypeInput> | LocationCreateWithoutLocationTypeInput[] | LocationUncheckedCreateWithoutLocationTypeInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutLocationTypeInput | LocationCreateOrConnectWithoutLocationTypeInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutLocationTypeInput | LocationUpsertWithWhereUniqueWithoutLocationTypeInput[]
    createMany?: LocationCreateManyLocationTypeInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutLocationTypeInput | LocationUpdateWithWhereUniqueWithoutLocationTypeInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutLocationTypeInput | LocationUpdateManyWithWhereWithoutLocationTypeInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumLoginEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginEnum | EnumLoginEnumFieldRefInput<$PrismaModel>
    in?: $Enums.LoginEnum[]
    notIn?: $Enums.LoginEnum[]
    not?: NestedEnumLoginEnumFilter<$PrismaModel> | $Enums.LoginEnum
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumLoginEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginEnum | EnumLoginEnumFieldRefInput<$PrismaModel>
    in?: $Enums.LoginEnum[]
    notIn?: $Enums.LoginEnum[]
    not?: NestedEnumLoginEnumWithAggregatesFilter<$PrismaModel> | $Enums.LoginEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoginEnumFilter<$PrismaModel>
    _max?: NestedEnumLoginEnumFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPermissionActionEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionActionEnum | EnumPermissionActionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionActionEnum[]
    notIn?: $Enums.PermissionActionEnum[]
    not?: NestedEnumPermissionActionEnumFilter<$PrismaModel> | $Enums.PermissionActionEnum
  }

  export type NestedEnumPermissionActionEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionActionEnum | EnumPermissionActionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionActionEnum[]
    notIn?: $Enums.PermissionActionEnum[]
    not?: NestedEnumPermissionActionEnumWithAggregatesFilter<$PrismaModel> | $Enums.PermissionActionEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionActionEnumFilter<$PrismaModel>
    _max?: NestedEnumPermissionActionEnumFilter<$PrismaModel>
  }

  export type UserCreateWithoutLoginInput = {
    displayname: string
    phone: string
    email: string
    address?: string | null
  }

  export type UserUncheckedCreateWithoutLoginInput = {
    id?: number
    displayname: string
    phone: string
    email: string
    address?: string | null
  }

  export type UserCreateOrConnectWithoutLoginInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoginInput, UserUncheckedCreateWithoutLoginInput>
  }

  export type UserCreateManyLoginInputEnvelope = {
    data: UserCreateManyLoginInput | UserCreateManyLoginInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutLoginInput = {
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date | string
    address: string
    latitude: string
    longitude: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activity: ActivityCreateNestedOneWithoutCustomerInput
    VisaRequest?: VisaRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutLoginInput = {
    id?: number
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date | string
    address: string
    latitude: string
    longitude: string
    email: string
    activityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    VisaRequest?: VisaRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutLoginInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutLoginInput, CustomerUncheckedCreateWithoutLoginInput>
  }

  export type CustomerCreateManyLoginInputEnvelope = {
    data: CustomerCreateManyLoginInput | CustomerCreateManyLoginInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutLoginInput = {
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comment?: string | null
    byId?: number | null
    isActive?: boolean
    rolePermission?: RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutLoginInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comment?: string | null
    byId?: number | null
    isActive?: boolean
    rolePermission?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutLoginInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutLoginInput, RoleUncheckedCreateWithoutLoginInput>
  }

  export type UserUpsertWithWhereUniqueWithoutLoginInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLoginInput, UserUncheckedUpdateWithoutLoginInput>
    create: XOR<UserCreateWithoutLoginInput, UserUncheckedCreateWithoutLoginInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLoginInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLoginInput, UserUncheckedUpdateWithoutLoginInput>
  }

  export type UserUpdateManyWithWhereWithoutLoginInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLoginInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    displayname?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    loginId?: IntNullableFilter<"User"> | number | null
  }

  export type CustomerUpsertWithWhereUniqueWithoutLoginInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutLoginInput, CustomerUncheckedUpdateWithoutLoginInput>
    create: XOR<CustomerCreateWithoutLoginInput, CustomerUncheckedCreateWithoutLoginInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutLoginInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutLoginInput, CustomerUncheckedUpdateWithoutLoginInput>
  }

  export type CustomerUpdateManyWithWhereWithoutLoginInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutLoginInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: IntFilter<"Customer"> | number
    displayname?: StringFilter<"Customer"> | string
    dateOfBirth?: StringFilter<"Customer"> | string
    selfPath?: StringFilter<"Customer"> | string
    passportPath?: StringFilter<"Customer"> | string
    passportReference?: StringFilter<"Customer"> | string
    passportValidity?: DateTimeFilter<"Customer"> | Date | string
    address?: StringFilter<"Customer"> | string
    latitude?: StringFilter<"Customer"> | string
    longitude?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    activityId?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    loginId?: IntFilter<"Customer"> | number
  }

  export type RoleUpsertWithoutLoginInput = {
    update: XOR<RoleUpdateWithoutLoginInput, RoleUncheckedUpdateWithoutLoginInput>
    create: XOR<RoleCreateWithoutLoginInput, RoleUncheckedCreateWithoutLoginInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutLoginInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutLoginInput, RoleUncheckedUpdateWithoutLoginInput>
  }

  export type RoleUpdateWithoutLoginInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rolePermission?: RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rolePermission?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type LoginCreateWithoutCustomerInput = {
    type: $Enums.LoginEnum
    username: string
    password: string
    user?: UserCreateNestedManyWithoutLoginInput
    role?: RoleCreateNestedOneWithoutLoginInput
  }

  export type LoginUncheckedCreateWithoutCustomerInput = {
    id?: number
    type: $Enums.LoginEnum
    username: string
    password: string
    roleId?: number | null
    user?: UserUncheckedCreateNestedManyWithoutLoginInput
  }

  export type LoginCreateOrConnectWithoutCustomerInput = {
    where: LoginWhereUniqueInput
    create: XOR<LoginCreateWithoutCustomerInput, LoginUncheckedCreateWithoutCustomerInput>
  }

  export type ActivityCreateWithoutCustomerInput = {
    name: string
    isActive?: boolean
  }

  export type ActivityUncheckedCreateWithoutCustomerInput = {
    id?: number
    name: string
    isActive?: boolean
  }

  export type ActivityCreateOrConnectWithoutCustomerInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutCustomerInput, ActivityUncheckedCreateWithoutCustomerInput>
  }

  export type VisaRequestCreateWithoutCustomerInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    contacts?: contactInfoCreateNestedManyWithoutVisaRequestInput
    visaType: VisaTypeCreateNestedOneWithoutVisaRequestInput
    roadTrip: RoadTripInfoCreateNestedOneWithoutVisaRequestInput
  }

  export type VisaRequestUncheckedCreateWithoutCustomerInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    visaTypeId: number
    roadTripInfoId: number
    contacts?: contactInfoUncheckedCreateNestedManyWithoutVisaRequestInput
  }

  export type VisaRequestCreateOrConnectWithoutCustomerInput = {
    where: VisaRequestWhereUniqueInput
    create: XOR<VisaRequestCreateWithoutCustomerInput, VisaRequestUncheckedCreateWithoutCustomerInput>
  }

  export type VisaRequestCreateManyCustomerInputEnvelope = {
    data: VisaRequestCreateManyCustomerInput | VisaRequestCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type LoginUpsertWithoutCustomerInput = {
    update: XOR<LoginUpdateWithoutCustomerInput, LoginUncheckedUpdateWithoutCustomerInput>
    create: XOR<LoginCreateWithoutCustomerInput, LoginUncheckedCreateWithoutCustomerInput>
    where?: LoginWhereInput
  }

  export type LoginUpdateToOneWithWhereWithoutCustomerInput = {
    where?: LoginWhereInput
    data: XOR<LoginUpdateWithoutCustomerInput, LoginUncheckedUpdateWithoutCustomerInput>
  }

  export type LoginUpdateWithoutCustomerInput = {
    type?: EnumLoginEnumFieldUpdateOperationsInput | $Enums.LoginEnum
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutLoginNestedInput
    role?: RoleUpdateOneWithoutLoginNestedInput
  }

  export type LoginUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumLoginEnumFieldUpdateOperationsInput | $Enums.LoginEnum
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUncheckedUpdateManyWithoutLoginNestedInput
  }

  export type ActivityUpsertWithoutCustomerInput = {
    update: XOR<ActivityUpdateWithoutCustomerInput, ActivityUncheckedUpdateWithoutCustomerInput>
    create: XOR<ActivityCreateWithoutCustomerInput, ActivityUncheckedCreateWithoutCustomerInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutCustomerInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutCustomerInput, ActivityUncheckedUpdateWithoutCustomerInput>
  }

  export type ActivityUpdateWithoutCustomerInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActivityUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VisaRequestUpsertWithWhereUniqueWithoutCustomerInput = {
    where: VisaRequestWhereUniqueInput
    update: XOR<VisaRequestUpdateWithoutCustomerInput, VisaRequestUncheckedUpdateWithoutCustomerInput>
    create: XOR<VisaRequestCreateWithoutCustomerInput, VisaRequestUncheckedCreateWithoutCustomerInput>
  }

  export type VisaRequestUpdateWithWhereUniqueWithoutCustomerInput = {
    where: VisaRequestWhereUniqueInput
    data: XOR<VisaRequestUpdateWithoutCustomerInput, VisaRequestUncheckedUpdateWithoutCustomerInput>
  }

  export type VisaRequestUpdateManyWithWhereWithoutCustomerInput = {
    where: VisaRequestScalarWhereInput
    data: XOR<VisaRequestUpdateManyMutationInput, VisaRequestUncheckedUpdateManyWithoutCustomerInput>
  }

  export type VisaRequestScalarWhereInput = {
    AND?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
    OR?: VisaRequestScalarWhereInput[]
    NOT?: VisaRequestScalarWhereInput | VisaRequestScalarWhereInput[]
    id?: IntFilter<"VisaRequest"> | number
    name?: StringFilter<"VisaRequest"> | string
    isActive?: BoolFilter<"VisaRequest"> | boolean
    createdAt?: DateTimeFilter<"VisaRequest"> | Date | string
    visaTypeId?: IntFilter<"VisaRequest"> | number
    roadTripInfoId?: IntFilter<"VisaRequest"> | number
    customerId?: IntFilter<"VisaRequest"> | number
  }

  export type VisaRequestCreateWithoutContactsInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    visaType: VisaTypeCreateNestedOneWithoutVisaRequestInput
    customer: CustomerCreateNestedOneWithoutVisaRequestInput
    roadTrip: RoadTripInfoCreateNestedOneWithoutVisaRequestInput
  }

  export type VisaRequestUncheckedCreateWithoutContactsInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    visaTypeId: number
    roadTripInfoId: number
    customerId: number
  }

  export type VisaRequestCreateOrConnectWithoutContactsInput = {
    where: VisaRequestWhereUniqueInput
    create: XOR<VisaRequestCreateWithoutContactsInput, VisaRequestUncheckedCreateWithoutContactsInput>
  }

  export type VisaRequestUpsertWithoutContactsInput = {
    update: XOR<VisaRequestUpdateWithoutContactsInput, VisaRequestUncheckedUpdateWithoutContactsInput>
    create: XOR<VisaRequestCreateWithoutContactsInput, VisaRequestUncheckedCreateWithoutContactsInput>
    where?: VisaRequestWhereInput
  }

  export type VisaRequestUpdateToOneWithWhereWithoutContactsInput = {
    where?: VisaRequestWhereInput
    data: XOR<VisaRequestUpdateWithoutContactsInput, VisaRequestUncheckedUpdateWithoutContactsInput>
  }

  export type VisaRequestUpdateWithoutContactsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visaType?: VisaTypeUpdateOneRequiredWithoutVisaRequestNestedInput
    customer?: CustomerUpdateOneRequiredWithoutVisaRequestNestedInput
    roadTrip?: RoadTripInfoUpdateOneRequiredWithoutVisaRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateWithoutContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visaTypeId?: IntFieldUpdateOperationsInput | number
    roadTripInfoId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type LocationCreateWithoutArrivalByInput = {
    name: string
    isActive?: boolean
    locationType: LocationTypeCreateNestedOneWithoutLocationInput
    departureBy?: RoadTripInfoCreateNestedManyWithoutDepartureByInput
  }

  export type LocationUncheckedCreateWithoutArrivalByInput = {
    id?: number
    name: string
    isActive?: boolean
    locationTypeId: number
    departureBy?: RoadTripInfoUncheckedCreateNestedManyWithoutDepartureByInput
  }

  export type LocationCreateOrConnectWithoutArrivalByInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutArrivalByInput, LocationUncheckedCreateWithoutArrivalByInput>
  }

  export type LocationCreateWithoutDepartureByInput = {
    name: string
    isActive?: boolean
    locationType: LocationTypeCreateNestedOneWithoutLocationInput
    arrivalBy?: RoadTripInfoCreateNestedManyWithoutArrivalByInput
  }

  export type LocationUncheckedCreateWithoutDepartureByInput = {
    id?: number
    name: string
    isActive?: boolean
    locationTypeId: number
    arrivalBy?: RoadTripInfoUncheckedCreateNestedManyWithoutArrivalByInput
  }

  export type LocationCreateOrConnectWithoutDepartureByInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutDepartureByInput, LocationUncheckedCreateWithoutDepartureByInput>
  }

  export type VisaRequestCreateWithoutRoadTripInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    contacts?: contactInfoCreateNestedManyWithoutVisaRequestInput
    visaType: VisaTypeCreateNestedOneWithoutVisaRequestInput
    customer: CustomerCreateNestedOneWithoutVisaRequestInput
  }

  export type VisaRequestUncheckedCreateWithoutRoadTripInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    visaTypeId: number
    customerId: number
    contacts?: contactInfoUncheckedCreateNestedManyWithoutVisaRequestInput
  }

  export type VisaRequestCreateOrConnectWithoutRoadTripInput = {
    where: VisaRequestWhereUniqueInput
    create: XOR<VisaRequestCreateWithoutRoadTripInput, VisaRequestUncheckedCreateWithoutRoadTripInput>
  }

  export type VisaRequestCreateManyRoadTripInputEnvelope = {
    data: VisaRequestCreateManyRoadTripInput | VisaRequestCreateManyRoadTripInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutArrivalByInput = {
    update: XOR<LocationUpdateWithoutArrivalByInput, LocationUncheckedUpdateWithoutArrivalByInput>
    create: XOR<LocationCreateWithoutArrivalByInput, LocationUncheckedCreateWithoutArrivalByInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutArrivalByInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutArrivalByInput, LocationUncheckedUpdateWithoutArrivalByInput>
  }

  export type LocationUpdateWithoutArrivalByInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    locationType?: LocationTypeUpdateOneRequiredWithoutLocationNestedInput
    departureBy?: RoadTripInfoUpdateManyWithoutDepartureByNestedInput
  }

  export type LocationUncheckedUpdateWithoutArrivalByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    locationTypeId?: IntFieldUpdateOperationsInput | number
    departureBy?: RoadTripInfoUncheckedUpdateManyWithoutDepartureByNestedInput
  }

  export type LocationUpsertWithoutDepartureByInput = {
    update: XOR<LocationUpdateWithoutDepartureByInput, LocationUncheckedUpdateWithoutDepartureByInput>
    create: XOR<LocationCreateWithoutDepartureByInput, LocationUncheckedCreateWithoutDepartureByInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutDepartureByInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutDepartureByInput, LocationUncheckedUpdateWithoutDepartureByInput>
  }

  export type LocationUpdateWithoutDepartureByInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    locationType?: LocationTypeUpdateOneRequiredWithoutLocationNestedInput
    arrivalBy?: RoadTripInfoUpdateManyWithoutArrivalByNestedInput
  }

  export type LocationUncheckedUpdateWithoutDepartureByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    locationTypeId?: IntFieldUpdateOperationsInput | number
    arrivalBy?: RoadTripInfoUncheckedUpdateManyWithoutArrivalByNestedInput
  }

  export type VisaRequestUpsertWithWhereUniqueWithoutRoadTripInput = {
    where: VisaRequestWhereUniqueInput
    update: XOR<VisaRequestUpdateWithoutRoadTripInput, VisaRequestUncheckedUpdateWithoutRoadTripInput>
    create: XOR<VisaRequestCreateWithoutRoadTripInput, VisaRequestUncheckedCreateWithoutRoadTripInput>
  }

  export type VisaRequestUpdateWithWhereUniqueWithoutRoadTripInput = {
    where: VisaRequestWhereUniqueInput
    data: XOR<VisaRequestUpdateWithoutRoadTripInput, VisaRequestUncheckedUpdateWithoutRoadTripInput>
  }

  export type VisaRequestUpdateManyWithWhereWithoutRoadTripInput = {
    where: VisaRequestScalarWhereInput
    data: XOR<VisaRequestUpdateManyMutationInput, VisaRequestUncheckedUpdateManyWithoutRoadTripInput>
  }

  export type LoginCreateWithoutUserInput = {
    type: $Enums.LoginEnum
    username: string
    password: string
    Customer?: CustomerCreateNestedManyWithoutLoginInput
    role?: RoleCreateNestedOneWithoutLoginInput
  }

  export type LoginUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.LoginEnum
    username: string
    password: string
    roleId?: number | null
    Customer?: CustomerUncheckedCreateNestedManyWithoutLoginInput
  }

  export type LoginCreateOrConnectWithoutUserInput = {
    where: LoginWhereUniqueInput
    create: XOR<LoginCreateWithoutUserInput, LoginUncheckedCreateWithoutUserInput>
  }

  export type LoginUpsertWithoutUserInput = {
    update: XOR<LoginUpdateWithoutUserInput, LoginUncheckedUpdateWithoutUserInput>
    create: XOR<LoginCreateWithoutUserInput, LoginUncheckedCreateWithoutUserInput>
    where?: LoginWhereInput
  }

  export type LoginUpdateToOneWithWhereWithoutUserInput = {
    where?: LoginWhereInput
    data: XOR<LoginUpdateWithoutUserInput, LoginUncheckedUpdateWithoutUserInput>
  }

  export type LoginUpdateWithoutUserInput = {
    type?: EnumLoginEnumFieldUpdateOperationsInput | $Enums.LoginEnum
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Customer?: CustomerUpdateManyWithoutLoginNestedInput
    role?: RoleUpdateOneWithoutLoginNestedInput
  }

  export type LoginUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumLoginEnumFieldUpdateOperationsInput | $Enums.LoginEnum
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    Customer?: CustomerUncheckedUpdateManyWithoutLoginNestedInput
  }

  export type RolePermissionCreateWithoutRoleInput = {
    permission: PermissionCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateWithoutRoleInput = {
    permissionId: number
  }

  export type RolePermissionCreateOrConnectWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionCreateManyRoleInputEnvelope = {
    data: RolePermissionCreateManyRoleInput | RolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type LoginCreateWithoutRoleInput = {
    type: $Enums.LoginEnum
    username: string
    password: string
    user?: UserCreateNestedManyWithoutLoginInput
    Customer?: CustomerCreateNestedManyWithoutLoginInput
  }

  export type LoginUncheckedCreateWithoutRoleInput = {
    id?: number
    type: $Enums.LoginEnum
    username: string
    password: string
    user?: UserUncheckedCreateNestedManyWithoutLoginInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutLoginInput
  }

  export type LoginCreateOrConnectWithoutRoleInput = {
    where: LoginWhereUniqueInput
    create: XOR<LoginCreateWithoutRoleInput, LoginUncheckedCreateWithoutRoleInput>
  }

  export type LoginCreateManyRoleInputEnvelope = {
    data: LoginCreateManyRoleInput | LoginCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
  }

  export type LoginUpsertWithWhereUniqueWithoutRoleInput = {
    where: LoginWhereUniqueInput
    update: XOR<LoginUpdateWithoutRoleInput, LoginUncheckedUpdateWithoutRoleInput>
    create: XOR<LoginCreateWithoutRoleInput, LoginUncheckedCreateWithoutRoleInput>
  }

  export type LoginUpdateWithWhereUniqueWithoutRoleInput = {
    where: LoginWhereUniqueInput
    data: XOR<LoginUpdateWithoutRoleInput, LoginUncheckedUpdateWithoutRoleInput>
  }

  export type LoginUpdateManyWithWhereWithoutRoleInput = {
    where: LoginScalarWhereInput
    data: XOR<LoginUpdateManyMutationInput, LoginUncheckedUpdateManyWithoutRoleInput>
  }

  export type LoginScalarWhereInput = {
    AND?: LoginScalarWhereInput | LoginScalarWhereInput[]
    OR?: LoginScalarWhereInput[]
    NOT?: LoginScalarWhereInput | LoginScalarWhereInput[]
    id?: IntFilter<"Login"> | number
    type?: EnumLoginEnumFilter<"Login"> | $Enums.LoginEnum
    username?: StringFilter<"Login"> | string
    password?: StringFilter<"Login"> | string
    roleId?: IntNullableFilter<"Login"> | number | null
  }

  export type RoleCreateWithoutRolePermissionInput = {
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comment?: string | null
    byId?: number | null
    isActive?: boolean
    login?: LoginCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolePermissionInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    comment?: string | null
    byId?: number | null
    isActive?: boolean
    login?: LoginUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRolePermissionInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
  }

  export type PermissionCreateWithoutRolePermissionInput = {
    code: string
    comment?: string | null
    action: $Enums.PermissionActionEnum
    byId?: number | null
    module: ModuleCreateNestedOneWithoutPermissionInput
  }

  export type PermissionUncheckedCreateWithoutRolePermissionInput = {
    id?: number
    code: string
    comment?: string | null
    moduleId: number
    action: $Enums.PermissionActionEnum
    byId?: number | null
  }

  export type PermissionCreateOrConnectWithoutRolePermissionInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput>
  }

  export type RoleUpsertWithoutRolePermissionInput = {
    update: XOR<RoleUpdateWithoutRolePermissionInput, RoleUncheckedUpdateWithoutRolePermissionInput>
    create: XOR<RoleCreateWithoutRolePermissionInput, RoleUncheckedCreateWithoutRolePermissionInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolePermissionInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolePermissionInput, RoleUncheckedUpdateWithoutRolePermissionInput>
  }

  export type RoleUpdateWithoutRolePermissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    login?: LoginUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolePermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    login?: LoginUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PermissionUpsertWithoutRolePermissionInput = {
    update: XOR<PermissionUpdateWithoutRolePermissionInput, PermissionUncheckedUpdateWithoutRolePermissionInput>
    create: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutRolePermissionInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutRolePermissionInput, PermissionUncheckedUpdateWithoutRolePermissionInput>
  }

  export type PermissionUpdateWithoutRolePermissionInput = {
    code?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumPermissionActionEnumFieldUpdateOperationsInput | $Enums.PermissionActionEnum
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    module?: ModuleUpdateOneRequiredWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateWithoutRolePermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: IntFieldUpdateOperationsInput | number
    action?: EnumPermissionActionEnumFieldUpdateOperationsInput | $Enums.PermissionActionEnum
    byId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ModuleCreateWithoutPermissionInput = {
    name: string
  }

  export type ModuleUncheckedCreateWithoutPermissionInput = {
    id?: number
    name: string
  }

  export type ModuleCreateOrConnectWithoutPermissionInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutPermissionInput, ModuleUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionCreateWithoutPermissionInput = {
    role: RoleCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateWithoutPermissionInput = {
    roleId: number
  }

  export type RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionCreateManyPermissionInputEnvelope = {
    data: RolePermissionCreateManyPermissionInput | RolePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type ModuleUpsertWithoutPermissionInput = {
    update: XOR<ModuleUpdateWithoutPermissionInput, ModuleUncheckedUpdateWithoutPermissionInput>
    create: XOR<ModuleCreateWithoutPermissionInput, ModuleUncheckedCreateWithoutPermissionInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutPermissionInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutPermissionInput, ModuleUncheckedUpdateWithoutPermissionInput>
  }

  export type ModuleUpdateWithoutPermissionInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type PermissionCreateWithoutModuleInput = {
    code: string
    comment?: string | null
    action: $Enums.PermissionActionEnum
    byId?: number | null
    rolePermission?: RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateWithoutModuleInput = {
    id?: number
    code: string
    comment?: string | null
    action: $Enums.PermissionActionEnum
    byId?: number | null
    rolePermission?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionCreateOrConnectWithoutModuleInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutModuleInput, PermissionUncheckedCreateWithoutModuleInput>
  }

  export type PermissionCreateManyModuleInputEnvelope = {
    data: PermissionCreateManyModuleInput | PermissionCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type PermissionUpsertWithWhereUniqueWithoutModuleInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutModuleInput, PermissionUncheckedUpdateWithoutModuleInput>
    create: XOR<PermissionCreateWithoutModuleInput, PermissionUncheckedCreateWithoutModuleInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutModuleInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutModuleInput, PermissionUncheckedUpdateWithoutModuleInput>
  }

  export type PermissionUpdateManyWithWhereWithoutModuleInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutModuleInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: IntFilter<"Permission"> | number
    code?: StringFilter<"Permission"> | string
    comment?: StringNullableFilter<"Permission"> | string | null
    moduleId?: IntFilter<"Permission"> | number
    action?: EnumPermissionActionEnumFilter<"Permission"> | $Enums.PermissionActionEnum
    byId?: IntNullableFilter<"Permission"> | number | null
  }

  export type CustomerCreateWithoutActivityInput = {
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date | string
    address: string
    latitude: string
    longitude: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    login: LoginCreateNestedOneWithoutCustomerInput
    VisaRequest?: VisaRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutActivityInput = {
    id?: number
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date | string
    address: string
    latitude: string
    longitude: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    loginId: number
    VisaRequest?: VisaRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutActivityInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutActivityInput, CustomerUncheckedCreateWithoutActivityInput>
  }

  export type CustomerCreateManyActivityInputEnvelope = {
    data: CustomerCreateManyActivityInput | CustomerCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutActivityInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutActivityInput, CustomerUncheckedUpdateWithoutActivityInput>
    create: XOR<CustomerCreateWithoutActivityInput, CustomerUncheckedCreateWithoutActivityInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutActivityInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutActivityInput, CustomerUncheckedUpdateWithoutActivityInput>
  }

  export type CustomerUpdateManyWithWhereWithoutActivityInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutActivityInput>
  }

  export type VisaRequestCreateWithoutVisaTypeInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    contacts?: contactInfoCreateNestedManyWithoutVisaRequestInput
    customer: CustomerCreateNestedOneWithoutVisaRequestInput
    roadTrip: RoadTripInfoCreateNestedOneWithoutVisaRequestInput
  }

  export type VisaRequestUncheckedCreateWithoutVisaTypeInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    roadTripInfoId: number
    customerId: number
    contacts?: contactInfoUncheckedCreateNestedManyWithoutVisaRequestInput
  }

  export type VisaRequestCreateOrConnectWithoutVisaTypeInput = {
    where: VisaRequestWhereUniqueInput
    create: XOR<VisaRequestCreateWithoutVisaTypeInput, VisaRequestUncheckedCreateWithoutVisaTypeInput>
  }

  export type VisaRequestCreateManyVisaTypeInputEnvelope = {
    data: VisaRequestCreateManyVisaTypeInput | VisaRequestCreateManyVisaTypeInput[]
    skipDuplicates?: boolean
  }

  export type VisaRequestUpsertWithWhereUniqueWithoutVisaTypeInput = {
    where: VisaRequestWhereUniqueInput
    update: XOR<VisaRequestUpdateWithoutVisaTypeInput, VisaRequestUncheckedUpdateWithoutVisaTypeInput>
    create: XOR<VisaRequestCreateWithoutVisaTypeInput, VisaRequestUncheckedCreateWithoutVisaTypeInput>
  }

  export type VisaRequestUpdateWithWhereUniqueWithoutVisaTypeInput = {
    where: VisaRequestWhereUniqueInput
    data: XOR<VisaRequestUpdateWithoutVisaTypeInput, VisaRequestUncheckedUpdateWithoutVisaTypeInput>
  }

  export type VisaRequestUpdateManyWithWhereWithoutVisaTypeInput = {
    where: VisaRequestScalarWhereInput
    data: XOR<VisaRequestUpdateManyMutationInput, VisaRequestUncheckedUpdateManyWithoutVisaTypeInput>
  }

  export type contactInfoCreateWithoutVisaRequestInput = {
    displayname: string
    phone: string
    customerId?: number | null
  }

  export type contactInfoUncheckedCreateWithoutVisaRequestInput = {
    id?: number
    displayname: string
    phone: string
    customerId?: number | null
  }

  export type contactInfoCreateOrConnectWithoutVisaRequestInput = {
    where: contactInfoWhereUniqueInput
    create: XOR<contactInfoCreateWithoutVisaRequestInput, contactInfoUncheckedCreateWithoutVisaRequestInput>
  }

  export type contactInfoCreateManyVisaRequestInputEnvelope = {
    data: contactInfoCreateManyVisaRequestInput | contactInfoCreateManyVisaRequestInput[]
    skipDuplicates?: boolean
  }

  export type VisaTypeCreateWithoutVisaRequestInput = {
    name: string
    comment: string
    isActive?: boolean
  }

  export type VisaTypeUncheckedCreateWithoutVisaRequestInput = {
    id?: number
    name: string
    comment: string
    isActive?: boolean
  }

  export type VisaTypeCreateOrConnectWithoutVisaRequestInput = {
    where: VisaTypeWhereUniqueInput
    create: XOR<VisaTypeCreateWithoutVisaRequestInput, VisaTypeUncheckedCreateWithoutVisaRequestInput>
  }

  export type CustomerCreateWithoutVisaRequestInput = {
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date | string
    address: string
    latitude: string
    longitude: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    login: LoginCreateNestedOneWithoutCustomerInput
    activity: ActivityCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutVisaRequestInput = {
    id?: number
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date | string
    address: string
    latitude: string
    longitude: string
    email: string
    activityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loginId: number
  }

  export type CustomerCreateOrConnectWithoutVisaRequestInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutVisaRequestInput, CustomerUncheckedCreateWithoutVisaRequestInput>
  }

  export type RoadTripInfoCreateWithoutVisaRequestInput = {
    motif: string
    arrivalFrom: string
    arrivalDate: Date | string
    departureTo: string
    departureDate: Date | string
    locationId?: number | null
    arrivalBy: LocationCreateNestedOneWithoutArrivalByInput
    departureBy: LocationCreateNestedOneWithoutDepartureByInput
  }

  export type RoadTripInfoUncheckedCreateWithoutVisaRequestInput = {
    id?: number
    motif: string
    arrivalFrom: string
    arrivalDate: Date | string
    arrivalById: number
    departureTo: string
    departureDate: Date | string
    departureToId: number
    locationId?: number | null
  }

  export type RoadTripInfoCreateOrConnectWithoutVisaRequestInput = {
    where: RoadTripInfoWhereUniqueInput
    create: XOR<RoadTripInfoCreateWithoutVisaRequestInput, RoadTripInfoUncheckedCreateWithoutVisaRequestInput>
  }

  export type contactInfoUpsertWithWhereUniqueWithoutVisaRequestInput = {
    where: contactInfoWhereUniqueInput
    update: XOR<contactInfoUpdateWithoutVisaRequestInput, contactInfoUncheckedUpdateWithoutVisaRequestInput>
    create: XOR<contactInfoCreateWithoutVisaRequestInput, contactInfoUncheckedCreateWithoutVisaRequestInput>
  }

  export type contactInfoUpdateWithWhereUniqueWithoutVisaRequestInput = {
    where: contactInfoWhereUniqueInput
    data: XOR<contactInfoUpdateWithoutVisaRequestInput, contactInfoUncheckedUpdateWithoutVisaRequestInput>
  }

  export type contactInfoUpdateManyWithWhereWithoutVisaRequestInput = {
    where: contactInfoScalarWhereInput
    data: XOR<contactInfoUpdateManyMutationInput, contactInfoUncheckedUpdateManyWithoutVisaRequestInput>
  }

  export type contactInfoScalarWhereInput = {
    AND?: contactInfoScalarWhereInput | contactInfoScalarWhereInput[]
    OR?: contactInfoScalarWhereInput[]
    NOT?: contactInfoScalarWhereInput | contactInfoScalarWhereInput[]
    id?: IntFilter<"contactInfo"> | number
    displayname?: StringFilter<"contactInfo"> | string
    phone?: StringFilter<"contactInfo"> | string
    customerId?: IntNullableFilter<"contactInfo"> | number | null
    visaRequestId?: IntNullableFilter<"contactInfo"> | number | null
  }

  export type VisaTypeUpsertWithoutVisaRequestInput = {
    update: XOR<VisaTypeUpdateWithoutVisaRequestInput, VisaTypeUncheckedUpdateWithoutVisaRequestInput>
    create: XOR<VisaTypeCreateWithoutVisaRequestInput, VisaTypeUncheckedCreateWithoutVisaRequestInput>
    where?: VisaTypeWhereInput
  }

  export type VisaTypeUpdateToOneWithWhereWithoutVisaRequestInput = {
    where?: VisaTypeWhereInput
    data: XOR<VisaTypeUpdateWithoutVisaRequestInput, VisaTypeUncheckedUpdateWithoutVisaRequestInput>
  }

  export type VisaTypeUpdateWithoutVisaRequestInput = {
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VisaTypeUncheckedUpdateWithoutVisaRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerUpsertWithoutVisaRequestInput = {
    update: XOR<CustomerUpdateWithoutVisaRequestInput, CustomerUncheckedUpdateWithoutVisaRequestInput>
    create: XOR<CustomerCreateWithoutVisaRequestInput, CustomerUncheckedCreateWithoutVisaRequestInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutVisaRequestInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutVisaRequestInput, CustomerUncheckedUpdateWithoutVisaRequestInput>
  }

  export type CustomerUpdateWithoutVisaRequestInput = {
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    login?: LoginUpdateOneRequiredWithoutCustomerNestedInput
    activity?: ActivityUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutVisaRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: IntFieldUpdateOperationsInput | number
  }

  export type RoadTripInfoUpsertWithoutVisaRequestInput = {
    update: XOR<RoadTripInfoUpdateWithoutVisaRequestInput, RoadTripInfoUncheckedUpdateWithoutVisaRequestInput>
    create: XOR<RoadTripInfoCreateWithoutVisaRequestInput, RoadTripInfoUncheckedCreateWithoutVisaRequestInput>
    where?: RoadTripInfoWhereInput
  }

  export type RoadTripInfoUpdateToOneWithWhereWithoutVisaRequestInput = {
    where?: RoadTripInfoWhereInput
    data: XOR<RoadTripInfoUpdateWithoutVisaRequestInput, RoadTripInfoUncheckedUpdateWithoutVisaRequestInput>
  }

  export type RoadTripInfoUpdateWithoutVisaRequestInput = {
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    arrivalBy?: LocationUpdateOneRequiredWithoutArrivalByNestedInput
    departureBy?: LocationUpdateOneRequiredWithoutDepartureByNestedInput
  }

  export type RoadTripInfoUncheckedUpdateWithoutVisaRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalById?: IntFieldUpdateOperationsInput | number
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureToId?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationTypeCreateWithoutLocationInput = {
    name: string
    isActive?: boolean
  }

  export type LocationTypeUncheckedCreateWithoutLocationInput = {
    id?: number
    name: string
    isActive?: boolean
  }

  export type LocationTypeCreateOrConnectWithoutLocationInput = {
    where: LocationTypeWhereUniqueInput
    create: XOR<LocationTypeCreateWithoutLocationInput, LocationTypeUncheckedCreateWithoutLocationInput>
  }

  export type RoadTripInfoCreateWithoutDepartureByInput = {
    motif: string
    arrivalFrom: string
    arrivalDate: Date | string
    departureTo: string
    departureDate: Date | string
    locationId?: number | null
    arrivalBy: LocationCreateNestedOneWithoutArrivalByInput
    visaRequest?: VisaRequestCreateNestedManyWithoutRoadTripInput
  }

  export type RoadTripInfoUncheckedCreateWithoutDepartureByInput = {
    id?: number
    motif: string
    arrivalFrom: string
    arrivalDate: Date | string
    arrivalById: number
    departureTo: string
    departureDate: Date | string
    locationId?: number | null
    visaRequest?: VisaRequestUncheckedCreateNestedManyWithoutRoadTripInput
  }

  export type RoadTripInfoCreateOrConnectWithoutDepartureByInput = {
    where: RoadTripInfoWhereUniqueInput
    create: XOR<RoadTripInfoCreateWithoutDepartureByInput, RoadTripInfoUncheckedCreateWithoutDepartureByInput>
  }

  export type RoadTripInfoCreateManyDepartureByInputEnvelope = {
    data: RoadTripInfoCreateManyDepartureByInput | RoadTripInfoCreateManyDepartureByInput[]
    skipDuplicates?: boolean
  }

  export type RoadTripInfoCreateWithoutArrivalByInput = {
    motif: string
    arrivalFrom: string
    arrivalDate: Date | string
    departureTo: string
    departureDate: Date | string
    locationId?: number | null
    departureBy: LocationCreateNestedOneWithoutDepartureByInput
    visaRequest?: VisaRequestCreateNestedManyWithoutRoadTripInput
  }

  export type RoadTripInfoUncheckedCreateWithoutArrivalByInput = {
    id?: number
    motif: string
    arrivalFrom: string
    arrivalDate: Date | string
    departureTo: string
    departureDate: Date | string
    departureToId: number
    locationId?: number | null
    visaRequest?: VisaRequestUncheckedCreateNestedManyWithoutRoadTripInput
  }

  export type RoadTripInfoCreateOrConnectWithoutArrivalByInput = {
    where: RoadTripInfoWhereUniqueInput
    create: XOR<RoadTripInfoCreateWithoutArrivalByInput, RoadTripInfoUncheckedCreateWithoutArrivalByInput>
  }

  export type RoadTripInfoCreateManyArrivalByInputEnvelope = {
    data: RoadTripInfoCreateManyArrivalByInput | RoadTripInfoCreateManyArrivalByInput[]
    skipDuplicates?: boolean
  }

  export type LocationTypeUpsertWithoutLocationInput = {
    update: XOR<LocationTypeUpdateWithoutLocationInput, LocationTypeUncheckedUpdateWithoutLocationInput>
    create: XOR<LocationTypeCreateWithoutLocationInput, LocationTypeUncheckedCreateWithoutLocationInput>
    where?: LocationTypeWhereInput
  }

  export type LocationTypeUpdateToOneWithWhereWithoutLocationInput = {
    where?: LocationTypeWhereInput
    data: XOR<LocationTypeUpdateWithoutLocationInput, LocationTypeUncheckedUpdateWithoutLocationInput>
  }

  export type LocationTypeUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LocationTypeUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoadTripInfoUpsertWithWhereUniqueWithoutDepartureByInput = {
    where: RoadTripInfoWhereUniqueInput
    update: XOR<RoadTripInfoUpdateWithoutDepartureByInput, RoadTripInfoUncheckedUpdateWithoutDepartureByInput>
    create: XOR<RoadTripInfoCreateWithoutDepartureByInput, RoadTripInfoUncheckedCreateWithoutDepartureByInput>
  }

  export type RoadTripInfoUpdateWithWhereUniqueWithoutDepartureByInput = {
    where: RoadTripInfoWhereUniqueInput
    data: XOR<RoadTripInfoUpdateWithoutDepartureByInput, RoadTripInfoUncheckedUpdateWithoutDepartureByInput>
  }

  export type RoadTripInfoUpdateManyWithWhereWithoutDepartureByInput = {
    where: RoadTripInfoScalarWhereInput
    data: XOR<RoadTripInfoUpdateManyMutationInput, RoadTripInfoUncheckedUpdateManyWithoutDepartureByInput>
  }

  export type RoadTripInfoScalarWhereInput = {
    AND?: RoadTripInfoScalarWhereInput | RoadTripInfoScalarWhereInput[]
    OR?: RoadTripInfoScalarWhereInput[]
    NOT?: RoadTripInfoScalarWhereInput | RoadTripInfoScalarWhereInput[]
    id?: IntFilter<"RoadTripInfo"> | number
    motif?: StringFilter<"RoadTripInfo"> | string
    arrivalFrom?: StringFilter<"RoadTripInfo"> | string
    arrivalDate?: DateTimeFilter<"RoadTripInfo"> | Date | string
    arrivalById?: IntFilter<"RoadTripInfo"> | number
    departureTo?: StringFilter<"RoadTripInfo"> | string
    departureDate?: DateTimeFilter<"RoadTripInfo"> | Date | string
    departureToId?: IntFilter<"RoadTripInfo"> | number
    locationId?: IntNullableFilter<"RoadTripInfo"> | number | null
  }

  export type RoadTripInfoUpsertWithWhereUniqueWithoutArrivalByInput = {
    where: RoadTripInfoWhereUniqueInput
    update: XOR<RoadTripInfoUpdateWithoutArrivalByInput, RoadTripInfoUncheckedUpdateWithoutArrivalByInput>
    create: XOR<RoadTripInfoCreateWithoutArrivalByInput, RoadTripInfoUncheckedCreateWithoutArrivalByInput>
  }

  export type RoadTripInfoUpdateWithWhereUniqueWithoutArrivalByInput = {
    where: RoadTripInfoWhereUniqueInput
    data: XOR<RoadTripInfoUpdateWithoutArrivalByInput, RoadTripInfoUncheckedUpdateWithoutArrivalByInput>
  }

  export type RoadTripInfoUpdateManyWithWhereWithoutArrivalByInput = {
    where: RoadTripInfoScalarWhereInput
    data: XOR<RoadTripInfoUpdateManyMutationInput, RoadTripInfoUncheckedUpdateManyWithoutArrivalByInput>
  }

  export type LocationCreateWithoutLocationTypeInput = {
    name: string
    isActive?: boolean
    departureBy?: RoadTripInfoCreateNestedManyWithoutDepartureByInput
    arrivalBy?: RoadTripInfoCreateNestedManyWithoutArrivalByInput
  }

  export type LocationUncheckedCreateWithoutLocationTypeInput = {
    id?: number
    name: string
    isActive?: boolean
    departureBy?: RoadTripInfoUncheckedCreateNestedManyWithoutDepartureByInput
    arrivalBy?: RoadTripInfoUncheckedCreateNestedManyWithoutArrivalByInput
  }

  export type LocationCreateOrConnectWithoutLocationTypeInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutLocationTypeInput, LocationUncheckedCreateWithoutLocationTypeInput>
  }

  export type LocationCreateManyLocationTypeInputEnvelope = {
    data: LocationCreateManyLocationTypeInput | LocationCreateManyLocationTypeInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithWhereUniqueWithoutLocationTypeInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutLocationTypeInput, LocationUncheckedUpdateWithoutLocationTypeInput>
    create: XOR<LocationCreateWithoutLocationTypeInput, LocationUncheckedCreateWithoutLocationTypeInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutLocationTypeInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutLocationTypeInput, LocationUncheckedUpdateWithoutLocationTypeInput>
  }

  export type LocationUpdateManyWithWhereWithoutLocationTypeInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutLocationTypeInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: IntFilter<"Location"> | number
    name?: StringFilter<"Location"> | string
    isActive?: BoolFilter<"Location"> | boolean
    locationTypeId?: IntFilter<"Location"> | number
  }

  export type UserCreateManyLoginInput = {
    id?: number
    displayname: string
    phone: string
    email: string
    address?: string | null
  }

  export type CustomerCreateManyLoginInput = {
    id?: number
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date | string
    address: string
    latitude: string
    longitude: string
    email: string
    activityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutLoginInput = {
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyWithoutLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUpdateWithoutLoginInput = {
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutCustomerNestedInput
    VisaRequest?: VisaRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VisaRequest?: VisaRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisaRequestCreateManyCustomerInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    visaTypeId: number
    roadTripInfoId: number
  }

  export type VisaRequestUpdateWithoutCustomerInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: contactInfoUpdateManyWithoutVisaRequestNestedInput
    visaType?: VisaTypeUpdateOneRequiredWithoutVisaRequestNestedInput
    roadTrip?: RoadTripInfoUpdateOneRequiredWithoutVisaRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visaTypeId?: IntFieldUpdateOperationsInput | number
    roadTripInfoId?: IntFieldUpdateOperationsInput | number
    contacts?: contactInfoUncheckedUpdateManyWithoutVisaRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visaTypeId?: IntFieldUpdateOperationsInput | number
    roadTripInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type VisaRequestCreateManyRoadTripInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    visaTypeId: number
    customerId: number
  }

  export type VisaRequestUpdateWithoutRoadTripInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: contactInfoUpdateManyWithoutVisaRequestNestedInput
    visaType?: VisaTypeUpdateOneRequiredWithoutVisaRequestNestedInput
    customer?: CustomerUpdateOneRequiredWithoutVisaRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateWithoutRoadTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visaTypeId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    contacts?: contactInfoUncheckedUpdateManyWithoutVisaRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateManyWithoutRoadTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visaTypeId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionCreateManyRoleInput = {
    permissionId: number
  }

  export type LoginCreateManyRoleInput = {
    id?: number
    type: $Enums.LoginEnum
    username: string
    password: string
  }

  export type RolePermissionUpdateWithoutRoleInput = {
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutRoleInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type LoginUpdateWithoutRoleInput = {
    type?: EnumLoginEnumFieldUpdateOperationsInput | $Enums.LoginEnum
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutLoginNestedInput
    Customer?: CustomerUpdateManyWithoutLoginNestedInput
  }

  export type LoginUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumLoginEnumFieldUpdateOperationsInput | $Enums.LoginEnum
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutLoginNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutLoginNestedInput
  }

  export type LoginUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumLoginEnumFieldUpdateOperationsInput | $Enums.LoginEnum
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissionCreateManyPermissionInput = {
    roleId: number
  }

  export type RolePermissionUpdateWithoutPermissionInput = {
    role?: RoleUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutPermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionCreateManyModuleInput = {
    id?: number
    code: string
    comment?: string | null
    action: $Enums.PermissionActionEnum
    byId?: number | null
  }

  export type PermissionUpdateWithoutModuleInput = {
    code?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumPermissionActionEnumFieldUpdateOperationsInput | $Enums.PermissionActionEnum
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    rolePermission?: RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumPermissionActionEnumFieldUpdateOperationsInput | $Enums.PermissionActionEnum
    byId?: NullableIntFieldUpdateOperationsInput | number | null
    rolePermission?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateManyWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumPermissionActionEnumFieldUpdateOperationsInput | $Enums.PermissionActionEnum
    byId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CustomerCreateManyActivityInput = {
    id?: number
    displayname: string
    dateOfBirth: string
    selfPath: string
    passportPath: string
    passportReference: string
    passportValidity: Date | string
    address: string
    latitude: string
    longitude: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    loginId: number
  }

  export type CustomerUpdateWithoutActivityInput = {
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    login?: LoginUpdateOneRequiredWithoutCustomerNestedInput
    VisaRequest?: VisaRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: IntFieldUpdateOperationsInput | number
    VisaRequest?: VisaRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    selfPath?: StringFieldUpdateOperationsInput | string
    passportPath?: StringFieldUpdateOperationsInput | string
    passportReference?: StringFieldUpdateOperationsInput | string
    passportValidity?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: IntFieldUpdateOperationsInput | number
  }

  export type VisaRequestCreateManyVisaTypeInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    roadTripInfoId: number
    customerId: number
  }

  export type VisaRequestUpdateWithoutVisaTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: contactInfoUpdateManyWithoutVisaRequestNestedInput
    customer?: CustomerUpdateOneRequiredWithoutVisaRequestNestedInput
    roadTrip?: RoadTripInfoUpdateOneRequiredWithoutVisaRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateWithoutVisaTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roadTripInfoId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    contacts?: contactInfoUncheckedUpdateManyWithoutVisaRequestNestedInput
  }

  export type VisaRequestUncheckedUpdateManyWithoutVisaTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roadTripInfoId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type contactInfoCreateManyVisaRequestInput = {
    id?: number
    displayname: string
    phone: string
    customerId?: number | null
  }

  export type contactInfoUpdateWithoutVisaRequestInput = {
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type contactInfoUncheckedUpdateWithoutVisaRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type contactInfoUncheckedUpdateManyWithoutVisaRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoadTripInfoCreateManyDepartureByInput = {
    id?: number
    motif: string
    arrivalFrom: string
    arrivalDate: Date | string
    arrivalById: number
    departureTo: string
    departureDate: Date | string
    locationId?: number | null
  }

  export type RoadTripInfoCreateManyArrivalByInput = {
    id?: number
    motif: string
    arrivalFrom: string
    arrivalDate: Date | string
    departureTo: string
    departureDate: Date | string
    departureToId: number
    locationId?: number | null
  }

  export type RoadTripInfoUpdateWithoutDepartureByInput = {
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    arrivalBy?: LocationUpdateOneRequiredWithoutArrivalByNestedInput
    visaRequest?: VisaRequestUpdateManyWithoutRoadTripNestedInput
  }

  export type RoadTripInfoUncheckedUpdateWithoutDepartureByInput = {
    id?: IntFieldUpdateOperationsInput | number
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalById?: IntFieldUpdateOperationsInput | number
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    visaRequest?: VisaRequestUncheckedUpdateManyWithoutRoadTripNestedInput
  }

  export type RoadTripInfoUncheckedUpdateManyWithoutDepartureByInput = {
    id?: IntFieldUpdateOperationsInput | number
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalById?: IntFieldUpdateOperationsInput | number
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoadTripInfoUpdateWithoutArrivalByInput = {
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    departureBy?: LocationUpdateOneRequiredWithoutDepartureByNestedInput
    visaRequest?: VisaRequestUpdateManyWithoutRoadTripNestedInput
  }

  export type RoadTripInfoUncheckedUpdateWithoutArrivalByInput = {
    id?: IntFieldUpdateOperationsInput | number
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureToId?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    visaRequest?: VisaRequestUncheckedUpdateManyWithoutRoadTripNestedInput
  }

  export type RoadTripInfoUncheckedUpdateManyWithoutArrivalByInput = {
    id?: IntFieldUpdateOperationsInput | number
    motif?: StringFieldUpdateOperationsInput | string
    arrivalFrom?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureTo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureToId?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationCreateManyLocationTypeInput = {
    id?: number
    name: string
    isActive?: boolean
  }

  export type LocationUpdateWithoutLocationTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departureBy?: RoadTripInfoUpdateManyWithoutDepartureByNestedInput
    arrivalBy?: RoadTripInfoUpdateManyWithoutArrivalByNestedInput
  }

  export type LocationUncheckedUpdateWithoutLocationTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departureBy?: RoadTripInfoUncheckedUpdateManyWithoutDepartureByNestedInput
    arrivalBy?: RoadTripInfoUncheckedUpdateManyWithoutArrivalByNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutLocationTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}