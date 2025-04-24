
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
 * Model obj
 * 
 */
export type obj = $Result.DefaultSelection<Prisma.$objPayload>
/**
 * Model otp
 * 
 */
export type otp = $Result.DefaultSelection<Prisma.$otpPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Objs
 * const objs = await prisma.obj.findMany()
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
   * // Fetch zero or more Objs
   * const objs = await prisma.obj.findMany()
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
   * `prisma.obj`: Exposes CRUD operations for the **obj** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Objs
    * const objs = await prisma.obj.findMany()
    * ```
    */
  get obj(): Prisma.objDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.otpDelegate<ExtArgs, ClientOptions>;
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
    obj: 'obj',
    otp: 'otp'
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
      modelProps: "obj" | "otp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      obj: {
        payload: Prisma.$objPayload<ExtArgs>
        fields: Prisma.objFieldRefs
        operations: {
          findUnique: {
            args: Prisma.objFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$objPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.objFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$objPayload>
          }
          findFirst: {
            args: Prisma.objFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$objPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.objFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$objPayload>
          }
          findMany: {
            args: Prisma.objFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$objPayload>[]
          }
          create: {
            args: Prisma.objCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$objPayload>
          }
          createMany: {
            args: Prisma.objCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.objCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$objPayload>[]
          }
          delete: {
            args: Prisma.objDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$objPayload>
          }
          update: {
            args: Prisma.objUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$objPayload>
          }
          deleteMany: {
            args: Prisma.objDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.objUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.objUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$objPayload>[]
          }
          upsert: {
            args: Prisma.objUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$objPayload>
          }
          aggregate: {
            args: Prisma.ObjAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObj>
          }
          groupBy: {
            args: Prisma.objGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjGroupByOutputType>[]
          }
          count: {
            args: Prisma.objCountArgs<ExtArgs>
            result: $Utils.Optional<ObjCountAggregateOutputType> | number
          }
        }
      }
      otp: {
        payload: Prisma.$otpPayload<ExtArgs>
        fields: Prisma.otpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.otpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.otpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          findFirst: {
            args: Prisma.otpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.otpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          findMany: {
            args: Prisma.otpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>[]
          }
          create: {
            args: Prisma.otpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          createMany: {
            args: Prisma.otpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.otpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>[]
          }
          delete: {
            args: Prisma.otpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          update: {
            args: Prisma.otpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          deleteMany: {
            args: Prisma.otpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.otpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.otpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>[]
          }
          upsert: {
            args: Prisma.otpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.otpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.otpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
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
    obj?: objOmit
    otp?: otpOmit
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
   * Models
   */

  /**
   * Model obj
   */

  export type AggregateObj = {
    _count: ObjCountAggregateOutputType | null
    _min: ObjMinAggregateOutputType | null
    _max: ObjMaxAggregateOutputType | null
  }

  export type ObjMinAggregateOutputType = {
    id_database: string | null
    id: string | null
    email: string | null
    text: string | null
  }

  export type ObjMaxAggregateOutputType = {
    id_database: string | null
    id: string | null
    email: string | null
    text: string | null
  }

  export type ObjCountAggregateOutputType = {
    id_database: number
    id: number
    email: number
    text: number
    _all: number
  }


  export type ObjMinAggregateInputType = {
    id_database?: true
    id?: true
    email?: true
    text?: true
  }

  export type ObjMaxAggregateInputType = {
    id_database?: true
    id?: true
    email?: true
    text?: true
  }

  export type ObjCountAggregateInputType = {
    id_database?: true
    id?: true
    email?: true
    text?: true
    _all?: true
  }

  export type ObjAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which obj to aggregate.
     */
    where?: objWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of objs to fetch.
     */
    orderBy?: objOrderByWithRelationInput | objOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: objWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` objs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` objs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned objs
    **/
    _count?: true | ObjCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjMaxAggregateInputType
  }

  export type GetObjAggregateType<T extends ObjAggregateArgs> = {
        [P in keyof T & keyof AggregateObj]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObj[P]>
      : GetScalarType<T[P], AggregateObj[P]>
  }




  export type objGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: objWhereInput
    orderBy?: objOrderByWithAggregationInput | objOrderByWithAggregationInput[]
    by: ObjScalarFieldEnum[] | ObjScalarFieldEnum
    having?: objScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjCountAggregateInputType | true
    _min?: ObjMinAggregateInputType
    _max?: ObjMaxAggregateInputType
  }

  export type ObjGroupByOutputType = {
    id_database: string
    id: string
    email: string
    text: string
    _count: ObjCountAggregateOutputType | null
    _min: ObjMinAggregateOutputType | null
    _max: ObjMaxAggregateOutputType | null
  }

  type GetObjGroupByPayload<T extends objGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjGroupByOutputType[P]>
            : GetScalarType<T[P], ObjGroupByOutputType[P]>
        }
      >
    >


  export type objSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_database?: boolean
    id?: boolean
    email?: boolean
    text?: boolean
  }, ExtArgs["result"]["obj"]>

  export type objSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_database?: boolean
    id?: boolean
    email?: boolean
    text?: boolean
  }, ExtArgs["result"]["obj"]>

  export type objSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_database?: boolean
    id?: boolean
    email?: boolean
    text?: boolean
  }, ExtArgs["result"]["obj"]>

  export type objSelectScalar = {
    id_database?: boolean
    id?: boolean
    email?: boolean
    text?: boolean
  }

  export type objOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_database" | "id" | "email" | "text", ExtArgs["result"]["obj"]>

  export type $objPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "obj"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_database: string
      id: string
      email: string
      text: string
    }, ExtArgs["result"]["obj"]>
    composites: {}
  }

  type objGetPayload<S extends boolean | null | undefined | objDefaultArgs> = $Result.GetResult<Prisma.$objPayload, S>

  type objCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<objFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjCountAggregateInputType | true
    }

  export interface objDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['obj'], meta: { name: 'obj' } }
    /**
     * Find zero or one Obj that matches the filter.
     * @param {objFindUniqueArgs} args - Arguments to find a Obj
     * @example
     * // Get one Obj
     * const obj = await prisma.obj.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends objFindUniqueArgs>(args: SelectSubset<T, objFindUniqueArgs<ExtArgs>>): Prisma__objClient<$Result.GetResult<Prisma.$objPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Obj that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {objFindUniqueOrThrowArgs} args - Arguments to find a Obj
     * @example
     * // Get one Obj
     * const obj = await prisma.obj.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends objFindUniqueOrThrowArgs>(args: SelectSubset<T, objFindUniqueOrThrowArgs<ExtArgs>>): Prisma__objClient<$Result.GetResult<Prisma.$objPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obj that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {objFindFirstArgs} args - Arguments to find a Obj
     * @example
     * // Get one Obj
     * const obj = await prisma.obj.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends objFindFirstArgs>(args?: SelectSubset<T, objFindFirstArgs<ExtArgs>>): Prisma__objClient<$Result.GetResult<Prisma.$objPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obj that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {objFindFirstOrThrowArgs} args - Arguments to find a Obj
     * @example
     * // Get one Obj
     * const obj = await prisma.obj.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends objFindFirstOrThrowArgs>(args?: SelectSubset<T, objFindFirstOrThrowArgs<ExtArgs>>): Prisma__objClient<$Result.GetResult<Prisma.$objPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Objs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {objFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Objs
     * const objs = await prisma.obj.findMany()
     * 
     * // Get first 10 Objs
     * const objs = await prisma.obj.findMany({ take: 10 })
     * 
     * // Only select the `id_database`
     * const objWithId_databaseOnly = await prisma.obj.findMany({ select: { id_database: true } })
     * 
     */
    findMany<T extends objFindManyArgs>(args?: SelectSubset<T, objFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$objPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Obj.
     * @param {objCreateArgs} args - Arguments to create a Obj.
     * @example
     * // Create one Obj
     * const Obj = await prisma.obj.create({
     *   data: {
     *     // ... data to create a Obj
     *   }
     * })
     * 
     */
    create<T extends objCreateArgs>(args: SelectSubset<T, objCreateArgs<ExtArgs>>): Prisma__objClient<$Result.GetResult<Prisma.$objPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Objs.
     * @param {objCreateManyArgs} args - Arguments to create many Objs.
     * @example
     * // Create many Objs
     * const obj = await prisma.obj.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends objCreateManyArgs>(args?: SelectSubset<T, objCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Objs and returns the data saved in the database.
     * @param {objCreateManyAndReturnArgs} args - Arguments to create many Objs.
     * @example
     * // Create many Objs
     * const obj = await prisma.obj.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Objs and only return the `id_database`
     * const objWithId_databaseOnly = await prisma.obj.createManyAndReturn({
     *   select: { id_database: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends objCreateManyAndReturnArgs>(args?: SelectSubset<T, objCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$objPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Obj.
     * @param {objDeleteArgs} args - Arguments to delete one Obj.
     * @example
     * // Delete one Obj
     * const Obj = await prisma.obj.delete({
     *   where: {
     *     // ... filter to delete one Obj
     *   }
     * })
     * 
     */
    delete<T extends objDeleteArgs>(args: SelectSubset<T, objDeleteArgs<ExtArgs>>): Prisma__objClient<$Result.GetResult<Prisma.$objPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Obj.
     * @param {objUpdateArgs} args - Arguments to update one Obj.
     * @example
     * // Update one Obj
     * const obj = await prisma.obj.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends objUpdateArgs>(args: SelectSubset<T, objUpdateArgs<ExtArgs>>): Prisma__objClient<$Result.GetResult<Prisma.$objPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Objs.
     * @param {objDeleteManyArgs} args - Arguments to filter Objs to delete.
     * @example
     * // Delete a few Objs
     * const { count } = await prisma.obj.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends objDeleteManyArgs>(args?: SelectSubset<T, objDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {objUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Objs
     * const obj = await prisma.obj.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends objUpdateManyArgs>(args: SelectSubset<T, objUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objs and returns the data updated in the database.
     * @param {objUpdateManyAndReturnArgs} args - Arguments to update many Objs.
     * @example
     * // Update many Objs
     * const obj = await prisma.obj.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Objs and only return the `id_database`
     * const objWithId_databaseOnly = await prisma.obj.updateManyAndReturn({
     *   select: { id_database: true },
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
    updateManyAndReturn<T extends objUpdateManyAndReturnArgs>(args: SelectSubset<T, objUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$objPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Obj.
     * @param {objUpsertArgs} args - Arguments to update or create a Obj.
     * @example
     * // Update or create a Obj
     * const obj = await prisma.obj.upsert({
     *   create: {
     *     // ... data to create a Obj
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obj we want to update
     *   }
     * })
     */
    upsert<T extends objUpsertArgs>(args: SelectSubset<T, objUpsertArgs<ExtArgs>>): Prisma__objClient<$Result.GetResult<Prisma.$objPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Objs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {objCountArgs} args - Arguments to filter Objs to count.
     * @example
     * // Count the number of Objs
     * const count = await prisma.obj.count({
     *   where: {
     *     // ... the filter for the Objs we want to count
     *   }
     * })
    **/
    count<T extends objCountArgs>(
      args?: Subset<T, objCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obj.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObjAggregateArgs>(args: Subset<T, ObjAggregateArgs>): Prisma.PrismaPromise<GetObjAggregateType<T>>

    /**
     * Group by Obj.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {objGroupByArgs} args - Group by arguments.
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
      T extends objGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: objGroupByArgs['orderBy'] }
        : { orderBy?: objGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, objGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the obj model
   */
  readonly fields: objFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for obj.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__objClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the obj model
   */
  interface objFieldRefs {
    readonly id_database: FieldRef<"obj", 'String'>
    readonly id: FieldRef<"obj", 'String'>
    readonly email: FieldRef<"obj", 'String'>
    readonly text: FieldRef<"obj", 'String'>
  }
    

  // Custom InputTypes
  /**
   * obj findUnique
   */
  export type objFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelect<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
    /**
     * Filter, which obj to fetch.
     */
    where: objWhereUniqueInput
  }

  /**
   * obj findUniqueOrThrow
   */
  export type objFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelect<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
    /**
     * Filter, which obj to fetch.
     */
    where: objWhereUniqueInput
  }

  /**
   * obj findFirst
   */
  export type objFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelect<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
    /**
     * Filter, which obj to fetch.
     */
    where?: objWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of objs to fetch.
     */
    orderBy?: objOrderByWithRelationInput | objOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for objs.
     */
    cursor?: objWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` objs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` objs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of objs.
     */
    distinct?: ObjScalarFieldEnum | ObjScalarFieldEnum[]
  }

  /**
   * obj findFirstOrThrow
   */
  export type objFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelect<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
    /**
     * Filter, which obj to fetch.
     */
    where?: objWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of objs to fetch.
     */
    orderBy?: objOrderByWithRelationInput | objOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for objs.
     */
    cursor?: objWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` objs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` objs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of objs.
     */
    distinct?: ObjScalarFieldEnum | ObjScalarFieldEnum[]
  }

  /**
   * obj findMany
   */
  export type objFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelect<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
    /**
     * Filter, which objs to fetch.
     */
    where?: objWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of objs to fetch.
     */
    orderBy?: objOrderByWithRelationInput | objOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing objs.
     */
    cursor?: objWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` objs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` objs.
     */
    skip?: number
    distinct?: ObjScalarFieldEnum | ObjScalarFieldEnum[]
  }

  /**
   * obj create
   */
  export type objCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelect<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
    /**
     * The data needed to create a obj.
     */
    data: XOR<objCreateInput, objUncheckedCreateInput>
  }

  /**
   * obj createMany
   */
  export type objCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many objs.
     */
    data: objCreateManyInput | objCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * obj createManyAndReturn
   */
  export type objCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
    /**
     * The data used to create many objs.
     */
    data: objCreateManyInput | objCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * obj update
   */
  export type objUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelect<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
    /**
     * The data needed to update a obj.
     */
    data: XOR<objUpdateInput, objUncheckedUpdateInput>
    /**
     * Choose, which obj to update.
     */
    where: objWhereUniqueInput
  }

  /**
   * obj updateMany
   */
  export type objUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update objs.
     */
    data: XOR<objUpdateManyMutationInput, objUncheckedUpdateManyInput>
    /**
     * Filter which objs to update
     */
    where?: objWhereInput
    /**
     * Limit how many objs to update.
     */
    limit?: number
  }

  /**
   * obj updateManyAndReturn
   */
  export type objUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
    /**
     * The data used to update objs.
     */
    data: XOR<objUpdateManyMutationInput, objUncheckedUpdateManyInput>
    /**
     * Filter which objs to update
     */
    where?: objWhereInput
    /**
     * Limit how many objs to update.
     */
    limit?: number
  }

  /**
   * obj upsert
   */
  export type objUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelect<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
    /**
     * The filter to search for the obj to update in case it exists.
     */
    where: objWhereUniqueInput
    /**
     * In case the obj found by the `where` argument doesn't exist, create a new obj with this data.
     */
    create: XOR<objCreateInput, objUncheckedCreateInput>
    /**
     * In case the obj was found with the provided `where` argument, update it with this data.
     */
    update: XOR<objUpdateInput, objUncheckedUpdateInput>
  }

  /**
   * obj delete
   */
  export type objDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelect<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
    /**
     * Filter which obj to delete.
     */
    where: objWhereUniqueInput
  }

  /**
   * obj deleteMany
   */
  export type objDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which objs to delete
     */
    where?: objWhereInput
    /**
     * Limit how many objs to delete.
     */
    limit?: number
  }

  /**
   * obj without action
   */
  export type objDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obj
     */
    select?: objSelect<ExtArgs> | null
    /**
     * Omit specific fields from the obj
     */
    omit?: objOmit<ExtArgs> | null
  }


  /**
   * Model otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id_database: string | null
    id: string | null
    otp: string | null
  }

  export type OtpMaxAggregateOutputType = {
    id_database: string | null
    id: string | null
    otp: string | null
  }

  export type OtpCountAggregateOutputType = {
    id_database: number
    id: number
    otp: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id_database?: true
    id?: true
    otp?: true
  }

  export type OtpMaxAggregateInputType = {
    id_database?: true
    id?: true
    otp?: true
  }

  export type OtpCountAggregateInputType = {
    id_database?: true
    id?: true
    otp?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otp to aggregate.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type otpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otpWhereInput
    orderBy?: otpOrderByWithAggregationInput | otpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: otpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id_database: string
    id: string
    otp: string
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends otpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type otpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_database?: boolean
    id?: boolean
    otp?: boolean
  }, ExtArgs["result"]["otp"]>

  export type otpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_database?: boolean
    id?: boolean
    otp?: boolean
  }, ExtArgs["result"]["otp"]>

  export type otpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_database?: boolean
    id?: boolean
    otp?: boolean
  }, ExtArgs["result"]["otp"]>

  export type otpSelectScalar = {
    id_database?: boolean
    id?: boolean
    otp?: boolean
  }

  export type otpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_database" | "id" | "otp", ExtArgs["result"]["otp"]>

  export type $otpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_database: string
      id: string
      otp: string
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type otpGetPayload<S extends boolean | null | undefined | otpDefaultArgs> = $Result.GetResult<Prisma.$otpPayload, S>

  type otpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<otpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface otpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['otp'], meta: { name: 'otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {otpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends otpFindUniqueArgs>(args: SelectSubset<T, otpFindUniqueArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {otpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends otpFindUniqueOrThrowArgs>(args: SelectSubset<T, otpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends otpFindFirstArgs>(args?: SelectSubset<T, otpFindFirstArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends otpFindFirstOrThrowArgs>(args?: SelectSubset<T, otpFindFirstOrThrowArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id_database`
     * const otpWithId_databaseOnly = await prisma.otp.findMany({ select: { id_database: true } })
     * 
     */
    findMany<T extends otpFindManyArgs>(args?: SelectSubset<T, otpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {otpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends otpCreateArgs>(args: SelectSubset<T, otpCreateArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {otpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends otpCreateManyArgs>(args?: SelectSubset<T, otpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {otpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id_database`
     * const otpWithId_databaseOnly = await prisma.otp.createManyAndReturn({
     *   select: { id_database: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends otpCreateManyAndReturnArgs>(args?: SelectSubset<T, otpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {otpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends otpDeleteArgs>(args: SelectSubset<T, otpDeleteArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {otpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends otpUpdateArgs>(args: SelectSubset<T, otpUpdateArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {otpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends otpDeleteManyArgs>(args?: SelectSubset<T, otpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends otpUpdateManyArgs>(args: SelectSubset<T, otpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {otpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id_database`
     * const otpWithId_databaseOnly = await prisma.otp.updateManyAndReturn({
     *   select: { id_database: true },
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
    updateManyAndReturn<T extends otpUpdateManyAndReturnArgs>(args: SelectSubset<T, otpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {otpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends otpUpsertArgs>(args: SelectSubset<T, otpUpsertArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends otpCountArgs>(
      args?: Subset<T, otpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpGroupByArgs} args - Group by arguments.
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
      T extends otpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: otpGroupByArgs['orderBy'] }
        : { orderBy?: otpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, otpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the otp model
   */
  readonly fields: otpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__otpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the otp model
   */
  interface otpFieldRefs {
    readonly id_database: FieldRef<"otp", 'String'>
    readonly id: FieldRef<"otp", 'String'>
    readonly otp: FieldRef<"otp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * otp findUnique
   */
  export type otpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp findUniqueOrThrow
   */
  export type otpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp findFirst
   */
  export type otpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp findFirstOrThrow
   */
  export type otpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp findMany
   */
  export type otpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter, which otps to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp create
   */
  export type otpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The data needed to create a otp.
     */
    data: XOR<otpCreateInput, otpUncheckedCreateInput>
  }

  /**
   * otp createMany
   */
  export type otpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many otps.
     */
    data: otpCreateManyInput | otpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * otp createManyAndReturn
   */
  export type otpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The data used to create many otps.
     */
    data: otpCreateManyInput | otpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * otp update
   */
  export type otpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The data needed to update a otp.
     */
    data: XOR<otpUpdateInput, otpUncheckedUpdateInput>
    /**
     * Choose, which otp to update.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp updateMany
   */
  export type otpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update otps.
     */
    data: XOR<otpUpdateManyMutationInput, otpUncheckedUpdateManyInput>
    /**
     * Filter which otps to update
     */
    where?: otpWhereInput
    /**
     * Limit how many otps to update.
     */
    limit?: number
  }

  /**
   * otp updateManyAndReturn
   */
  export type otpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The data used to update otps.
     */
    data: XOR<otpUpdateManyMutationInput, otpUncheckedUpdateManyInput>
    /**
     * Filter which otps to update
     */
    where?: otpWhereInput
    /**
     * Limit how many otps to update.
     */
    limit?: number
  }

  /**
   * otp upsert
   */
  export type otpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The filter to search for the otp to update in case it exists.
     */
    where: otpWhereUniqueInput
    /**
     * In case the otp found by the `where` argument doesn't exist, create a new otp with this data.
     */
    create: XOR<otpCreateInput, otpUncheckedCreateInput>
    /**
     * In case the otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<otpUpdateInput, otpUncheckedUpdateInput>
  }

  /**
   * otp delete
   */
  export type otpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter which otp to delete.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp deleteMany
   */
  export type otpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otps to delete
     */
    where?: otpWhereInput
    /**
     * Limit how many otps to delete.
     */
    limit?: number
  }

  /**
   * otp without action
   */
  export type otpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
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


  export const ObjScalarFieldEnum: {
    id_database: 'id_database',
    id: 'id',
    email: 'email',
    text: 'text'
  };

  export type ObjScalarFieldEnum = (typeof ObjScalarFieldEnum)[keyof typeof ObjScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id_database: 'id_database',
    id: 'id',
    otp: 'otp'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type objWhereInput = {
    AND?: objWhereInput | objWhereInput[]
    OR?: objWhereInput[]
    NOT?: objWhereInput | objWhereInput[]
    id_database?: StringFilter<"obj"> | string
    id?: StringFilter<"obj"> | string
    email?: StringFilter<"obj"> | string
    text?: StringFilter<"obj"> | string
  }

  export type objOrderByWithRelationInput = {
    id_database?: SortOrder
    id?: SortOrder
    email?: SortOrder
    text?: SortOrder
  }

  export type objWhereUniqueInput = Prisma.AtLeast<{
    id_database?: string
    AND?: objWhereInput | objWhereInput[]
    OR?: objWhereInput[]
    NOT?: objWhereInput | objWhereInput[]
    id?: StringFilter<"obj"> | string
    email?: StringFilter<"obj"> | string
    text?: StringFilter<"obj"> | string
  }, "id_database">

  export type objOrderByWithAggregationInput = {
    id_database?: SortOrder
    id?: SortOrder
    email?: SortOrder
    text?: SortOrder
    _count?: objCountOrderByAggregateInput
    _max?: objMaxOrderByAggregateInput
    _min?: objMinOrderByAggregateInput
  }

  export type objScalarWhereWithAggregatesInput = {
    AND?: objScalarWhereWithAggregatesInput | objScalarWhereWithAggregatesInput[]
    OR?: objScalarWhereWithAggregatesInput[]
    NOT?: objScalarWhereWithAggregatesInput | objScalarWhereWithAggregatesInput[]
    id_database?: StringWithAggregatesFilter<"obj"> | string
    id?: StringWithAggregatesFilter<"obj"> | string
    email?: StringWithAggregatesFilter<"obj"> | string
    text?: StringWithAggregatesFilter<"obj"> | string
  }

  export type otpWhereInput = {
    AND?: otpWhereInput | otpWhereInput[]
    OR?: otpWhereInput[]
    NOT?: otpWhereInput | otpWhereInput[]
    id_database?: StringFilter<"otp"> | string
    id?: StringFilter<"otp"> | string
    otp?: StringFilter<"otp"> | string
  }

  export type otpOrderByWithRelationInput = {
    id_database?: SortOrder
    id?: SortOrder
    otp?: SortOrder
  }

  export type otpWhereUniqueInput = Prisma.AtLeast<{
    id_database?: string
    AND?: otpWhereInput | otpWhereInput[]
    OR?: otpWhereInput[]
    NOT?: otpWhereInput | otpWhereInput[]
    id?: StringFilter<"otp"> | string
    otp?: StringFilter<"otp"> | string
  }, "id_database">

  export type otpOrderByWithAggregationInput = {
    id_database?: SortOrder
    id?: SortOrder
    otp?: SortOrder
    _count?: otpCountOrderByAggregateInput
    _max?: otpMaxOrderByAggregateInput
    _min?: otpMinOrderByAggregateInput
  }

  export type otpScalarWhereWithAggregatesInput = {
    AND?: otpScalarWhereWithAggregatesInput | otpScalarWhereWithAggregatesInput[]
    OR?: otpScalarWhereWithAggregatesInput[]
    NOT?: otpScalarWhereWithAggregatesInput | otpScalarWhereWithAggregatesInput[]
    id_database?: StringWithAggregatesFilter<"otp"> | string
    id?: StringWithAggregatesFilter<"otp"> | string
    otp?: StringWithAggregatesFilter<"otp"> | string
  }

  export type objCreateInput = {
    id_database?: string
    id: string
    email: string
    text: string
  }

  export type objUncheckedCreateInput = {
    id_database?: string
    id: string
    email: string
    text: string
  }

  export type objUpdateInput = {
    id_database?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type objUncheckedUpdateInput = {
    id_database?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type objCreateManyInput = {
    id_database?: string
    id: string
    email: string
    text: string
  }

  export type objUpdateManyMutationInput = {
    id_database?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type objUncheckedUpdateManyInput = {
    id_database?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type otpCreateInput = {
    id_database?: string
    id: string
    otp: string
  }

  export type otpUncheckedCreateInput = {
    id_database?: string
    id: string
    otp: string
  }

  export type otpUpdateInput = {
    id_database?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
  }

  export type otpUncheckedUpdateInput = {
    id_database?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
  }

  export type otpCreateManyInput = {
    id_database?: string
    id: string
    otp: string
  }

  export type otpUpdateManyMutationInput = {
    id_database?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
  }

  export type otpUncheckedUpdateManyInput = {
    id_database?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
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

  export type objCountOrderByAggregateInput = {
    id_database?: SortOrder
    id?: SortOrder
    email?: SortOrder
    text?: SortOrder
  }

  export type objMaxOrderByAggregateInput = {
    id_database?: SortOrder
    id?: SortOrder
    email?: SortOrder
    text?: SortOrder
  }

  export type objMinOrderByAggregateInput = {
    id_database?: SortOrder
    id?: SortOrder
    email?: SortOrder
    text?: SortOrder
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

  export type otpCountOrderByAggregateInput = {
    id_database?: SortOrder
    id?: SortOrder
    otp?: SortOrder
  }

  export type otpMaxOrderByAggregateInput = {
    id_database?: SortOrder
    id?: SortOrder
    otp?: SortOrder
  }

  export type otpMinOrderByAggregateInput = {
    id_database?: SortOrder
    id?: SortOrder
    otp?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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