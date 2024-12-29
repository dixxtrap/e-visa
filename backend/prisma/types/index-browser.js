
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.LoginScalarFieldEnum = {
  id: 'id',
  type: 'type',
  username: 'username',
  password: 'password',
  roleId: 'roleId'
};

exports.Prisma.IconScalarFieldEnum = {
  id: 'id',
  path: 'path',
  code: 'code'
};

exports.Prisma.CustomerScalarFieldEnum = {
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

exports.Prisma.ContactInfoScalarFieldEnum = {
  id: 'id',
  displayname: 'displayname',
  phone: 'phone',
  customerId: 'customerId',
  visaRequestId: 'visaRequestId'
};

exports.Prisma.RoadTripInfoScalarFieldEnum = {
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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  displayname: 'displayname',
  phone: 'phone',
  email: 'email',
  companyId: 'companyId',
  gymId: 'gymId',
  loginId: 'loginId'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  comment: 'comment',
  byId: 'byId',
  isActive: 'isActive'
};

exports.Prisma.RolePermissionScalarFieldEnum = {
  roleId: 'roleId',
  permissionId: 'permissionId'
};

exports.Prisma.PermissionScalarFieldEnum = {
  id: 'id',
  code: 'code',
  comment: 'comment',
  moduleId: 'moduleId',
  action: 'action',
  byId: 'byId'
};

exports.Prisma.ModuleScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ActivityScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isActive: 'isActive'
};

exports.Prisma.VisaTypeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  isActive: 'isActive'
};

exports.Prisma.VisaRequestScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isActive: 'isActive',
  createdAt: 'createdAt',
  visaTypeId: 'visaTypeId',
  roadTripInfoId: 'roadTripInfoId',
  customerId: 'customerId'
};

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isActive: 'isActive',
  locationTypeId: 'locationTypeId'
};

exports.Prisma.LocationTypeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isActive: 'isActive'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.LoginOrderByRelevanceFieldEnum = {
  username: 'username',
  password: 'password'
};

exports.Prisma.IconOrderByRelevanceFieldEnum = {
  path: 'path',
  code: 'code'
};

exports.Prisma.CustomerOrderByRelevanceFieldEnum = {
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

exports.Prisma.contactInfoOrderByRelevanceFieldEnum = {
  displayname: 'displayname',
  phone: 'phone'
};

exports.Prisma.RoadTripInfoOrderByRelevanceFieldEnum = {
  motif: 'motif',
  arrivalFrom: 'arrivalFrom',
  departureTo: 'departureTo'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  displayname: 'displayname',
  phone: 'phone',
  email: 'email'
};

exports.Prisma.RoleOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.PermissionOrderByRelevanceFieldEnum = {
  code: 'code',
  comment: 'comment'
};

exports.Prisma.ModuleOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.ActivityOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.VisaTypeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.VisaRequestOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.LocationOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.LocationTypeOrderByRelevanceFieldEnum = {
  name: 'name'
};
exports.LoginEnum = exports.$Enums.LoginEnum = {
  CUSTOMER: 'CUSTOMER',
  USER: 'USER'
};

exports.PermissionActionEnum = exports.$Enums.PermissionActionEnum = {
  ALL: 'ALL',
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DETAILS: 'DETAILS',
  SELF: 'SELF'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
