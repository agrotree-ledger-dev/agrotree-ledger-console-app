
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
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model MarketTransaction
 * 
 */
export type MarketTransaction = $Result.DefaultSelection<Prisma.$MarketTransactionPayload>
/**
 * Model NftMetadata
 * 
 */
export type NftMetadata = $Result.DefaultSelection<Prisma.$NftMetadataPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model SaasJob
 * 
 */
export type SaasJob = $Result.DefaultSelection<Prisma.$SaasJobPayload>
/**
 * Model SaasJobLog
 * 
 */
export type SaasJobLog = $Result.DefaultSelection<Prisma.$SaasJobLogPayload>
/**
 * Model SaasRequest
 * 
 */
export type SaasRequest = $Result.DefaultSelection<Prisma.$SaasRequestPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RequestStatus: {
  PENDING: 'PENDING',
  CREATED: 'CREATED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const TransactionType: {
  LIST: 'LIST',
  UNLIST: 'UNLIST',
  BUY: 'BUY'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const Visibility: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type Visibility = (typeof Visibility)[keyof typeof Visibility]

}

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type Visibility = $Enums.Visibility

export const Visibility: typeof $Enums.Visibility

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Collections
 * const collections = await prisma.collection.findMany()
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
   * // Fetch zero or more Collections
   * const collections = await prisma.collection.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketTransaction`: Exposes CRUD operations for the **MarketTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketTransactions
    * const marketTransactions = await prisma.marketTransaction.findMany()
    * ```
    */
  get marketTransaction(): Prisma.MarketTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nftMetadata`: Exposes CRUD operations for the **NftMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NftMetadata
    * const nftMetadata = await prisma.nftMetadata.findMany()
    * ```
    */
  get nftMetadata(): Prisma.NftMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saasJob`: Exposes CRUD operations for the **SaasJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaasJobs
    * const saasJobs = await prisma.saasJob.findMany()
    * ```
    */
  get saasJob(): Prisma.SaasJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saasJobLog`: Exposes CRUD operations for the **SaasJobLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaasJobLogs
    * const saasJobLogs = await prisma.saasJobLog.findMany()
    * ```
    */
  get saasJobLog(): Prisma.SaasJobLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saasRequest`: Exposes CRUD operations for the **SaasRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaasRequests
    * const saasRequests = await prisma.saasRequest.findMany()
    * ```
    */
  get saasRequest(): Prisma.SaasRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Collection: 'Collection',
    MarketTransaction: 'MarketTransaction',
    NftMetadata: 'NftMetadata',
    Project: 'Project',
    SaasJob: 'SaasJob',
    SaasJobLog: 'SaasJobLog',
    SaasRequest: 'SaasRequest',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "collection" | "marketTransaction" | "nftMetadata" | "project" | "saasJob" | "saasJobLog" | "saasRequest" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      MarketTransaction: {
        payload: Prisma.$MarketTransactionPayload<ExtArgs>
        fields: Prisma.MarketTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTransactionPayload>
          }
          findFirst: {
            args: Prisma.MarketTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTransactionPayload>
          }
          findMany: {
            args: Prisma.MarketTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTransactionPayload>[]
          }
          create: {
            args: Prisma.MarketTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTransactionPayload>
          }
          createMany: {
            args: Prisma.MarketTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTransactionPayload>[]
          }
          delete: {
            args: Prisma.MarketTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTransactionPayload>
          }
          update: {
            args: Prisma.MarketTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTransactionPayload>
          }
          deleteMany: {
            args: Prisma.MarketTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTransactionPayload>[]
          }
          upsert: {
            args: Prisma.MarketTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTransactionPayload>
          }
          aggregate: {
            args: Prisma.MarketTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketTransaction>
          }
          groupBy: {
            args: Prisma.MarketTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<MarketTransactionCountAggregateOutputType> | number
          }
        }
      }
      NftMetadata: {
        payload: Prisma.$NftMetadataPayload<ExtArgs>
        fields: Prisma.NftMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NftMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NftMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftMetadataPayload>
          }
          findFirst: {
            args: Prisma.NftMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NftMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftMetadataPayload>
          }
          findMany: {
            args: Prisma.NftMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftMetadataPayload>[]
          }
          create: {
            args: Prisma.NftMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftMetadataPayload>
          }
          createMany: {
            args: Prisma.NftMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NftMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftMetadataPayload>[]
          }
          delete: {
            args: Prisma.NftMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftMetadataPayload>
          }
          update: {
            args: Prisma.NftMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftMetadataPayload>
          }
          deleteMany: {
            args: Prisma.NftMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NftMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NftMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftMetadataPayload>[]
          }
          upsert: {
            args: Prisma.NftMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NftMetadataPayload>
          }
          aggregate: {
            args: Prisma.NftMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNftMetadata>
          }
          groupBy: {
            args: Prisma.NftMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<NftMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.NftMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<NftMetadataCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      SaasJob: {
        payload: Prisma.$SaasJobPayload<ExtArgs>
        fields: Prisma.SaasJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaasJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaasJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobPayload>
          }
          findFirst: {
            args: Prisma.SaasJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaasJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobPayload>
          }
          findMany: {
            args: Prisma.SaasJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobPayload>[]
          }
          create: {
            args: Prisma.SaasJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobPayload>
          }
          createMany: {
            args: Prisma.SaasJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaasJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobPayload>[]
          }
          delete: {
            args: Prisma.SaasJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobPayload>
          }
          update: {
            args: Prisma.SaasJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobPayload>
          }
          deleteMany: {
            args: Prisma.SaasJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaasJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaasJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobPayload>[]
          }
          upsert: {
            args: Prisma.SaasJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobPayload>
          }
          aggregate: {
            args: Prisma.SaasJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaasJob>
          }
          groupBy: {
            args: Prisma.SaasJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaasJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaasJobCountArgs<ExtArgs>
            result: $Utils.Optional<SaasJobCountAggregateOutputType> | number
          }
        }
      }
      SaasJobLog: {
        payload: Prisma.$SaasJobLogPayload<ExtArgs>
        fields: Prisma.SaasJobLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaasJobLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaasJobLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobLogPayload>
          }
          findFirst: {
            args: Prisma.SaasJobLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaasJobLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobLogPayload>
          }
          findMany: {
            args: Prisma.SaasJobLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobLogPayload>[]
          }
          create: {
            args: Prisma.SaasJobLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobLogPayload>
          }
          createMany: {
            args: Prisma.SaasJobLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaasJobLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobLogPayload>[]
          }
          delete: {
            args: Prisma.SaasJobLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobLogPayload>
          }
          update: {
            args: Prisma.SaasJobLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobLogPayload>
          }
          deleteMany: {
            args: Prisma.SaasJobLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaasJobLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaasJobLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobLogPayload>[]
          }
          upsert: {
            args: Prisma.SaasJobLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasJobLogPayload>
          }
          aggregate: {
            args: Prisma.SaasJobLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaasJobLog>
          }
          groupBy: {
            args: Prisma.SaasJobLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaasJobLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaasJobLogCountArgs<ExtArgs>
            result: $Utils.Optional<SaasJobLogCountAggregateOutputType> | number
          }
        }
      }
      SaasRequest: {
        payload: Prisma.$SaasRequestPayload<ExtArgs>
        fields: Prisma.SaasRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaasRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaasRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasRequestPayload>
          }
          findFirst: {
            args: Prisma.SaasRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaasRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasRequestPayload>
          }
          findMany: {
            args: Prisma.SaasRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasRequestPayload>[]
          }
          create: {
            args: Prisma.SaasRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasRequestPayload>
          }
          createMany: {
            args: Prisma.SaasRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaasRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasRequestPayload>[]
          }
          delete: {
            args: Prisma.SaasRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasRequestPayload>
          }
          update: {
            args: Prisma.SaasRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasRequestPayload>
          }
          deleteMany: {
            args: Prisma.SaasRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaasRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaasRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasRequestPayload>[]
          }
          upsert: {
            args: Prisma.SaasRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaasRequestPayload>
          }
          aggregate: {
            args: Prisma.SaasRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaasRequest>
          }
          groupBy: {
            args: Prisma.SaasRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaasRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaasRequestCountArgs<ExtArgs>
            result: $Utils.Optional<SaasRequestCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
    collection?: CollectionOmit
    marketTransaction?: MarketTransactionOmit
    nftMetadata?: NftMetadataOmit
    project?: ProjectOmit
    saasJob?: SaasJobOmit
    saasJobLog?: SaasJobLogOmit
    saasRequest?: SaasRequestOmit
    user?: UserOmit
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
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    NftMetadata: number
    SaasRequest: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NftMetadata?: boolean | CollectionCountOutputTypeCountNftMetadataArgs
    SaasRequest?: boolean | CollectionCountOutputTypeCountSaasRequestArgs
  }

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountNftMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NftMetadataWhereInput
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountSaasRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaasRequestWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    Collection: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Collection?: boolean | ProjectCountOutputTypeCountCollectionArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }


  /**
   * Count Type SaasJobCountOutputType
   */

  export type SaasJobCountOutputType = {
    SaasJobLog: number
  }

  export type SaasJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SaasJobLog?: boolean | SaasJobCountOutputTypeCountSaasJobLogArgs
  }

  // Custom InputTypes
  /**
   * SaasJobCountOutputType without action
   */
  export type SaasJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobCountOutputType
     */
    select?: SaasJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaasJobCountOutputType without action
   */
  export type SaasJobCountOutputTypeCountSaasJobLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaasJobLogWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Collection: number
    MarketTransaction: number
    NftMetadata: number
    Project: number
    SaasRequest: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Collection?: boolean | UserCountOutputTypeCountCollectionArgs
    MarketTransaction?: boolean | UserCountOutputTypeCountMarketTransactionArgs
    NftMetadata?: boolean | UserCountOutputTypeCountNftMetadataArgs
    Project?: boolean | UserCountOutputTypeCountProjectArgs
    SaasRequest?: boolean | UserCountOutputTypeCountSaasRequestArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMarketTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNftMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NftMetadataWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSaasRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaasRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionAvgAggregateOutputType = {
    id: number | null
  }

  export type CollectionSumAggregateOutputType = {
    id: number | null
  }

  export type CollectionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    website: string | null
    image: string | null
    uri: string | null
    createdAt: Date | null
    creatorId: string | null
    publickey: string | null
    merkelTree: string | null
    projectId: string | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    website: string | null
    image: string | null
    uri: string | null
    createdAt: Date | null
    creatorId: string | null
    publickey: string | null
    merkelTree: string | null
    projectId: string | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    website: number
    image: number
    uri: number
    createdAt: number
    creatorId: number
    publickey: number
    merkelTree: number
    projectId: number
    _all: number
  }


  export type CollectionAvgAggregateInputType = {
    id?: true
  }

  export type CollectionSumAggregateInputType = {
    id?: true
  }

  export type CollectionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    website?: true
    image?: true
    uri?: true
    createdAt?: true
    creatorId?: true
    publickey?: true
    merkelTree?: true
    projectId?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    website?: true
    image?: true
    uri?: true
    createdAt?: true
    creatorId?: true
    publickey?: true
    merkelTree?: true
    projectId?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    website?: true
    image?: true
    uri?: true
    createdAt?: true
    creatorId?: true
    publickey?: true
    merkelTree?: true
    projectId?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _avg?: CollectionAvgAggregateInputType
    _sum?: CollectionSumAggregateInputType
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: number
    name: string
    description: string
    website: string | null
    image: string | null
    uri: string | null
    createdAt: Date
    creatorId: string
    publickey: string | null
    merkelTree: string | null
    projectId: string
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    image?: boolean
    uri?: boolean
    createdAt?: boolean
    creatorId?: boolean
    publickey?: boolean
    merkelTree?: boolean
    projectId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    NftMetadata?: boolean | Collection$NftMetadataArgs<ExtArgs>
    SaasRequest?: boolean | Collection$SaasRequestArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    image?: boolean
    uri?: boolean
    createdAt?: boolean
    creatorId?: boolean
    publickey?: boolean
    merkelTree?: boolean
    projectId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    image?: boolean
    uri?: boolean
    createdAt?: boolean
    creatorId?: boolean
    publickey?: boolean
    merkelTree?: boolean
    projectId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    image?: boolean
    uri?: boolean
    createdAt?: boolean
    creatorId?: boolean
    publickey?: boolean
    merkelTree?: boolean
    projectId?: boolean
  }

  export type CollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "website" | "image" | "uri" | "createdAt" | "creatorId" | "publickey" | "merkelTree" | "projectId", ExtArgs["result"]["collection"]>
  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    NftMetadata?: boolean | Collection$NftMetadataArgs<ExtArgs>
    SaasRequest?: boolean | Collection$SaasRequestArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Project: Prisma.$ProjectPayload<ExtArgs>
      NftMetadata: Prisma.$NftMetadataPayload<ExtArgs>[]
      SaasRequest: Prisma.$SaasRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      website: string | null
      image: string | null
      uri: string | null
      createdAt: Date
      creatorId: string
      publickey: string | null
      merkelTree: string | null
      projectId: string
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {CollectionCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections and returns the data updated in the database.
     * @param {CollectionUpdateManyAndReturnArgs} args - Arguments to update many Collections.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollectionUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    NftMetadata<T extends Collection$NftMetadataArgs<ExtArgs> = {}>(args?: Subset<T, Collection$NftMetadataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SaasRequest<T extends Collection$SaasRequestArgs<ExtArgs> = {}>(args?: Subset<T, Collection$SaasRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'Int'>
    readonly name: FieldRef<"Collection", 'String'>
    readonly description: FieldRef<"Collection", 'String'>
    readonly website: FieldRef<"Collection", 'String'>
    readonly image: FieldRef<"Collection", 'String'>
    readonly uri: FieldRef<"Collection", 'String'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
    readonly creatorId: FieldRef<"Collection", 'String'>
    readonly publickey: FieldRef<"Collection", 'String'>
    readonly merkelTree: FieldRef<"Collection", 'String'>
    readonly projectId: FieldRef<"Collection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collection createManyAndReturn
   */
  export type CollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
  }

  /**
   * Collection updateManyAndReturn
   */
  export type CollectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to delete.
     */
    limit?: number
  }

  /**
   * Collection.NftMetadata
   */
  export type Collection$NftMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
    where?: NftMetadataWhereInput
    orderBy?: NftMetadataOrderByWithRelationInput | NftMetadataOrderByWithRelationInput[]
    cursor?: NftMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NftMetadataScalarFieldEnum | NftMetadataScalarFieldEnum[]
  }

  /**
   * Collection.SaasRequest
   */
  export type Collection$SaasRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
    where?: SaasRequestWhereInput
    orderBy?: SaasRequestOrderByWithRelationInput | SaasRequestOrderByWithRelationInput[]
    cursor?: SaasRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaasRequestScalarFieldEnum | SaasRequestScalarFieldEnum[]
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model MarketTransaction
   */

  export type AggregateMarketTransaction = {
    _count: MarketTransactionCountAggregateOutputType | null
    _avg: MarketTransactionAvgAggregateOutputType | null
    _sum: MarketTransactionSumAggregateOutputType | null
    _min: MarketTransactionMinAggregateOutputType | null
    _max: MarketTransactionMaxAggregateOutputType | null
  }

  export type MarketTransactionAvgAggregateOutputType = {
    id: number | null
  }

  export type MarketTransactionSumAggregateOutputType = {
    id: number | null
  }

  export type MarketTransactionMinAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    userId: string | null
    price: string | null
    createdAt: Date | null
    assetId: string | null
    merkleTree: string | null
    pda: string | null
    tx: string | null
  }

  export type MarketTransactionMaxAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    userId: string | null
    price: string | null
    createdAt: Date | null
    assetId: string | null
    merkleTree: string | null
    pda: string | null
    tx: string | null
  }

  export type MarketTransactionCountAggregateOutputType = {
    id: number
    type: number
    userId: number
    price: number
    createdAt: number
    assetId: number
    merkleTree: number
    pda: number
    tx: number
    _all: number
  }


  export type MarketTransactionAvgAggregateInputType = {
    id?: true
  }

  export type MarketTransactionSumAggregateInputType = {
    id?: true
  }

  export type MarketTransactionMinAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    price?: true
    createdAt?: true
    assetId?: true
    merkleTree?: true
    pda?: true
    tx?: true
  }

  export type MarketTransactionMaxAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    price?: true
    createdAt?: true
    assetId?: true
    merkleTree?: true
    pda?: true
    tx?: true
  }

  export type MarketTransactionCountAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    price?: true
    createdAt?: true
    assetId?: true
    merkleTree?: true
    pda?: true
    tx?: true
    _all?: true
  }

  export type MarketTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketTransaction to aggregate.
     */
    where?: MarketTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketTransactions to fetch.
     */
    orderBy?: MarketTransactionOrderByWithRelationInput | MarketTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketTransactions
    **/
    _count?: true | MarketTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketTransactionMaxAggregateInputType
  }

  export type GetMarketTransactionAggregateType<T extends MarketTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketTransaction[P]>
      : GetScalarType<T[P], AggregateMarketTransaction[P]>
  }




  export type MarketTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketTransactionWhereInput
    orderBy?: MarketTransactionOrderByWithAggregationInput | MarketTransactionOrderByWithAggregationInput[]
    by: MarketTransactionScalarFieldEnum[] | MarketTransactionScalarFieldEnum
    having?: MarketTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketTransactionCountAggregateInputType | true
    _avg?: MarketTransactionAvgAggregateInputType
    _sum?: MarketTransactionSumAggregateInputType
    _min?: MarketTransactionMinAggregateInputType
    _max?: MarketTransactionMaxAggregateInputType
  }

  export type MarketTransactionGroupByOutputType = {
    id: number
    type: $Enums.TransactionType
    userId: string
    price: string
    createdAt: Date
    assetId: string
    merkleTree: string
    pda: string | null
    tx: string | null
    _count: MarketTransactionCountAggregateOutputType | null
    _avg: MarketTransactionAvgAggregateOutputType | null
    _sum: MarketTransactionSumAggregateOutputType | null
    _min: MarketTransactionMinAggregateOutputType | null
    _max: MarketTransactionMaxAggregateOutputType | null
  }

  type GetMarketTransactionGroupByPayload<T extends MarketTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], MarketTransactionGroupByOutputType[P]>
        }
      >
    >


  export type MarketTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    price?: boolean
    createdAt?: boolean
    assetId?: boolean
    merkleTree?: boolean
    pda?: boolean
    tx?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketTransaction"]>

  export type MarketTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    price?: boolean
    createdAt?: boolean
    assetId?: boolean
    merkleTree?: boolean
    pda?: boolean
    tx?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketTransaction"]>

  export type MarketTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    price?: boolean
    createdAt?: boolean
    assetId?: boolean
    merkleTree?: boolean
    pda?: boolean
    tx?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketTransaction"]>

  export type MarketTransactionSelectScalar = {
    id?: boolean
    type?: boolean
    userId?: boolean
    price?: boolean
    createdAt?: boolean
    assetId?: boolean
    merkleTree?: boolean
    pda?: boolean
    tx?: boolean
  }

  export type MarketTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "userId" | "price" | "createdAt" | "assetId" | "merkleTree" | "pda" | "tx", ExtArgs["result"]["marketTransaction"]>
  export type MarketTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MarketTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MarketTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MarketTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketTransaction"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.TransactionType
      userId: string
      price: string
      createdAt: Date
      assetId: string
      merkleTree: string
      pda: string | null
      tx: string | null
    }, ExtArgs["result"]["marketTransaction"]>
    composites: {}
  }

  type MarketTransactionGetPayload<S extends boolean | null | undefined | MarketTransactionDefaultArgs> = $Result.GetResult<Prisma.$MarketTransactionPayload, S>

  type MarketTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketTransactionCountAggregateInputType | true
    }

  export interface MarketTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketTransaction'], meta: { name: 'MarketTransaction' } }
    /**
     * Find zero or one MarketTransaction that matches the filter.
     * @param {MarketTransactionFindUniqueArgs} args - Arguments to find a MarketTransaction
     * @example
     * // Get one MarketTransaction
     * const marketTransaction = await prisma.marketTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketTransactionFindUniqueArgs>(args: SelectSubset<T, MarketTransactionFindUniqueArgs<ExtArgs>>): Prisma__MarketTransactionClient<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketTransactionFindUniqueOrThrowArgs} args - Arguments to find a MarketTransaction
     * @example
     * // Get one MarketTransaction
     * const marketTransaction = await prisma.marketTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketTransactionClient<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTransactionFindFirstArgs} args - Arguments to find a MarketTransaction
     * @example
     * // Get one MarketTransaction
     * const marketTransaction = await prisma.marketTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketTransactionFindFirstArgs>(args?: SelectSubset<T, MarketTransactionFindFirstArgs<ExtArgs>>): Prisma__MarketTransactionClient<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTransactionFindFirstOrThrowArgs} args - Arguments to find a MarketTransaction
     * @example
     * // Get one MarketTransaction
     * const marketTransaction = await prisma.marketTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketTransactionClient<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketTransactions
     * const marketTransactions = await prisma.marketTransaction.findMany()
     * 
     * // Get first 10 MarketTransactions
     * const marketTransactions = await prisma.marketTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketTransactionWithIdOnly = await prisma.marketTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketTransactionFindManyArgs>(args?: SelectSubset<T, MarketTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketTransaction.
     * @param {MarketTransactionCreateArgs} args - Arguments to create a MarketTransaction.
     * @example
     * // Create one MarketTransaction
     * const MarketTransaction = await prisma.marketTransaction.create({
     *   data: {
     *     // ... data to create a MarketTransaction
     *   }
     * })
     * 
     */
    create<T extends MarketTransactionCreateArgs>(args: SelectSubset<T, MarketTransactionCreateArgs<ExtArgs>>): Prisma__MarketTransactionClient<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketTransactions.
     * @param {MarketTransactionCreateManyArgs} args - Arguments to create many MarketTransactions.
     * @example
     * // Create many MarketTransactions
     * const marketTransaction = await prisma.marketTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketTransactionCreateManyArgs>(args?: SelectSubset<T, MarketTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketTransactions and returns the data saved in the database.
     * @param {MarketTransactionCreateManyAndReturnArgs} args - Arguments to create many MarketTransactions.
     * @example
     * // Create many MarketTransactions
     * const marketTransaction = await prisma.marketTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketTransactions and only return the `id`
     * const marketTransactionWithIdOnly = await prisma.marketTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketTransaction.
     * @param {MarketTransactionDeleteArgs} args - Arguments to delete one MarketTransaction.
     * @example
     * // Delete one MarketTransaction
     * const MarketTransaction = await prisma.marketTransaction.delete({
     *   where: {
     *     // ... filter to delete one MarketTransaction
     *   }
     * })
     * 
     */
    delete<T extends MarketTransactionDeleteArgs>(args: SelectSubset<T, MarketTransactionDeleteArgs<ExtArgs>>): Prisma__MarketTransactionClient<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketTransaction.
     * @param {MarketTransactionUpdateArgs} args - Arguments to update one MarketTransaction.
     * @example
     * // Update one MarketTransaction
     * const marketTransaction = await prisma.marketTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketTransactionUpdateArgs>(args: SelectSubset<T, MarketTransactionUpdateArgs<ExtArgs>>): Prisma__MarketTransactionClient<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketTransactions.
     * @param {MarketTransactionDeleteManyArgs} args - Arguments to filter MarketTransactions to delete.
     * @example
     * // Delete a few MarketTransactions
     * const { count } = await prisma.marketTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketTransactionDeleteManyArgs>(args?: SelectSubset<T, MarketTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketTransactions
     * const marketTransaction = await prisma.marketTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketTransactionUpdateManyArgs>(args: SelectSubset<T, MarketTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketTransactions and returns the data updated in the database.
     * @param {MarketTransactionUpdateManyAndReturnArgs} args - Arguments to update many MarketTransactions.
     * @example
     * // Update many MarketTransactions
     * const marketTransaction = await prisma.marketTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketTransactions and only return the `id`
     * const marketTransactionWithIdOnly = await prisma.marketTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketTransaction.
     * @param {MarketTransactionUpsertArgs} args - Arguments to update or create a MarketTransaction.
     * @example
     * // Update or create a MarketTransaction
     * const marketTransaction = await prisma.marketTransaction.upsert({
     *   create: {
     *     // ... data to create a MarketTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketTransaction we want to update
     *   }
     * })
     */
    upsert<T extends MarketTransactionUpsertArgs>(args: SelectSubset<T, MarketTransactionUpsertArgs<ExtArgs>>): Prisma__MarketTransactionClient<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTransactionCountArgs} args - Arguments to filter MarketTransactions to count.
     * @example
     * // Count the number of MarketTransactions
     * const count = await prisma.marketTransaction.count({
     *   where: {
     *     // ... the filter for the MarketTransactions we want to count
     *   }
     * })
    **/
    count<T extends MarketTransactionCountArgs>(
      args?: Subset<T, MarketTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketTransactionAggregateArgs>(args: Subset<T, MarketTransactionAggregateArgs>): Prisma.PrismaPromise<GetMarketTransactionAggregateType<T>>

    /**
     * Group by MarketTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTransactionGroupByArgs} args - Group by arguments.
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
      T extends MarketTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketTransactionGroupByArgs['orderBy'] }
        : { orderBy?: MarketTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketTransaction model
   */
  readonly fields: MarketTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MarketTransaction model
   */
  interface MarketTransactionFieldRefs {
    readonly id: FieldRef<"MarketTransaction", 'Int'>
    readonly type: FieldRef<"MarketTransaction", 'TransactionType'>
    readonly userId: FieldRef<"MarketTransaction", 'String'>
    readonly price: FieldRef<"MarketTransaction", 'String'>
    readonly createdAt: FieldRef<"MarketTransaction", 'DateTime'>
    readonly assetId: FieldRef<"MarketTransaction", 'String'>
    readonly merkleTree: FieldRef<"MarketTransaction", 'String'>
    readonly pda: FieldRef<"MarketTransaction", 'String'>
    readonly tx: FieldRef<"MarketTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MarketTransaction findUnique
   */
  export type MarketTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionInclude<ExtArgs> | null
    /**
     * Filter, which MarketTransaction to fetch.
     */
    where: MarketTransactionWhereUniqueInput
  }

  /**
   * MarketTransaction findUniqueOrThrow
   */
  export type MarketTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionInclude<ExtArgs> | null
    /**
     * Filter, which MarketTransaction to fetch.
     */
    where: MarketTransactionWhereUniqueInput
  }

  /**
   * MarketTransaction findFirst
   */
  export type MarketTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionInclude<ExtArgs> | null
    /**
     * Filter, which MarketTransaction to fetch.
     */
    where?: MarketTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketTransactions to fetch.
     */
    orderBy?: MarketTransactionOrderByWithRelationInput | MarketTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketTransactions.
     */
    cursor?: MarketTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketTransactions.
     */
    distinct?: MarketTransactionScalarFieldEnum | MarketTransactionScalarFieldEnum[]
  }

  /**
   * MarketTransaction findFirstOrThrow
   */
  export type MarketTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionInclude<ExtArgs> | null
    /**
     * Filter, which MarketTransaction to fetch.
     */
    where?: MarketTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketTransactions to fetch.
     */
    orderBy?: MarketTransactionOrderByWithRelationInput | MarketTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketTransactions.
     */
    cursor?: MarketTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketTransactions.
     */
    distinct?: MarketTransactionScalarFieldEnum | MarketTransactionScalarFieldEnum[]
  }

  /**
   * MarketTransaction findMany
   */
  export type MarketTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionInclude<ExtArgs> | null
    /**
     * Filter, which MarketTransactions to fetch.
     */
    where?: MarketTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketTransactions to fetch.
     */
    orderBy?: MarketTransactionOrderByWithRelationInput | MarketTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketTransactions.
     */
    cursor?: MarketTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketTransactions.
     */
    skip?: number
    distinct?: MarketTransactionScalarFieldEnum | MarketTransactionScalarFieldEnum[]
  }

  /**
   * MarketTransaction create
   */
  export type MarketTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketTransaction.
     */
    data: XOR<MarketTransactionCreateInput, MarketTransactionUncheckedCreateInput>
  }

  /**
   * MarketTransaction createMany
   */
  export type MarketTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketTransactions.
     */
    data: MarketTransactionCreateManyInput | MarketTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketTransaction createManyAndReturn
   */
  export type MarketTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many MarketTransactions.
     */
    data: MarketTransactionCreateManyInput | MarketTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketTransaction update
   */
  export type MarketTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketTransaction.
     */
    data: XOR<MarketTransactionUpdateInput, MarketTransactionUncheckedUpdateInput>
    /**
     * Choose, which MarketTransaction to update.
     */
    where: MarketTransactionWhereUniqueInput
  }

  /**
   * MarketTransaction updateMany
   */
  export type MarketTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketTransactions.
     */
    data: XOR<MarketTransactionUpdateManyMutationInput, MarketTransactionUncheckedUpdateManyInput>
    /**
     * Filter which MarketTransactions to update
     */
    where?: MarketTransactionWhereInput
    /**
     * Limit how many MarketTransactions to update.
     */
    limit?: number
  }

  /**
   * MarketTransaction updateManyAndReturn
   */
  export type MarketTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * The data used to update MarketTransactions.
     */
    data: XOR<MarketTransactionUpdateManyMutationInput, MarketTransactionUncheckedUpdateManyInput>
    /**
     * Filter which MarketTransactions to update
     */
    where?: MarketTransactionWhereInput
    /**
     * Limit how many MarketTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketTransaction upsert
   */
  export type MarketTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketTransaction to update in case it exists.
     */
    where: MarketTransactionWhereUniqueInput
    /**
     * In case the MarketTransaction found by the `where` argument doesn't exist, create a new MarketTransaction with this data.
     */
    create: XOR<MarketTransactionCreateInput, MarketTransactionUncheckedCreateInput>
    /**
     * In case the MarketTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketTransactionUpdateInput, MarketTransactionUncheckedUpdateInput>
  }

  /**
   * MarketTransaction delete
   */
  export type MarketTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionInclude<ExtArgs> | null
    /**
     * Filter which MarketTransaction to delete.
     */
    where: MarketTransactionWhereUniqueInput
  }

  /**
   * MarketTransaction deleteMany
   */
  export type MarketTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketTransactions to delete
     */
    where?: MarketTransactionWhereInput
    /**
     * Limit how many MarketTransactions to delete.
     */
    limit?: number
  }

  /**
   * MarketTransaction without action
   */
  export type MarketTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionInclude<ExtArgs> | null
  }


  /**
   * Model NftMetadata
   */

  export type AggregateNftMetadata = {
    _count: NftMetadataCountAggregateOutputType | null
    _avg: NftMetadataAvgAggregateOutputType | null
    _sum: NftMetadataSumAggregateOutputType | null
    _min: NftMetadataMinAggregateOutputType | null
    _max: NftMetadataMaxAggregateOutputType | null
  }

  export type NftMetadataAvgAggregateOutputType = {
    collectionId: number | null
    id: number | null
  }

  export type NftMetadataSumAggregateOutputType = {
    collectionId: number | null
    id: number | null
  }

  export type NftMetadataMinAggregateOutputType = {
    name: string | null
    description: string | null
    image: string | null
    collectionId: number | null
    createdAt: Date | null
    creatorId: string | null
    address: string | null
    assetId: string | null
    minted: boolean | null
    uri: string | null
    tx: string | null
    id: number | null
  }

  export type NftMetadataMaxAggregateOutputType = {
    name: string | null
    description: string | null
    image: string | null
    collectionId: number | null
    createdAt: Date | null
    creatorId: string | null
    address: string | null
    assetId: string | null
    minted: boolean | null
    uri: string | null
    tx: string | null
    id: number | null
  }

  export type NftMetadataCountAggregateOutputType = {
    name: number
    description: number
    image: number
    metadata: number
    collectionId: number
    createdAt: number
    creatorId: number
    address: number
    assetId: number
    minted: number
    uri: number
    tx: number
    id: number
    _all: number
  }


  export type NftMetadataAvgAggregateInputType = {
    collectionId?: true
    id?: true
  }

  export type NftMetadataSumAggregateInputType = {
    collectionId?: true
    id?: true
  }

  export type NftMetadataMinAggregateInputType = {
    name?: true
    description?: true
    image?: true
    collectionId?: true
    createdAt?: true
    creatorId?: true
    address?: true
    assetId?: true
    minted?: true
    uri?: true
    tx?: true
    id?: true
  }

  export type NftMetadataMaxAggregateInputType = {
    name?: true
    description?: true
    image?: true
    collectionId?: true
    createdAt?: true
    creatorId?: true
    address?: true
    assetId?: true
    minted?: true
    uri?: true
    tx?: true
    id?: true
  }

  export type NftMetadataCountAggregateInputType = {
    name?: true
    description?: true
    image?: true
    metadata?: true
    collectionId?: true
    createdAt?: true
    creatorId?: true
    address?: true
    assetId?: true
    minted?: true
    uri?: true
    tx?: true
    id?: true
    _all?: true
  }

  export type NftMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NftMetadata to aggregate.
     */
    where?: NftMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NftMetadata to fetch.
     */
    orderBy?: NftMetadataOrderByWithRelationInput | NftMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NftMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NftMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NftMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NftMetadata
    **/
    _count?: true | NftMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NftMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NftMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NftMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NftMetadataMaxAggregateInputType
  }

  export type GetNftMetadataAggregateType<T extends NftMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateNftMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNftMetadata[P]>
      : GetScalarType<T[P], AggregateNftMetadata[P]>
  }




  export type NftMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NftMetadataWhereInput
    orderBy?: NftMetadataOrderByWithAggregationInput | NftMetadataOrderByWithAggregationInput[]
    by: NftMetadataScalarFieldEnum[] | NftMetadataScalarFieldEnum
    having?: NftMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NftMetadataCountAggregateInputType | true
    _avg?: NftMetadataAvgAggregateInputType
    _sum?: NftMetadataSumAggregateInputType
    _min?: NftMetadataMinAggregateInputType
    _max?: NftMetadataMaxAggregateInputType
  }

  export type NftMetadataGroupByOutputType = {
    name: string
    description: string
    image: string
    metadata: JsonValue
    collectionId: number
    createdAt: Date
    creatorId: string
    address: string | null
    assetId: string | null
    minted: boolean
    uri: string | null
    tx: string | null
    id: number
    _count: NftMetadataCountAggregateOutputType | null
    _avg: NftMetadataAvgAggregateOutputType | null
    _sum: NftMetadataSumAggregateOutputType | null
    _min: NftMetadataMinAggregateOutputType | null
    _max: NftMetadataMaxAggregateOutputType | null
  }

  type GetNftMetadataGroupByPayload<T extends NftMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NftMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NftMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NftMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], NftMetadataGroupByOutputType[P]>
        }
      >
    >


  export type NftMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    image?: boolean
    metadata?: boolean
    collectionId?: boolean
    createdAt?: boolean
    creatorId?: boolean
    address?: boolean
    assetId?: boolean
    minted?: boolean
    uri?: boolean
    tx?: boolean
    id?: boolean
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nftMetadata"]>

  export type NftMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    image?: boolean
    metadata?: boolean
    collectionId?: boolean
    createdAt?: boolean
    creatorId?: boolean
    address?: boolean
    assetId?: boolean
    minted?: boolean
    uri?: boolean
    tx?: boolean
    id?: boolean
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nftMetadata"]>

  export type NftMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    image?: boolean
    metadata?: boolean
    collectionId?: boolean
    createdAt?: boolean
    creatorId?: boolean
    address?: boolean
    assetId?: boolean
    minted?: boolean
    uri?: boolean
    tx?: boolean
    id?: boolean
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nftMetadata"]>

  export type NftMetadataSelectScalar = {
    name?: boolean
    description?: boolean
    image?: boolean
    metadata?: boolean
    collectionId?: boolean
    createdAt?: boolean
    creatorId?: boolean
    address?: boolean
    assetId?: boolean
    minted?: boolean
    uri?: boolean
    tx?: boolean
    id?: boolean
  }

  export type NftMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "description" | "image" | "metadata" | "collectionId" | "createdAt" | "creatorId" | "address" | "assetId" | "minted" | "uri" | "tx" | "id", ExtArgs["result"]["nftMetadata"]>
  export type NftMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NftMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NftMetadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NftMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NftMetadata"
    objects: {
      Collection: Prisma.$CollectionPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      description: string
      image: string
      metadata: Prisma.JsonValue
      collectionId: number
      createdAt: Date
      creatorId: string
      address: string | null
      assetId: string | null
      minted: boolean
      uri: string | null
      tx: string | null
      id: number
    }, ExtArgs["result"]["nftMetadata"]>
    composites: {}
  }

  type NftMetadataGetPayload<S extends boolean | null | undefined | NftMetadataDefaultArgs> = $Result.GetResult<Prisma.$NftMetadataPayload, S>

  type NftMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NftMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NftMetadataCountAggregateInputType | true
    }

  export interface NftMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NftMetadata'], meta: { name: 'NftMetadata' } }
    /**
     * Find zero or one NftMetadata that matches the filter.
     * @param {NftMetadataFindUniqueArgs} args - Arguments to find a NftMetadata
     * @example
     * // Get one NftMetadata
     * const nftMetadata = await prisma.nftMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NftMetadataFindUniqueArgs>(args: SelectSubset<T, NftMetadataFindUniqueArgs<ExtArgs>>): Prisma__NftMetadataClient<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NftMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NftMetadataFindUniqueOrThrowArgs} args - Arguments to find a NftMetadata
     * @example
     * // Get one NftMetadata
     * const nftMetadata = await prisma.nftMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NftMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, NftMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NftMetadataClient<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NftMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftMetadataFindFirstArgs} args - Arguments to find a NftMetadata
     * @example
     * // Get one NftMetadata
     * const nftMetadata = await prisma.nftMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NftMetadataFindFirstArgs>(args?: SelectSubset<T, NftMetadataFindFirstArgs<ExtArgs>>): Prisma__NftMetadataClient<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NftMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftMetadataFindFirstOrThrowArgs} args - Arguments to find a NftMetadata
     * @example
     * // Get one NftMetadata
     * const nftMetadata = await prisma.nftMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NftMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, NftMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__NftMetadataClient<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NftMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NftMetadata
     * const nftMetadata = await prisma.nftMetadata.findMany()
     * 
     * // Get first 10 NftMetadata
     * const nftMetadata = await prisma.nftMetadata.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const nftMetadataWithNameOnly = await prisma.nftMetadata.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends NftMetadataFindManyArgs>(args?: SelectSubset<T, NftMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NftMetadata.
     * @param {NftMetadataCreateArgs} args - Arguments to create a NftMetadata.
     * @example
     * // Create one NftMetadata
     * const NftMetadata = await prisma.nftMetadata.create({
     *   data: {
     *     // ... data to create a NftMetadata
     *   }
     * })
     * 
     */
    create<T extends NftMetadataCreateArgs>(args: SelectSubset<T, NftMetadataCreateArgs<ExtArgs>>): Prisma__NftMetadataClient<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NftMetadata.
     * @param {NftMetadataCreateManyArgs} args - Arguments to create many NftMetadata.
     * @example
     * // Create many NftMetadata
     * const nftMetadata = await prisma.nftMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NftMetadataCreateManyArgs>(args?: SelectSubset<T, NftMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NftMetadata and returns the data saved in the database.
     * @param {NftMetadataCreateManyAndReturnArgs} args - Arguments to create many NftMetadata.
     * @example
     * // Create many NftMetadata
     * const nftMetadata = await prisma.nftMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NftMetadata and only return the `name`
     * const nftMetadataWithNameOnly = await prisma.nftMetadata.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NftMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, NftMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NftMetadata.
     * @param {NftMetadataDeleteArgs} args - Arguments to delete one NftMetadata.
     * @example
     * // Delete one NftMetadata
     * const NftMetadata = await prisma.nftMetadata.delete({
     *   where: {
     *     // ... filter to delete one NftMetadata
     *   }
     * })
     * 
     */
    delete<T extends NftMetadataDeleteArgs>(args: SelectSubset<T, NftMetadataDeleteArgs<ExtArgs>>): Prisma__NftMetadataClient<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NftMetadata.
     * @param {NftMetadataUpdateArgs} args - Arguments to update one NftMetadata.
     * @example
     * // Update one NftMetadata
     * const nftMetadata = await prisma.nftMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NftMetadataUpdateArgs>(args: SelectSubset<T, NftMetadataUpdateArgs<ExtArgs>>): Prisma__NftMetadataClient<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NftMetadata.
     * @param {NftMetadataDeleteManyArgs} args - Arguments to filter NftMetadata to delete.
     * @example
     * // Delete a few NftMetadata
     * const { count } = await prisma.nftMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NftMetadataDeleteManyArgs>(args?: SelectSubset<T, NftMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NftMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NftMetadata
     * const nftMetadata = await prisma.nftMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NftMetadataUpdateManyArgs>(args: SelectSubset<T, NftMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NftMetadata and returns the data updated in the database.
     * @param {NftMetadataUpdateManyAndReturnArgs} args - Arguments to update many NftMetadata.
     * @example
     * // Update many NftMetadata
     * const nftMetadata = await prisma.nftMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NftMetadata and only return the `name`
     * const nftMetadataWithNameOnly = await prisma.nftMetadata.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NftMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, NftMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NftMetadata.
     * @param {NftMetadataUpsertArgs} args - Arguments to update or create a NftMetadata.
     * @example
     * // Update or create a NftMetadata
     * const nftMetadata = await prisma.nftMetadata.upsert({
     *   create: {
     *     // ... data to create a NftMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NftMetadata we want to update
     *   }
     * })
     */
    upsert<T extends NftMetadataUpsertArgs>(args: SelectSubset<T, NftMetadataUpsertArgs<ExtArgs>>): Prisma__NftMetadataClient<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NftMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftMetadataCountArgs} args - Arguments to filter NftMetadata to count.
     * @example
     * // Count the number of NftMetadata
     * const count = await prisma.nftMetadata.count({
     *   where: {
     *     // ... the filter for the NftMetadata we want to count
     *   }
     * })
    **/
    count<T extends NftMetadataCountArgs>(
      args?: Subset<T, NftMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NftMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NftMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NftMetadataAggregateArgs>(args: Subset<T, NftMetadataAggregateArgs>): Prisma.PrismaPromise<GetNftMetadataAggregateType<T>>

    /**
     * Group by NftMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftMetadataGroupByArgs} args - Group by arguments.
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
      T extends NftMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NftMetadataGroupByArgs['orderBy'] }
        : { orderBy?: NftMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NftMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNftMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NftMetadata model
   */
  readonly fields: NftMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NftMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NftMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NftMetadata model
   */
  interface NftMetadataFieldRefs {
    readonly name: FieldRef<"NftMetadata", 'String'>
    readonly description: FieldRef<"NftMetadata", 'String'>
    readonly image: FieldRef<"NftMetadata", 'String'>
    readonly metadata: FieldRef<"NftMetadata", 'Json'>
    readonly collectionId: FieldRef<"NftMetadata", 'Int'>
    readonly createdAt: FieldRef<"NftMetadata", 'DateTime'>
    readonly creatorId: FieldRef<"NftMetadata", 'String'>
    readonly address: FieldRef<"NftMetadata", 'String'>
    readonly assetId: FieldRef<"NftMetadata", 'String'>
    readonly minted: FieldRef<"NftMetadata", 'Boolean'>
    readonly uri: FieldRef<"NftMetadata", 'String'>
    readonly tx: FieldRef<"NftMetadata", 'String'>
    readonly id: FieldRef<"NftMetadata", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NftMetadata findUnique
   */
  export type NftMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
    /**
     * Filter, which NftMetadata to fetch.
     */
    where: NftMetadataWhereUniqueInput
  }

  /**
   * NftMetadata findUniqueOrThrow
   */
  export type NftMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
    /**
     * Filter, which NftMetadata to fetch.
     */
    where: NftMetadataWhereUniqueInput
  }

  /**
   * NftMetadata findFirst
   */
  export type NftMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
    /**
     * Filter, which NftMetadata to fetch.
     */
    where?: NftMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NftMetadata to fetch.
     */
    orderBy?: NftMetadataOrderByWithRelationInput | NftMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NftMetadata.
     */
    cursor?: NftMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NftMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NftMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NftMetadata.
     */
    distinct?: NftMetadataScalarFieldEnum | NftMetadataScalarFieldEnum[]
  }

  /**
   * NftMetadata findFirstOrThrow
   */
  export type NftMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
    /**
     * Filter, which NftMetadata to fetch.
     */
    where?: NftMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NftMetadata to fetch.
     */
    orderBy?: NftMetadataOrderByWithRelationInput | NftMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NftMetadata.
     */
    cursor?: NftMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NftMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NftMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NftMetadata.
     */
    distinct?: NftMetadataScalarFieldEnum | NftMetadataScalarFieldEnum[]
  }

  /**
   * NftMetadata findMany
   */
  export type NftMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
    /**
     * Filter, which NftMetadata to fetch.
     */
    where?: NftMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NftMetadata to fetch.
     */
    orderBy?: NftMetadataOrderByWithRelationInput | NftMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NftMetadata.
     */
    cursor?: NftMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NftMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NftMetadata.
     */
    skip?: number
    distinct?: NftMetadataScalarFieldEnum | NftMetadataScalarFieldEnum[]
  }

  /**
   * NftMetadata create
   */
  export type NftMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a NftMetadata.
     */
    data: XOR<NftMetadataCreateInput, NftMetadataUncheckedCreateInput>
  }

  /**
   * NftMetadata createMany
   */
  export type NftMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NftMetadata.
     */
    data: NftMetadataCreateManyInput | NftMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NftMetadata createManyAndReturn
   */
  export type NftMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many NftMetadata.
     */
    data: NftMetadataCreateManyInput | NftMetadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NftMetadata update
   */
  export type NftMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a NftMetadata.
     */
    data: XOR<NftMetadataUpdateInput, NftMetadataUncheckedUpdateInput>
    /**
     * Choose, which NftMetadata to update.
     */
    where: NftMetadataWhereUniqueInput
  }

  /**
   * NftMetadata updateMany
   */
  export type NftMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NftMetadata.
     */
    data: XOR<NftMetadataUpdateManyMutationInput, NftMetadataUncheckedUpdateManyInput>
    /**
     * Filter which NftMetadata to update
     */
    where?: NftMetadataWhereInput
    /**
     * Limit how many NftMetadata to update.
     */
    limit?: number
  }

  /**
   * NftMetadata updateManyAndReturn
   */
  export type NftMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * The data used to update NftMetadata.
     */
    data: XOR<NftMetadataUpdateManyMutationInput, NftMetadataUncheckedUpdateManyInput>
    /**
     * Filter which NftMetadata to update
     */
    where?: NftMetadataWhereInput
    /**
     * Limit how many NftMetadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NftMetadata upsert
   */
  export type NftMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the NftMetadata to update in case it exists.
     */
    where: NftMetadataWhereUniqueInput
    /**
     * In case the NftMetadata found by the `where` argument doesn't exist, create a new NftMetadata with this data.
     */
    create: XOR<NftMetadataCreateInput, NftMetadataUncheckedCreateInput>
    /**
     * In case the NftMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NftMetadataUpdateInput, NftMetadataUncheckedUpdateInput>
  }

  /**
   * NftMetadata delete
   */
  export type NftMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
    /**
     * Filter which NftMetadata to delete.
     */
    where: NftMetadataWhereUniqueInput
  }

  /**
   * NftMetadata deleteMany
   */
  export type NftMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NftMetadata to delete
     */
    where?: NftMetadataWhereInput
    /**
     * Limit how many NftMetadata to delete.
     */
    limit?: number
  }

  /**
   * NftMetadata without action
   */
  export type NftMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    description: string | null
    visibility: $Enums.Visibility | null
    userId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    description: string | null
    visibility: $Enums.Visibility | null
    userId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    content: number
    description: number
    images: number
    visibility: number
    userId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    description?: true
    visibility?: true
    userId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    description?: true
    visibility?: true
    userId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    description?: true
    images?: true
    visibility?: true
    userId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date | null
    content: string
    description: string
    images: string[]
    visibility: $Enums.Visibility
    userId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    description?: boolean
    images?: boolean
    visibility?: boolean
    userId?: boolean
    Collection?: boolean | Project$CollectionArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    description?: boolean
    images?: boolean
    visibility?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    description?: boolean
    images?: boolean
    visibility?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    description?: boolean
    images?: boolean
    visibility?: boolean
    userId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "content" | "description" | "images" | "visibility" | "userId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Collection?: boolean | Project$CollectionArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      Collection: Prisma.$CollectionPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date | null
      content: string
      description: string
      images: string[]
      visibility: $Enums.Visibility
      userId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Collection<T extends Project$CollectionArgs<ExtArgs> = {}>(args?: Subset<T, Project$CollectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly content: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly images: FieldRef<"Project", 'String[]'>
    readonly visibility: FieldRef<"Project", 'Visibility'>
    readonly userId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.Collection
   */
  export type Project$CollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model SaasJob
   */

  export type AggregateSaasJob = {
    _count: SaasJobCountAggregateOutputType | null
    _avg: SaasJobAvgAggregateOutputType | null
    _sum: SaasJobSumAggregateOutputType | null
    _min: SaasJobMinAggregateOutputType | null
    _max: SaasJobMaxAggregateOutputType | null
  }

  export type SaasJobAvgAggregateOutputType = {
    id: number | null
    runCount: number | null
  }

  export type SaasJobSumAggregateOutputType = {
    id: number | null
    runCount: number | null
  }

  export type SaasJobMinAggregateOutputType = {
    id: number | null
    name: string | null
    runCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaasJobMaxAggregateOutputType = {
    id: number | null
    name: string | null
    runCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaasJobCountAggregateOutputType = {
    id: number
    name: number
    runCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SaasJobAvgAggregateInputType = {
    id?: true
    runCount?: true
  }

  export type SaasJobSumAggregateInputType = {
    id?: true
    runCount?: true
  }

  export type SaasJobMinAggregateInputType = {
    id?: true
    name?: true
    runCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaasJobMaxAggregateInputType = {
    id?: true
    name?: true
    runCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaasJobCountAggregateInputType = {
    id?: true
    name?: true
    runCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SaasJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaasJob to aggregate.
     */
    where?: SaasJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasJobs to fetch.
     */
    orderBy?: SaasJobOrderByWithRelationInput | SaasJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaasJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaasJobs
    **/
    _count?: true | SaasJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaasJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaasJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaasJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaasJobMaxAggregateInputType
  }

  export type GetSaasJobAggregateType<T extends SaasJobAggregateArgs> = {
        [P in keyof T & keyof AggregateSaasJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaasJob[P]>
      : GetScalarType<T[P], AggregateSaasJob[P]>
  }




  export type SaasJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaasJobWhereInput
    orderBy?: SaasJobOrderByWithAggregationInput | SaasJobOrderByWithAggregationInput[]
    by: SaasJobScalarFieldEnum[] | SaasJobScalarFieldEnum
    having?: SaasJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaasJobCountAggregateInputType | true
    _avg?: SaasJobAvgAggregateInputType
    _sum?: SaasJobSumAggregateInputType
    _min?: SaasJobMinAggregateInputType
    _max?: SaasJobMaxAggregateInputType
  }

  export type SaasJobGroupByOutputType = {
    id: number
    name: string
    runCount: number
    createdAt: Date
    updatedAt: Date | null
    _count: SaasJobCountAggregateOutputType | null
    _avg: SaasJobAvgAggregateOutputType | null
    _sum: SaasJobSumAggregateOutputType | null
    _min: SaasJobMinAggregateOutputType | null
    _max: SaasJobMaxAggregateOutputType | null
  }

  type GetSaasJobGroupByPayload<T extends SaasJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaasJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaasJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaasJobGroupByOutputType[P]>
            : GetScalarType<T[P], SaasJobGroupByOutputType[P]>
        }
      >
    >


  export type SaasJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    runCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SaasJobLog?: boolean | SaasJob$SaasJobLogArgs<ExtArgs>
    _count?: boolean | SaasJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saasJob"]>

  export type SaasJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    runCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["saasJob"]>

  export type SaasJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    runCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["saasJob"]>

  export type SaasJobSelectScalar = {
    id?: boolean
    name?: boolean
    runCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SaasJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "runCount" | "createdAt" | "updatedAt", ExtArgs["result"]["saasJob"]>
  export type SaasJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SaasJobLog?: boolean | SaasJob$SaasJobLogArgs<ExtArgs>
    _count?: boolean | SaasJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaasJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SaasJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SaasJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaasJob"
    objects: {
      SaasJobLog: Prisma.$SaasJobLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      runCount: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["saasJob"]>
    composites: {}
  }

  type SaasJobGetPayload<S extends boolean | null | undefined | SaasJobDefaultArgs> = $Result.GetResult<Prisma.$SaasJobPayload, S>

  type SaasJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaasJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaasJobCountAggregateInputType | true
    }

  export interface SaasJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaasJob'], meta: { name: 'SaasJob' } }
    /**
     * Find zero or one SaasJob that matches the filter.
     * @param {SaasJobFindUniqueArgs} args - Arguments to find a SaasJob
     * @example
     * // Get one SaasJob
     * const saasJob = await prisma.saasJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaasJobFindUniqueArgs>(args: SelectSubset<T, SaasJobFindUniqueArgs<ExtArgs>>): Prisma__SaasJobClient<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaasJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaasJobFindUniqueOrThrowArgs} args - Arguments to find a SaasJob
     * @example
     * // Get one SaasJob
     * const saasJob = await prisma.saasJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaasJobFindUniqueOrThrowArgs>(args: SelectSubset<T, SaasJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaasJobClient<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaasJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobFindFirstArgs} args - Arguments to find a SaasJob
     * @example
     * // Get one SaasJob
     * const saasJob = await prisma.saasJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaasJobFindFirstArgs>(args?: SelectSubset<T, SaasJobFindFirstArgs<ExtArgs>>): Prisma__SaasJobClient<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaasJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobFindFirstOrThrowArgs} args - Arguments to find a SaasJob
     * @example
     * // Get one SaasJob
     * const saasJob = await prisma.saasJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaasJobFindFirstOrThrowArgs>(args?: SelectSubset<T, SaasJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaasJobClient<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaasJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaasJobs
     * const saasJobs = await prisma.saasJob.findMany()
     * 
     * // Get first 10 SaasJobs
     * const saasJobs = await prisma.saasJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saasJobWithIdOnly = await prisma.saasJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaasJobFindManyArgs>(args?: SelectSubset<T, SaasJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaasJob.
     * @param {SaasJobCreateArgs} args - Arguments to create a SaasJob.
     * @example
     * // Create one SaasJob
     * const SaasJob = await prisma.saasJob.create({
     *   data: {
     *     // ... data to create a SaasJob
     *   }
     * })
     * 
     */
    create<T extends SaasJobCreateArgs>(args: SelectSubset<T, SaasJobCreateArgs<ExtArgs>>): Prisma__SaasJobClient<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaasJobs.
     * @param {SaasJobCreateManyArgs} args - Arguments to create many SaasJobs.
     * @example
     * // Create many SaasJobs
     * const saasJob = await prisma.saasJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaasJobCreateManyArgs>(args?: SelectSubset<T, SaasJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaasJobs and returns the data saved in the database.
     * @param {SaasJobCreateManyAndReturnArgs} args - Arguments to create many SaasJobs.
     * @example
     * // Create many SaasJobs
     * const saasJob = await prisma.saasJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaasJobs and only return the `id`
     * const saasJobWithIdOnly = await prisma.saasJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaasJobCreateManyAndReturnArgs>(args?: SelectSubset<T, SaasJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaasJob.
     * @param {SaasJobDeleteArgs} args - Arguments to delete one SaasJob.
     * @example
     * // Delete one SaasJob
     * const SaasJob = await prisma.saasJob.delete({
     *   where: {
     *     // ... filter to delete one SaasJob
     *   }
     * })
     * 
     */
    delete<T extends SaasJobDeleteArgs>(args: SelectSubset<T, SaasJobDeleteArgs<ExtArgs>>): Prisma__SaasJobClient<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaasJob.
     * @param {SaasJobUpdateArgs} args - Arguments to update one SaasJob.
     * @example
     * // Update one SaasJob
     * const saasJob = await prisma.saasJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaasJobUpdateArgs>(args: SelectSubset<T, SaasJobUpdateArgs<ExtArgs>>): Prisma__SaasJobClient<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaasJobs.
     * @param {SaasJobDeleteManyArgs} args - Arguments to filter SaasJobs to delete.
     * @example
     * // Delete a few SaasJobs
     * const { count } = await prisma.saasJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaasJobDeleteManyArgs>(args?: SelectSubset<T, SaasJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaasJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaasJobs
     * const saasJob = await prisma.saasJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaasJobUpdateManyArgs>(args: SelectSubset<T, SaasJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaasJobs and returns the data updated in the database.
     * @param {SaasJobUpdateManyAndReturnArgs} args - Arguments to update many SaasJobs.
     * @example
     * // Update many SaasJobs
     * const saasJob = await prisma.saasJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaasJobs and only return the `id`
     * const saasJobWithIdOnly = await prisma.saasJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaasJobUpdateManyAndReturnArgs>(args: SelectSubset<T, SaasJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaasJob.
     * @param {SaasJobUpsertArgs} args - Arguments to update or create a SaasJob.
     * @example
     * // Update or create a SaasJob
     * const saasJob = await prisma.saasJob.upsert({
     *   create: {
     *     // ... data to create a SaasJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaasJob we want to update
     *   }
     * })
     */
    upsert<T extends SaasJobUpsertArgs>(args: SelectSubset<T, SaasJobUpsertArgs<ExtArgs>>): Prisma__SaasJobClient<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaasJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobCountArgs} args - Arguments to filter SaasJobs to count.
     * @example
     * // Count the number of SaasJobs
     * const count = await prisma.saasJob.count({
     *   where: {
     *     // ... the filter for the SaasJobs we want to count
     *   }
     * })
    **/
    count<T extends SaasJobCountArgs>(
      args?: Subset<T, SaasJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaasJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaasJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaasJobAggregateArgs>(args: Subset<T, SaasJobAggregateArgs>): Prisma.PrismaPromise<GetSaasJobAggregateType<T>>

    /**
     * Group by SaasJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobGroupByArgs} args - Group by arguments.
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
      T extends SaasJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaasJobGroupByArgs['orderBy'] }
        : { orderBy?: SaasJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaasJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaasJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaasJob model
   */
  readonly fields: SaasJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaasJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaasJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SaasJobLog<T extends SaasJob$SaasJobLogArgs<ExtArgs> = {}>(args?: Subset<T, SaasJob$SaasJobLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SaasJob model
   */
  interface SaasJobFieldRefs {
    readonly id: FieldRef<"SaasJob", 'Int'>
    readonly name: FieldRef<"SaasJob", 'String'>
    readonly runCount: FieldRef<"SaasJob", 'Int'>
    readonly createdAt: FieldRef<"SaasJob", 'DateTime'>
    readonly updatedAt: FieldRef<"SaasJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SaasJob findUnique
   */
  export type SaasJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobInclude<ExtArgs> | null
    /**
     * Filter, which SaasJob to fetch.
     */
    where: SaasJobWhereUniqueInput
  }

  /**
   * SaasJob findUniqueOrThrow
   */
  export type SaasJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobInclude<ExtArgs> | null
    /**
     * Filter, which SaasJob to fetch.
     */
    where: SaasJobWhereUniqueInput
  }

  /**
   * SaasJob findFirst
   */
  export type SaasJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobInclude<ExtArgs> | null
    /**
     * Filter, which SaasJob to fetch.
     */
    where?: SaasJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasJobs to fetch.
     */
    orderBy?: SaasJobOrderByWithRelationInput | SaasJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaasJobs.
     */
    cursor?: SaasJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaasJobs.
     */
    distinct?: SaasJobScalarFieldEnum | SaasJobScalarFieldEnum[]
  }

  /**
   * SaasJob findFirstOrThrow
   */
  export type SaasJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobInclude<ExtArgs> | null
    /**
     * Filter, which SaasJob to fetch.
     */
    where?: SaasJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasJobs to fetch.
     */
    orderBy?: SaasJobOrderByWithRelationInput | SaasJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaasJobs.
     */
    cursor?: SaasJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaasJobs.
     */
    distinct?: SaasJobScalarFieldEnum | SaasJobScalarFieldEnum[]
  }

  /**
   * SaasJob findMany
   */
  export type SaasJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobInclude<ExtArgs> | null
    /**
     * Filter, which SaasJobs to fetch.
     */
    where?: SaasJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasJobs to fetch.
     */
    orderBy?: SaasJobOrderByWithRelationInput | SaasJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaasJobs.
     */
    cursor?: SaasJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasJobs.
     */
    skip?: number
    distinct?: SaasJobScalarFieldEnum | SaasJobScalarFieldEnum[]
  }

  /**
   * SaasJob create
   */
  export type SaasJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobInclude<ExtArgs> | null
    /**
     * The data needed to create a SaasJob.
     */
    data: XOR<SaasJobCreateInput, SaasJobUncheckedCreateInput>
  }

  /**
   * SaasJob createMany
   */
  export type SaasJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaasJobs.
     */
    data: SaasJobCreateManyInput | SaasJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaasJob createManyAndReturn
   */
  export type SaasJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * The data used to create many SaasJobs.
     */
    data: SaasJobCreateManyInput | SaasJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaasJob update
   */
  export type SaasJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobInclude<ExtArgs> | null
    /**
     * The data needed to update a SaasJob.
     */
    data: XOR<SaasJobUpdateInput, SaasJobUncheckedUpdateInput>
    /**
     * Choose, which SaasJob to update.
     */
    where: SaasJobWhereUniqueInput
  }

  /**
   * SaasJob updateMany
   */
  export type SaasJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaasJobs.
     */
    data: XOR<SaasJobUpdateManyMutationInput, SaasJobUncheckedUpdateManyInput>
    /**
     * Filter which SaasJobs to update
     */
    where?: SaasJobWhereInput
    /**
     * Limit how many SaasJobs to update.
     */
    limit?: number
  }

  /**
   * SaasJob updateManyAndReturn
   */
  export type SaasJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * The data used to update SaasJobs.
     */
    data: XOR<SaasJobUpdateManyMutationInput, SaasJobUncheckedUpdateManyInput>
    /**
     * Filter which SaasJobs to update
     */
    where?: SaasJobWhereInput
    /**
     * Limit how many SaasJobs to update.
     */
    limit?: number
  }

  /**
   * SaasJob upsert
   */
  export type SaasJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobInclude<ExtArgs> | null
    /**
     * The filter to search for the SaasJob to update in case it exists.
     */
    where: SaasJobWhereUniqueInput
    /**
     * In case the SaasJob found by the `where` argument doesn't exist, create a new SaasJob with this data.
     */
    create: XOR<SaasJobCreateInput, SaasJobUncheckedCreateInput>
    /**
     * In case the SaasJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaasJobUpdateInput, SaasJobUncheckedUpdateInput>
  }

  /**
   * SaasJob delete
   */
  export type SaasJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobInclude<ExtArgs> | null
    /**
     * Filter which SaasJob to delete.
     */
    where: SaasJobWhereUniqueInput
  }

  /**
   * SaasJob deleteMany
   */
  export type SaasJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaasJobs to delete
     */
    where?: SaasJobWhereInput
    /**
     * Limit how many SaasJobs to delete.
     */
    limit?: number
  }

  /**
   * SaasJob.SaasJobLog
   */
  export type SaasJob$SaasJobLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogInclude<ExtArgs> | null
    where?: SaasJobLogWhereInput
    orderBy?: SaasJobLogOrderByWithRelationInput | SaasJobLogOrderByWithRelationInput[]
    cursor?: SaasJobLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaasJobLogScalarFieldEnum | SaasJobLogScalarFieldEnum[]
  }

  /**
   * SaasJob without action
   */
  export type SaasJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJob
     */
    select?: SaasJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJob
     */
    omit?: SaasJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobInclude<ExtArgs> | null
  }


  /**
   * Model SaasJobLog
   */

  export type AggregateSaasJobLog = {
    _count: SaasJobLogCountAggregateOutputType | null
    _avg: SaasJobLogAvgAggregateOutputType | null
    _sum: SaasJobLogSumAggregateOutputType | null
    _min: SaasJobLogMinAggregateOutputType | null
    _max: SaasJobLogMaxAggregateOutputType | null
  }

  export type SaasJobLogAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
  }

  export type SaasJobLogSumAggregateOutputType = {
    id: number | null
    jobId: number | null
  }

  export type SaasJobLogMinAggregateOutputType = {
    id: number | null
    jobId: number | null
    createdAt: Date | null
    status: string | null
  }

  export type SaasJobLogMaxAggregateOutputType = {
    id: number | null
    jobId: number | null
    createdAt: Date | null
    status: string | null
  }

  export type SaasJobLogCountAggregateOutputType = {
    id: number
    jobId: number
    message: number
    createdAt: number
    status: number
    _all: number
  }


  export type SaasJobLogAvgAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type SaasJobLogSumAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type SaasJobLogMinAggregateInputType = {
    id?: true
    jobId?: true
    createdAt?: true
    status?: true
  }

  export type SaasJobLogMaxAggregateInputType = {
    id?: true
    jobId?: true
    createdAt?: true
    status?: true
  }

  export type SaasJobLogCountAggregateInputType = {
    id?: true
    jobId?: true
    message?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type SaasJobLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaasJobLog to aggregate.
     */
    where?: SaasJobLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasJobLogs to fetch.
     */
    orderBy?: SaasJobLogOrderByWithRelationInput | SaasJobLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaasJobLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasJobLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasJobLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaasJobLogs
    **/
    _count?: true | SaasJobLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaasJobLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaasJobLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaasJobLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaasJobLogMaxAggregateInputType
  }

  export type GetSaasJobLogAggregateType<T extends SaasJobLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSaasJobLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaasJobLog[P]>
      : GetScalarType<T[P], AggregateSaasJobLog[P]>
  }




  export type SaasJobLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaasJobLogWhereInput
    orderBy?: SaasJobLogOrderByWithAggregationInput | SaasJobLogOrderByWithAggregationInput[]
    by: SaasJobLogScalarFieldEnum[] | SaasJobLogScalarFieldEnum
    having?: SaasJobLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaasJobLogCountAggregateInputType | true
    _avg?: SaasJobLogAvgAggregateInputType
    _sum?: SaasJobLogSumAggregateInputType
    _min?: SaasJobLogMinAggregateInputType
    _max?: SaasJobLogMaxAggregateInputType
  }

  export type SaasJobLogGroupByOutputType = {
    id: number
    jobId: number
    message: JsonValue
    createdAt: Date
    status: string
    _count: SaasJobLogCountAggregateOutputType | null
    _avg: SaasJobLogAvgAggregateOutputType | null
    _sum: SaasJobLogSumAggregateOutputType | null
    _min: SaasJobLogMinAggregateOutputType | null
    _max: SaasJobLogMaxAggregateOutputType | null
  }

  type GetSaasJobLogGroupByPayload<T extends SaasJobLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaasJobLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaasJobLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaasJobLogGroupByOutputType[P]>
            : GetScalarType<T[P], SaasJobLogGroupByOutputType[P]>
        }
      >
    >


  export type SaasJobLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    message?: boolean
    createdAt?: boolean
    status?: boolean
    SaasJob?: boolean | SaasJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saasJobLog"]>

  export type SaasJobLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    message?: boolean
    createdAt?: boolean
    status?: boolean
    SaasJob?: boolean | SaasJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saasJobLog"]>

  export type SaasJobLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    message?: boolean
    createdAt?: boolean
    status?: boolean
    SaasJob?: boolean | SaasJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saasJobLog"]>

  export type SaasJobLogSelectScalar = {
    id?: boolean
    jobId?: boolean
    message?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type SaasJobLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "message" | "createdAt" | "status", ExtArgs["result"]["saasJobLog"]>
  export type SaasJobLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SaasJob?: boolean | SaasJobDefaultArgs<ExtArgs>
  }
  export type SaasJobLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SaasJob?: boolean | SaasJobDefaultArgs<ExtArgs>
  }
  export type SaasJobLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SaasJob?: boolean | SaasJobDefaultArgs<ExtArgs>
  }

  export type $SaasJobLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaasJobLog"
    objects: {
      SaasJob: Prisma.$SaasJobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobId: number
      message: Prisma.JsonValue
      createdAt: Date
      status: string
    }, ExtArgs["result"]["saasJobLog"]>
    composites: {}
  }

  type SaasJobLogGetPayload<S extends boolean | null | undefined | SaasJobLogDefaultArgs> = $Result.GetResult<Prisma.$SaasJobLogPayload, S>

  type SaasJobLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaasJobLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaasJobLogCountAggregateInputType | true
    }

  export interface SaasJobLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaasJobLog'], meta: { name: 'SaasJobLog' } }
    /**
     * Find zero or one SaasJobLog that matches the filter.
     * @param {SaasJobLogFindUniqueArgs} args - Arguments to find a SaasJobLog
     * @example
     * // Get one SaasJobLog
     * const saasJobLog = await prisma.saasJobLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaasJobLogFindUniqueArgs>(args: SelectSubset<T, SaasJobLogFindUniqueArgs<ExtArgs>>): Prisma__SaasJobLogClient<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaasJobLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaasJobLogFindUniqueOrThrowArgs} args - Arguments to find a SaasJobLog
     * @example
     * // Get one SaasJobLog
     * const saasJobLog = await prisma.saasJobLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaasJobLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SaasJobLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaasJobLogClient<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaasJobLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobLogFindFirstArgs} args - Arguments to find a SaasJobLog
     * @example
     * // Get one SaasJobLog
     * const saasJobLog = await prisma.saasJobLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaasJobLogFindFirstArgs>(args?: SelectSubset<T, SaasJobLogFindFirstArgs<ExtArgs>>): Prisma__SaasJobLogClient<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaasJobLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobLogFindFirstOrThrowArgs} args - Arguments to find a SaasJobLog
     * @example
     * // Get one SaasJobLog
     * const saasJobLog = await prisma.saasJobLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaasJobLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SaasJobLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaasJobLogClient<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaasJobLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaasJobLogs
     * const saasJobLogs = await prisma.saasJobLog.findMany()
     * 
     * // Get first 10 SaasJobLogs
     * const saasJobLogs = await prisma.saasJobLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saasJobLogWithIdOnly = await prisma.saasJobLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaasJobLogFindManyArgs>(args?: SelectSubset<T, SaasJobLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaasJobLog.
     * @param {SaasJobLogCreateArgs} args - Arguments to create a SaasJobLog.
     * @example
     * // Create one SaasJobLog
     * const SaasJobLog = await prisma.saasJobLog.create({
     *   data: {
     *     // ... data to create a SaasJobLog
     *   }
     * })
     * 
     */
    create<T extends SaasJobLogCreateArgs>(args: SelectSubset<T, SaasJobLogCreateArgs<ExtArgs>>): Prisma__SaasJobLogClient<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaasJobLogs.
     * @param {SaasJobLogCreateManyArgs} args - Arguments to create many SaasJobLogs.
     * @example
     * // Create many SaasJobLogs
     * const saasJobLog = await prisma.saasJobLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaasJobLogCreateManyArgs>(args?: SelectSubset<T, SaasJobLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaasJobLogs and returns the data saved in the database.
     * @param {SaasJobLogCreateManyAndReturnArgs} args - Arguments to create many SaasJobLogs.
     * @example
     * // Create many SaasJobLogs
     * const saasJobLog = await prisma.saasJobLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaasJobLogs and only return the `id`
     * const saasJobLogWithIdOnly = await prisma.saasJobLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaasJobLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SaasJobLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaasJobLog.
     * @param {SaasJobLogDeleteArgs} args - Arguments to delete one SaasJobLog.
     * @example
     * // Delete one SaasJobLog
     * const SaasJobLog = await prisma.saasJobLog.delete({
     *   where: {
     *     // ... filter to delete one SaasJobLog
     *   }
     * })
     * 
     */
    delete<T extends SaasJobLogDeleteArgs>(args: SelectSubset<T, SaasJobLogDeleteArgs<ExtArgs>>): Prisma__SaasJobLogClient<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaasJobLog.
     * @param {SaasJobLogUpdateArgs} args - Arguments to update one SaasJobLog.
     * @example
     * // Update one SaasJobLog
     * const saasJobLog = await prisma.saasJobLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaasJobLogUpdateArgs>(args: SelectSubset<T, SaasJobLogUpdateArgs<ExtArgs>>): Prisma__SaasJobLogClient<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaasJobLogs.
     * @param {SaasJobLogDeleteManyArgs} args - Arguments to filter SaasJobLogs to delete.
     * @example
     * // Delete a few SaasJobLogs
     * const { count } = await prisma.saasJobLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaasJobLogDeleteManyArgs>(args?: SelectSubset<T, SaasJobLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaasJobLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaasJobLogs
     * const saasJobLog = await prisma.saasJobLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaasJobLogUpdateManyArgs>(args: SelectSubset<T, SaasJobLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaasJobLogs and returns the data updated in the database.
     * @param {SaasJobLogUpdateManyAndReturnArgs} args - Arguments to update many SaasJobLogs.
     * @example
     * // Update many SaasJobLogs
     * const saasJobLog = await prisma.saasJobLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaasJobLogs and only return the `id`
     * const saasJobLogWithIdOnly = await prisma.saasJobLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaasJobLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SaasJobLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaasJobLog.
     * @param {SaasJobLogUpsertArgs} args - Arguments to update or create a SaasJobLog.
     * @example
     * // Update or create a SaasJobLog
     * const saasJobLog = await prisma.saasJobLog.upsert({
     *   create: {
     *     // ... data to create a SaasJobLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaasJobLog we want to update
     *   }
     * })
     */
    upsert<T extends SaasJobLogUpsertArgs>(args: SelectSubset<T, SaasJobLogUpsertArgs<ExtArgs>>): Prisma__SaasJobLogClient<$Result.GetResult<Prisma.$SaasJobLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaasJobLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobLogCountArgs} args - Arguments to filter SaasJobLogs to count.
     * @example
     * // Count the number of SaasJobLogs
     * const count = await prisma.saasJobLog.count({
     *   where: {
     *     // ... the filter for the SaasJobLogs we want to count
     *   }
     * })
    **/
    count<T extends SaasJobLogCountArgs>(
      args?: Subset<T, SaasJobLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaasJobLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaasJobLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaasJobLogAggregateArgs>(args: Subset<T, SaasJobLogAggregateArgs>): Prisma.PrismaPromise<GetSaasJobLogAggregateType<T>>

    /**
     * Group by SaasJobLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasJobLogGroupByArgs} args - Group by arguments.
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
      T extends SaasJobLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaasJobLogGroupByArgs['orderBy'] }
        : { orderBy?: SaasJobLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaasJobLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaasJobLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaasJobLog model
   */
  readonly fields: SaasJobLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaasJobLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaasJobLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SaasJob<T extends SaasJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaasJobDefaultArgs<ExtArgs>>): Prisma__SaasJobClient<$Result.GetResult<Prisma.$SaasJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SaasJobLog model
   */
  interface SaasJobLogFieldRefs {
    readonly id: FieldRef<"SaasJobLog", 'Int'>
    readonly jobId: FieldRef<"SaasJobLog", 'Int'>
    readonly message: FieldRef<"SaasJobLog", 'Json'>
    readonly createdAt: FieldRef<"SaasJobLog", 'DateTime'>
    readonly status: FieldRef<"SaasJobLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SaasJobLog findUnique
   */
  export type SaasJobLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogInclude<ExtArgs> | null
    /**
     * Filter, which SaasJobLog to fetch.
     */
    where: SaasJobLogWhereUniqueInput
  }

  /**
   * SaasJobLog findUniqueOrThrow
   */
  export type SaasJobLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogInclude<ExtArgs> | null
    /**
     * Filter, which SaasJobLog to fetch.
     */
    where: SaasJobLogWhereUniqueInput
  }

  /**
   * SaasJobLog findFirst
   */
  export type SaasJobLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogInclude<ExtArgs> | null
    /**
     * Filter, which SaasJobLog to fetch.
     */
    where?: SaasJobLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasJobLogs to fetch.
     */
    orderBy?: SaasJobLogOrderByWithRelationInput | SaasJobLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaasJobLogs.
     */
    cursor?: SaasJobLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasJobLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasJobLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaasJobLogs.
     */
    distinct?: SaasJobLogScalarFieldEnum | SaasJobLogScalarFieldEnum[]
  }

  /**
   * SaasJobLog findFirstOrThrow
   */
  export type SaasJobLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogInclude<ExtArgs> | null
    /**
     * Filter, which SaasJobLog to fetch.
     */
    where?: SaasJobLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasJobLogs to fetch.
     */
    orderBy?: SaasJobLogOrderByWithRelationInput | SaasJobLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaasJobLogs.
     */
    cursor?: SaasJobLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasJobLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasJobLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaasJobLogs.
     */
    distinct?: SaasJobLogScalarFieldEnum | SaasJobLogScalarFieldEnum[]
  }

  /**
   * SaasJobLog findMany
   */
  export type SaasJobLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogInclude<ExtArgs> | null
    /**
     * Filter, which SaasJobLogs to fetch.
     */
    where?: SaasJobLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasJobLogs to fetch.
     */
    orderBy?: SaasJobLogOrderByWithRelationInput | SaasJobLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaasJobLogs.
     */
    cursor?: SaasJobLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasJobLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasJobLogs.
     */
    skip?: number
    distinct?: SaasJobLogScalarFieldEnum | SaasJobLogScalarFieldEnum[]
  }

  /**
   * SaasJobLog create
   */
  export type SaasJobLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SaasJobLog.
     */
    data: XOR<SaasJobLogCreateInput, SaasJobLogUncheckedCreateInput>
  }

  /**
   * SaasJobLog createMany
   */
  export type SaasJobLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaasJobLogs.
     */
    data: SaasJobLogCreateManyInput | SaasJobLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaasJobLog createManyAndReturn
   */
  export type SaasJobLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * The data used to create many SaasJobLogs.
     */
    data: SaasJobLogCreateManyInput | SaasJobLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaasJobLog update
   */
  export type SaasJobLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SaasJobLog.
     */
    data: XOR<SaasJobLogUpdateInput, SaasJobLogUncheckedUpdateInput>
    /**
     * Choose, which SaasJobLog to update.
     */
    where: SaasJobLogWhereUniqueInput
  }

  /**
   * SaasJobLog updateMany
   */
  export type SaasJobLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaasJobLogs.
     */
    data: XOR<SaasJobLogUpdateManyMutationInput, SaasJobLogUncheckedUpdateManyInput>
    /**
     * Filter which SaasJobLogs to update
     */
    where?: SaasJobLogWhereInput
    /**
     * Limit how many SaasJobLogs to update.
     */
    limit?: number
  }

  /**
   * SaasJobLog updateManyAndReturn
   */
  export type SaasJobLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * The data used to update SaasJobLogs.
     */
    data: XOR<SaasJobLogUpdateManyMutationInput, SaasJobLogUncheckedUpdateManyInput>
    /**
     * Filter which SaasJobLogs to update
     */
    where?: SaasJobLogWhereInput
    /**
     * Limit how many SaasJobLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaasJobLog upsert
   */
  export type SaasJobLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SaasJobLog to update in case it exists.
     */
    where: SaasJobLogWhereUniqueInput
    /**
     * In case the SaasJobLog found by the `where` argument doesn't exist, create a new SaasJobLog with this data.
     */
    create: XOR<SaasJobLogCreateInput, SaasJobLogUncheckedCreateInput>
    /**
     * In case the SaasJobLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaasJobLogUpdateInput, SaasJobLogUncheckedUpdateInput>
  }

  /**
   * SaasJobLog delete
   */
  export type SaasJobLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogInclude<ExtArgs> | null
    /**
     * Filter which SaasJobLog to delete.
     */
    where: SaasJobLogWhereUniqueInput
  }

  /**
   * SaasJobLog deleteMany
   */
  export type SaasJobLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaasJobLogs to delete
     */
    where?: SaasJobLogWhereInput
    /**
     * Limit how many SaasJobLogs to delete.
     */
    limit?: number
  }

  /**
   * SaasJobLog without action
   */
  export type SaasJobLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasJobLog
     */
    select?: SaasJobLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasJobLog
     */
    omit?: SaasJobLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasJobLogInclude<ExtArgs> | null
  }


  /**
   * Model SaasRequest
   */

  export type AggregateSaasRequest = {
    _count: SaasRequestCountAggregateOutputType | null
    _avg: SaasRequestAvgAggregateOutputType | null
    _sum: SaasRequestSumAggregateOutputType | null
    _min: SaasRequestMinAggregateOutputType | null
    _max: SaasRequestMaxAggregateOutputType | null
  }

  export type SaasRequestAvgAggregateOutputType = {
    maxNftCanMint: number | null
    minted: number | null
    collectionId: number | null
  }

  export type SaasRequestSumAggregateOutputType = {
    maxNftCanMint: number | null
    minted: number | null
    collectionId: number | null
  }

  export type SaasRequestMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    maxNftCanMint: number | null
    minted: number | null
    status: $Enums.RequestStatus | null
    collectionId: number | null
    userId: string | null
  }

  export type SaasRequestMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    maxNftCanMint: number | null
    minted: number | null
    status: $Enums.RequestStatus | null
    collectionId: number | null
    userId: string | null
  }

  export type SaasRequestCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    maxNftCanMint: number
    minted: number
    status: number
    collectionId: number
    userId: number
    _all: number
  }


  export type SaasRequestAvgAggregateInputType = {
    maxNftCanMint?: true
    minted?: true
    collectionId?: true
  }

  export type SaasRequestSumAggregateInputType = {
    maxNftCanMint?: true
    minted?: true
    collectionId?: true
  }

  export type SaasRequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    maxNftCanMint?: true
    minted?: true
    status?: true
    collectionId?: true
    userId?: true
  }

  export type SaasRequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    maxNftCanMint?: true
    minted?: true
    status?: true
    collectionId?: true
    userId?: true
  }

  export type SaasRequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    maxNftCanMint?: true
    minted?: true
    status?: true
    collectionId?: true
    userId?: true
    _all?: true
  }

  export type SaasRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaasRequest to aggregate.
     */
    where?: SaasRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasRequests to fetch.
     */
    orderBy?: SaasRequestOrderByWithRelationInput | SaasRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaasRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaasRequests
    **/
    _count?: true | SaasRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaasRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaasRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaasRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaasRequestMaxAggregateInputType
  }

  export type GetSaasRequestAggregateType<T extends SaasRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateSaasRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaasRequest[P]>
      : GetScalarType<T[P], AggregateSaasRequest[P]>
  }




  export type SaasRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaasRequestWhereInput
    orderBy?: SaasRequestOrderByWithAggregationInput | SaasRequestOrderByWithAggregationInput[]
    by: SaasRequestScalarFieldEnum[] | SaasRequestScalarFieldEnum
    having?: SaasRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaasRequestCountAggregateInputType | true
    _avg?: SaasRequestAvgAggregateInputType
    _sum?: SaasRequestSumAggregateInputType
    _min?: SaasRequestMinAggregateInputType
    _max?: SaasRequestMaxAggregateInputType
  }

  export type SaasRequestGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date | null
    maxNftCanMint: number
    minted: number
    status: $Enums.RequestStatus
    collectionId: number
    userId: string
    _count: SaasRequestCountAggregateOutputType | null
    _avg: SaasRequestAvgAggregateOutputType | null
    _sum: SaasRequestSumAggregateOutputType | null
    _min: SaasRequestMinAggregateOutputType | null
    _max: SaasRequestMaxAggregateOutputType | null
  }

  type GetSaasRequestGroupByPayload<T extends SaasRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaasRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaasRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaasRequestGroupByOutputType[P]>
            : GetScalarType<T[P], SaasRequestGroupByOutputType[P]>
        }
      >
    >


  export type SaasRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maxNftCanMint?: boolean
    minted?: boolean
    status?: boolean
    collectionId?: boolean
    userId?: boolean
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saasRequest"]>

  export type SaasRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maxNftCanMint?: boolean
    minted?: boolean
    status?: boolean
    collectionId?: boolean
    userId?: boolean
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saasRequest"]>

  export type SaasRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maxNftCanMint?: boolean
    minted?: boolean
    status?: boolean
    collectionId?: boolean
    userId?: boolean
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saasRequest"]>

  export type SaasRequestSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maxNftCanMint?: boolean
    minted?: boolean
    status?: boolean
    collectionId?: boolean
    userId?: boolean
  }

  export type SaasRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "maxNftCanMint" | "minted" | "status" | "collectionId" | "userId", ExtArgs["result"]["saasRequest"]>
  export type SaasRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SaasRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SaasRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Collection?: boolean | CollectionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SaasRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaasRequest"
    objects: {
      Collection: Prisma.$CollectionPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date | null
      maxNftCanMint: number
      minted: number
      status: $Enums.RequestStatus
      collectionId: number
      userId: string
    }, ExtArgs["result"]["saasRequest"]>
    composites: {}
  }

  type SaasRequestGetPayload<S extends boolean | null | undefined | SaasRequestDefaultArgs> = $Result.GetResult<Prisma.$SaasRequestPayload, S>

  type SaasRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaasRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaasRequestCountAggregateInputType | true
    }

  export interface SaasRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaasRequest'], meta: { name: 'SaasRequest' } }
    /**
     * Find zero or one SaasRequest that matches the filter.
     * @param {SaasRequestFindUniqueArgs} args - Arguments to find a SaasRequest
     * @example
     * // Get one SaasRequest
     * const saasRequest = await prisma.saasRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaasRequestFindUniqueArgs>(args: SelectSubset<T, SaasRequestFindUniqueArgs<ExtArgs>>): Prisma__SaasRequestClient<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaasRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaasRequestFindUniqueOrThrowArgs} args - Arguments to find a SaasRequest
     * @example
     * // Get one SaasRequest
     * const saasRequest = await prisma.saasRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaasRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, SaasRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaasRequestClient<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaasRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasRequestFindFirstArgs} args - Arguments to find a SaasRequest
     * @example
     * // Get one SaasRequest
     * const saasRequest = await prisma.saasRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaasRequestFindFirstArgs>(args?: SelectSubset<T, SaasRequestFindFirstArgs<ExtArgs>>): Prisma__SaasRequestClient<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaasRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasRequestFindFirstOrThrowArgs} args - Arguments to find a SaasRequest
     * @example
     * // Get one SaasRequest
     * const saasRequest = await prisma.saasRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaasRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, SaasRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaasRequestClient<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaasRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaasRequests
     * const saasRequests = await prisma.saasRequest.findMany()
     * 
     * // Get first 10 SaasRequests
     * const saasRequests = await prisma.saasRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saasRequestWithIdOnly = await prisma.saasRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaasRequestFindManyArgs>(args?: SelectSubset<T, SaasRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaasRequest.
     * @param {SaasRequestCreateArgs} args - Arguments to create a SaasRequest.
     * @example
     * // Create one SaasRequest
     * const SaasRequest = await prisma.saasRequest.create({
     *   data: {
     *     // ... data to create a SaasRequest
     *   }
     * })
     * 
     */
    create<T extends SaasRequestCreateArgs>(args: SelectSubset<T, SaasRequestCreateArgs<ExtArgs>>): Prisma__SaasRequestClient<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaasRequests.
     * @param {SaasRequestCreateManyArgs} args - Arguments to create many SaasRequests.
     * @example
     * // Create many SaasRequests
     * const saasRequest = await prisma.saasRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaasRequestCreateManyArgs>(args?: SelectSubset<T, SaasRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaasRequests and returns the data saved in the database.
     * @param {SaasRequestCreateManyAndReturnArgs} args - Arguments to create many SaasRequests.
     * @example
     * // Create many SaasRequests
     * const saasRequest = await prisma.saasRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaasRequests and only return the `id`
     * const saasRequestWithIdOnly = await prisma.saasRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaasRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, SaasRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaasRequest.
     * @param {SaasRequestDeleteArgs} args - Arguments to delete one SaasRequest.
     * @example
     * // Delete one SaasRequest
     * const SaasRequest = await prisma.saasRequest.delete({
     *   where: {
     *     // ... filter to delete one SaasRequest
     *   }
     * })
     * 
     */
    delete<T extends SaasRequestDeleteArgs>(args: SelectSubset<T, SaasRequestDeleteArgs<ExtArgs>>): Prisma__SaasRequestClient<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaasRequest.
     * @param {SaasRequestUpdateArgs} args - Arguments to update one SaasRequest.
     * @example
     * // Update one SaasRequest
     * const saasRequest = await prisma.saasRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaasRequestUpdateArgs>(args: SelectSubset<T, SaasRequestUpdateArgs<ExtArgs>>): Prisma__SaasRequestClient<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaasRequests.
     * @param {SaasRequestDeleteManyArgs} args - Arguments to filter SaasRequests to delete.
     * @example
     * // Delete a few SaasRequests
     * const { count } = await prisma.saasRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaasRequestDeleteManyArgs>(args?: SelectSubset<T, SaasRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaasRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaasRequests
     * const saasRequest = await prisma.saasRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaasRequestUpdateManyArgs>(args: SelectSubset<T, SaasRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaasRequests and returns the data updated in the database.
     * @param {SaasRequestUpdateManyAndReturnArgs} args - Arguments to update many SaasRequests.
     * @example
     * // Update many SaasRequests
     * const saasRequest = await prisma.saasRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaasRequests and only return the `id`
     * const saasRequestWithIdOnly = await prisma.saasRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaasRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, SaasRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaasRequest.
     * @param {SaasRequestUpsertArgs} args - Arguments to update or create a SaasRequest.
     * @example
     * // Update or create a SaasRequest
     * const saasRequest = await prisma.saasRequest.upsert({
     *   create: {
     *     // ... data to create a SaasRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaasRequest we want to update
     *   }
     * })
     */
    upsert<T extends SaasRequestUpsertArgs>(args: SelectSubset<T, SaasRequestUpsertArgs<ExtArgs>>): Prisma__SaasRequestClient<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaasRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasRequestCountArgs} args - Arguments to filter SaasRequests to count.
     * @example
     * // Count the number of SaasRequests
     * const count = await prisma.saasRequest.count({
     *   where: {
     *     // ... the filter for the SaasRequests we want to count
     *   }
     * })
    **/
    count<T extends SaasRequestCountArgs>(
      args?: Subset<T, SaasRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaasRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaasRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaasRequestAggregateArgs>(args: Subset<T, SaasRequestAggregateArgs>): Prisma.PrismaPromise<GetSaasRequestAggregateType<T>>

    /**
     * Group by SaasRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaasRequestGroupByArgs} args - Group by arguments.
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
      T extends SaasRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaasRequestGroupByArgs['orderBy'] }
        : { orderBy?: SaasRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaasRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaasRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaasRequest model
   */
  readonly fields: SaasRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaasRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaasRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SaasRequest model
   */
  interface SaasRequestFieldRefs {
    readonly id: FieldRef<"SaasRequest", 'String'>
    readonly createdAt: FieldRef<"SaasRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"SaasRequest", 'DateTime'>
    readonly maxNftCanMint: FieldRef<"SaasRequest", 'Int'>
    readonly minted: FieldRef<"SaasRequest", 'Int'>
    readonly status: FieldRef<"SaasRequest", 'RequestStatus'>
    readonly collectionId: FieldRef<"SaasRequest", 'Int'>
    readonly userId: FieldRef<"SaasRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SaasRequest findUnique
   */
  export type SaasRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
    /**
     * Filter, which SaasRequest to fetch.
     */
    where: SaasRequestWhereUniqueInput
  }

  /**
   * SaasRequest findUniqueOrThrow
   */
  export type SaasRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
    /**
     * Filter, which SaasRequest to fetch.
     */
    where: SaasRequestWhereUniqueInput
  }

  /**
   * SaasRequest findFirst
   */
  export type SaasRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
    /**
     * Filter, which SaasRequest to fetch.
     */
    where?: SaasRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasRequests to fetch.
     */
    orderBy?: SaasRequestOrderByWithRelationInput | SaasRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaasRequests.
     */
    cursor?: SaasRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaasRequests.
     */
    distinct?: SaasRequestScalarFieldEnum | SaasRequestScalarFieldEnum[]
  }

  /**
   * SaasRequest findFirstOrThrow
   */
  export type SaasRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
    /**
     * Filter, which SaasRequest to fetch.
     */
    where?: SaasRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasRequests to fetch.
     */
    orderBy?: SaasRequestOrderByWithRelationInput | SaasRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaasRequests.
     */
    cursor?: SaasRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaasRequests.
     */
    distinct?: SaasRequestScalarFieldEnum | SaasRequestScalarFieldEnum[]
  }

  /**
   * SaasRequest findMany
   */
  export type SaasRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
    /**
     * Filter, which SaasRequests to fetch.
     */
    where?: SaasRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaasRequests to fetch.
     */
    orderBy?: SaasRequestOrderByWithRelationInput | SaasRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaasRequests.
     */
    cursor?: SaasRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaasRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaasRequests.
     */
    skip?: number
    distinct?: SaasRequestScalarFieldEnum | SaasRequestScalarFieldEnum[]
  }

  /**
   * SaasRequest create
   */
  export type SaasRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a SaasRequest.
     */
    data: XOR<SaasRequestCreateInput, SaasRequestUncheckedCreateInput>
  }

  /**
   * SaasRequest createMany
   */
  export type SaasRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaasRequests.
     */
    data: SaasRequestCreateManyInput | SaasRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaasRequest createManyAndReturn
   */
  export type SaasRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * The data used to create many SaasRequests.
     */
    data: SaasRequestCreateManyInput | SaasRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaasRequest update
   */
  export type SaasRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a SaasRequest.
     */
    data: XOR<SaasRequestUpdateInput, SaasRequestUncheckedUpdateInput>
    /**
     * Choose, which SaasRequest to update.
     */
    where: SaasRequestWhereUniqueInput
  }

  /**
   * SaasRequest updateMany
   */
  export type SaasRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaasRequests.
     */
    data: XOR<SaasRequestUpdateManyMutationInput, SaasRequestUncheckedUpdateManyInput>
    /**
     * Filter which SaasRequests to update
     */
    where?: SaasRequestWhereInput
    /**
     * Limit how many SaasRequests to update.
     */
    limit?: number
  }

  /**
   * SaasRequest updateManyAndReturn
   */
  export type SaasRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * The data used to update SaasRequests.
     */
    data: XOR<SaasRequestUpdateManyMutationInput, SaasRequestUncheckedUpdateManyInput>
    /**
     * Filter which SaasRequests to update
     */
    where?: SaasRequestWhereInput
    /**
     * Limit how many SaasRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaasRequest upsert
   */
  export type SaasRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the SaasRequest to update in case it exists.
     */
    where: SaasRequestWhereUniqueInput
    /**
     * In case the SaasRequest found by the `where` argument doesn't exist, create a new SaasRequest with this data.
     */
    create: XOR<SaasRequestCreateInput, SaasRequestUncheckedCreateInput>
    /**
     * In case the SaasRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaasRequestUpdateInput, SaasRequestUncheckedUpdateInput>
  }

  /**
   * SaasRequest delete
   */
  export type SaasRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
    /**
     * Filter which SaasRequest to delete.
     */
    where: SaasRequestWhereUniqueInput
  }

  /**
   * SaasRequest deleteMany
   */
  export type SaasRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaasRequests to delete
     */
    where?: SaasRequestWhereInput
    /**
     * Limit how many SaasRequests to delete.
     */
    limit?: number
  }

  /**
   * SaasRequest without action
   */
  export type SaasRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullname: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isKyced: boolean | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullname: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isKyced: boolean | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    createdAt: number
    updatedAt: number
    isKyced: number
    email: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    createdAt?: true
    updatedAt?: true
    isKyced?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    createdAt?: true
    updatedAt?: true
    isKyced?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    createdAt?: true
    updatedAt?: true
    isKyced?: true
    email?: true
    name?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullname: string | null
    createdAt: Date
    updatedAt: Date | null
    isKyced: boolean
    email: string | null
    name: string | null
    _count: UserCountAggregateOutputType | null
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
    fullname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isKyced?: boolean
    email?: boolean
    name?: boolean
    Collection?: boolean | User$CollectionArgs<ExtArgs>
    MarketTransaction?: boolean | User$MarketTransactionArgs<ExtArgs>
    NftMetadata?: boolean | User$NftMetadataArgs<ExtArgs>
    Project?: boolean | User$ProjectArgs<ExtArgs>
    SaasRequest?: boolean | User$SaasRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isKyced?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isKyced?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isKyced?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "createdAt" | "updatedAt" | "isKyced" | "email" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Collection?: boolean | User$CollectionArgs<ExtArgs>
    MarketTransaction?: boolean | User$MarketTransactionArgs<ExtArgs>
    NftMetadata?: boolean | User$NftMetadataArgs<ExtArgs>
    Project?: boolean | User$ProjectArgs<ExtArgs>
    SaasRequest?: boolean | User$SaasRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Collection: Prisma.$CollectionPayload<ExtArgs>[]
      MarketTransaction: Prisma.$MarketTransactionPayload<ExtArgs>[]
      NftMetadata: Prisma.$NftMetadataPayload<ExtArgs>[]
      Project: Prisma.$ProjectPayload<ExtArgs>[]
      SaasRequest: Prisma.$SaasRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullname: string | null
      createdAt: Date
      updatedAt: Date | null
      isKyced: boolean
      email: string | null
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Collection<T extends User$CollectionArgs<ExtArgs> = {}>(args?: Subset<T, User$CollectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MarketTransaction<T extends User$MarketTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$MarketTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    NftMetadata<T extends User$NftMetadataArgs<ExtArgs> = {}>(args?: Subset<T, User$NftMetadataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NftMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Project<T extends User$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SaasRequest<T extends User$SaasRequestArgs<ExtArgs> = {}>(args?: Subset<T, User$SaasRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaasRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isKyced: FieldRef<"User", 'Boolean'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Collection
   */
  export type User$CollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * User.MarketTransaction
   */
  export type User$MarketTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTransaction
     */
    select?: MarketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTransaction
     */
    omit?: MarketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketTransactionInclude<ExtArgs> | null
    where?: MarketTransactionWhereInput
    orderBy?: MarketTransactionOrderByWithRelationInput | MarketTransactionOrderByWithRelationInput[]
    cursor?: MarketTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketTransactionScalarFieldEnum | MarketTransactionScalarFieldEnum[]
  }

  /**
   * User.NftMetadata
   */
  export type User$NftMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftMetadata
     */
    select?: NftMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NftMetadata
     */
    omit?: NftMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NftMetadataInclude<ExtArgs> | null
    where?: NftMetadataWhereInput
    orderBy?: NftMetadataOrderByWithRelationInput | NftMetadataOrderByWithRelationInput[]
    cursor?: NftMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NftMetadataScalarFieldEnum | NftMetadataScalarFieldEnum[]
  }

  /**
   * User.Project
   */
  export type User$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.SaasRequest
   */
  export type User$SaasRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaasRequest
     */
    select?: SaasRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaasRequest
     */
    omit?: SaasRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaasRequestInclude<ExtArgs> | null
    where?: SaasRequestWhereInput
    orderBy?: SaasRequestOrderByWithRelationInput | SaasRequestOrderByWithRelationInput[]
    cursor?: SaasRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaasRequestScalarFieldEnum | SaasRequestScalarFieldEnum[]
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    website: 'website',
    image: 'image',
    uri: 'uri',
    createdAt: 'createdAt',
    creatorId: 'creatorId',
    publickey: 'publickey',
    merkelTree: 'merkelTree',
    projectId: 'projectId'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const MarketTransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    userId: 'userId',
    price: 'price',
    createdAt: 'createdAt',
    assetId: 'assetId',
    merkleTree: 'merkleTree',
    pda: 'pda',
    tx: 'tx'
  };

  export type MarketTransactionScalarFieldEnum = (typeof MarketTransactionScalarFieldEnum)[keyof typeof MarketTransactionScalarFieldEnum]


  export const NftMetadataScalarFieldEnum: {
    name: 'name',
    description: 'description',
    image: 'image',
    metadata: 'metadata',
    collectionId: 'collectionId',
    createdAt: 'createdAt',
    creatorId: 'creatorId',
    address: 'address',
    assetId: 'assetId',
    minted: 'minted',
    uri: 'uri',
    tx: 'tx',
    id: 'id'
  };

  export type NftMetadataScalarFieldEnum = (typeof NftMetadataScalarFieldEnum)[keyof typeof NftMetadataScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    description: 'description',
    images: 'images',
    visibility: 'visibility',
    userId: 'userId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SaasJobScalarFieldEnum: {
    id: 'id',
    name: 'name',
    runCount: 'runCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SaasJobScalarFieldEnum = (typeof SaasJobScalarFieldEnum)[keyof typeof SaasJobScalarFieldEnum]


  export const SaasJobLogScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    message: 'message',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type SaasJobLogScalarFieldEnum = (typeof SaasJobLogScalarFieldEnum)[keyof typeof SaasJobLogScalarFieldEnum]


  export const SaasRequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    maxNftCanMint: 'maxNftCanMint',
    minted: 'minted',
    status: 'status',
    collectionId: 'collectionId',
    userId: 'userId'
  };

  export type SaasRequestScalarFieldEnum = (typeof SaasRequestScalarFieldEnum)[keyof typeof SaasRequestScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isKyced: 'isKyced',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Visibility'
   */
  export type EnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility'>
    


  /**
   * Reference to a field of type 'Visibility[]'
   */
  export type ListEnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: IntFilter<"Collection"> | number
    name?: StringFilter<"Collection"> | string
    description?: StringFilter<"Collection"> | string
    website?: StringNullableFilter<"Collection"> | string | null
    image?: StringNullableFilter<"Collection"> | string | null
    uri?: StringNullableFilter<"Collection"> | string | null
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    creatorId?: StringFilter<"Collection"> | string
    publickey?: StringNullableFilter<"Collection"> | string | null
    merkelTree?: StringNullableFilter<"Collection"> | string | null
    projectId?: StringFilter<"Collection"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    NftMetadata?: NftMetadataListRelationFilter
    SaasRequest?: SaasRequestListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    website?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    uri?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    publickey?: SortOrderInput | SortOrder
    merkelTree?: SortOrderInput | SortOrder
    projectId?: SortOrder
    User?: UserOrderByWithRelationInput
    Project?: ProjectOrderByWithRelationInput
    NftMetadata?: NftMetadataOrderByRelationAggregateInput
    SaasRequest?: SaasRequestOrderByRelationAggregateInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    name?: StringFilter<"Collection"> | string
    description?: StringFilter<"Collection"> | string
    website?: StringNullableFilter<"Collection"> | string | null
    image?: StringNullableFilter<"Collection"> | string | null
    uri?: StringNullableFilter<"Collection"> | string | null
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    creatorId?: StringFilter<"Collection"> | string
    publickey?: StringNullableFilter<"Collection"> | string | null
    merkelTree?: StringNullableFilter<"Collection"> | string | null
    projectId?: StringFilter<"Collection"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    NftMetadata?: NftMetadataListRelationFilter
    SaasRequest?: SaasRequestListRelationFilter
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    website?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    uri?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    publickey?: SortOrderInput | SortOrder
    merkelTree?: SortOrderInput | SortOrder
    projectId?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _avg?: CollectionAvgOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
    _sum?: CollectionSumOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Collection"> | number
    name?: StringWithAggregatesFilter<"Collection"> | string
    description?: StringWithAggregatesFilter<"Collection"> | string
    website?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    image?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    uri?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    creatorId?: StringWithAggregatesFilter<"Collection"> | string
    publickey?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    merkelTree?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    projectId?: StringWithAggregatesFilter<"Collection"> | string
  }

  export type MarketTransactionWhereInput = {
    AND?: MarketTransactionWhereInput | MarketTransactionWhereInput[]
    OR?: MarketTransactionWhereInput[]
    NOT?: MarketTransactionWhereInput | MarketTransactionWhereInput[]
    id?: IntFilter<"MarketTransaction"> | number
    type?: EnumTransactionTypeFilter<"MarketTransaction"> | $Enums.TransactionType
    userId?: StringFilter<"MarketTransaction"> | string
    price?: StringFilter<"MarketTransaction"> | string
    createdAt?: DateTimeFilter<"MarketTransaction"> | Date | string
    assetId?: StringFilter<"MarketTransaction"> | string
    merkleTree?: StringFilter<"MarketTransaction"> | string
    pda?: StringNullableFilter<"MarketTransaction"> | string | null
    tx?: StringNullableFilter<"MarketTransaction"> | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MarketTransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    assetId?: SortOrder
    merkleTree?: SortOrder
    pda?: SortOrderInput | SortOrder
    tx?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type MarketTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MarketTransactionWhereInput | MarketTransactionWhereInput[]
    OR?: MarketTransactionWhereInput[]
    NOT?: MarketTransactionWhereInput | MarketTransactionWhereInput[]
    type?: EnumTransactionTypeFilter<"MarketTransaction"> | $Enums.TransactionType
    userId?: StringFilter<"MarketTransaction"> | string
    price?: StringFilter<"MarketTransaction"> | string
    createdAt?: DateTimeFilter<"MarketTransaction"> | Date | string
    assetId?: StringFilter<"MarketTransaction"> | string
    merkleTree?: StringFilter<"MarketTransaction"> | string
    pda?: StringNullableFilter<"MarketTransaction"> | string | null
    tx?: StringNullableFilter<"MarketTransaction"> | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MarketTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    assetId?: SortOrder
    merkleTree?: SortOrder
    pda?: SortOrderInput | SortOrder
    tx?: SortOrderInput | SortOrder
    _count?: MarketTransactionCountOrderByAggregateInput
    _avg?: MarketTransactionAvgOrderByAggregateInput
    _max?: MarketTransactionMaxOrderByAggregateInput
    _min?: MarketTransactionMinOrderByAggregateInput
    _sum?: MarketTransactionSumOrderByAggregateInput
  }

  export type MarketTransactionScalarWhereWithAggregatesInput = {
    AND?: MarketTransactionScalarWhereWithAggregatesInput | MarketTransactionScalarWhereWithAggregatesInput[]
    OR?: MarketTransactionScalarWhereWithAggregatesInput[]
    NOT?: MarketTransactionScalarWhereWithAggregatesInput | MarketTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MarketTransaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"MarketTransaction"> | $Enums.TransactionType
    userId?: StringWithAggregatesFilter<"MarketTransaction"> | string
    price?: StringWithAggregatesFilter<"MarketTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MarketTransaction"> | Date | string
    assetId?: StringWithAggregatesFilter<"MarketTransaction"> | string
    merkleTree?: StringWithAggregatesFilter<"MarketTransaction"> | string
    pda?: StringNullableWithAggregatesFilter<"MarketTransaction"> | string | null
    tx?: StringNullableWithAggregatesFilter<"MarketTransaction"> | string | null
  }

  export type NftMetadataWhereInput = {
    AND?: NftMetadataWhereInput | NftMetadataWhereInput[]
    OR?: NftMetadataWhereInput[]
    NOT?: NftMetadataWhereInput | NftMetadataWhereInput[]
    name?: StringFilter<"NftMetadata"> | string
    description?: StringFilter<"NftMetadata"> | string
    image?: StringFilter<"NftMetadata"> | string
    metadata?: JsonFilter<"NftMetadata">
    collectionId?: IntFilter<"NftMetadata"> | number
    createdAt?: DateTimeFilter<"NftMetadata"> | Date | string
    creatorId?: StringFilter<"NftMetadata"> | string
    address?: StringNullableFilter<"NftMetadata"> | string | null
    assetId?: StringNullableFilter<"NftMetadata"> | string | null
    minted?: BoolFilter<"NftMetadata"> | boolean
    uri?: StringNullableFilter<"NftMetadata"> | string | null
    tx?: StringNullableFilter<"NftMetadata"> | string | null
    id?: IntFilter<"NftMetadata"> | number
    Collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NftMetadataOrderByWithRelationInput = {
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    metadata?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    address?: SortOrderInput | SortOrder
    assetId?: SortOrderInput | SortOrder
    minted?: SortOrder
    uri?: SortOrderInput | SortOrder
    tx?: SortOrderInput | SortOrder
    id?: SortOrder
    Collection?: CollectionOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type NftMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NftMetadataWhereInput | NftMetadataWhereInput[]
    OR?: NftMetadataWhereInput[]
    NOT?: NftMetadataWhereInput | NftMetadataWhereInput[]
    name?: StringFilter<"NftMetadata"> | string
    description?: StringFilter<"NftMetadata"> | string
    image?: StringFilter<"NftMetadata"> | string
    metadata?: JsonFilter<"NftMetadata">
    collectionId?: IntFilter<"NftMetadata"> | number
    createdAt?: DateTimeFilter<"NftMetadata"> | Date | string
    creatorId?: StringFilter<"NftMetadata"> | string
    address?: StringNullableFilter<"NftMetadata"> | string | null
    assetId?: StringNullableFilter<"NftMetadata"> | string | null
    minted?: BoolFilter<"NftMetadata"> | boolean
    uri?: StringNullableFilter<"NftMetadata"> | string | null
    tx?: StringNullableFilter<"NftMetadata"> | string | null
    Collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NftMetadataOrderByWithAggregationInput = {
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    metadata?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    address?: SortOrderInput | SortOrder
    assetId?: SortOrderInput | SortOrder
    minted?: SortOrder
    uri?: SortOrderInput | SortOrder
    tx?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: NftMetadataCountOrderByAggregateInput
    _avg?: NftMetadataAvgOrderByAggregateInput
    _max?: NftMetadataMaxOrderByAggregateInput
    _min?: NftMetadataMinOrderByAggregateInput
    _sum?: NftMetadataSumOrderByAggregateInput
  }

  export type NftMetadataScalarWhereWithAggregatesInput = {
    AND?: NftMetadataScalarWhereWithAggregatesInput | NftMetadataScalarWhereWithAggregatesInput[]
    OR?: NftMetadataScalarWhereWithAggregatesInput[]
    NOT?: NftMetadataScalarWhereWithAggregatesInput | NftMetadataScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"NftMetadata"> | string
    description?: StringWithAggregatesFilter<"NftMetadata"> | string
    image?: StringWithAggregatesFilter<"NftMetadata"> | string
    metadata?: JsonWithAggregatesFilter<"NftMetadata">
    collectionId?: IntWithAggregatesFilter<"NftMetadata"> | number
    createdAt?: DateTimeWithAggregatesFilter<"NftMetadata"> | Date | string
    creatorId?: StringWithAggregatesFilter<"NftMetadata"> | string
    address?: StringNullableWithAggregatesFilter<"NftMetadata"> | string | null
    assetId?: StringNullableWithAggregatesFilter<"NftMetadata"> | string | null
    minted?: BoolWithAggregatesFilter<"NftMetadata"> | boolean
    uri?: StringNullableWithAggregatesFilter<"NftMetadata"> | string | null
    tx?: StringNullableWithAggregatesFilter<"NftMetadata"> | string | null
    id?: IntWithAggregatesFilter<"NftMetadata"> | number
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    content?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    images?: StringNullableListFilter<"Project">
    visibility?: EnumVisibilityFilter<"Project"> | $Enums.Visibility
    userId?: StringFilter<"Project"> | string
    Collection?: CollectionListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    content?: SortOrder
    description?: SortOrder
    images?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    Collection?: CollectionOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    content?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    images?: StringNullableListFilter<"Project">
    visibility?: EnumVisibilityFilter<"Project"> | $Enums.Visibility
    userId?: StringFilter<"Project"> | string
    Collection?: CollectionListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    content?: SortOrder
    description?: SortOrder
    images?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    content?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    images?: StringNullableListFilter<"Project">
    visibility?: EnumVisibilityWithAggregatesFilter<"Project"> | $Enums.Visibility
    userId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type SaasJobWhereInput = {
    AND?: SaasJobWhereInput | SaasJobWhereInput[]
    OR?: SaasJobWhereInput[]
    NOT?: SaasJobWhereInput | SaasJobWhereInput[]
    id?: IntFilter<"SaasJob"> | number
    name?: StringFilter<"SaasJob"> | string
    runCount?: IntFilter<"SaasJob"> | number
    createdAt?: DateTimeFilter<"SaasJob"> | Date | string
    updatedAt?: DateTimeNullableFilter<"SaasJob"> | Date | string | null
    SaasJobLog?: SaasJobLogListRelationFilter
  }

  export type SaasJobOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    runCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    SaasJobLog?: SaasJobLogOrderByRelationAggregateInput
  }

  export type SaasJobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaasJobWhereInput | SaasJobWhereInput[]
    OR?: SaasJobWhereInput[]
    NOT?: SaasJobWhereInput | SaasJobWhereInput[]
    name?: StringFilter<"SaasJob"> | string
    runCount?: IntFilter<"SaasJob"> | number
    createdAt?: DateTimeFilter<"SaasJob"> | Date | string
    updatedAt?: DateTimeNullableFilter<"SaasJob"> | Date | string | null
    SaasJobLog?: SaasJobLogListRelationFilter
  }, "id">

  export type SaasJobOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    runCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: SaasJobCountOrderByAggregateInput
    _avg?: SaasJobAvgOrderByAggregateInput
    _max?: SaasJobMaxOrderByAggregateInput
    _min?: SaasJobMinOrderByAggregateInput
    _sum?: SaasJobSumOrderByAggregateInput
  }

  export type SaasJobScalarWhereWithAggregatesInput = {
    AND?: SaasJobScalarWhereWithAggregatesInput | SaasJobScalarWhereWithAggregatesInput[]
    OR?: SaasJobScalarWhereWithAggregatesInput[]
    NOT?: SaasJobScalarWhereWithAggregatesInput | SaasJobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SaasJob"> | number
    name?: StringWithAggregatesFilter<"SaasJob"> | string
    runCount?: IntWithAggregatesFilter<"SaasJob"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SaasJob"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"SaasJob"> | Date | string | null
  }

  export type SaasJobLogWhereInput = {
    AND?: SaasJobLogWhereInput | SaasJobLogWhereInput[]
    OR?: SaasJobLogWhereInput[]
    NOT?: SaasJobLogWhereInput | SaasJobLogWhereInput[]
    id?: IntFilter<"SaasJobLog"> | number
    jobId?: IntFilter<"SaasJobLog"> | number
    message?: JsonFilter<"SaasJobLog">
    createdAt?: DateTimeFilter<"SaasJobLog"> | Date | string
    status?: StringFilter<"SaasJobLog"> | string
    SaasJob?: XOR<SaasJobScalarRelationFilter, SaasJobWhereInput>
  }

  export type SaasJobLogOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    SaasJob?: SaasJobOrderByWithRelationInput
  }

  export type SaasJobLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaasJobLogWhereInput | SaasJobLogWhereInput[]
    OR?: SaasJobLogWhereInput[]
    NOT?: SaasJobLogWhereInput | SaasJobLogWhereInput[]
    jobId?: IntFilter<"SaasJobLog"> | number
    message?: JsonFilter<"SaasJobLog">
    createdAt?: DateTimeFilter<"SaasJobLog"> | Date | string
    status?: StringFilter<"SaasJobLog"> | string
    SaasJob?: XOR<SaasJobScalarRelationFilter, SaasJobWhereInput>
  }, "id">

  export type SaasJobLogOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: SaasJobLogCountOrderByAggregateInput
    _avg?: SaasJobLogAvgOrderByAggregateInput
    _max?: SaasJobLogMaxOrderByAggregateInput
    _min?: SaasJobLogMinOrderByAggregateInput
    _sum?: SaasJobLogSumOrderByAggregateInput
  }

  export type SaasJobLogScalarWhereWithAggregatesInput = {
    AND?: SaasJobLogScalarWhereWithAggregatesInput | SaasJobLogScalarWhereWithAggregatesInput[]
    OR?: SaasJobLogScalarWhereWithAggregatesInput[]
    NOT?: SaasJobLogScalarWhereWithAggregatesInput | SaasJobLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SaasJobLog"> | number
    jobId?: IntWithAggregatesFilter<"SaasJobLog"> | number
    message?: JsonWithAggregatesFilter<"SaasJobLog">
    createdAt?: DateTimeWithAggregatesFilter<"SaasJobLog"> | Date | string
    status?: StringWithAggregatesFilter<"SaasJobLog"> | string
  }

  export type SaasRequestWhereInput = {
    AND?: SaasRequestWhereInput | SaasRequestWhereInput[]
    OR?: SaasRequestWhereInput[]
    NOT?: SaasRequestWhereInput | SaasRequestWhereInput[]
    id?: StringFilter<"SaasRequest"> | string
    createdAt?: DateTimeFilter<"SaasRequest"> | Date | string
    updatedAt?: DateTimeNullableFilter<"SaasRequest"> | Date | string | null
    maxNftCanMint?: IntFilter<"SaasRequest"> | number
    minted?: IntFilter<"SaasRequest"> | number
    status?: EnumRequestStatusFilter<"SaasRequest"> | $Enums.RequestStatus
    collectionId?: IntFilter<"SaasRequest"> | number
    userId?: StringFilter<"SaasRequest"> | string
    Collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SaasRequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    maxNftCanMint?: SortOrder
    minted?: SortOrder
    status?: SortOrder
    collectionId?: SortOrder
    userId?: SortOrder
    Collection?: CollectionOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type SaasRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaasRequestWhereInput | SaasRequestWhereInput[]
    OR?: SaasRequestWhereInput[]
    NOT?: SaasRequestWhereInput | SaasRequestWhereInput[]
    createdAt?: DateTimeFilter<"SaasRequest"> | Date | string
    updatedAt?: DateTimeNullableFilter<"SaasRequest"> | Date | string | null
    maxNftCanMint?: IntFilter<"SaasRequest"> | number
    minted?: IntFilter<"SaasRequest"> | number
    status?: EnumRequestStatusFilter<"SaasRequest"> | $Enums.RequestStatus
    collectionId?: IntFilter<"SaasRequest"> | number
    userId?: StringFilter<"SaasRequest"> | string
    Collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SaasRequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    maxNftCanMint?: SortOrder
    minted?: SortOrder
    status?: SortOrder
    collectionId?: SortOrder
    userId?: SortOrder
    _count?: SaasRequestCountOrderByAggregateInput
    _avg?: SaasRequestAvgOrderByAggregateInput
    _max?: SaasRequestMaxOrderByAggregateInput
    _min?: SaasRequestMinOrderByAggregateInput
    _sum?: SaasRequestSumOrderByAggregateInput
  }

  export type SaasRequestScalarWhereWithAggregatesInput = {
    AND?: SaasRequestScalarWhereWithAggregatesInput | SaasRequestScalarWhereWithAggregatesInput[]
    OR?: SaasRequestScalarWhereWithAggregatesInput[]
    NOT?: SaasRequestScalarWhereWithAggregatesInput | SaasRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SaasRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SaasRequest"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"SaasRequest"> | Date | string | null
    maxNftCanMint?: IntWithAggregatesFilter<"SaasRequest"> | number
    minted?: IntWithAggregatesFilter<"SaasRequest"> | number
    status?: EnumRequestStatusWithAggregatesFilter<"SaasRequest"> | $Enums.RequestStatus
    collectionId?: IntWithAggregatesFilter<"SaasRequest"> | number
    userId?: StringWithAggregatesFilter<"SaasRequest"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullname?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isKyced?: BoolFilter<"User"> | boolean
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    Collection?: CollectionListRelationFilter
    MarketTransaction?: MarketTransactionListRelationFilter
    NftMetadata?: NftMetadataListRelationFilter
    Project?: ProjectListRelationFilter
    SaasRequest?: SaasRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isKyced?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    Collection?: CollectionOrderByRelationAggregateInput
    MarketTransaction?: MarketTransactionOrderByRelationAggregateInput
    NftMetadata?: NftMetadataOrderByRelationAggregateInput
    Project?: ProjectOrderByRelationAggregateInput
    SaasRequest?: SaasRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isKyced?: BoolFilter<"User"> | boolean
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    Collection?: CollectionListRelationFilter
    MarketTransaction?: MarketTransactionListRelationFilter
    NftMetadata?: NftMetadataListRelationFilter
    Project?: ProjectListRelationFilter
    SaasRequest?: SaasRequestListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isKyced?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullname?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isKyced?: BoolWithAggregatesFilter<"User"> | boolean
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CollectionCreateInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    publickey?: string | null
    merkelTree?: string | null
    User: UserCreateNestedOneWithoutCollectionInput
    Project: ProjectCreateNestedOneWithoutCollectionInput
    NftMetadata?: NftMetadataCreateNestedManyWithoutCollectionInput
    SaasRequest?: SaasRequestCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    creatorId: string
    publickey?: string | null
    merkelTree?: string | null
    projectId: string
    NftMetadata?: NftMetadataUncheckedCreateNestedManyWithoutCollectionInput
    SaasRequest?: SaasRequestUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutCollectionNestedInput
    Project?: ProjectUpdateOneRequiredWithoutCollectionNestedInput
    NftMetadata?: NftMetadataUpdateManyWithoutCollectionNestedInput
    SaasRequest?: SaasRequestUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    NftMetadata?: NftMetadataUncheckedUpdateManyWithoutCollectionNestedInput
    SaasRequest?: SaasRequestUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    creatorId: string
    publickey?: string | null
    merkelTree?: string | null
    projectId: string
  }

  export type CollectionUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type MarketTransactionCreateInput = {
    type: $Enums.TransactionType
    price: string
    createdAt?: Date | string
    assetId: string
    merkleTree: string
    pda?: string | null
    tx?: string | null
    User: UserCreateNestedOneWithoutMarketTransactionInput
  }

  export type MarketTransactionUncheckedCreateInput = {
    id?: number
    type: $Enums.TransactionType
    userId: string
    price: string
    createdAt?: Date | string
    assetId: string
    merkleTree: string
    pda?: string | null
    tx?: string | null
  }

  export type MarketTransactionUpdateInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
    merkleTree?: StringFieldUpdateOperationsInput | string
    pda?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutMarketTransactionNestedInput
  }

  export type MarketTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    userId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
    merkleTree?: StringFieldUpdateOperationsInput | string
    pda?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketTransactionCreateManyInput = {
    id?: number
    type: $Enums.TransactionType
    userId: string
    price: string
    createdAt?: Date | string
    assetId: string
    merkleTree: string
    pda?: string | null
    tx?: string | null
  }

  export type MarketTransactionUpdateManyMutationInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
    merkleTree?: StringFieldUpdateOperationsInput | string
    pda?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    userId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
    merkleTree?: StringFieldUpdateOperationsInput | string
    pda?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NftMetadataCreateInput = {
    name: string
    description: string
    image: string
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    address?: string | null
    assetId?: string | null
    minted?: boolean
    uri?: string | null
    tx?: string | null
    Collection: CollectionCreateNestedOneWithoutNftMetadataInput
    User: UserCreateNestedOneWithoutNftMetadataInput
  }

  export type NftMetadataUncheckedCreateInput = {
    name: string
    description: string
    image: string
    metadata: JsonNullValueInput | InputJsonValue
    collectionId: number
    createdAt?: Date | string
    creatorId: string
    address?: string | null
    assetId?: string | null
    minted?: boolean
    uri?: string | null
    tx?: string | null
    id?: number
  }

  export type NftMetadataUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    minted?: BoolFieldUpdateOperationsInput | boolean
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUpdateOneRequiredWithoutNftMetadataNestedInput
    User?: UserUpdateOneRequiredWithoutNftMetadataNestedInput
  }

  export type NftMetadataUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    collectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    minted?: BoolFieldUpdateOperationsInput | boolean
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type NftMetadataCreateManyInput = {
    name: string
    description: string
    image: string
    metadata: JsonNullValueInput | InputJsonValue
    collectionId: number
    createdAt?: Date | string
    creatorId: string
    address?: string | null
    assetId?: string | null
    minted?: boolean
    uri?: string | null
    tx?: string | null
    id?: number
  }

  export type NftMetadataUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    minted?: BoolFieldUpdateOperationsInput | boolean
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NftMetadataUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    collectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    minted?: BoolFieldUpdateOperationsInput | boolean
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    description: string
    images?: ProjectCreateimagesInput | string[]
    visibility: $Enums.Visibility
    Collection?: CollectionCreateNestedManyWithoutProjectInput
    User: UserCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    description: string
    images?: ProjectCreateimagesInput | string[]
    visibility: $Enums.Visibility
    userId: string
    Collection?: CollectionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProjectUpdateimagesInput | string[]
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    Collection?: CollectionUpdateManyWithoutProjectNestedInput
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProjectUpdateimagesInput | string[]
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    userId?: StringFieldUpdateOperationsInput | string
    Collection?: CollectionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    description: string
    images?: ProjectCreateimagesInput | string[]
    visibility: $Enums.Visibility
    userId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProjectUpdateimagesInput | string[]
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProjectUpdateimagesInput | string[]
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SaasJobCreateInput = {
    name: string
    runCount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    SaasJobLog?: SaasJobLogCreateNestedManyWithoutSaasJobInput
  }

  export type SaasJobUncheckedCreateInput = {
    id?: number
    name: string
    runCount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    SaasJobLog?: SaasJobLogUncheckedCreateNestedManyWithoutSaasJobInput
  }

  export type SaasJobUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    runCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SaasJobLog?: SaasJobLogUpdateManyWithoutSaasJobNestedInput
  }

  export type SaasJobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    runCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SaasJobLog?: SaasJobLogUncheckedUpdateManyWithoutSaasJobNestedInput
  }

  export type SaasJobCreateManyInput = {
    id?: number
    name: string
    runCount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SaasJobUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    runCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaasJobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    runCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaasJobLogCreateInput = {
    message: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    status: string
    SaasJob: SaasJobCreateNestedOneWithoutSaasJobLogInput
  }

  export type SaasJobLogUncheckedCreateInput = {
    id?: number
    jobId: number
    message: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    status: string
  }

  export type SaasJobLogUpdateInput = {
    message?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    SaasJob?: SaasJobUpdateOneRequiredWithoutSaasJobLogNestedInput
  }

  export type SaasJobLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    message?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SaasJobLogCreateManyInput = {
    id?: number
    jobId: number
    message: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    status: string
  }

  export type SaasJobLogUpdateManyMutationInput = {
    message?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SaasJobLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    message?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SaasRequestCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    maxNftCanMint: number
    minted?: number
    status?: $Enums.RequestStatus
    Collection: CollectionCreateNestedOneWithoutSaasRequestInput
    User: UserCreateNestedOneWithoutSaasRequestInput
  }

  export type SaasRequestUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    maxNftCanMint: number
    minted?: number
    status?: $Enums.RequestStatus
    collectionId: number
    userId: string
  }

  export type SaasRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxNftCanMint?: IntFieldUpdateOperationsInput | number
    minted?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    Collection?: CollectionUpdateOneRequiredWithoutSaasRequestNestedInput
    User?: UserUpdateOneRequiredWithoutSaasRequestNestedInput
  }

  export type SaasRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxNftCanMint?: IntFieldUpdateOperationsInput | number
    minted?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    collectionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SaasRequestCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    maxNftCanMint: number
    minted?: number
    status?: $Enums.RequestStatus
    collectionId: number
    userId: string
  }

  export type SaasRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxNftCanMint?: IntFieldUpdateOperationsInput | number
    minted?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type SaasRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxNftCanMint?: IntFieldUpdateOperationsInput | number
    minted?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    collectionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    Collection?: CollectionCreateNestedManyWithoutUserInput
    MarketTransaction?: MarketTransactionCreateNestedManyWithoutUserInput
    NftMetadata?: NftMetadataCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutUserInput
    SaasRequest?: SaasRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    Collection?: CollectionUncheckedCreateNestedManyWithoutUserInput
    MarketTransaction?: MarketTransactionUncheckedCreateNestedManyWithoutUserInput
    NftMetadata?: NftMetadataUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
    SaasRequest?: SaasRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUpdateManyWithoutUserNestedInput
    MarketTransaction?: MarketTransactionUpdateManyWithoutUserNestedInput
    NftMetadata?: NftMetadataUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutUserNestedInput
    SaasRequest?: SaasRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    MarketTransaction?: MarketTransactionUncheckedUpdateManyWithoutUserNestedInput
    NftMetadata?: NftMetadataUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    SaasRequest?: SaasRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type NftMetadataListRelationFilter = {
    every?: NftMetadataWhereInput
    some?: NftMetadataWhereInput
    none?: NftMetadataWhereInput
  }

  export type SaasRequestListRelationFilter = {
    every?: SaasRequestWhereInput
    some?: SaasRequestWhereInput
    none?: SaasRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NftMetadataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaasRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    website?: SortOrder
    image?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    publickey?: SortOrder
    merkelTree?: SortOrder
    projectId?: SortOrder
  }

  export type CollectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    website?: SortOrder
    image?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    publickey?: SortOrder
    merkelTree?: SortOrder
    projectId?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    website?: SortOrder
    image?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    publickey?: SortOrder
    merkelTree?: SortOrder
    projectId?: SortOrder
  }

  export type CollectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type MarketTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    assetId?: SortOrder
    merkleTree?: SortOrder
    pda?: SortOrder
    tx?: SortOrder
  }

  export type MarketTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarketTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    assetId?: SortOrder
    merkleTree?: SortOrder
    pda?: SortOrder
    tx?: SortOrder
  }

  export type MarketTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    assetId?: SortOrder
    merkleTree?: SortOrder
    pda?: SortOrder
    tx?: SortOrder
  }

  export type MarketTransactionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CollectionScalarRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type NftMetadataCountOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    metadata?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    address?: SortOrder
    assetId?: SortOrder
    minted?: SortOrder
    uri?: SortOrder
    tx?: SortOrder
    id?: SortOrder
  }

  export type NftMetadataAvgOrderByAggregateInput = {
    collectionId?: SortOrder
    id?: SortOrder
  }

  export type NftMetadataMaxOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    address?: SortOrder
    assetId?: SortOrder
    minted?: SortOrder
    uri?: SortOrder
    tx?: SortOrder
    id?: SortOrder
  }

  export type NftMetadataMinOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    address?: SortOrder
    assetId?: SortOrder
    minted?: SortOrder
    uri?: SortOrder
    tx?: SortOrder
    id?: SortOrder
  }

  export type NftMetadataSumOrderByAggregateInput = {
    collectionId?: SortOrder
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    description?: SortOrder
    images?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }

  export type SaasJobLogListRelationFilter = {
    every?: SaasJobLogWhereInput
    some?: SaasJobLogWhereInput
    none?: SaasJobLogWhereInput
  }

  export type SaasJobLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaasJobCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    runCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaasJobAvgOrderByAggregateInput = {
    id?: SortOrder
    runCount?: SortOrder
  }

  export type SaasJobMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    runCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaasJobMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    runCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaasJobSumOrderByAggregateInput = {
    id?: SortOrder
    runCount?: SortOrder
  }

  export type SaasJobScalarRelationFilter = {
    is?: SaasJobWhereInput
    isNot?: SaasJobWhereInput
  }

  export type SaasJobLogCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type SaasJobLogAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type SaasJobLogMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type SaasJobLogMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type SaasJobLogSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type SaasRequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxNftCanMint?: SortOrder
    minted?: SortOrder
    status?: SortOrder
    collectionId?: SortOrder
    userId?: SortOrder
  }

  export type SaasRequestAvgOrderByAggregateInput = {
    maxNftCanMint?: SortOrder
    minted?: SortOrder
    collectionId?: SortOrder
  }

  export type SaasRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxNftCanMint?: SortOrder
    minted?: SortOrder
    status?: SortOrder
    collectionId?: SortOrder
    userId?: SortOrder
  }

  export type SaasRequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxNftCanMint?: SortOrder
    minted?: SortOrder
    status?: SortOrder
    collectionId?: SortOrder
    userId?: SortOrder
  }

  export type SaasRequestSumOrderByAggregateInput = {
    maxNftCanMint?: SortOrder
    minted?: SortOrder
    collectionId?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type MarketTransactionListRelationFilter = {
    every?: MarketTransactionWhereInput
    some?: MarketTransactionWhereInput
    none?: MarketTransactionWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type MarketTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isKyced?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isKyced?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isKyced?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserCreateNestedOneWithoutCollectionInput = {
    create?: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutCollectionInput = {
    create?: XOR<ProjectCreateWithoutCollectionInput, ProjectUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCollectionInput
    connect?: ProjectWhereUniqueInput
  }

  export type NftMetadataCreateNestedManyWithoutCollectionInput = {
    create?: XOR<NftMetadataCreateWithoutCollectionInput, NftMetadataUncheckedCreateWithoutCollectionInput> | NftMetadataCreateWithoutCollectionInput[] | NftMetadataUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: NftMetadataCreateOrConnectWithoutCollectionInput | NftMetadataCreateOrConnectWithoutCollectionInput[]
    createMany?: NftMetadataCreateManyCollectionInputEnvelope
    connect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
  }

  export type SaasRequestCreateNestedManyWithoutCollectionInput = {
    create?: XOR<SaasRequestCreateWithoutCollectionInput, SaasRequestUncheckedCreateWithoutCollectionInput> | SaasRequestCreateWithoutCollectionInput[] | SaasRequestUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: SaasRequestCreateOrConnectWithoutCollectionInput | SaasRequestCreateOrConnectWithoutCollectionInput[]
    createMany?: SaasRequestCreateManyCollectionInputEnvelope
    connect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
  }

  export type NftMetadataUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<NftMetadataCreateWithoutCollectionInput, NftMetadataUncheckedCreateWithoutCollectionInput> | NftMetadataCreateWithoutCollectionInput[] | NftMetadataUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: NftMetadataCreateOrConnectWithoutCollectionInput | NftMetadataCreateOrConnectWithoutCollectionInput[]
    createMany?: NftMetadataCreateManyCollectionInputEnvelope
    connect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
  }

  export type SaasRequestUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<SaasRequestCreateWithoutCollectionInput, SaasRequestUncheckedCreateWithoutCollectionInput> | SaasRequestCreateWithoutCollectionInput[] | SaasRequestUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: SaasRequestCreateOrConnectWithoutCollectionInput | SaasRequestCreateOrConnectWithoutCollectionInput[]
    createMany?: SaasRequestCreateManyCollectionInputEnvelope
    connect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCollectionNestedInput = {
    create?: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionInput
    upsert?: UserUpsertWithoutCollectionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionInput, UserUpdateWithoutCollectionInput>, UserUncheckedUpdateWithoutCollectionInput>
  }

  export type ProjectUpdateOneRequiredWithoutCollectionNestedInput = {
    create?: XOR<ProjectCreateWithoutCollectionInput, ProjectUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCollectionInput
    upsert?: ProjectUpsertWithoutCollectionInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCollectionInput, ProjectUpdateWithoutCollectionInput>, ProjectUncheckedUpdateWithoutCollectionInput>
  }

  export type NftMetadataUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<NftMetadataCreateWithoutCollectionInput, NftMetadataUncheckedCreateWithoutCollectionInput> | NftMetadataCreateWithoutCollectionInput[] | NftMetadataUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: NftMetadataCreateOrConnectWithoutCollectionInput | NftMetadataCreateOrConnectWithoutCollectionInput[]
    upsert?: NftMetadataUpsertWithWhereUniqueWithoutCollectionInput | NftMetadataUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: NftMetadataCreateManyCollectionInputEnvelope
    set?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    disconnect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    delete?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    connect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    update?: NftMetadataUpdateWithWhereUniqueWithoutCollectionInput | NftMetadataUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: NftMetadataUpdateManyWithWhereWithoutCollectionInput | NftMetadataUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: NftMetadataScalarWhereInput | NftMetadataScalarWhereInput[]
  }

  export type SaasRequestUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<SaasRequestCreateWithoutCollectionInput, SaasRequestUncheckedCreateWithoutCollectionInput> | SaasRequestCreateWithoutCollectionInput[] | SaasRequestUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: SaasRequestCreateOrConnectWithoutCollectionInput | SaasRequestCreateOrConnectWithoutCollectionInput[]
    upsert?: SaasRequestUpsertWithWhereUniqueWithoutCollectionInput | SaasRequestUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: SaasRequestCreateManyCollectionInputEnvelope
    set?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    disconnect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    delete?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    connect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    update?: SaasRequestUpdateWithWhereUniqueWithoutCollectionInput | SaasRequestUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: SaasRequestUpdateManyWithWhereWithoutCollectionInput | SaasRequestUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: SaasRequestScalarWhereInput | SaasRequestScalarWhereInput[]
  }

  export type NftMetadataUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<NftMetadataCreateWithoutCollectionInput, NftMetadataUncheckedCreateWithoutCollectionInput> | NftMetadataCreateWithoutCollectionInput[] | NftMetadataUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: NftMetadataCreateOrConnectWithoutCollectionInput | NftMetadataCreateOrConnectWithoutCollectionInput[]
    upsert?: NftMetadataUpsertWithWhereUniqueWithoutCollectionInput | NftMetadataUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: NftMetadataCreateManyCollectionInputEnvelope
    set?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    disconnect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    delete?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    connect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    update?: NftMetadataUpdateWithWhereUniqueWithoutCollectionInput | NftMetadataUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: NftMetadataUpdateManyWithWhereWithoutCollectionInput | NftMetadataUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: NftMetadataScalarWhereInput | NftMetadataScalarWhereInput[]
  }

  export type SaasRequestUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<SaasRequestCreateWithoutCollectionInput, SaasRequestUncheckedCreateWithoutCollectionInput> | SaasRequestCreateWithoutCollectionInput[] | SaasRequestUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: SaasRequestCreateOrConnectWithoutCollectionInput | SaasRequestCreateOrConnectWithoutCollectionInput[]
    upsert?: SaasRequestUpsertWithWhereUniqueWithoutCollectionInput | SaasRequestUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: SaasRequestCreateManyCollectionInputEnvelope
    set?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    disconnect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    delete?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    connect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    update?: SaasRequestUpdateWithWhereUniqueWithoutCollectionInput | SaasRequestUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: SaasRequestUpdateManyWithWhereWithoutCollectionInput | SaasRequestUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: SaasRequestScalarWhereInput | SaasRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMarketTransactionInput = {
    create?: XOR<UserCreateWithoutMarketTransactionInput, UserUncheckedCreateWithoutMarketTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutMarketTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type UserUpdateOneRequiredWithoutMarketTransactionNestedInput = {
    create?: XOR<UserCreateWithoutMarketTransactionInput, UserUncheckedCreateWithoutMarketTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutMarketTransactionInput
    upsert?: UserUpsertWithoutMarketTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMarketTransactionInput, UserUpdateWithoutMarketTransactionInput>, UserUncheckedUpdateWithoutMarketTransactionInput>
  }

  export type CollectionCreateNestedOneWithoutNftMetadataInput = {
    create?: XOR<CollectionCreateWithoutNftMetadataInput, CollectionUncheckedCreateWithoutNftMetadataInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutNftMetadataInput
    connect?: CollectionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNftMetadataInput = {
    create?: XOR<UserCreateWithoutNftMetadataInput, UserUncheckedCreateWithoutNftMetadataInput>
    connectOrCreate?: UserCreateOrConnectWithoutNftMetadataInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CollectionUpdateOneRequiredWithoutNftMetadataNestedInput = {
    create?: XOR<CollectionCreateWithoutNftMetadataInput, CollectionUncheckedCreateWithoutNftMetadataInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutNftMetadataInput
    upsert?: CollectionUpsertWithoutNftMetadataInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutNftMetadataInput, CollectionUpdateWithoutNftMetadataInput>, CollectionUncheckedUpdateWithoutNftMetadataInput>
  }

  export type UserUpdateOneRequiredWithoutNftMetadataNestedInput = {
    create?: XOR<UserCreateWithoutNftMetadataInput, UserUncheckedCreateWithoutNftMetadataInput>
    connectOrCreate?: UserCreateOrConnectWithoutNftMetadataInput
    upsert?: UserUpsertWithoutNftMetadataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNftMetadataInput, UserUpdateWithoutNftMetadataInput>, UserUncheckedUpdateWithoutNftMetadataInput>
  }

  export type ProjectCreateimagesInput = {
    set: string[]
  }

  export type CollectionCreateNestedManyWithoutProjectInput = {
    create?: XOR<CollectionCreateWithoutProjectInput, CollectionUncheckedCreateWithoutProjectInput> | CollectionCreateWithoutProjectInput[] | CollectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutProjectInput | CollectionCreateOrConnectWithoutProjectInput[]
    createMany?: CollectionCreateManyProjectInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type CollectionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CollectionCreateWithoutProjectInput, CollectionUncheckedCreateWithoutProjectInput> | CollectionCreateWithoutProjectInput[] | CollectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutProjectInput | CollectionCreateOrConnectWithoutProjectInput[]
    createMany?: CollectionCreateManyProjectInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.Visibility
  }

  export type CollectionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CollectionCreateWithoutProjectInput, CollectionUncheckedCreateWithoutProjectInput> | CollectionCreateWithoutProjectInput[] | CollectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutProjectInput | CollectionCreateOrConnectWithoutProjectInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutProjectInput | CollectionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CollectionCreateManyProjectInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutProjectInput | CollectionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutProjectInput | CollectionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectInput, UserUpdateWithoutProjectInput>, UserUncheckedUpdateWithoutProjectInput>
  }

  export type CollectionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CollectionCreateWithoutProjectInput, CollectionUncheckedCreateWithoutProjectInput> | CollectionCreateWithoutProjectInput[] | CollectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutProjectInput | CollectionCreateOrConnectWithoutProjectInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutProjectInput | CollectionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CollectionCreateManyProjectInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutProjectInput | CollectionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutProjectInput | CollectionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type SaasJobLogCreateNestedManyWithoutSaasJobInput = {
    create?: XOR<SaasJobLogCreateWithoutSaasJobInput, SaasJobLogUncheckedCreateWithoutSaasJobInput> | SaasJobLogCreateWithoutSaasJobInput[] | SaasJobLogUncheckedCreateWithoutSaasJobInput[]
    connectOrCreate?: SaasJobLogCreateOrConnectWithoutSaasJobInput | SaasJobLogCreateOrConnectWithoutSaasJobInput[]
    createMany?: SaasJobLogCreateManySaasJobInputEnvelope
    connect?: SaasJobLogWhereUniqueInput | SaasJobLogWhereUniqueInput[]
  }

  export type SaasJobLogUncheckedCreateNestedManyWithoutSaasJobInput = {
    create?: XOR<SaasJobLogCreateWithoutSaasJobInput, SaasJobLogUncheckedCreateWithoutSaasJobInput> | SaasJobLogCreateWithoutSaasJobInput[] | SaasJobLogUncheckedCreateWithoutSaasJobInput[]
    connectOrCreate?: SaasJobLogCreateOrConnectWithoutSaasJobInput | SaasJobLogCreateOrConnectWithoutSaasJobInput[]
    createMany?: SaasJobLogCreateManySaasJobInputEnvelope
    connect?: SaasJobLogWhereUniqueInput | SaasJobLogWhereUniqueInput[]
  }

  export type SaasJobLogUpdateManyWithoutSaasJobNestedInput = {
    create?: XOR<SaasJobLogCreateWithoutSaasJobInput, SaasJobLogUncheckedCreateWithoutSaasJobInput> | SaasJobLogCreateWithoutSaasJobInput[] | SaasJobLogUncheckedCreateWithoutSaasJobInput[]
    connectOrCreate?: SaasJobLogCreateOrConnectWithoutSaasJobInput | SaasJobLogCreateOrConnectWithoutSaasJobInput[]
    upsert?: SaasJobLogUpsertWithWhereUniqueWithoutSaasJobInput | SaasJobLogUpsertWithWhereUniqueWithoutSaasJobInput[]
    createMany?: SaasJobLogCreateManySaasJobInputEnvelope
    set?: SaasJobLogWhereUniqueInput | SaasJobLogWhereUniqueInput[]
    disconnect?: SaasJobLogWhereUniqueInput | SaasJobLogWhereUniqueInput[]
    delete?: SaasJobLogWhereUniqueInput | SaasJobLogWhereUniqueInput[]
    connect?: SaasJobLogWhereUniqueInput | SaasJobLogWhereUniqueInput[]
    update?: SaasJobLogUpdateWithWhereUniqueWithoutSaasJobInput | SaasJobLogUpdateWithWhereUniqueWithoutSaasJobInput[]
    updateMany?: SaasJobLogUpdateManyWithWhereWithoutSaasJobInput | SaasJobLogUpdateManyWithWhereWithoutSaasJobInput[]
    deleteMany?: SaasJobLogScalarWhereInput | SaasJobLogScalarWhereInput[]
  }

  export type SaasJobLogUncheckedUpdateManyWithoutSaasJobNestedInput = {
    create?: XOR<SaasJobLogCreateWithoutSaasJobInput, SaasJobLogUncheckedCreateWithoutSaasJobInput> | SaasJobLogCreateWithoutSaasJobInput[] | SaasJobLogUncheckedCreateWithoutSaasJobInput[]
    connectOrCreate?: SaasJobLogCreateOrConnectWithoutSaasJobInput | SaasJobLogCreateOrConnectWithoutSaasJobInput[]
    upsert?: SaasJobLogUpsertWithWhereUniqueWithoutSaasJobInput | SaasJobLogUpsertWithWhereUniqueWithoutSaasJobInput[]
    createMany?: SaasJobLogCreateManySaasJobInputEnvelope
    set?: SaasJobLogWhereUniqueInput | SaasJobLogWhereUniqueInput[]
    disconnect?: SaasJobLogWhereUniqueInput | SaasJobLogWhereUniqueInput[]
    delete?: SaasJobLogWhereUniqueInput | SaasJobLogWhereUniqueInput[]
    connect?: SaasJobLogWhereUniqueInput | SaasJobLogWhereUniqueInput[]
    update?: SaasJobLogUpdateWithWhereUniqueWithoutSaasJobInput | SaasJobLogUpdateWithWhereUniqueWithoutSaasJobInput[]
    updateMany?: SaasJobLogUpdateManyWithWhereWithoutSaasJobInput | SaasJobLogUpdateManyWithWhereWithoutSaasJobInput[]
    deleteMany?: SaasJobLogScalarWhereInput | SaasJobLogScalarWhereInput[]
  }

  export type SaasJobCreateNestedOneWithoutSaasJobLogInput = {
    create?: XOR<SaasJobCreateWithoutSaasJobLogInput, SaasJobUncheckedCreateWithoutSaasJobLogInput>
    connectOrCreate?: SaasJobCreateOrConnectWithoutSaasJobLogInput
    connect?: SaasJobWhereUniqueInput
  }

  export type SaasJobUpdateOneRequiredWithoutSaasJobLogNestedInput = {
    create?: XOR<SaasJobCreateWithoutSaasJobLogInput, SaasJobUncheckedCreateWithoutSaasJobLogInput>
    connectOrCreate?: SaasJobCreateOrConnectWithoutSaasJobLogInput
    upsert?: SaasJobUpsertWithoutSaasJobLogInput
    connect?: SaasJobWhereUniqueInput
    update?: XOR<XOR<SaasJobUpdateToOneWithWhereWithoutSaasJobLogInput, SaasJobUpdateWithoutSaasJobLogInput>, SaasJobUncheckedUpdateWithoutSaasJobLogInput>
  }

  export type CollectionCreateNestedOneWithoutSaasRequestInput = {
    create?: XOR<CollectionCreateWithoutSaasRequestInput, CollectionUncheckedCreateWithoutSaasRequestInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutSaasRequestInput
    connect?: CollectionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSaasRequestInput = {
    create?: XOR<UserCreateWithoutSaasRequestInput, UserUncheckedCreateWithoutSaasRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutSaasRequestInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type CollectionUpdateOneRequiredWithoutSaasRequestNestedInput = {
    create?: XOR<CollectionCreateWithoutSaasRequestInput, CollectionUncheckedCreateWithoutSaasRequestInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutSaasRequestInput
    upsert?: CollectionUpsertWithoutSaasRequestInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutSaasRequestInput, CollectionUpdateWithoutSaasRequestInput>, CollectionUncheckedUpdateWithoutSaasRequestInput>
  }

  export type UserUpdateOneRequiredWithoutSaasRequestNestedInput = {
    create?: XOR<UserCreateWithoutSaasRequestInput, UserUncheckedCreateWithoutSaasRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutSaasRequestInput
    upsert?: UserUpsertWithoutSaasRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSaasRequestInput, UserUpdateWithoutSaasRequestInput>, UserUncheckedUpdateWithoutSaasRequestInput>
  }

  export type CollectionCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type MarketTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<MarketTransactionCreateWithoutUserInput, MarketTransactionUncheckedCreateWithoutUserInput> | MarketTransactionCreateWithoutUserInput[] | MarketTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarketTransactionCreateOrConnectWithoutUserInput | MarketTransactionCreateOrConnectWithoutUserInput[]
    createMany?: MarketTransactionCreateManyUserInputEnvelope
    connect?: MarketTransactionWhereUniqueInput | MarketTransactionWhereUniqueInput[]
  }

  export type NftMetadataCreateNestedManyWithoutUserInput = {
    create?: XOR<NftMetadataCreateWithoutUserInput, NftMetadataUncheckedCreateWithoutUserInput> | NftMetadataCreateWithoutUserInput[] | NftMetadataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NftMetadataCreateOrConnectWithoutUserInput | NftMetadataCreateOrConnectWithoutUserInput[]
    createMany?: NftMetadataCreateManyUserInputEnvelope
    connect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SaasRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<SaasRequestCreateWithoutUserInput, SaasRequestUncheckedCreateWithoutUserInput> | SaasRequestCreateWithoutUserInput[] | SaasRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaasRequestCreateOrConnectWithoutUserInput | SaasRequestCreateOrConnectWithoutUserInput[]
    createMany?: SaasRequestCreateManyUserInputEnvelope
    connect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type MarketTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MarketTransactionCreateWithoutUserInput, MarketTransactionUncheckedCreateWithoutUserInput> | MarketTransactionCreateWithoutUserInput[] | MarketTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarketTransactionCreateOrConnectWithoutUserInput | MarketTransactionCreateOrConnectWithoutUserInput[]
    createMany?: MarketTransactionCreateManyUserInputEnvelope
    connect?: MarketTransactionWhereUniqueInput | MarketTransactionWhereUniqueInput[]
  }

  export type NftMetadataUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NftMetadataCreateWithoutUserInput, NftMetadataUncheckedCreateWithoutUserInput> | NftMetadataCreateWithoutUserInput[] | NftMetadataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NftMetadataCreateOrConnectWithoutUserInput | NftMetadataCreateOrConnectWithoutUserInput[]
    createMany?: NftMetadataCreateManyUserInputEnvelope
    connect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type SaasRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SaasRequestCreateWithoutUserInput, SaasRequestUncheckedCreateWithoutUserInput> | SaasRequestCreateWithoutUserInput[] | SaasRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaasRequestCreateOrConnectWithoutUserInput | SaasRequestCreateOrConnectWithoutUserInput[]
    createMany?: SaasRequestCreateManyUserInputEnvelope
    connect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
  }

  export type CollectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type MarketTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MarketTransactionCreateWithoutUserInput, MarketTransactionUncheckedCreateWithoutUserInput> | MarketTransactionCreateWithoutUserInput[] | MarketTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarketTransactionCreateOrConnectWithoutUserInput | MarketTransactionCreateOrConnectWithoutUserInput[]
    upsert?: MarketTransactionUpsertWithWhereUniqueWithoutUserInput | MarketTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MarketTransactionCreateManyUserInputEnvelope
    set?: MarketTransactionWhereUniqueInput | MarketTransactionWhereUniqueInput[]
    disconnect?: MarketTransactionWhereUniqueInput | MarketTransactionWhereUniqueInput[]
    delete?: MarketTransactionWhereUniqueInput | MarketTransactionWhereUniqueInput[]
    connect?: MarketTransactionWhereUniqueInput | MarketTransactionWhereUniqueInput[]
    update?: MarketTransactionUpdateWithWhereUniqueWithoutUserInput | MarketTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MarketTransactionUpdateManyWithWhereWithoutUserInput | MarketTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MarketTransactionScalarWhereInput | MarketTransactionScalarWhereInput[]
  }

  export type NftMetadataUpdateManyWithoutUserNestedInput = {
    create?: XOR<NftMetadataCreateWithoutUserInput, NftMetadataUncheckedCreateWithoutUserInput> | NftMetadataCreateWithoutUserInput[] | NftMetadataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NftMetadataCreateOrConnectWithoutUserInput | NftMetadataCreateOrConnectWithoutUserInput[]
    upsert?: NftMetadataUpsertWithWhereUniqueWithoutUserInput | NftMetadataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NftMetadataCreateManyUserInputEnvelope
    set?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    disconnect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    delete?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    connect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    update?: NftMetadataUpdateWithWhereUniqueWithoutUserInput | NftMetadataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NftMetadataUpdateManyWithWhereWithoutUserInput | NftMetadataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NftMetadataScalarWhereInput | NftMetadataScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SaasRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaasRequestCreateWithoutUserInput, SaasRequestUncheckedCreateWithoutUserInput> | SaasRequestCreateWithoutUserInput[] | SaasRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaasRequestCreateOrConnectWithoutUserInput | SaasRequestCreateOrConnectWithoutUserInput[]
    upsert?: SaasRequestUpsertWithWhereUniqueWithoutUserInput | SaasRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaasRequestCreateManyUserInputEnvelope
    set?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    disconnect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    delete?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    connect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    update?: SaasRequestUpdateWithWhereUniqueWithoutUserInput | SaasRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaasRequestUpdateManyWithWhereWithoutUserInput | SaasRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaasRequestScalarWhereInput | SaasRequestScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type MarketTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MarketTransactionCreateWithoutUserInput, MarketTransactionUncheckedCreateWithoutUserInput> | MarketTransactionCreateWithoutUserInput[] | MarketTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarketTransactionCreateOrConnectWithoutUserInput | MarketTransactionCreateOrConnectWithoutUserInput[]
    upsert?: MarketTransactionUpsertWithWhereUniqueWithoutUserInput | MarketTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MarketTransactionCreateManyUserInputEnvelope
    set?: MarketTransactionWhereUniqueInput | MarketTransactionWhereUniqueInput[]
    disconnect?: MarketTransactionWhereUniqueInput | MarketTransactionWhereUniqueInput[]
    delete?: MarketTransactionWhereUniqueInput | MarketTransactionWhereUniqueInput[]
    connect?: MarketTransactionWhereUniqueInput | MarketTransactionWhereUniqueInput[]
    update?: MarketTransactionUpdateWithWhereUniqueWithoutUserInput | MarketTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MarketTransactionUpdateManyWithWhereWithoutUserInput | MarketTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MarketTransactionScalarWhereInput | MarketTransactionScalarWhereInput[]
  }

  export type NftMetadataUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NftMetadataCreateWithoutUserInput, NftMetadataUncheckedCreateWithoutUserInput> | NftMetadataCreateWithoutUserInput[] | NftMetadataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NftMetadataCreateOrConnectWithoutUserInput | NftMetadataCreateOrConnectWithoutUserInput[]
    upsert?: NftMetadataUpsertWithWhereUniqueWithoutUserInput | NftMetadataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NftMetadataCreateManyUserInputEnvelope
    set?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    disconnect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    delete?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    connect?: NftMetadataWhereUniqueInput | NftMetadataWhereUniqueInput[]
    update?: NftMetadataUpdateWithWhereUniqueWithoutUserInput | NftMetadataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NftMetadataUpdateManyWithWhereWithoutUserInput | NftMetadataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NftMetadataScalarWhereInput | NftMetadataScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type SaasRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaasRequestCreateWithoutUserInput, SaasRequestUncheckedCreateWithoutUserInput> | SaasRequestCreateWithoutUserInput[] | SaasRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaasRequestCreateOrConnectWithoutUserInput | SaasRequestCreateOrConnectWithoutUserInput[]
    upsert?: SaasRequestUpsertWithWhereUniqueWithoutUserInput | SaasRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaasRequestCreateManyUserInputEnvelope
    set?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    disconnect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    delete?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    connect?: SaasRequestWhereUniqueInput | SaasRequestWhereUniqueInput[]
    update?: SaasRequestUpdateWithWhereUniqueWithoutUserInput | SaasRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaasRequestUpdateManyWithWhereWithoutUserInput | SaasRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaasRequestScalarWhereInput | SaasRequestScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutCollectionInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    MarketTransaction?: MarketTransactionCreateNestedManyWithoutUserInput
    NftMetadata?: NftMetadataCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutUserInput
    SaasRequest?: SaasRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollectionInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    MarketTransaction?: MarketTransactionUncheckedCreateNestedManyWithoutUserInput
    NftMetadata?: NftMetadataUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
    SaasRequest?: SaasRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollectionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
  }

  export type ProjectCreateWithoutCollectionInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    description: string
    images?: ProjectCreateimagesInput | string[]
    visibility: $Enums.Visibility
    User: UserCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCollectionInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    description: string
    images?: ProjectCreateimagesInput | string[]
    visibility: $Enums.Visibility
    userId: string
  }

  export type ProjectCreateOrConnectWithoutCollectionInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCollectionInput, ProjectUncheckedCreateWithoutCollectionInput>
  }

  export type NftMetadataCreateWithoutCollectionInput = {
    name: string
    description: string
    image: string
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    address?: string | null
    assetId?: string | null
    minted?: boolean
    uri?: string | null
    tx?: string | null
    User: UserCreateNestedOneWithoutNftMetadataInput
  }

  export type NftMetadataUncheckedCreateWithoutCollectionInput = {
    name: string
    description: string
    image: string
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    creatorId: string
    address?: string | null
    assetId?: string | null
    minted?: boolean
    uri?: string | null
    tx?: string | null
    id?: number
  }

  export type NftMetadataCreateOrConnectWithoutCollectionInput = {
    where: NftMetadataWhereUniqueInput
    create: XOR<NftMetadataCreateWithoutCollectionInput, NftMetadataUncheckedCreateWithoutCollectionInput>
  }

  export type NftMetadataCreateManyCollectionInputEnvelope = {
    data: NftMetadataCreateManyCollectionInput | NftMetadataCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type SaasRequestCreateWithoutCollectionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    maxNftCanMint: number
    minted?: number
    status?: $Enums.RequestStatus
    User: UserCreateNestedOneWithoutSaasRequestInput
  }

  export type SaasRequestUncheckedCreateWithoutCollectionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    maxNftCanMint: number
    minted?: number
    status?: $Enums.RequestStatus
    userId: string
  }

  export type SaasRequestCreateOrConnectWithoutCollectionInput = {
    where: SaasRequestWhereUniqueInput
    create: XOR<SaasRequestCreateWithoutCollectionInput, SaasRequestUncheckedCreateWithoutCollectionInput>
  }

  export type SaasRequestCreateManyCollectionInputEnvelope = {
    data: SaasRequestCreateManyCollectionInput | SaasRequestCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCollectionInput = {
    update: XOR<UserUpdateWithoutCollectionInput, UserUncheckedUpdateWithoutCollectionInput>
    create: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionInput, UserUncheckedUpdateWithoutCollectionInput>
  }

  export type UserUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    MarketTransaction?: MarketTransactionUpdateManyWithoutUserNestedInput
    NftMetadata?: NftMetadataUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutUserNestedInput
    SaasRequest?: SaasRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    MarketTransaction?: MarketTransactionUncheckedUpdateManyWithoutUserNestedInput
    NftMetadata?: NftMetadataUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    SaasRequest?: SaasRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutCollectionInput = {
    update: XOR<ProjectUpdateWithoutCollectionInput, ProjectUncheckedUpdateWithoutCollectionInput>
    create: XOR<ProjectCreateWithoutCollectionInput, ProjectUncheckedCreateWithoutCollectionInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCollectionInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCollectionInput, ProjectUncheckedUpdateWithoutCollectionInput>
  }

  export type ProjectUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProjectUpdateimagesInput | string[]
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProjectUpdateimagesInput | string[]
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NftMetadataUpsertWithWhereUniqueWithoutCollectionInput = {
    where: NftMetadataWhereUniqueInput
    update: XOR<NftMetadataUpdateWithoutCollectionInput, NftMetadataUncheckedUpdateWithoutCollectionInput>
    create: XOR<NftMetadataCreateWithoutCollectionInput, NftMetadataUncheckedCreateWithoutCollectionInput>
  }

  export type NftMetadataUpdateWithWhereUniqueWithoutCollectionInput = {
    where: NftMetadataWhereUniqueInput
    data: XOR<NftMetadataUpdateWithoutCollectionInput, NftMetadataUncheckedUpdateWithoutCollectionInput>
  }

  export type NftMetadataUpdateManyWithWhereWithoutCollectionInput = {
    where: NftMetadataScalarWhereInput
    data: XOR<NftMetadataUpdateManyMutationInput, NftMetadataUncheckedUpdateManyWithoutCollectionInput>
  }

  export type NftMetadataScalarWhereInput = {
    AND?: NftMetadataScalarWhereInput | NftMetadataScalarWhereInput[]
    OR?: NftMetadataScalarWhereInput[]
    NOT?: NftMetadataScalarWhereInput | NftMetadataScalarWhereInput[]
    name?: StringFilter<"NftMetadata"> | string
    description?: StringFilter<"NftMetadata"> | string
    image?: StringFilter<"NftMetadata"> | string
    metadata?: JsonFilter<"NftMetadata">
    collectionId?: IntFilter<"NftMetadata"> | number
    createdAt?: DateTimeFilter<"NftMetadata"> | Date | string
    creatorId?: StringFilter<"NftMetadata"> | string
    address?: StringNullableFilter<"NftMetadata"> | string | null
    assetId?: StringNullableFilter<"NftMetadata"> | string | null
    minted?: BoolFilter<"NftMetadata"> | boolean
    uri?: StringNullableFilter<"NftMetadata"> | string | null
    tx?: StringNullableFilter<"NftMetadata"> | string | null
    id?: IntFilter<"NftMetadata"> | number
  }

  export type SaasRequestUpsertWithWhereUniqueWithoutCollectionInput = {
    where: SaasRequestWhereUniqueInput
    update: XOR<SaasRequestUpdateWithoutCollectionInput, SaasRequestUncheckedUpdateWithoutCollectionInput>
    create: XOR<SaasRequestCreateWithoutCollectionInput, SaasRequestUncheckedCreateWithoutCollectionInput>
  }

  export type SaasRequestUpdateWithWhereUniqueWithoutCollectionInput = {
    where: SaasRequestWhereUniqueInput
    data: XOR<SaasRequestUpdateWithoutCollectionInput, SaasRequestUncheckedUpdateWithoutCollectionInput>
  }

  export type SaasRequestUpdateManyWithWhereWithoutCollectionInput = {
    where: SaasRequestScalarWhereInput
    data: XOR<SaasRequestUpdateManyMutationInput, SaasRequestUncheckedUpdateManyWithoutCollectionInput>
  }

  export type SaasRequestScalarWhereInput = {
    AND?: SaasRequestScalarWhereInput | SaasRequestScalarWhereInput[]
    OR?: SaasRequestScalarWhereInput[]
    NOT?: SaasRequestScalarWhereInput | SaasRequestScalarWhereInput[]
    id?: StringFilter<"SaasRequest"> | string
    createdAt?: DateTimeFilter<"SaasRequest"> | Date | string
    updatedAt?: DateTimeNullableFilter<"SaasRequest"> | Date | string | null
    maxNftCanMint?: IntFilter<"SaasRequest"> | number
    minted?: IntFilter<"SaasRequest"> | number
    status?: EnumRequestStatusFilter<"SaasRequest"> | $Enums.RequestStatus
    collectionId?: IntFilter<"SaasRequest"> | number
    userId?: StringFilter<"SaasRequest"> | string
  }

  export type UserCreateWithoutMarketTransactionInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    Collection?: CollectionCreateNestedManyWithoutUserInput
    NftMetadata?: NftMetadataCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutUserInput
    SaasRequest?: SaasRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMarketTransactionInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    Collection?: CollectionUncheckedCreateNestedManyWithoutUserInput
    NftMetadata?: NftMetadataUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
    SaasRequest?: SaasRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMarketTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMarketTransactionInput, UserUncheckedCreateWithoutMarketTransactionInput>
  }

  export type UserUpsertWithoutMarketTransactionInput = {
    update: XOR<UserUpdateWithoutMarketTransactionInput, UserUncheckedUpdateWithoutMarketTransactionInput>
    create: XOR<UserCreateWithoutMarketTransactionInput, UserUncheckedCreateWithoutMarketTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMarketTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMarketTransactionInput, UserUncheckedUpdateWithoutMarketTransactionInput>
  }

  export type UserUpdateWithoutMarketTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUpdateManyWithoutUserNestedInput
    NftMetadata?: NftMetadataUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutUserNestedInput
    SaasRequest?: SaasRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMarketTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    NftMetadata?: NftMetadataUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    SaasRequest?: SaasRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollectionCreateWithoutNftMetadataInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    publickey?: string | null
    merkelTree?: string | null
    User: UserCreateNestedOneWithoutCollectionInput
    Project: ProjectCreateNestedOneWithoutCollectionInput
    SaasRequest?: SaasRequestCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutNftMetadataInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    creatorId: string
    publickey?: string | null
    merkelTree?: string | null
    projectId: string
    SaasRequest?: SaasRequestUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutNftMetadataInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutNftMetadataInput, CollectionUncheckedCreateWithoutNftMetadataInput>
  }

  export type UserCreateWithoutNftMetadataInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    Collection?: CollectionCreateNestedManyWithoutUserInput
    MarketTransaction?: MarketTransactionCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutUserInput
    SaasRequest?: SaasRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNftMetadataInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    Collection?: CollectionUncheckedCreateNestedManyWithoutUserInput
    MarketTransaction?: MarketTransactionUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
    SaasRequest?: SaasRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNftMetadataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNftMetadataInput, UserUncheckedCreateWithoutNftMetadataInput>
  }

  export type CollectionUpsertWithoutNftMetadataInput = {
    update: XOR<CollectionUpdateWithoutNftMetadataInput, CollectionUncheckedUpdateWithoutNftMetadataInput>
    create: XOR<CollectionCreateWithoutNftMetadataInput, CollectionUncheckedCreateWithoutNftMetadataInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutNftMetadataInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutNftMetadataInput, CollectionUncheckedUpdateWithoutNftMetadataInput>
  }

  export type CollectionUpdateWithoutNftMetadataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutCollectionNestedInput
    Project?: ProjectUpdateOneRequiredWithoutCollectionNestedInput
    SaasRequest?: SaasRequestUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutNftMetadataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    SaasRequest?: SaasRequestUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type UserUpsertWithoutNftMetadataInput = {
    update: XOR<UserUpdateWithoutNftMetadataInput, UserUncheckedUpdateWithoutNftMetadataInput>
    create: XOR<UserCreateWithoutNftMetadataInput, UserUncheckedCreateWithoutNftMetadataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNftMetadataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNftMetadataInput, UserUncheckedUpdateWithoutNftMetadataInput>
  }

  export type UserUpdateWithoutNftMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUpdateManyWithoutUserNestedInput
    MarketTransaction?: MarketTransactionUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutUserNestedInput
    SaasRequest?: SaasRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNftMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    MarketTransaction?: MarketTransactionUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    SaasRequest?: SaasRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollectionCreateWithoutProjectInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    publickey?: string | null
    merkelTree?: string | null
    User: UserCreateNestedOneWithoutCollectionInput
    NftMetadata?: NftMetadataCreateNestedManyWithoutCollectionInput
    SaasRequest?: SaasRequestCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutProjectInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    creatorId: string
    publickey?: string | null
    merkelTree?: string | null
    NftMetadata?: NftMetadataUncheckedCreateNestedManyWithoutCollectionInput
    SaasRequest?: SaasRequestUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutProjectInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutProjectInput, CollectionUncheckedCreateWithoutProjectInput>
  }

  export type CollectionCreateManyProjectInputEnvelope = {
    data: CollectionCreateManyProjectInput | CollectionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProjectInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    Collection?: CollectionCreateNestedManyWithoutUserInput
    MarketTransaction?: MarketTransactionCreateNestedManyWithoutUserInput
    NftMetadata?: NftMetadataCreateNestedManyWithoutUserInput
    SaasRequest?: SaasRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    Collection?: CollectionUncheckedCreateNestedManyWithoutUserInput
    MarketTransaction?: MarketTransactionUncheckedCreateNestedManyWithoutUserInput
    NftMetadata?: NftMetadataUncheckedCreateNestedManyWithoutUserInput
    SaasRequest?: SaasRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type CollectionUpsertWithWhereUniqueWithoutProjectInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutProjectInput, CollectionUncheckedUpdateWithoutProjectInput>
    create: XOR<CollectionCreateWithoutProjectInput, CollectionUncheckedCreateWithoutProjectInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutProjectInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutProjectInput, CollectionUncheckedUpdateWithoutProjectInput>
  }

  export type CollectionUpdateManyWithWhereWithoutProjectInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutProjectInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: IntFilter<"Collection"> | number
    name?: StringFilter<"Collection"> | string
    description?: StringFilter<"Collection"> | string
    website?: StringNullableFilter<"Collection"> | string | null
    image?: StringNullableFilter<"Collection"> | string | null
    uri?: StringNullableFilter<"Collection"> | string | null
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    creatorId?: StringFilter<"Collection"> | string
    publickey?: StringNullableFilter<"Collection"> | string | null
    merkelTree?: StringNullableFilter<"Collection"> | string | null
    projectId?: StringFilter<"Collection"> | string
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUpdateManyWithoutUserNestedInput
    MarketTransaction?: MarketTransactionUpdateManyWithoutUserNestedInput
    NftMetadata?: NftMetadataUpdateManyWithoutUserNestedInput
    SaasRequest?: SaasRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    MarketTransaction?: MarketTransactionUncheckedUpdateManyWithoutUserNestedInput
    NftMetadata?: NftMetadataUncheckedUpdateManyWithoutUserNestedInput
    SaasRequest?: SaasRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SaasJobLogCreateWithoutSaasJobInput = {
    message: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    status: string
  }

  export type SaasJobLogUncheckedCreateWithoutSaasJobInput = {
    id?: number
    message: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    status: string
  }

  export type SaasJobLogCreateOrConnectWithoutSaasJobInput = {
    where: SaasJobLogWhereUniqueInput
    create: XOR<SaasJobLogCreateWithoutSaasJobInput, SaasJobLogUncheckedCreateWithoutSaasJobInput>
  }

  export type SaasJobLogCreateManySaasJobInputEnvelope = {
    data: SaasJobLogCreateManySaasJobInput | SaasJobLogCreateManySaasJobInput[]
    skipDuplicates?: boolean
  }

  export type SaasJobLogUpsertWithWhereUniqueWithoutSaasJobInput = {
    where: SaasJobLogWhereUniqueInput
    update: XOR<SaasJobLogUpdateWithoutSaasJobInput, SaasJobLogUncheckedUpdateWithoutSaasJobInput>
    create: XOR<SaasJobLogCreateWithoutSaasJobInput, SaasJobLogUncheckedCreateWithoutSaasJobInput>
  }

  export type SaasJobLogUpdateWithWhereUniqueWithoutSaasJobInput = {
    where: SaasJobLogWhereUniqueInput
    data: XOR<SaasJobLogUpdateWithoutSaasJobInput, SaasJobLogUncheckedUpdateWithoutSaasJobInput>
  }

  export type SaasJobLogUpdateManyWithWhereWithoutSaasJobInput = {
    where: SaasJobLogScalarWhereInput
    data: XOR<SaasJobLogUpdateManyMutationInput, SaasJobLogUncheckedUpdateManyWithoutSaasJobInput>
  }

  export type SaasJobLogScalarWhereInput = {
    AND?: SaasJobLogScalarWhereInput | SaasJobLogScalarWhereInput[]
    OR?: SaasJobLogScalarWhereInput[]
    NOT?: SaasJobLogScalarWhereInput | SaasJobLogScalarWhereInput[]
    id?: IntFilter<"SaasJobLog"> | number
    jobId?: IntFilter<"SaasJobLog"> | number
    message?: JsonFilter<"SaasJobLog">
    createdAt?: DateTimeFilter<"SaasJobLog"> | Date | string
    status?: StringFilter<"SaasJobLog"> | string
  }

  export type SaasJobCreateWithoutSaasJobLogInput = {
    name: string
    runCount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SaasJobUncheckedCreateWithoutSaasJobLogInput = {
    id?: number
    name: string
    runCount: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SaasJobCreateOrConnectWithoutSaasJobLogInput = {
    where: SaasJobWhereUniqueInput
    create: XOR<SaasJobCreateWithoutSaasJobLogInput, SaasJobUncheckedCreateWithoutSaasJobLogInput>
  }

  export type SaasJobUpsertWithoutSaasJobLogInput = {
    update: XOR<SaasJobUpdateWithoutSaasJobLogInput, SaasJobUncheckedUpdateWithoutSaasJobLogInput>
    create: XOR<SaasJobCreateWithoutSaasJobLogInput, SaasJobUncheckedCreateWithoutSaasJobLogInput>
    where?: SaasJobWhereInput
  }

  export type SaasJobUpdateToOneWithWhereWithoutSaasJobLogInput = {
    where?: SaasJobWhereInput
    data: XOR<SaasJobUpdateWithoutSaasJobLogInput, SaasJobUncheckedUpdateWithoutSaasJobLogInput>
  }

  export type SaasJobUpdateWithoutSaasJobLogInput = {
    name?: StringFieldUpdateOperationsInput | string
    runCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaasJobUncheckedUpdateWithoutSaasJobLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    runCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CollectionCreateWithoutSaasRequestInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    publickey?: string | null
    merkelTree?: string | null
    User: UserCreateNestedOneWithoutCollectionInput
    Project: ProjectCreateNestedOneWithoutCollectionInput
    NftMetadata?: NftMetadataCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutSaasRequestInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    creatorId: string
    publickey?: string | null
    merkelTree?: string | null
    projectId: string
    NftMetadata?: NftMetadataUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutSaasRequestInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutSaasRequestInput, CollectionUncheckedCreateWithoutSaasRequestInput>
  }

  export type UserCreateWithoutSaasRequestInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    Collection?: CollectionCreateNestedManyWithoutUserInput
    MarketTransaction?: MarketTransactionCreateNestedManyWithoutUserInput
    NftMetadata?: NftMetadataCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSaasRequestInput = {
    id: string
    fullname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isKyced?: boolean
    email?: string | null
    name?: string | null
    Collection?: CollectionUncheckedCreateNestedManyWithoutUserInput
    MarketTransaction?: MarketTransactionUncheckedCreateNestedManyWithoutUserInput
    NftMetadata?: NftMetadataUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSaasRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSaasRequestInput, UserUncheckedCreateWithoutSaasRequestInput>
  }

  export type CollectionUpsertWithoutSaasRequestInput = {
    update: XOR<CollectionUpdateWithoutSaasRequestInput, CollectionUncheckedUpdateWithoutSaasRequestInput>
    create: XOR<CollectionCreateWithoutSaasRequestInput, CollectionUncheckedCreateWithoutSaasRequestInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutSaasRequestInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutSaasRequestInput, CollectionUncheckedUpdateWithoutSaasRequestInput>
  }

  export type CollectionUpdateWithoutSaasRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutCollectionNestedInput
    Project?: ProjectUpdateOneRequiredWithoutCollectionNestedInput
    NftMetadata?: NftMetadataUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutSaasRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    NftMetadata?: NftMetadataUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type UserUpsertWithoutSaasRequestInput = {
    update: XOR<UserUpdateWithoutSaasRequestInput, UserUncheckedUpdateWithoutSaasRequestInput>
    create: XOR<UserCreateWithoutSaasRequestInput, UserUncheckedCreateWithoutSaasRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSaasRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSaasRequestInput, UserUncheckedUpdateWithoutSaasRequestInput>
  }

  export type UserUpdateWithoutSaasRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUpdateManyWithoutUserNestedInput
    MarketTransaction?: MarketTransactionUpdateManyWithoutUserNestedInput
    NftMetadata?: NftMetadataUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSaasRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isKyced?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    MarketTransaction?: MarketTransactionUncheckedUpdateManyWithoutUserNestedInput
    NftMetadata?: NftMetadataUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollectionCreateWithoutUserInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    publickey?: string | null
    merkelTree?: string | null
    Project: ProjectCreateNestedOneWithoutCollectionInput
    NftMetadata?: NftMetadataCreateNestedManyWithoutCollectionInput
    SaasRequest?: SaasRequestCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutUserInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    publickey?: string | null
    merkelTree?: string | null
    projectId: string
    NftMetadata?: NftMetadataUncheckedCreateNestedManyWithoutCollectionInput
    SaasRequest?: SaasRequestUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutUserInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionCreateManyUserInputEnvelope = {
    data: CollectionCreateManyUserInput | CollectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MarketTransactionCreateWithoutUserInput = {
    type: $Enums.TransactionType
    price: string
    createdAt?: Date | string
    assetId: string
    merkleTree: string
    pda?: string | null
    tx?: string | null
  }

  export type MarketTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.TransactionType
    price: string
    createdAt?: Date | string
    assetId: string
    merkleTree: string
    pda?: string | null
    tx?: string | null
  }

  export type MarketTransactionCreateOrConnectWithoutUserInput = {
    where: MarketTransactionWhereUniqueInput
    create: XOR<MarketTransactionCreateWithoutUserInput, MarketTransactionUncheckedCreateWithoutUserInput>
  }

  export type MarketTransactionCreateManyUserInputEnvelope = {
    data: MarketTransactionCreateManyUserInput | MarketTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NftMetadataCreateWithoutUserInput = {
    name: string
    description: string
    image: string
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    address?: string | null
    assetId?: string | null
    minted?: boolean
    uri?: string | null
    tx?: string | null
    Collection: CollectionCreateNestedOneWithoutNftMetadataInput
  }

  export type NftMetadataUncheckedCreateWithoutUserInput = {
    name: string
    description: string
    image: string
    metadata: JsonNullValueInput | InputJsonValue
    collectionId: number
    createdAt?: Date | string
    address?: string | null
    assetId?: string | null
    minted?: boolean
    uri?: string | null
    tx?: string | null
    id?: number
  }

  export type NftMetadataCreateOrConnectWithoutUserInput = {
    where: NftMetadataWhereUniqueInput
    create: XOR<NftMetadataCreateWithoutUserInput, NftMetadataUncheckedCreateWithoutUserInput>
  }

  export type NftMetadataCreateManyUserInputEnvelope = {
    data: NftMetadataCreateManyUserInput | NftMetadataCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUserInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    description: string
    images?: ProjectCreateimagesInput | string[]
    visibility: $Enums.Visibility
    Collection?: CollectionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    description: string
    images?: ProjectCreateimagesInput | string[]
    visibility: $Enums.Visibility
    Collection?: CollectionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SaasRequestCreateWithoutUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    maxNftCanMint: number
    minted?: number
    status?: $Enums.RequestStatus
    Collection: CollectionCreateNestedOneWithoutSaasRequestInput
  }

  export type SaasRequestUncheckedCreateWithoutUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    maxNftCanMint: number
    minted?: number
    status?: $Enums.RequestStatus
    collectionId: number
  }

  export type SaasRequestCreateOrConnectWithoutUserInput = {
    where: SaasRequestWhereUniqueInput
    create: XOR<SaasRequestCreateWithoutUserInput, SaasRequestUncheckedCreateWithoutUserInput>
  }

  export type SaasRequestCreateManyUserInputEnvelope = {
    data: SaasRequestCreateManyUserInput | SaasRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
  }

  export type CollectionUpdateManyWithWhereWithoutUserInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutUserInput>
  }

  export type MarketTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: MarketTransactionWhereUniqueInput
    update: XOR<MarketTransactionUpdateWithoutUserInput, MarketTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<MarketTransactionCreateWithoutUserInput, MarketTransactionUncheckedCreateWithoutUserInput>
  }

  export type MarketTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: MarketTransactionWhereUniqueInput
    data: XOR<MarketTransactionUpdateWithoutUserInput, MarketTransactionUncheckedUpdateWithoutUserInput>
  }

  export type MarketTransactionUpdateManyWithWhereWithoutUserInput = {
    where: MarketTransactionScalarWhereInput
    data: XOR<MarketTransactionUpdateManyMutationInput, MarketTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type MarketTransactionScalarWhereInput = {
    AND?: MarketTransactionScalarWhereInput | MarketTransactionScalarWhereInput[]
    OR?: MarketTransactionScalarWhereInput[]
    NOT?: MarketTransactionScalarWhereInput | MarketTransactionScalarWhereInput[]
    id?: IntFilter<"MarketTransaction"> | number
    type?: EnumTransactionTypeFilter<"MarketTransaction"> | $Enums.TransactionType
    userId?: StringFilter<"MarketTransaction"> | string
    price?: StringFilter<"MarketTransaction"> | string
    createdAt?: DateTimeFilter<"MarketTransaction"> | Date | string
    assetId?: StringFilter<"MarketTransaction"> | string
    merkleTree?: StringFilter<"MarketTransaction"> | string
    pda?: StringNullableFilter<"MarketTransaction"> | string | null
    tx?: StringNullableFilter<"MarketTransaction"> | string | null
  }

  export type NftMetadataUpsertWithWhereUniqueWithoutUserInput = {
    where: NftMetadataWhereUniqueInput
    update: XOR<NftMetadataUpdateWithoutUserInput, NftMetadataUncheckedUpdateWithoutUserInput>
    create: XOR<NftMetadataCreateWithoutUserInput, NftMetadataUncheckedCreateWithoutUserInput>
  }

  export type NftMetadataUpdateWithWhereUniqueWithoutUserInput = {
    where: NftMetadataWhereUniqueInput
    data: XOR<NftMetadataUpdateWithoutUserInput, NftMetadataUncheckedUpdateWithoutUserInput>
  }

  export type NftMetadataUpdateManyWithWhereWithoutUserInput = {
    where: NftMetadataScalarWhereInput
    data: XOR<NftMetadataUpdateManyMutationInput, NftMetadataUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    content?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    images?: StringNullableListFilter<"Project">
    visibility?: EnumVisibilityFilter<"Project"> | $Enums.Visibility
    userId?: StringFilter<"Project"> | string
  }

  export type SaasRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: SaasRequestWhereUniqueInput
    update: XOR<SaasRequestUpdateWithoutUserInput, SaasRequestUncheckedUpdateWithoutUserInput>
    create: XOR<SaasRequestCreateWithoutUserInput, SaasRequestUncheckedCreateWithoutUserInput>
  }

  export type SaasRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: SaasRequestWhereUniqueInput
    data: XOR<SaasRequestUpdateWithoutUserInput, SaasRequestUncheckedUpdateWithoutUserInput>
  }

  export type SaasRequestUpdateManyWithWhereWithoutUserInput = {
    where: SaasRequestScalarWhereInput
    data: XOR<SaasRequestUpdateManyMutationInput, SaasRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type NftMetadataCreateManyCollectionInput = {
    name: string
    description: string
    image: string
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    creatorId: string
    address?: string | null
    assetId?: string | null
    minted?: boolean
    uri?: string | null
    tx?: string | null
    id?: number
  }

  export type SaasRequestCreateManyCollectionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    maxNftCanMint: number
    minted?: number
    status?: $Enums.RequestStatus
    userId: string
  }

  export type NftMetadataUpdateWithoutCollectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    minted?: BoolFieldUpdateOperationsInput | boolean
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutNftMetadataNestedInput
  }

  export type NftMetadataUncheckedUpdateWithoutCollectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    minted?: BoolFieldUpdateOperationsInput | boolean
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type NftMetadataUncheckedUpdateManyWithoutCollectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    minted?: BoolFieldUpdateOperationsInput | boolean
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type SaasRequestUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxNftCanMint?: IntFieldUpdateOperationsInput | number
    minted?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    User?: UserUpdateOneRequiredWithoutSaasRequestNestedInput
  }

  export type SaasRequestUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxNftCanMint?: IntFieldUpdateOperationsInput | number
    minted?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SaasRequestUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxNftCanMint?: IntFieldUpdateOperationsInput | number
    minted?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionCreateManyProjectInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    creatorId: string
    publickey?: string | null
    merkelTree?: string | null
  }

  export type CollectionUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutCollectionNestedInput
    NftMetadata?: NftMetadataUpdateManyWithoutCollectionNestedInput
    SaasRequest?: SaasRequestUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    NftMetadata?: NftMetadataUncheckedUpdateManyWithoutCollectionNestedInput
    SaasRequest?: SaasRequestUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaasJobLogCreateManySaasJobInput = {
    id?: number
    message: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    status: string
  }

  export type SaasJobLogUpdateWithoutSaasJobInput = {
    message?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SaasJobLogUncheckedUpdateWithoutSaasJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SaasJobLogUncheckedUpdateManyWithoutSaasJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionCreateManyUserInput = {
    id: number
    name: string
    description: string
    website?: string | null
    image?: string | null
    uri?: string | null
    createdAt?: Date | string
    publickey?: string | null
    merkelTree?: string | null
    projectId: string
  }

  export type MarketTransactionCreateManyUserInput = {
    id?: number
    type: $Enums.TransactionType
    price: string
    createdAt?: Date | string
    assetId: string
    merkleTree: string
    pda?: string | null
    tx?: string | null
  }

  export type NftMetadataCreateManyUserInput = {
    name: string
    description: string
    image: string
    metadata: JsonNullValueInput | InputJsonValue
    collectionId: number
    createdAt?: Date | string
    address?: string | null
    assetId?: string | null
    minted?: boolean
    uri?: string | null
    tx?: string | null
    id?: number
  }

  export type ProjectCreateManyUserInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    description: string
    images?: ProjectCreateimagesInput | string[]
    visibility: $Enums.Visibility
  }

  export type SaasRequestCreateManyUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    maxNftCanMint: number
    minted?: number
    status?: $Enums.RequestStatus
    collectionId: number
  }

  export type CollectionUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    Project?: ProjectUpdateOneRequiredWithoutCollectionNestedInput
    NftMetadata?: NftMetadataUpdateManyWithoutCollectionNestedInput
    SaasRequest?: SaasRequestUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    NftMetadata?: NftMetadataUncheckedUpdateManyWithoutCollectionNestedInput
    SaasRequest?: SaasRequestUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publickey?: NullableStringFieldUpdateOperationsInput | string | null
    merkelTree?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type MarketTransactionUpdateWithoutUserInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
    merkleTree?: StringFieldUpdateOperationsInput | string
    pda?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
    merkleTree?: StringFieldUpdateOperationsInput | string
    pda?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
    merkleTree?: StringFieldUpdateOperationsInput | string
    pda?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NftMetadataUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    minted?: BoolFieldUpdateOperationsInput | boolean
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: CollectionUpdateOneRequiredWithoutNftMetadataNestedInput
  }

  export type NftMetadataUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    collectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    minted?: BoolFieldUpdateOperationsInput | boolean
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type NftMetadataUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    collectionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    minted?: BoolFieldUpdateOperationsInput | boolean
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    tx?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProjectUpdateimagesInput | string[]
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    Collection?: CollectionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProjectUpdateimagesInput | string[]
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    Collection?: CollectionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProjectUpdateimagesInput | string[]
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
  }

  export type SaasRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxNftCanMint?: IntFieldUpdateOperationsInput | number
    minted?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    Collection?: CollectionUpdateOneRequiredWithoutSaasRequestNestedInput
  }

  export type SaasRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxNftCanMint?: IntFieldUpdateOperationsInput | number
    minted?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    collectionId?: IntFieldUpdateOperationsInput | number
  }

  export type SaasRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxNftCanMint?: IntFieldUpdateOperationsInput | number
    minted?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    collectionId?: IntFieldUpdateOperationsInput | number
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