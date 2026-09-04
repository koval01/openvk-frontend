/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $String = $util.global.String, $Boolean = $util.global.Boolean, $Number = $util.global.Number, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt, $Array = $util.global.Array;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const openvk = $root.openvk = (() => {

    /**
     * Namespace openvk.
     * @exports openvk
     * @namespace
     */
    const openvk = {};

    openvk.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof openvk
         * @namespace
         */
        const v1 = {};

        /**
         * PrivacyLevel enum.
         * @name openvk.v1.PrivacyLevel
         * @enum {number}
         * @property {number} PRIVACY_LEVEL_UNSPECIFIED=0 PRIVACY_LEVEL_UNSPECIFIED value
         * @property {number} PRIVACY_LEVEL_EVERYONE=1 PRIVACY_LEVEL_EVERYONE value
         * @property {number} PRIVACY_LEVEL_FRIENDS=2 PRIVACY_LEVEL_FRIENDS value
         * @property {number} PRIVACY_LEVEL_NOBODY=3 PRIVACY_LEVEL_NOBODY value
         */
        v1.PrivacyLevel = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "PRIVACY_LEVEL_UNSPECIFIED"] = 0;
            values[valuesById[1] = "PRIVACY_LEVEL_EVERYONE"] = 1;
            values[valuesById[2] = "PRIVACY_LEVEL_FRIENDS"] = 2;
            values[valuesById[3] = "PRIVACY_LEVEL_NOBODY"] = 3;
            return values;
        })();

        v1.Error = (function() {

            /**
             * Properties of an Error.
             * @typedef {Object} openvk.v1.Error.$Properties
             * @property {string|null} [error] Error error
             * @property {string|null} [message] Error message
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an Error.
             * @memberof openvk.v1
             * @interface IError
             * @augments openvk.v1.Error.$Properties
             * @deprecated Use openvk.v1.Error.$Properties instead.
             */

            /**
             * Shape of an Error.
             * @typedef {openvk.v1.Error.$Properties} openvk.v1.Error.$Shape
             */

            /**
             * Constructs a new Error.
             * @memberof openvk.v1
             * @classdesc Represents an Error.
             * @constructor
             * @param {openvk.v1.Error.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Error = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Error error.
             * @member {string} error
             * @memberof openvk.v1.Error
             * @instance
             */
            Error.prototype.error = "";

            /**
             * Error message.
             * @member {string} message
             * @memberof openvk.v1.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof openvk.v1.Error
             * @static
             * @param {openvk.v1.Error.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.Error} Error instance
             * @type {{
             *   (properties: openvk.v1.Error.$Shape): openvk.v1.Error & openvk.v1.Error.$Shape;
             *   (properties?: openvk.v1.Error.$Properties): openvk.v1.Error;
             * }}
             */
            Error.create = function(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link openvk.v1.Error.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.Error
             * @static
             * @param {openvk.v1.Error.$Properties} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.error != null && $Object.hasOwnProperty.call(message, "error") && message.error !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.error);
                if (message.message != null && $Object.hasOwnProperty.call(message, "message") && message.message !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link openvk.v1.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.Error
             * @static
             * @param {openvk.v1.Error.$Properties} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.Error & openvk.v1.Error.$Shape} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.Error();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.error = value;
                            else
                                delete message.error;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.message = value;
                            else
                                delete message.message;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.Error & openvk.v1.Error.$Shape} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof openvk.v1.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.error != null && $Object.hasOwnProperty.call(message, "error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.Error} Error
             */
            Error.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.Error)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.Error: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.Error();
                if (object.error != null)
                    if (typeof object.error !== "string" || object.error.length)
                        message.error = $String(object.error);
                if (object.message != null)
                    if (typeof object.message !== "string" || object.message.length)
                        message.message = $String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.Error
             * @static
             * @param {openvk.v1.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.error = "";
                    object.message = "";
                }
                if (message.error != null && $Object.hasOwnProperty.call(message, "error"))
                    object.error = message.error;
                if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof openvk.v1.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function() {
                return Error.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Error
             * @function getTypeUrl
             * @memberof openvk.v1.Error
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Error.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.Error";
            };

            return Error;
        })();

        v1.Health = (function() {

            /**
             * Properties of a Health.
             * @typedef {Object} openvk.v1.Health.$Properties
             * @property {string|null} [status] Health status
             * @property {boolean|null} [postgres] Health postgres
             * @property {boolean|null} [redis] Health redis
             * @property {string|null} [version] Health version
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Health.
             * @memberof openvk.v1
             * @interface IHealth
             * @augments openvk.v1.Health.$Properties
             * @deprecated Use openvk.v1.Health.$Properties instead.
             */

            /**
             * Shape of a Health.
             * @typedef {openvk.v1.Health.$Properties} openvk.v1.Health.$Shape
             */

            /**
             * Constructs a new Health.
             * @memberof openvk.v1
             * @classdesc Represents a Health.
             * @constructor
             * @param {openvk.v1.Health.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Health = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Health status.
             * @member {string} status
             * @memberof openvk.v1.Health
             * @instance
             */
            Health.prototype.status = "";

            /**
             * Health postgres.
             * @member {boolean} postgres
             * @memberof openvk.v1.Health
             * @instance
             */
            Health.prototype.postgres = false;

            /**
             * Health redis.
             * @member {boolean} redis
             * @memberof openvk.v1.Health
             * @instance
             */
            Health.prototype.redis = false;

            /**
             * Health version.
             * @member {string} version
             * @memberof openvk.v1.Health
             * @instance
             */
            Health.prototype.version = "";

            /**
             * Creates a new Health instance using the specified properties.
             * @function create
             * @memberof openvk.v1.Health
             * @static
             * @param {openvk.v1.Health.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.Health} Health instance
             * @type {{
             *   (properties: openvk.v1.Health.$Shape): openvk.v1.Health & openvk.v1.Health.$Shape;
             *   (properties?: openvk.v1.Health.$Properties): openvk.v1.Health;
             * }}
             */
            Health.create = function(properties) {
                return new Health(properties);
            };

            /**
             * Encodes the specified Health message. Does not implicitly {@link openvk.v1.Health.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.Health
             * @static
             * @param {openvk.v1.Health.$Properties} message Health message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Health.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.status != null && $Object.hasOwnProperty.call(message, "status") && message.status !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
                if (message.postgres != null && $Object.hasOwnProperty.call(message, "postgres") && message.postgres !== false)
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.postgres);
                if (message.redis != null && $Object.hasOwnProperty.call(message, "redis") && message.redis !== false)
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.redis);
                if (message.version != null && $Object.hasOwnProperty.call(message, "version") && message.version !== "")
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.version);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Health message, length delimited. Does not implicitly {@link openvk.v1.Health.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.Health
             * @static
             * @param {openvk.v1.Health.$Properties} message Health message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Health.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Health message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.Health
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.Health & openvk.v1.Health.$Shape} Health
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Health.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.Health();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.status = value;
                            else
                                delete message.status;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.bool())
                                message.postgres = value;
                            else
                                delete message.postgres;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.bool())
                                message.redis = value;
                            else
                                delete message.redis;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.version = value;
                            else
                                delete message.version;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Health message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.Health
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.Health & openvk.v1.Health.$Shape} Health
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Health.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Health message.
             * @function verify
             * @memberof openvk.v1.Health
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Health.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    if (!$util.isString(message.status))
                        return "status: string expected";
                if (message.postgres != null && $Object.hasOwnProperty.call(message, "postgres"))
                    if (typeof message.postgres !== "boolean")
                        return "postgres: boolean expected";
                if (message.redis != null && $Object.hasOwnProperty.call(message, "redis"))
                    if (typeof message.redis !== "boolean")
                        return "redis: boolean expected";
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                return null;
            };

            /**
             * Creates a Health message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.Health
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.Health} Health
             */
            Health.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.Health)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.Health: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.Health();
                if (object.status != null)
                    if (typeof object.status !== "string" || object.status.length)
                        message.status = $String(object.status);
                if (object.postgres != null)
                    if (object.postgres)
                        message.postgres = $Boolean(object.postgres);
                if (object.redis != null)
                    if (object.redis)
                        message.redis = $Boolean(object.redis);
                if (object.version != null)
                    if (typeof object.version !== "string" || object.version.length)
                        message.version = $String(object.version);
                return message;
            };

            /**
             * Creates a plain object from a Health message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.Health
             * @static
             * @param {openvk.v1.Health} message Health
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Health.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.status = "";
                    object.postgres = false;
                    object.redis = false;
                    object.version = "";
                }
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                if (message.postgres != null && $Object.hasOwnProperty.call(message, "postgres"))
                    object.postgres = message.postgres;
                if (message.redis != null && $Object.hasOwnProperty.call(message, "redis"))
                    object.redis = message.redis;
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    object.version = message.version;
                return object;
            };

            /**
             * Converts this Health to JSON.
             * @function toJSON
             * @memberof openvk.v1.Health
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Health.prototype.toJSON = function() {
                return Health.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Health
             * @function getTypeUrl
             * @memberof openvk.v1.Health
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Health.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.Health";
            };

            return Health;
        })();

        v1.Challenge = (function() {

            /**
             * Properties of a Challenge.
             * @typedef {Object} openvk.v1.Challenge.$Properties
             * @property {string|null} [csrf_token] Challenge csrf_token
             * @property {string|null} [challenge_id] Challenge challenge_id
             * @property {string|null} [nonce] Challenge nonce
             * @property {number|Long|null} [expires_in] Challenge expires_in
             * @property {string|null} [alg] Challenge alg
             * @property {string|null} [public_key] Challenge public_key
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Challenge.
             * @memberof openvk.v1
             * @interface IChallenge
             * @augments openvk.v1.Challenge.$Properties
             * @deprecated Use openvk.v1.Challenge.$Properties instead.
             */

            /**
             * Shape of a Challenge.
             * @typedef {openvk.v1.Challenge.$Properties} openvk.v1.Challenge.$Shape
             */

            /**
             * Constructs a new Challenge.
             * @memberof openvk.v1
             * @classdesc Represents a Challenge.
             * @constructor
             * @param {openvk.v1.Challenge.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Challenge = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Challenge csrf_token.
             * @member {string} csrf_token
             * @memberof openvk.v1.Challenge
             * @instance
             */
            Challenge.prototype.csrf_token = "";

            /**
             * Challenge challenge_id.
             * @member {string} challenge_id
             * @memberof openvk.v1.Challenge
             * @instance
             */
            Challenge.prototype.challenge_id = "";

            /**
             * Challenge nonce.
             * @member {string} nonce
             * @memberof openvk.v1.Challenge
             * @instance
             */
            Challenge.prototype.nonce = "";

            /**
             * Challenge expires_in.
             * @member {number|Long} expires_in
             * @memberof openvk.v1.Challenge
             * @instance
             */
            Challenge.prototype.expires_in = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Challenge alg.
             * @member {string} alg
             * @memberof openvk.v1.Challenge
             * @instance
             */
            Challenge.prototype.alg = "";

            /**
             * Challenge public_key.
             * @member {string} public_key
             * @memberof openvk.v1.Challenge
             * @instance
             */
            Challenge.prototype.public_key = "";

            /**
             * Creates a new Challenge instance using the specified properties.
             * @function create
             * @memberof openvk.v1.Challenge
             * @static
             * @param {openvk.v1.Challenge.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.Challenge} Challenge instance
             * @type {{
             *   (properties: openvk.v1.Challenge.$Shape): openvk.v1.Challenge & openvk.v1.Challenge.$Shape;
             *   (properties?: openvk.v1.Challenge.$Properties): openvk.v1.Challenge;
             * }}
             */
            Challenge.create = function(properties) {
                return new Challenge(properties);
            };

            /**
             * Encodes the specified Challenge message. Does not implicitly {@link openvk.v1.Challenge.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.Challenge
             * @static
             * @param {openvk.v1.Challenge.$Properties} message Challenge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Challenge.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.csrf_token != null && $Object.hasOwnProperty.call(message, "csrf_token") && message.csrf_token !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.csrf_token);
                if (message.challenge_id != null && $Object.hasOwnProperty.call(message, "challenge_id") && message.challenge_id !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.challenge_id);
                if (message.nonce != null && $Object.hasOwnProperty.call(message, "nonce") && message.nonce !== "")
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.nonce);
                if (message.expires_in != null && $Object.hasOwnProperty.call(message, "expires_in") && (typeof message.expires_in === "object" ? message.expires_in.low || message.expires_in.high : message.expires_in !== 0))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.expires_in);
                if (message.alg != null && $Object.hasOwnProperty.call(message, "alg") && message.alg !== "")
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.alg);
                if (message.public_key != null && $Object.hasOwnProperty.call(message, "public_key") && message.public_key !== "")
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.public_key);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Challenge message, length delimited. Does not implicitly {@link openvk.v1.Challenge.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.Challenge
             * @static
             * @param {openvk.v1.Challenge.$Properties} message Challenge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Challenge.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Challenge message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.Challenge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.Challenge & openvk.v1.Challenge.$Shape} Challenge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Challenge.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.Challenge();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.csrf_token = value;
                            else
                                delete message.csrf_token;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.challenge_id = value;
                            else
                                delete message.challenge_id;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.nonce = value;
                            else
                                delete message.nonce;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                                message.expires_in = value;
                            else
                                delete message.expires_in;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.alg = value;
                            else
                                delete message.alg;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.public_key = value;
                            else
                                delete message.public_key;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Challenge message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.Challenge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.Challenge & openvk.v1.Challenge.$Shape} Challenge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Challenge.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Challenge message.
             * @function verify
             * @memberof openvk.v1.Challenge
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Challenge.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.csrf_token != null && $Object.hasOwnProperty.call(message, "csrf_token"))
                    if (!$util.isString(message.csrf_token))
                        return "csrf_token: string expected";
                if (message.challenge_id != null && $Object.hasOwnProperty.call(message, "challenge_id"))
                    if (!$util.isString(message.challenge_id))
                        return "challenge_id: string expected";
                if (message.nonce != null && $Object.hasOwnProperty.call(message, "nonce"))
                    if (!$util.isString(message.nonce))
                        return "nonce: string expected";
                if (message.expires_in != null && $Object.hasOwnProperty.call(message, "expires_in"))
                    if (!$util.isInteger(message.expires_in) && !(message.expires_in && $util.isInteger(message.expires_in.low) && $util.isInteger(message.expires_in.high)))
                        return "expires_in: integer|Long expected";
                if (message.alg != null && $Object.hasOwnProperty.call(message, "alg"))
                    if (!$util.isString(message.alg))
                        return "alg: string expected";
                if (message.public_key != null && $Object.hasOwnProperty.call(message, "public_key"))
                    if (!$util.isString(message.public_key))
                        return "public_key: string expected";
                return null;
            };

            /**
             * Creates a Challenge message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.Challenge
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.Challenge} Challenge
             */
            Challenge.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.Challenge)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.Challenge: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.Challenge();
                if (object.csrf_token != null)
                    if (typeof object.csrf_token !== "string" || object.csrf_token.length)
                        message.csrf_token = $String(object.csrf_token);
                if (object.challenge_id != null)
                    if (typeof object.challenge_id !== "string" || object.challenge_id.length)
                        message.challenge_id = $String(object.challenge_id);
                if (object.nonce != null)
                    if (typeof object.nonce !== "string" || object.nonce.length)
                        message.nonce = $String(object.nonce);
                if (object.expires_in != null)
                    if (typeof object.expires_in === "object" ? object.expires_in.low || object.expires_in.high : $Number(object.expires_in) !== 0)
                        if ($util.Long)
                            message.expires_in = $util.Long.fromValue(object.expires_in, true);
                        else if (typeof object.expires_in === "string")
                            message.expires_in = $parseInt(object.expires_in, 10);
                        else if (typeof object.expires_in === "number")
                            message.expires_in = object.expires_in;
                        else if (typeof object.expires_in === "object")
                            message.expires_in = new $util.LongBits(object.expires_in.low >>> 0, object.expires_in.high >>> 0).toNumber(true);
                if (object.alg != null)
                    if (typeof object.alg !== "string" || object.alg.length)
                        message.alg = $String(object.alg);
                if (object.public_key != null)
                    if (typeof object.public_key !== "string" || object.public_key.length)
                        message.public_key = $String(object.public_key);
                return message;
            };

            /**
             * Creates a plain object from a Challenge message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.Challenge
             * @static
             * @param {openvk.v1.Challenge} message Challenge
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Challenge.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.csrf_token = "";
                    object.challenge_id = "";
                    object.nonce = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.expires_in = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.expires_in = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.alg = "";
                    object.public_key = "";
                }
                if (message.csrf_token != null && $Object.hasOwnProperty.call(message, "csrf_token"))
                    object.csrf_token = message.csrf_token;
                if (message.challenge_id != null && $Object.hasOwnProperty.call(message, "challenge_id"))
                    object.challenge_id = message.challenge_id;
                if (message.nonce != null && $Object.hasOwnProperty.call(message, "nonce"))
                    object.nonce = message.nonce;
                if (message.expires_in != null && $Object.hasOwnProperty.call(message, "expires_in"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.expires_in = typeof message.expires_in === "number" ? $BigInt(message.expires_in) : $util.Long.fromBits(message.expires_in.low >>> 0, message.expires_in.high >>> 0, true).toBigInt();
                    else if (typeof message.expires_in === "number")
                        object.expires_in = options.longs === $String ? $String(message.expires_in) : message.expires_in;
                    else
                        object.expires_in = options.longs === $String ? $util.Long.prototype.toString.call(message.expires_in) : options.longs === $Number ? new $util.LongBits(message.expires_in.low >>> 0, message.expires_in.high >>> 0).toNumber(true) : message.expires_in;
                if (message.alg != null && $Object.hasOwnProperty.call(message, "alg"))
                    object.alg = message.alg;
                if (message.public_key != null && $Object.hasOwnProperty.call(message, "public_key"))
                    object.public_key = message.public_key;
                return object;
            };

            /**
             * Converts this Challenge to JSON.
             * @function toJSON
             * @memberof openvk.v1.Challenge
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Challenge.prototype.toJSON = function() {
                return Challenge.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Challenge
             * @function getTypeUrl
             * @memberof openvk.v1.Challenge
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Challenge.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.Challenge";
            };

            return Challenge;
        })();

        v1.AuthRequest = (function() {

            /**
             * Properties of an AuthRequest.
             * @typedef {Object} openvk.v1.AuthRequest.$Properties
             * @property {string|null} [login] AuthRequest login
             * @property {string|null} [challenge_id] AuthRequest challenge_id
             * @property {string|null} [password_sealed] AuthRequest password_sealed
             * @property {string|null} [turnstile_token] AuthRequest turnstile_token
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an AuthRequest.
             * @memberof openvk.v1
             * @interface IAuthRequest
             * @augments openvk.v1.AuthRequest.$Properties
             * @deprecated Use openvk.v1.AuthRequest.$Properties instead.
             */

            /**
             * Shape of an AuthRequest.
             * @typedef {openvk.v1.AuthRequest.$Properties} openvk.v1.AuthRequest.$Shape
             */

            /**
             * Constructs a new AuthRequest.
             * @memberof openvk.v1
             * @classdesc Represents an AuthRequest.
             * @constructor
             * @param {openvk.v1.AuthRequest.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const AuthRequest = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * AuthRequest login.
             * @member {string} login
             * @memberof openvk.v1.AuthRequest
             * @instance
             */
            AuthRequest.prototype.login = "";

            /**
             * AuthRequest challenge_id.
             * @member {string} challenge_id
             * @memberof openvk.v1.AuthRequest
             * @instance
             */
            AuthRequest.prototype.challenge_id = "";

            /**
             * AuthRequest password_sealed.
             * @member {string} password_sealed
             * @memberof openvk.v1.AuthRequest
             * @instance
             */
            AuthRequest.prototype.password_sealed = "";

            /**
             * AuthRequest turnstile_token.
             * @member {string} turnstile_token
             * @memberof openvk.v1.AuthRequest
             * @instance
             */
            AuthRequest.prototype.turnstile_token = "";

            /**
             * Creates a new AuthRequest instance using the specified properties.
             * @function create
             * @memberof openvk.v1.AuthRequest
             * @static
             * @param {openvk.v1.AuthRequest.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.AuthRequest} AuthRequest instance
             * @type {{
             *   (properties: openvk.v1.AuthRequest.$Shape): openvk.v1.AuthRequest & openvk.v1.AuthRequest.$Shape;
             *   (properties?: openvk.v1.AuthRequest.$Properties): openvk.v1.AuthRequest;
             * }}
             */
            AuthRequest.create = function(properties) {
                return new AuthRequest(properties);
            };

            /**
             * Encodes the specified AuthRequest message. Does not implicitly {@link openvk.v1.AuthRequest.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.AuthRequest
             * @static
             * @param {openvk.v1.AuthRequest.$Properties} message AuthRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthRequest.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.login != null && $Object.hasOwnProperty.call(message, "login") && message.login !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
                if (message.challenge_id != null && $Object.hasOwnProperty.call(message, "challenge_id") && message.challenge_id !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.challenge_id);
                if (message.password_sealed != null && $Object.hasOwnProperty.call(message, "password_sealed") && message.password_sealed !== "")
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.password_sealed);
                if (message.turnstile_token != null && $Object.hasOwnProperty.call(message, "turnstile_token") && message.turnstile_token !== "")
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.turnstile_token);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AuthRequest message, length delimited. Does not implicitly {@link openvk.v1.AuthRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.AuthRequest
             * @static
             * @param {openvk.v1.AuthRequest.$Properties} message AuthRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthRequest.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an AuthRequest message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.AuthRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.AuthRequest & openvk.v1.AuthRequest.$Shape} AuthRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthRequest.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.AuthRequest();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.login = value;
                            else
                                delete message.login;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.challenge_id = value;
                            else
                                delete message.challenge_id;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.password_sealed = value;
                            else
                                delete message.password_sealed;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.turnstile_token = value;
                            else
                                delete message.turnstile_token;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an AuthRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.AuthRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.AuthRequest & openvk.v1.AuthRequest.$Shape} AuthRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthRequest.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AuthRequest message.
             * @function verify
             * @memberof openvk.v1.AuthRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuthRequest.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.login != null && $Object.hasOwnProperty.call(message, "login"))
                    if (!$util.isString(message.login))
                        return "login: string expected";
                if (message.challenge_id != null && $Object.hasOwnProperty.call(message, "challenge_id"))
                    if (!$util.isString(message.challenge_id))
                        return "challenge_id: string expected";
                if (message.password_sealed != null && $Object.hasOwnProperty.call(message, "password_sealed"))
                    if (!$util.isString(message.password_sealed))
                        return "password_sealed: string expected";
                if (message.turnstile_token != null && $Object.hasOwnProperty.call(message, "turnstile_token"))
                    if (!$util.isString(message.turnstile_token))
                        return "turnstile_token: string expected";
                return null;
            };

            /**
             * Creates an AuthRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.AuthRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.AuthRequest} AuthRequest
             */
            AuthRequest.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.AuthRequest)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.AuthRequest: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.AuthRequest();
                if (object.login != null)
                    if (typeof object.login !== "string" || object.login.length)
                        message.login = $String(object.login);
                if (object.challenge_id != null)
                    if (typeof object.challenge_id !== "string" || object.challenge_id.length)
                        message.challenge_id = $String(object.challenge_id);
                if (object.password_sealed != null)
                    if (typeof object.password_sealed !== "string" || object.password_sealed.length)
                        message.password_sealed = $String(object.password_sealed);
                if (object.turnstile_token != null)
                    if (typeof object.turnstile_token !== "string" || object.turnstile_token.length)
                        message.turnstile_token = $String(object.turnstile_token);
                return message;
            };

            /**
             * Creates a plain object from an AuthRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.AuthRequest
             * @static
             * @param {openvk.v1.AuthRequest} message AuthRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AuthRequest.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.login = "";
                    object.challenge_id = "";
                    object.password_sealed = "";
                    object.turnstile_token = "";
                }
                if (message.login != null && $Object.hasOwnProperty.call(message, "login"))
                    object.login = message.login;
                if (message.challenge_id != null && $Object.hasOwnProperty.call(message, "challenge_id"))
                    object.challenge_id = message.challenge_id;
                if (message.password_sealed != null && $Object.hasOwnProperty.call(message, "password_sealed"))
                    object.password_sealed = message.password_sealed;
                if (message.turnstile_token != null && $Object.hasOwnProperty.call(message, "turnstile_token"))
                    object.turnstile_token = message.turnstile_token;
                return object;
            };

            /**
             * Converts this AuthRequest to JSON.
             * @function toJSON
             * @memberof openvk.v1.AuthRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AuthRequest.prototype.toJSON = function() {
                return AuthRequest.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AuthRequest
             * @function getTypeUrl
             * @memberof openvk.v1.AuthRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AuthRequest.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.AuthRequest";
            };

            return AuthRequest;
        })();

        v1.Token = (function() {

            /**
             * Properties of a Token.
             * @typedef {Object} openvk.v1.Token.$Properties
             * @property {string|null} [token] Token token
             * @property {string|null} [token_type] Token token_type
             * @property {number|Long|null} [user_id] Token user_id
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Token.
             * @memberof openvk.v1
             * @interface IToken
             * @augments openvk.v1.Token.$Properties
             * @deprecated Use openvk.v1.Token.$Properties instead.
             */

            /**
             * Shape of a Token.
             * @typedef {openvk.v1.Token.$Properties} openvk.v1.Token.$Shape
             */

            /**
             * Constructs a new Token.
             * @memberof openvk.v1
             * @classdesc Represents a Token.
             * @constructor
             * @param {openvk.v1.Token.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Token = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Token token.
             * @member {string} token
             * @memberof openvk.v1.Token
             * @instance
             */
            Token.prototype.token = "";

            /**
             * Token token_type.
             * @member {string} token_type
             * @memberof openvk.v1.Token
             * @instance
             */
            Token.prototype.token_type = "";

            /**
             * Token user_id.
             * @member {number|Long} user_id
             * @memberof openvk.v1.Token
             * @instance
             */
            Token.prototype.user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Token instance using the specified properties.
             * @function create
             * @memberof openvk.v1.Token
             * @static
             * @param {openvk.v1.Token.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.Token} Token instance
             * @type {{
             *   (properties: openvk.v1.Token.$Shape): openvk.v1.Token & openvk.v1.Token.$Shape;
             *   (properties?: openvk.v1.Token.$Properties): openvk.v1.Token;
             * }}
             */
            Token.create = function(properties) {
                return new Token(properties);
            };

            /**
             * Encodes the specified Token message. Does not implicitly {@link openvk.v1.Token.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.Token
             * @static
             * @param {openvk.v1.Token.$Properties} message Token message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Token.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.token != null && $Object.hasOwnProperty.call(message, "token") && message.token !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                if (message.token_type != null && $Object.hasOwnProperty.call(message, "token_type") && message.token_type !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.token_type);
                if (message.user_id != null && $Object.hasOwnProperty.call(message, "user_id") && (typeof message.user_id === "object" ? message.user_id.low || message.user_id.high : message.user_id !== 0))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.user_id);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Token message, length delimited. Does not implicitly {@link openvk.v1.Token.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.Token
             * @static
             * @param {openvk.v1.Token.$Properties} message Token message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Token.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Token message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.Token
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.Token & openvk.v1.Token.$Shape} Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Token.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.Token();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.token = value;
                            else
                                delete message.token;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.token_type = value;
                            else
                                delete message.token_type;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.user_id = value;
                            else
                                delete message.user_id;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Token message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.Token
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.Token & openvk.v1.Token.$Shape} Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Token.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Token message.
             * @function verify
             * @memberof openvk.v1.Token
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Token.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.token_type != null && $Object.hasOwnProperty.call(message, "token_type"))
                    if (!$util.isString(message.token_type))
                        return "token_type: string expected";
                if (message.user_id != null && $Object.hasOwnProperty.call(message, "user_id"))
                    if (!$util.isInteger(message.user_id) && !(message.user_id && $util.isInteger(message.user_id.low) && $util.isInteger(message.user_id.high)))
                        return "user_id: integer|Long expected";
                return null;
            };

            /**
             * Creates a Token message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.Token
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.Token} Token
             */
            Token.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.Token)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.Token: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.Token();
                if (object.token != null)
                    if (typeof object.token !== "string" || object.token.length)
                        message.token = $String(object.token);
                if (object.token_type != null)
                    if (typeof object.token_type !== "string" || object.token_type.length)
                        message.token_type = $String(object.token_type);
                if (object.user_id != null)
                    if (typeof object.user_id === "object" ? object.user_id.low || object.user_id.high : $Number(object.user_id) !== 0)
                        if ($util.Long)
                            message.user_id = $util.Long.fromValue(object.user_id, false);
                        else if (typeof object.user_id === "string")
                            message.user_id = $parseInt(object.user_id, 10);
                        else if (typeof object.user_id === "number")
                            message.user_id = object.user_id;
                        else if (typeof object.user_id === "object")
                            message.user_id = new $util.LongBits(object.user_id.low >>> 0, object.user_id.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Token message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.Token
             * @static
             * @param {openvk.v1.Token} message Token
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Token.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.token = "";
                    object.token_type = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.user_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.user_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                    object.token = message.token;
                if (message.token_type != null && $Object.hasOwnProperty.call(message, "token_type"))
                    object.token_type = message.token_type;
                if (message.user_id != null && $Object.hasOwnProperty.call(message, "user_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.user_id = typeof message.user_id === "number" ? $BigInt(message.user_id) : $util.Long.fromBits(message.user_id.low >>> 0, message.user_id.high >>> 0, false).toBigInt();
                    else if (typeof message.user_id === "number")
                        object.user_id = options.longs === $String ? $String(message.user_id) : message.user_id;
                    else
                        object.user_id = options.longs === $String ? $util.Long.prototype.toString.call(message.user_id) : options.longs === $Number ? new $util.LongBits(message.user_id.low >>> 0, message.user_id.high >>> 0).toNumber() : message.user_id;
                return object;
            };

            /**
             * Converts this Token to JSON.
             * @function toJSON
             * @memberof openvk.v1.Token
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Token.prototype.toJSON = function() {
                return Token.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Token
             * @function getTypeUrl
             * @memberof openvk.v1.Token
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Token.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.Token";
            };

            return Token;
        })();

        v1.SealedPassword = (function() {

            /**
             * Properties of a SealedPassword.
             * @typedef {Object} openvk.v1.SealedPassword.$Properties
             * @property {string|null} [challenge_id] SealedPassword challenge_id
             * @property {string|null} [password_sealed] SealedPassword password_sealed
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SealedPassword.
             * @memberof openvk.v1
             * @interface ISealedPassword
             * @augments openvk.v1.SealedPassword.$Properties
             * @deprecated Use openvk.v1.SealedPassword.$Properties instead.
             */

            /**
             * Shape of a SealedPassword.
             * @typedef {openvk.v1.SealedPassword.$Properties} openvk.v1.SealedPassword.$Shape
             */

            /**
             * Constructs a new SealedPassword.
             * @memberof openvk.v1
             * @classdesc Represents a SealedPassword.
             * @constructor
             * @param {openvk.v1.SealedPassword.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SealedPassword = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SealedPassword challenge_id.
             * @member {string} challenge_id
             * @memberof openvk.v1.SealedPassword
             * @instance
             */
            SealedPassword.prototype.challenge_id = "";

            /**
             * SealedPassword password_sealed.
             * @member {string} password_sealed
             * @memberof openvk.v1.SealedPassword
             * @instance
             */
            SealedPassword.prototype.password_sealed = "";

            /**
             * Creates a new SealedPassword instance using the specified properties.
             * @function create
             * @memberof openvk.v1.SealedPassword
             * @static
             * @param {openvk.v1.SealedPassword.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.SealedPassword} SealedPassword instance
             * @type {{
             *   (properties: openvk.v1.SealedPassword.$Shape): openvk.v1.SealedPassword & openvk.v1.SealedPassword.$Shape;
             *   (properties?: openvk.v1.SealedPassword.$Properties): openvk.v1.SealedPassword;
             * }}
             */
            SealedPassword.create = function(properties) {
                return new SealedPassword(properties);
            };

            /**
             * Encodes the specified SealedPassword message. Does not implicitly {@link openvk.v1.SealedPassword.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.SealedPassword
             * @static
             * @param {openvk.v1.SealedPassword.$Properties} message SealedPassword message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SealedPassword.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.challenge_id != null && $Object.hasOwnProperty.call(message, "challenge_id") && message.challenge_id !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.challenge_id);
                if (message.password_sealed != null && $Object.hasOwnProperty.call(message, "password_sealed") && message.password_sealed !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password_sealed);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SealedPassword message, length delimited. Does not implicitly {@link openvk.v1.SealedPassword.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.SealedPassword
             * @static
             * @param {openvk.v1.SealedPassword.$Properties} message SealedPassword message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SealedPassword.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SealedPassword message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.SealedPassword
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.SealedPassword & openvk.v1.SealedPassword.$Shape} SealedPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SealedPassword.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.SealedPassword();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.challenge_id = value;
                            else
                                delete message.challenge_id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.password_sealed = value;
                            else
                                delete message.password_sealed;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a SealedPassword message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.SealedPassword
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.SealedPassword & openvk.v1.SealedPassword.$Shape} SealedPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SealedPassword.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SealedPassword message.
             * @function verify
             * @memberof openvk.v1.SealedPassword
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SealedPassword.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.challenge_id != null && $Object.hasOwnProperty.call(message, "challenge_id"))
                    if (!$util.isString(message.challenge_id))
                        return "challenge_id: string expected";
                if (message.password_sealed != null && $Object.hasOwnProperty.call(message, "password_sealed"))
                    if (!$util.isString(message.password_sealed))
                        return "password_sealed: string expected";
                return null;
            };

            /**
             * Creates a SealedPassword message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.SealedPassword
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.SealedPassword} SealedPassword
             */
            SealedPassword.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.SealedPassword)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.SealedPassword: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.SealedPassword();
                if (object.challenge_id != null)
                    if (typeof object.challenge_id !== "string" || object.challenge_id.length)
                        message.challenge_id = $String(object.challenge_id);
                if (object.password_sealed != null)
                    if (typeof object.password_sealed !== "string" || object.password_sealed.length)
                        message.password_sealed = $String(object.password_sealed);
                return message;
            };

            /**
             * Creates a plain object from a SealedPassword message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.SealedPassword
             * @static
             * @param {openvk.v1.SealedPassword} message SealedPassword
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SealedPassword.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.challenge_id = "";
                    object.password_sealed = "";
                }
                if (message.challenge_id != null && $Object.hasOwnProperty.call(message, "challenge_id"))
                    object.challenge_id = message.challenge_id;
                if (message.password_sealed != null && $Object.hasOwnProperty.call(message, "password_sealed"))
                    object.password_sealed = message.password_sealed;
                return object;
            };

            /**
             * Converts this SealedPassword to JSON.
             * @function toJSON
             * @memberof openvk.v1.SealedPassword
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SealedPassword.prototype.toJSON = function() {
                return SealedPassword.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SealedPassword
             * @function getTypeUrl
             * @memberof openvk.v1.SealedPassword
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SealedPassword.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.SealedPassword";
            };

            return SealedPassword;
        })();

        v1.User = (function() {

            /**
             * Properties of a User.
             * @typedef {Object} openvk.v1.User.$Properties
             * @property {number|Long|null} [id] User id
             * @property {string|null} [first_name] User first_name
             * @property {string|null} [last_name] User last_name
             * @property {string|null} [screen_name] User screen_name
             * @property {string|null} [status] User status
             * @property {string|null} [city] User city
             * @property {string|null} [email] User email
             * @property {string|null} [phone] User phone
             * @property {string|null} [avatar_url] User avatar_url
             * @property {boolean|null} [verified] User verified
             * @property {openvk.v1.PrivacyLevel|null} [privacy_wall] User privacy_wall
             * @property {openvk.v1.PrivacyLevel|null} [privacy_messages] User privacy_messages
             * @property {openvk.v1.PrivacyLevel|null} [privacy_photos] User privacy_photos
             * @property {openvk.v1.PrivacyLevel|null} [privacy_audio] User privacy_audio
             * @property {string|null} [created_at] User created_at
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a User.
             * @memberof openvk.v1
             * @interface IUser
             * @augments openvk.v1.User.$Properties
             * @deprecated Use openvk.v1.User.$Properties instead.
             */

            /**
             * Shape of a User.
             * @typedef {openvk.v1.User.$Properties} openvk.v1.User.$Shape
             */

            /**
             * Constructs a new User.
             * @memberof openvk.v1
             * @classdesc Represents a User.
             * @constructor
             * @param {openvk.v1.User.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const User = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * User id.
             * @member {number|Long} id
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * User first_name.
             * @member {string} first_name
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.first_name = "";

            /**
             * User last_name.
             * @member {string} last_name
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.last_name = "";

            /**
             * User screen_name.
             * @member {string|null|undefined} screen_name
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.screen_name = null;

            /**
             * User status.
             * @member {string|null|undefined} status
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.status = null;

            /**
             * User city.
             * @member {string|null|undefined} city
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.city = null;

            /**
             * User email.
             * @member {string|null|undefined} email
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.email = null;

            /**
             * User phone.
             * @member {string|null|undefined} phone
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.phone = null;

            /**
             * User avatar_url.
             * @member {string|null|undefined} avatar_url
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.avatar_url = null;

            /**
             * User verified.
             * @member {boolean} verified
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.verified = false;

            /**
             * User privacy_wall.
             * @member {openvk.v1.PrivacyLevel} privacy_wall
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.privacy_wall = 0;

            /**
             * User privacy_messages.
             * @member {openvk.v1.PrivacyLevel} privacy_messages
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.privacy_messages = 0;

            /**
             * User privacy_photos.
             * @member {openvk.v1.PrivacyLevel} privacy_photos
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.privacy_photos = 0;

            /**
             * User privacy_audio.
             * @member {openvk.v1.PrivacyLevel} privacy_audio
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.privacy_audio = 0;

            /**
             * User created_at.
             * @member {string} created_at
             * @memberof openvk.v1.User
             * @instance
             */
            User.prototype.created_at = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(User.prototype, "_screen_name", {
                get: $util.oneOfGetter($oneOfFields = ["screen_name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(User.prototype, "_status", {
                get: $util.oneOfGetter($oneOfFields = ["status"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(User.prototype, "_city", {
                get: $util.oneOfGetter($oneOfFields = ["city"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(User.prototype, "_email", {
                get: $util.oneOfGetter($oneOfFields = ["email"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(User.prototype, "_phone", {
                get: $util.oneOfGetter($oneOfFields = ["phone"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(User.prototype, "_avatar_url", {
                get: $util.oneOfGetter($oneOfFields = ["avatar_url"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof openvk.v1.User
             * @static
             * @param {openvk.v1.User.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.User} User instance
             * @type {{
             *   (properties: openvk.v1.User.$Shape): openvk.v1.User & openvk.v1.User.$Shape;
             *   (properties?: openvk.v1.User.$Properties): openvk.v1.User;
             * }}
             */
            User.create = function(properties) {
                return new User(properties);
            };

            /**
             * Encodes the specified User message. Does not implicitly {@link openvk.v1.User.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.User
             * @static
             * @param {openvk.v1.User.$Properties} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && (typeof message.id === "object" ? message.id.low || message.id.high : message.id !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.first_name != null && $Object.hasOwnProperty.call(message, "first_name") && message.first_name !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.first_name);
                if (message.last_name != null && $Object.hasOwnProperty.call(message, "last_name") && message.last_name !== "")
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.last_name);
                if (message.screen_name != null && $Object.hasOwnProperty.call(message, "screen_name"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.screen_name);
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.status);
                if (message.city != null && $Object.hasOwnProperty.call(message, "city"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.city);
                if (message.email != null && $Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.email);
                if (message.phone != null && $Object.hasOwnProperty.call(message, "phone"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.phone);
                if (message.avatar_url != null && $Object.hasOwnProperty.call(message, "avatar_url"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.avatar_url);
                if (message.verified != null && $Object.hasOwnProperty.call(message, "verified") && message.verified !== false)
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.verified);
                if (message.privacy_wall != null && $Object.hasOwnProperty.call(message, "privacy_wall") && message.privacy_wall !== 0)
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.privacy_wall);
                if (message.privacy_messages != null && $Object.hasOwnProperty.call(message, "privacy_messages") && message.privacy_messages !== 0)
                    writer.uint32(/* id 12, wireType 0 =*/96).int32(message.privacy_messages);
                if (message.privacy_photos != null && $Object.hasOwnProperty.call(message, "privacy_photos") && message.privacy_photos !== 0)
                    writer.uint32(/* id 13, wireType 0 =*/104).int32(message.privacy_photos);
                if (message.privacy_audio != null && $Object.hasOwnProperty.call(message, "privacy_audio") && message.privacy_audio !== 0)
                    writer.uint32(/* id 14, wireType 0 =*/112).int32(message.privacy_audio);
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at") && message.created_at !== "")
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.created_at);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link openvk.v1.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.User
             * @static
             * @param {openvk.v1.User.$Properties} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.User & openvk.v1.User.$Shape} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.User();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.first_name = value;
                            else
                                delete message.first_name;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.last_name = value;
                            else
                                delete message.last_name;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.screen_name = reader.stringVerify();
                            message._screen_name = "screen_name";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.status = reader.stringVerify();
                            message._status = "status";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.city = reader.stringVerify();
                            message._city = "city";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.email = reader.stringVerify();
                            message._email = "email";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.phone = reader.stringVerify();
                            message._phone = "phone";
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            message.avatar_url = reader.stringVerify();
                            message._avatar_url = "avatar_url";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.bool())
                                message.verified = value;
                            else
                                delete message.verified;
                            continue;
                        }
                    case 11: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.privacy_wall = value;
                            else
                                delete message.privacy_wall;
                            continue;
                        }
                    case 12: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.privacy_messages = value;
                            else
                                delete message.privacy_messages;
                            continue;
                        }
                    case 13: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.privacy_photos = value;
                            else
                                delete message.privacy_photos;
                            continue;
                        }
                    case 14: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.privacy_audio = value;
                            else
                                delete message.privacy_audio;
                            continue;
                        }
                    case 15: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.created_at = value;
                            else
                                delete message.created_at;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.User & openvk.v1.User.$Shape} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a User message.
             * @function verify
             * @memberof openvk.v1.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.first_name != null && $Object.hasOwnProperty.call(message, "first_name"))
                    if (!$util.isString(message.first_name))
                        return "first_name: string expected";
                if (message.last_name != null && $Object.hasOwnProperty.call(message, "last_name"))
                    if (!$util.isString(message.last_name))
                        return "last_name: string expected";
                if (message.screen_name != null && $Object.hasOwnProperty.call(message, "screen_name")) {
                    properties._screen_name = 1;
                    if (!$util.isString(message.screen_name))
                        return "screen_name: string expected";
                }
                if (message.status != null && $Object.hasOwnProperty.call(message, "status")) {
                    properties._status = 1;
                    if (!$util.isString(message.status))
                        return "status: string expected";
                }
                if (message.city != null && $Object.hasOwnProperty.call(message, "city")) {
                    properties._city = 1;
                    if (!$util.isString(message.city))
                        return "city: string expected";
                }
                if (message.email != null && $Object.hasOwnProperty.call(message, "email")) {
                    properties._email = 1;
                    if (!$util.isString(message.email))
                        return "email: string expected";
                }
                if (message.phone != null && $Object.hasOwnProperty.call(message, "phone")) {
                    properties._phone = 1;
                    if (!$util.isString(message.phone))
                        return "phone: string expected";
                }
                if (message.avatar_url != null && $Object.hasOwnProperty.call(message, "avatar_url")) {
                    properties._avatar_url = 1;
                    if (!$util.isString(message.avatar_url))
                        return "avatar_url: string expected";
                }
                if (message.verified != null && $Object.hasOwnProperty.call(message, "verified"))
                    if (typeof message.verified !== "boolean")
                        return "verified: boolean expected";
                if (message.privacy_wall != null && $Object.hasOwnProperty.call(message, "privacy_wall"))
                    if (typeof message.privacy_wall !== "number" || (message.privacy_wall | 0) !== message.privacy_wall)
                        return "privacy_wall: enum value expected";
                if (message.privacy_messages != null && $Object.hasOwnProperty.call(message, "privacy_messages"))
                    if (typeof message.privacy_messages !== "number" || (message.privacy_messages | 0) !== message.privacy_messages)
                        return "privacy_messages: enum value expected";
                if (message.privacy_photos != null && $Object.hasOwnProperty.call(message, "privacy_photos"))
                    if (typeof message.privacy_photos !== "number" || (message.privacy_photos | 0) !== message.privacy_photos)
                        return "privacy_photos: enum value expected";
                if (message.privacy_audio != null && $Object.hasOwnProperty.call(message, "privacy_audio"))
                    if (typeof message.privacy_audio !== "number" || (message.privacy_audio | 0) !== message.privacy_audio)
                        return "privacy_audio: enum value expected";
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    if (!$util.isString(message.created_at))
                        return "created_at: string expected";
                return null;
            };

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.User} User
             */
            User.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.User)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.User: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.User();
                if (object.id != null)
                    if (typeof object.id === "object" ? object.id.low || object.id.high : $Number(object.id) !== 0)
                        if ($util.Long)
                            message.id = $util.Long.fromValue(object.id, false);
                        else if (typeof object.id === "string")
                            message.id = $parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.first_name != null)
                    if (typeof object.first_name !== "string" || object.first_name.length)
                        message.first_name = $String(object.first_name);
                if (object.last_name != null)
                    if (typeof object.last_name !== "string" || object.last_name.length)
                        message.last_name = $String(object.last_name);
                if (object.screen_name != null)
                    message.screen_name = $String(object.screen_name);
                if (object.status != null)
                    message.status = $String(object.status);
                if (object.city != null)
                    message.city = $String(object.city);
                if (object.email != null)
                    message.email = $String(object.email);
                if (object.phone != null)
                    message.phone = $String(object.phone);
                if (object.avatar_url != null)
                    message.avatar_url = $String(object.avatar_url);
                if (object.verified != null)
                    if (object.verified)
                        message.verified = $Boolean(object.verified);
                if (object.privacy_wall !== 0 && (typeof object.privacy_wall !== "string" || $root.openvk.v1.PrivacyLevel[object.privacy_wall] !== 0))
                    switch (object.privacy_wall) {
                    case "PRIVACY_LEVEL_UNSPECIFIED":
                    case 0:
                        message.privacy_wall = 0;
                        break;
                    case "PRIVACY_LEVEL_EVERYONE":
                    case 1:
                        message.privacy_wall = 1;
                        break;
                    case "PRIVACY_LEVEL_FRIENDS":
                    case 2:
                        message.privacy_wall = 2;
                        break;
                    case "PRIVACY_LEVEL_NOBODY":
                    case 3:
                        message.privacy_wall = 3;
                        break;
                    default:
                        if (typeof object.privacy_wall === "number" && (object.privacy_wall | 0) === object.privacy_wall)
                            message.privacy_wall = object.privacy_wall;
                    }
                if (object.privacy_messages !== 0 && (typeof object.privacy_messages !== "string" || $root.openvk.v1.PrivacyLevel[object.privacy_messages] !== 0))
                    switch (object.privacy_messages) {
                    case "PRIVACY_LEVEL_UNSPECIFIED":
                    case 0:
                        message.privacy_messages = 0;
                        break;
                    case "PRIVACY_LEVEL_EVERYONE":
                    case 1:
                        message.privacy_messages = 1;
                        break;
                    case "PRIVACY_LEVEL_FRIENDS":
                    case 2:
                        message.privacy_messages = 2;
                        break;
                    case "PRIVACY_LEVEL_NOBODY":
                    case 3:
                        message.privacy_messages = 3;
                        break;
                    default:
                        if (typeof object.privacy_messages === "number" && (object.privacy_messages | 0) === object.privacy_messages)
                            message.privacy_messages = object.privacy_messages;
                    }
                if (object.privacy_photos !== 0 && (typeof object.privacy_photos !== "string" || $root.openvk.v1.PrivacyLevel[object.privacy_photos] !== 0))
                    switch (object.privacy_photos) {
                    case "PRIVACY_LEVEL_UNSPECIFIED":
                    case 0:
                        message.privacy_photos = 0;
                        break;
                    case "PRIVACY_LEVEL_EVERYONE":
                    case 1:
                        message.privacy_photos = 1;
                        break;
                    case "PRIVACY_LEVEL_FRIENDS":
                    case 2:
                        message.privacy_photos = 2;
                        break;
                    case "PRIVACY_LEVEL_NOBODY":
                    case 3:
                        message.privacy_photos = 3;
                        break;
                    default:
                        if (typeof object.privacy_photos === "number" && (object.privacy_photos | 0) === object.privacy_photos)
                            message.privacy_photos = object.privacy_photos;
                    }
                if (object.privacy_audio !== 0 && (typeof object.privacy_audio !== "string" || $root.openvk.v1.PrivacyLevel[object.privacy_audio] !== 0))
                    switch (object.privacy_audio) {
                    case "PRIVACY_LEVEL_UNSPECIFIED":
                    case 0:
                        message.privacy_audio = 0;
                        break;
                    case "PRIVACY_LEVEL_EVERYONE":
                    case 1:
                        message.privacy_audio = 1;
                        break;
                    case "PRIVACY_LEVEL_FRIENDS":
                    case 2:
                        message.privacy_audio = 2;
                        break;
                    case "PRIVACY_LEVEL_NOBODY":
                    case 3:
                        message.privacy_audio = 3;
                        break;
                    default:
                        if (typeof object.privacy_audio === "number" && (object.privacy_audio | 0) === object.privacy_audio)
                            message.privacy_audio = object.privacy_audio;
                    }
                if (object.created_at != null)
                    if (typeof object.created_at !== "string" || object.created_at.length)
                        message.created_at = $String(object.created_at);
                return message;
            };

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.User
             * @static
             * @param {openvk.v1.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.first_name = "";
                    object.last_name = "";
                    object.verified = false;
                    object.privacy_wall = options.enums === $String ? "PRIVACY_LEVEL_UNSPECIFIED" : 0;
                    object.privacy_messages = options.enums === $String ? "PRIVACY_LEVEL_UNSPECIFIED" : 0;
                    object.privacy_photos = options.enums === $String ? "PRIVACY_LEVEL_UNSPECIFIED" : 0;
                    object.privacy_audio = options.enums === $String ? "PRIVACY_LEVEL_UNSPECIFIED" : 0;
                    object.created_at = "";
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.id = typeof message.id === "number" ? $BigInt(message.id) : $util.Long.fromBits(message.id.low >>> 0, message.id.high >>> 0, false).toBigInt();
                    else if (typeof message.id === "number")
                        object.id = options.longs === $String ? $String(message.id) : message.id;
                    else
                        object.id = options.longs === $String ? $util.Long.prototype.toString.call(message.id) : options.longs === $Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.first_name != null && $Object.hasOwnProperty.call(message, "first_name"))
                    object.first_name = message.first_name;
                if (message.last_name != null && $Object.hasOwnProperty.call(message, "last_name"))
                    object.last_name = message.last_name;
                if (message.screen_name != null && $Object.hasOwnProperty.call(message, "screen_name"))
                    object.screen_name = message.screen_name;
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                if (message.city != null && $Object.hasOwnProperty.call(message, "city"))
                    object.city = message.city;
                if (message.email != null && $Object.hasOwnProperty.call(message, "email"))
                    object.email = message.email;
                if (message.phone != null && $Object.hasOwnProperty.call(message, "phone"))
                    object.phone = message.phone;
                if (message.avatar_url != null && $Object.hasOwnProperty.call(message, "avatar_url"))
                    object.avatar_url = message.avatar_url;
                if (message.verified != null && $Object.hasOwnProperty.call(message, "verified"))
                    object.verified = message.verified;
                if (message.privacy_wall != null && $Object.hasOwnProperty.call(message, "privacy_wall"))
                    object.privacy_wall = options.enums === $String ? $root.openvk.v1.PrivacyLevel[message.privacy_wall] === $undefined ? message.privacy_wall : $root.openvk.v1.PrivacyLevel[message.privacy_wall] : message.privacy_wall;
                if (message.privacy_messages != null && $Object.hasOwnProperty.call(message, "privacy_messages"))
                    object.privacy_messages = options.enums === $String ? $root.openvk.v1.PrivacyLevel[message.privacy_messages] === $undefined ? message.privacy_messages : $root.openvk.v1.PrivacyLevel[message.privacy_messages] : message.privacy_messages;
                if (message.privacy_photos != null && $Object.hasOwnProperty.call(message, "privacy_photos"))
                    object.privacy_photos = options.enums === $String ? $root.openvk.v1.PrivacyLevel[message.privacy_photos] === $undefined ? message.privacy_photos : $root.openvk.v1.PrivacyLevel[message.privacy_photos] : message.privacy_photos;
                if (message.privacy_audio != null && $Object.hasOwnProperty.call(message, "privacy_audio"))
                    object.privacy_audio = options.enums === $String ? $root.openvk.v1.PrivacyLevel[message.privacy_audio] === $undefined ? message.privacy_audio : $root.openvk.v1.PrivacyLevel[message.privacy_audio] : message.privacy_audio;
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    object.created_at = message.created_at;
                return object;
            };

            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof openvk.v1.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function() {
                return User.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for User
             * @function getTypeUrl
             * @memberof openvk.v1.User
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            User.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.User";
            };

            return User;
        })();

        v1.UserList = (function() {

            /**
             * Properties of a UserList.
             * @typedef {Object} openvk.v1.UserList.$Properties
             * @property {Array.<openvk.v1.User.$Properties>|null} [users] UserList users
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UserList.
             * @memberof openvk.v1
             * @interface IUserList
             * @augments openvk.v1.UserList.$Properties
             * @deprecated Use openvk.v1.UserList.$Properties instead.
             */

            /**
             * Shape of a UserList.
             * @typedef {openvk.v1.UserList.$Properties} openvk.v1.UserList.$Shape
             */

            /**
             * Constructs a new UserList.
             * @memberof openvk.v1
             * @classdesc Represents a UserList.
             * @constructor
             * @param {openvk.v1.UserList.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UserList = function (properties) {
                this.users = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UserList users.
             * @member {Array.<openvk.v1.User.$Properties>} users
             * @memberof openvk.v1.UserList
             * @instance
             */
            UserList.prototype.users = $util.emptyArray;

            /**
             * Creates a new UserList instance using the specified properties.
             * @function create
             * @memberof openvk.v1.UserList
             * @static
             * @param {openvk.v1.UserList.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.UserList} UserList instance
             * @type {{
             *   (properties: openvk.v1.UserList.$Shape): openvk.v1.UserList & openvk.v1.UserList.$Shape;
             *   (properties?: openvk.v1.UserList.$Properties): openvk.v1.UserList;
             * }}
             */
            UserList.create = function(properties) {
                return new UserList(properties);
            };

            /**
             * Encodes the specified UserList message. Does not implicitly {@link openvk.v1.UserList.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.UserList
             * @static
             * @param {openvk.v1.UserList.$Properties} message UserList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserList.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.users != null && message.users.length)
                    for (let i = 0; i < message.users.length; ++i)
                        $root.openvk.v1.User.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UserList message, length delimited. Does not implicitly {@link openvk.v1.UserList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.UserList
             * @static
             * @param {openvk.v1.UserList.$Properties} message UserList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserList.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UserList message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.UserList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.UserList & openvk.v1.UserList.$Shape} UserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserList.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.UserList();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.users && message.users.length))
                                message.users = [];
                            message.users.push($root.openvk.v1.User.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UserList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.UserList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.UserList & openvk.v1.UserList.$Shape} UserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserList.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserList message.
             * @function verify
             * @memberof openvk.v1.UserList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserList.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.users != null && $Object.hasOwnProperty.call(message, "users")) {
                    if (!$Array.isArray(message.users))
                        return "users: array expected";
                    for (let i = 0; i < message.users.length; ++i) {
                        let error = $root.openvk.v1.User.verify(message.users[i], _depth + 1);
                        if (error)
                            return "users." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a UserList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.UserList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.UserList} UserList
             */
            UserList.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.UserList)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.UserList: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.UserList();
                if (object.users) {
                    if (!$Array.isArray(object.users))
                        throw $TypeError(".openvk.v1.UserList.users: array expected");
                    message.users = $Array(object.users.length);
                    for (let i = 0; i < object.users.length; ++i) {
                        if (!$util.isObject(object.users[i]))
                            throw $TypeError(".openvk.v1.UserList.users: object expected");
                        message.users[i] = $root.openvk.v1.User.fromObject(object.users[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a UserList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.UserList
             * @static
             * @param {openvk.v1.UserList} message UserList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserList.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.users = [];
                if (message.users && message.users.length) {
                    object.users = $Array(message.users.length);
                    for (let j = 0; j < message.users.length; ++j)
                        object.users[j] = $root.openvk.v1.User.toObject(message.users[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this UserList to JSON.
             * @function toJSON
             * @memberof openvk.v1.UserList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserList.prototype.toJSON = function() {
                return UserList.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UserList
             * @function getTypeUrl
             * @memberof openvk.v1.UserList
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UserList.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.UserList";
            };

            return UserList;
        })();

        v1.UpdateAccount = (function() {

            /**
             * Properties of an UpdateAccount.
             * @typedef {Object} openvk.v1.UpdateAccount.$Properties
             * @property {string|null} [first_name] UpdateAccount first_name
             * @property {string|null} [last_name] UpdateAccount last_name
             * @property {string|null} [email] UpdateAccount email
             * @property {string|null} [phone] UpdateAccount phone
             * @property {string|null} [city] UpdateAccount city
             * @property {openvk.v1.PrivacyLevel|null} [privacy_wall] UpdateAccount privacy_wall
             * @property {openvk.v1.PrivacyLevel|null} [privacy_messages] UpdateAccount privacy_messages
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an UpdateAccount.
             * @memberof openvk.v1
             * @interface IUpdateAccount
             * @augments openvk.v1.UpdateAccount.$Properties
             * @deprecated Use openvk.v1.UpdateAccount.$Properties instead.
             */

            /**
             * Shape of an UpdateAccount.
             * @typedef {openvk.v1.UpdateAccount.$Properties} openvk.v1.UpdateAccount.$Shape
             */

            /**
             * Constructs a new UpdateAccount.
             * @memberof openvk.v1
             * @classdesc Represents an UpdateAccount.
             * @constructor
             * @param {openvk.v1.UpdateAccount.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const UpdateAccount = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UpdateAccount first_name.
             * @member {string} first_name
             * @memberof openvk.v1.UpdateAccount
             * @instance
             */
            UpdateAccount.prototype.first_name = "";

            /**
             * UpdateAccount last_name.
             * @member {string} last_name
             * @memberof openvk.v1.UpdateAccount
             * @instance
             */
            UpdateAccount.prototype.last_name = "";

            /**
             * UpdateAccount email.
             * @member {string|null|undefined} email
             * @memberof openvk.v1.UpdateAccount
             * @instance
             */
            UpdateAccount.prototype.email = null;

            /**
             * UpdateAccount phone.
             * @member {string|null|undefined} phone
             * @memberof openvk.v1.UpdateAccount
             * @instance
             */
            UpdateAccount.prototype.phone = null;

            /**
             * UpdateAccount city.
             * @member {string|null|undefined} city
             * @memberof openvk.v1.UpdateAccount
             * @instance
             */
            UpdateAccount.prototype.city = null;

            /**
             * UpdateAccount privacy_wall.
             * @member {openvk.v1.PrivacyLevel} privacy_wall
             * @memberof openvk.v1.UpdateAccount
             * @instance
             */
            UpdateAccount.prototype.privacy_wall = 0;

            /**
             * UpdateAccount privacy_messages.
             * @member {openvk.v1.PrivacyLevel} privacy_messages
             * @memberof openvk.v1.UpdateAccount
             * @instance
             */
            UpdateAccount.prototype.privacy_messages = 0;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UpdateAccount.prototype, "_email", {
                get: $util.oneOfGetter($oneOfFields = ["email"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UpdateAccount.prototype, "_phone", {
                get: $util.oneOfGetter($oneOfFields = ["phone"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UpdateAccount.prototype, "_city", {
                get: $util.oneOfGetter($oneOfFields = ["city"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new UpdateAccount instance using the specified properties.
             * @function create
             * @memberof openvk.v1.UpdateAccount
             * @static
             * @param {openvk.v1.UpdateAccount.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.UpdateAccount} UpdateAccount instance
             * @type {{
             *   (properties: openvk.v1.UpdateAccount.$Shape): openvk.v1.UpdateAccount & openvk.v1.UpdateAccount.$Shape;
             *   (properties?: openvk.v1.UpdateAccount.$Properties): openvk.v1.UpdateAccount;
             * }}
             */
            UpdateAccount.create = function(properties) {
                return new UpdateAccount(properties);
            };

            /**
             * Encodes the specified UpdateAccount message. Does not implicitly {@link openvk.v1.UpdateAccount.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.UpdateAccount
             * @static
             * @param {openvk.v1.UpdateAccount.$Properties} message UpdateAccount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateAccount.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.first_name != null && $Object.hasOwnProperty.call(message, "first_name") && message.first_name !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.first_name);
                if (message.last_name != null && $Object.hasOwnProperty.call(message, "last_name") && message.last_name !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.last_name);
                if (message.email != null && $Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                if (message.phone != null && $Object.hasOwnProperty.call(message, "phone"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.phone);
                if (message.city != null && $Object.hasOwnProperty.call(message, "city"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.city);
                if (message.privacy_wall != null && $Object.hasOwnProperty.call(message, "privacy_wall") && message.privacy_wall !== 0)
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.privacy_wall);
                if (message.privacy_messages != null && $Object.hasOwnProperty.call(message, "privacy_messages") && message.privacy_messages !== 0)
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.privacy_messages);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UpdateAccount message, length delimited. Does not implicitly {@link openvk.v1.UpdateAccount.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.UpdateAccount
             * @static
             * @param {openvk.v1.UpdateAccount.$Properties} message UpdateAccount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateAccount.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an UpdateAccount message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.UpdateAccount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.UpdateAccount & openvk.v1.UpdateAccount.$Shape} UpdateAccount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateAccount.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.UpdateAccount();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.first_name = value;
                            else
                                delete message.first_name;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.last_name = value;
                            else
                                delete message.last_name;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.email = reader.stringVerify();
                            message._email = "email";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.phone = reader.stringVerify();
                            message._phone = "phone";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.city = reader.stringVerify();
                            message._city = "city";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.privacy_wall = value;
                            else
                                delete message.privacy_wall;
                            continue;
                        }
                    case 7: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.privacy_messages = value;
                            else
                                delete message.privacy_messages;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an UpdateAccount message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.UpdateAccount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.UpdateAccount & openvk.v1.UpdateAccount.$Shape} UpdateAccount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateAccount.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateAccount message.
             * @function verify
             * @memberof openvk.v1.UpdateAccount
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateAccount.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.first_name != null && $Object.hasOwnProperty.call(message, "first_name"))
                    if (!$util.isString(message.first_name))
                        return "first_name: string expected";
                if (message.last_name != null && $Object.hasOwnProperty.call(message, "last_name"))
                    if (!$util.isString(message.last_name))
                        return "last_name: string expected";
                if (message.email != null && $Object.hasOwnProperty.call(message, "email")) {
                    properties._email = 1;
                    if (!$util.isString(message.email))
                        return "email: string expected";
                }
                if (message.phone != null && $Object.hasOwnProperty.call(message, "phone")) {
                    properties._phone = 1;
                    if (!$util.isString(message.phone))
                        return "phone: string expected";
                }
                if (message.city != null && $Object.hasOwnProperty.call(message, "city")) {
                    properties._city = 1;
                    if (!$util.isString(message.city))
                        return "city: string expected";
                }
                if (message.privacy_wall != null && $Object.hasOwnProperty.call(message, "privacy_wall"))
                    if (typeof message.privacy_wall !== "number" || (message.privacy_wall | 0) !== message.privacy_wall)
                        return "privacy_wall: enum value expected";
                if (message.privacy_messages != null && $Object.hasOwnProperty.call(message, "privacy_messages"))
                    if (typeof message.privacy_messages !== "number" || (message.privacy_messages | 0) !== message.privacy_messages)
                        return "privacy_messages: enum value expected";
                return null;
            };

            /**
             * Creates an UpdateAccount message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.UpdateAccount
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.UpdateAccount} UpdateAccount
             */
            UpdateAccount.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.UpdateAccount)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.UpdateAccount: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.UpdateAccount();
                if (object.first_name != null)
                    if (typeof object.first_name !== "string" || object.first_name.length)
                        message.first_name = $String(object.first_name);
                if (object.last_name != null)
                    if (typeof object.last_name !== "string" || object.last_name.length)
                        message.last_name = $String(object.last_name);
                if (object.email != null)
                    message.email = $String(object.email);
                if (object.phone != null)
                    message.phone = $String(object.phone);
                if (object.city != null)
                    message.city = $String(object.city);
                if (object.privacy_wall !== 0 && (typeof object.privacy_wall !== "string" || $root.openvk.v1.PrivacyLevel[object.privacy_wall] !== 0))
                    switch (object.privacy_wall) {
                    case "PRIVACY_LEVEL_UNSPECIFIED":
                    case 0:
                        message.privacy_wall = 0;
                        break;
                    case "PRIVACY_LEVEL_EVERYONE":
                    case 1:
                        message.privacy_wall = 1;
                        break;
                    case "PRIVACY_LEVEL_FRIENDS":
                    case 2:
                        message.privacy_wall = 2;
                        break;
                    case "PRIVACY_LEVEL_NOBODY":
                    case 3:
                        message.privacy_wall = 3;
                        break;
                    default:
                        if (typeof object.privacy_wall === "number" && (object.privacy_wall | 0) === object.privacy_wall)
                            message.privacy_wall = object.privacy_wall;
                    }
                if (object.privacy_messages !== 0 && (typeof object.privacy_messages !== "string" || $root.openvk.v1.PrivacyLevel[object.privacy_messages] !== 0))
                    switch (object.privacy_messages) {
                    case "PRIVACY_LEVEL_UNSPECIFIED":
                    case 0:
                        message.privacy_messages = 0;
                        break;
                    case "PRIVACY_LEVEL_EVERYONE":
                    case 1:
                        message.privacy_messages = 1;
                        break;
                    case "PRIVACY_LEVEL_FRIENDS":
                    case 2:
                        message.privacy_messages = 2;
                        break;
                    case "PRIVACY_LEVEL_NOBODY":
                    case 3:
                        message.privacy_messages = 3;
                        break;
                    default:
                        if (typeof object.privacy_messages === "number" && (object.privacy_messages | 0) === object.privacy_messages)
                            message.privacy_messages = object.privacy_messages;
                    }
                return message;
            };

            /**
             * Creates a plain object from an UpdateAccount message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.UpdateAccount
             * @static
             * @param {openvk.v1.UpdateAccount} message UpdateAccount
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateAccount.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.first_name = "";
                    object.last_name = "";
                    object.privacy_wall = options.enums === $String ? "PRIVACY_LEVEL_UNSPECIFIED" : 0;
                    object.privacy_messages = options.enums === $String ? "PRIVACY_LEVEL_UNSPECIFIED" : 0;
                }
                if (message.first_name != null && $Object.hasOwnProperty.call(message, "first_name"))
                    object.first_name = message.first_name;
                if (message.last_name != null && $Object.hasOwnProperty.call(message, "last_name"))
                    object.last_name = message.last_name;
                if (message.email != null && $Object.hasOwnProperty.call(message, "email"))
                    object.email = message.email;
                if (message.phone != null && $Object.hasOwnProperty.call(message, "phone"))
                    object.phone = message.phone;
                if (message.city != null && $Object.hasOwnProperty.call(message, "city"))
                    object.city = message.city;
                if (message.privacy_wall != null && $Object.hasOwnProperty.call(message, "privacy_wall"))
                    object.privacy_wall = options.enums === $String ? $root.openvk.v1.PrivacyLevel[message.privacy_wall] === $undefined ? message.privacy_wall : $root.openvk.v1.PrivacyLevel[message.privacy_wall] : message.privacy_wall;
                if (message.privacy_messages != null && $Object.hasOwnProperty.call(message, "privacy_messages"))
                    object.privacy_messages = options.enums === $String ? $root.openvk.v1.PrivacyLevel[message.privacy_messages] === $undefined ? message.privacy_messages : $root.openvk.v1.PrivacyLevel[message.privacy_messages] : message.privacy_messages;
                return object;
            };

            /**
             * Converts this UpdateAccount to JSON.
             * @function toJSON
             * @memberof openvk.v1.UpdateAccount
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateAccount.prototype.toJSON = function() {
                return UpdateAccount.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UpdateAccount
             * @function getTypeUrl
             * @memberof openvk.v1.UpdateAccount
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UpdateAccount.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.UpdateAccount";
            };

            return UpdateAccount;
        })();

        v1.WallPost = (function() {

            /**
             * Properties of a WallPost.
             * @typedef {Object} openvk.v1.WallPost.$Properties
             * @property {number|Long|null} [id] WallPost id
             * @property {number|Long|null} [target_id] WallPost target_id
             * @property {number|Long|null} [author_id] WallPost author_id
             * @property {openvk.v1.User.$Properties|null} [author] WallPost author
             * @property {openvk.v1.User.$Properties|null} [target] WallPost target
             * @property {string|null} [content] WallPost content
             * @property {string|null} [permalink] WallPost permalink
             * @property {string|null} [created_at] WallPost created_at
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a WallPost.
             * @memberof openvk.v1
             * @interface IWallPost
             * @augments openvk.v1.WallPost.$Properties
             * @deprecated Use openvk.v1.WallPost.$Properties instead.
             */

            /**
             * Shape of a WallPost.
             * @typedef {openvk.v1.WallPost.$Properties} openvk.v1.WallPost.$Shape
             */

            /**
             * Constructs a new WallPost.
             * @memberof openvk.v1
             * @classdesc Represents a WallPost.
             * @constructor
             * @param {openvk.v1.WallPost.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const WallPost = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * WallPost id.
             * @member {number|Long} id
             * @memberof openvk.v1.WallPost
             * @instance
             */
            WallPost.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * WallPost target_id.
             * @member {number|Long} target_id
             * @memberof openvk.v1.WallPost
             * @instance
             */
            WallPost.prototype.target_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * WallPost author_id.
             * @member {number|Long} author_id
             * @memberof openvk.v1.WallPost
             * @instance
             */
            WallPost.prototype.author_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * WallPost author.
             * @member {openvk.v1.User.$Properties|null|undefined} author
             * @memberof openvk.v1.WallPost
             * @instance
             */
            WallPost.prototype.author = null;

            /**
             * WallPost target.
             * @member {openvk.v1.User.$Properties|null|undefined} target
             * @memberof openvk.v1.WallPost
             * @instance
             */
            WallPost.prototype.target = null;

            /**
             * WallPost content.
             * @member {string} content
             * @memberof openvk.v1.WallPost
             * @instance
             */
            WallPost.prototype.content = "";

            /**
             * WallPost permalink.
             * @member {string} permalink
             * @memberof openvk.v1.WallPost
             * @instance
             */
            WallPost.prototype.permalink = "";

            /**
             * WallPost created_at.
             * @member {string} created_at
             * @memberof openvk.v1.WallPost
             * @instance
             */
            WallPost.prototype.created_at = "";

            /**
             * Creates a new WallPost instance using the specified properties.
             * @function create
             * @memberof openvk.v1.WallPost
             * @static
             * @param {openvk.v1.WallPost.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.WallPost} WallPost instance
             * @type {{
             *   (properties: openvk.v1.WallPost.$Shape): openvk.v1.WallPost & openvk.v1.WallPost.$Shape;
             *   (properties?: openvk.v1.WallPost.$Properties): openvk.v1.WallPost;
             * }}
             */
            WallPost.create = function(properties) {
                return new WallPost(properties);
            };

            /**
             * Encodes the specified WallPost message. Does not implicitly {@link openvk.v1.WallPost.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.WallPost
             * @static
             * @param {openvk.v1.WallPost.$Properties} message WallPost message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WallPost.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && (typeof message.id === "object" ? message.id.low || message.id.high : message.id !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.target_id != null && $Object.hasOwnProperty.call(message, "target_id") && (typeof message.target_id === "object" ? message.target_id.low || message.target_id.high : message.target_id !== 0))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.target_id);
                if (message.author_id != null && $Object.hasOwnProperty.call(message, "author_id") && (typeof message.author_id === "object" ? message.author_id.low || message.author_id.high : message.author_id !== 0))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.author_id);
                if (message.author != null && $Object.hasOwnProperty.call(message, "author"))
                    $root.openvk.v1.User.encode(message.author, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.target != null && $Object.hasOwnProperty.call(message, "target"))
                    $root.openvk.v1.User.encode(message.target, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                if (message.content != null && $Object.hasOwnProperty.call(message, "content") && message.content !== "")
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.content);
                if (message.permalink != null && $Object.hasOwnProperty.call(message, "permalink") && message.permalink !== "")
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.permalink);
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at") && message.created_at !== "")
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.created_at);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified WallPost message, length delimited. Does not implicitly {@link openvk.v1.WallPost.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.WallPost
             * @static
             * @param {openvk.v1.WallPost.$Properties} message WallPost message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WallPost.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a WallPost message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.WallPost
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.WallPost & openvk.v1.WallPost.$Shape} WallPost
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WallPost.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.WallPost();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.target_id = value;
                            else
                                delete message.target_id;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.author_id = value;
                            else
                                delete message.author_id;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.author = $root.openvk.v1.User.decode(reader, reader.uint32(), $undefined, _depth + 1, message.author);
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.target = $root.openvk.v1.User.decode(reader, reader.uint32(), $undefined, _depth + 1, message.target);
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.content = value;
                            else
                                delete message.content;
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.permalink = value;
                            else
                                delete message.permalink;
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.created_at = value;
                            else
                                delete message.created_at;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a WallPost message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.WallPost
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.WallPost & openvk.v1.WallPost.$Shape} WallPost
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WallPost.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WallPost message.
             * @function verify
             * @memberof openvk.v1.WallPost
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WallPost.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.target_id != null && $Object.hasOwnProperty.call(message, "target_id"))
                    if (!$util.isInteger(message.target_id) && !(message.target_id && $util.isInteger(message.target_id.low) && $util.isInteger(message.target_id.high)))
                        return "target_id: integer|Long expected";
                if (message.author_id != null && $Object.hasOwnProperty.call(message, "author_id"))
                    if (!$util.isInteger(message.author_id) && !(message.author_id && $util.isInteger(message.author_id.low) && $util.isInteger(message.author_id.high)))
                        return "author_id: integer|Long expected";
                if (message.author != null && $Object.hasOwnProperty.call(message, "author")) {
                    let error = $root.openvk.v1.User.verify(message.author, _depth + 1);
                    if (error)
                        return "author." + error;
                }
                if (message.target != null && $Object.hasOwnProperty.call(message, "target")) {
                    let error = $root.openvk.v1.User.verify(message.target, _depth + 1);
                    if (error)
                        return "target." + error;
                }
                if (message.content != null && $Object.hasOwnProperty.call(message, "content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.permalink != null && $Object.hasOwnProperty.call(message, "permalink"))
                    if (!$util.isString(message.permalink))
                        return "permalink: string expected";
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    if (!$util.isString(message.created_at))
                        return "created_at: string expected";
                return null;
            };

            /**
             * Creates a WallPost message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.WallPost
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.WallPost} WallPost
             */
            WallPost.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.WallPost)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.WallPost: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.WallPost();
                if (object.id != null)
                    if (typeof object.id === "object" ? object.id.low || object.id.high : $Number(object.id) !== 0)
                        if ($util.Long)
                            message.id = $util.Long.fromValue(object.id, false);
                        else if (typeof object.id === "string")
                            message.id = $parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.target_id != null)
                    if (typeof object.target_id === "object" ? object.target_id.low || object.target_id.high : $Number(object.target_id) !== 0)
                        if ($util.Long)
                            message.target_id = $util.Long.fromValue(object.target_id, false);
                        else if (typeof object.target_id === "string")
                            message.target_id = $parseInt(object.target_id, 10);
                        else if (typeof object.target_id === "number")
                            message.target_id = object.target_id;
                        else if (typeof object.target_id === "object")
                            message.target_id = new $util.LongBits(object.target_id.low >>> 0, object.target_id.high >>> 0).toNumber();
                if (object.author_id != null)
                    if (typeof object.author_id === "object" ? object.author_id.low || object.author_id.high : $Number(object.author_id) !== 0)
                        if ($util.Long)
                            message.author_id = $util.Long.fromValue(object.author_id, false);
                        else if (typeof object.author_id === "string")
                            message.author_id = $parseInt(object.author_id, 10);
                        else if (typeof object.author_id === "number")
                            message.author_id = object.author_id;
                        else if (typeof object.author_id === "object")
                            message.author_id = new $util.LongBits(object.author_id.low >>> 0, object.author_id.high >>> 0).toNumber();
                if (object.author != null) {
                    if (!$util.isObject(object.author))
                        throw $TypeError(".openvk.v1.WallPost.author: object expected");
                    message.author = $root.openvk.v1.User.fromObject(object.author, _depth + 1);
                }
                if (object.target != null) {
                    if (!$util.isObject(object.target))
                        throw $TypeError(".openvk.v1.WallPost.target: object expected");
                    message.target = $root.openvk.v1.User.fromObject(object.target, _depth + 1);
                }
                if (object.content != null)
                    if (typeof object.content !== "string" || object.content.length)
                        message.content = $String(object.content);
                if (object.permalink != null)
                    if (typeof object.permalink !== "string" || object.permalink.length)
                        message.permalink = $String(object.permalink);
                if (object.created_at != null)
                    if (typeof object.created_at !== "string" || object.created_at.length)
                        message.created_at = $String(object.created_at);
                return message;
            };

            /**
             * Creates a plain object from a WallPost message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.WallPost
             * @static
             * @param {openvk.v1.WallPost} message WallPost
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WallPost.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.target_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.target_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.author_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.author_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.author = null;
                    object.target = null;
                    object.content = "";
                    object.permalink = "";
                    object.created_at = "";
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.id = typeof message.id === "number" ? $BigInt(message.id) : $util.Long.fromBits(message.id.low >>> 0, message.id.high >>> 0, false).toBigInt();
                    else if (typeof message.id === "number")
                        object.id = options.longs === $String ? $String(message.id) : message.id;
                    else
                        object.id = options.longs === $String ? $util.Long.prototype.toString.call(message.id) : options.longs === $Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.target_id != null && $Object.hasOwnProperty.call(message, "target_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.target_id = typeof message.target_id === "number" ? $BigInt(message.target_id) : $util.Long.fromBits(message.target_id.low >>> 0, message.target_id.high >>> 0, false).toBigInt();
                    else if (typeof message.target_id === "number")
                        object.target_id = options.longs === $String ? $String(message.target_id) : message.target_id;
                    else
                        object.target_id = options.longs === $String ? $util.Long.prototype.toString.call(message.target_id) : options.longs === $Number ? new $util.LongBits(message.target_id.low >>> 0, message.target_id.high >>> 0).toNumber() : message.target_id;
                if (message.author_id != null && $Object.hasOwnProperty.call(message, "author_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.author_id = typeof message.author_id === "number" ? $BigInt(message.author_id) : $util.Long.fromBits(message.author_id.low >>> 0, message.author_id.high >>> 0, false).toBigInt();
                    else if (typeof message.author_id === "number")
                        object.author_id = options.longs === $String ? $String(message.author_id) : message.author_id;
                    else
                        object.author_id = options.longs === $String ? $util.Long.prototype.toString.call(message.author_id) : options.longs === $Number ? new $util.LongBits(message.author_id.low >>> 0, message.author_id.high >>> 0).toNumber() : message.author_id;
                if (message.author != null && $Object.hasOwnProperty.call(message, "author"))
                    object.author = $root.openvk.v1.User.toObject(message.author, options, _depth + 1);
                if (message.target != null && $Object.hasOwnProperty.call(message, "target"))
                    object.target = $root.openvk.v1.User.toObject(message.target, options, _depth + 1);
                if (message.content != null && $Object.hasOwnProperty.call(message, "content"))
                    object.content = message.content;
                if (message.permalink != null && $Object.hasOwnProperty.call(message, "permalink"))
                    object.permalink = message.permalink;
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    object.created_at = message.created_at;
                return object;
            };

            /**
             * Converts this WallPost to JSON.
             * @function toJSON
             * @memberof openvk.v1.WallPost
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WallPost.prototype.toJSON = function() {
                return WallPost.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for WallPost
             * @function getTypeUrl
             * @memberof openvk.v1.WallPost
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            WallPost.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.WallPost";
            };

            return WallPost;
        })();

        v1.WallPostList = (function() {

            /**
             * Properties of a WallPostList.
             * @typedef {Object} openvk.v1.WallPostList.$Properties
             * @property {Array.<openvk.v1.WallPost.$Properties>|null} [posts] WallPostList posts
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a WallPostList.
             * @memberof openvk.v1
             * @interface IWallPostList
             * @augments openvk.v1.WallPostList.$Properties
             * @deprecated Use openvk.v1.WallPostList.$Properties instead.
             */

            /**
             * Shape of a WallPostList.
             * @typedef {openvk.v1.WallPostList.$Properties} openvk.v1.WallPostList.$Shape
             */

            /**
             * Constructs a new WallPostList.
             * @memberof openvk.v1
             * @classdesc Represents a WallPostList.
             * @constructor
             * @param {openvk.v1.WallPostList.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const WallPostList = function (properties) {
                this.posts = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * WallPostList posts.
             * @member {Array.<openvk.v1.WallPost.$Properties>} posts
             * @memberof openvk.v1.WallPostList
             * @instance
             */
            WallPostList.prototype.posts = $util.emptyArray;

            /**
             * Creates a new WallPostList instance using the specified properties.
             * @function create
             * @memberof openvk.v1.WallPostList
             * @static
             * @param {openvk.v1.WallPostList.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.WallPostList} WallPostList instance
             * @type {{
             *   (properties: openvk.v1.WallPostList.$Shape): openvk.v1.WallPostList & openvk.v1.WallPostList.$Shape;
             *   (properties?: openvk.v1.WallPostList.$Properties): openvk.v1.WallPostList;
             * }}
             */
            WallPostList.create = function(properties) {
                return new WallPostList(properties);
            };

            /**
             * Encodes the specified WallPostList message. Does not implicitly {@link openvk.v1.WallPostList.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.WallPostList
             * @static
             * @param {openvk.v1.WallPostList.$Properties} message WallPostList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WallPostList.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.posts != null && message.posts.length)
                    for (let i = 0; i < message.posts.length; ++i)
                        $root.openvk.v1.WallPost.encode(message.posts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified WallPostList message, length delimited. Does not implicitly {@link openvk.v1.WallPostList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.WallPostList
             * @static
             * @param {openvk.v1.WallPostList.$Properties} message WallPostList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WallPostList.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a WallPostList message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.WallPostList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.WallPostList & openvk.v1.WallPostList.$Shape} WallPostList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WallPostList.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.WallPostList();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.posts && message.posts.length))
                                message.posts = [];
                            message.posts.push($root.openvk.v1.WallPost.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a WallPostList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.WallPostList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.WallPostList & openvk.v1.WallPostList.$Shape} WallPostList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WallPostList.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WallPostList message.
             * @function verify
             * @memberof openvk.v1.WallPostList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WallPostList.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.posts != null && $Object.hasOwnProperty.call(message, "posts")) {
                    if (!$Array.isArray(message.posts))
                        return "posts: array expected";
                    for (let i = 0; i < message.posts.length; ++i) {
                        let error = $root.openvk.v1.WallPost.verify(message.posts[i], _depth + 1);
                        if (error)
                            return "posts." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a WallPostList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.WallPostList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.WallPostList} WallPostList
             */
            WallPostList.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.WallPostList)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.WallPostList: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.WallPostList();
                if (object.posts) {
                    if (!$Array.isArray(object.posts))
                        throw $TypeError(".openvk.v1.WallPostList.posts: array expected");
                    message.posts = $Array(object.posts.length);
                    for (let i = 0; i < object.posts.length; ++i) {
                        if (!$util.isObject(object.posts[i]))
                            throw $TypeError(".openvk.v1.WallPostList.posts: object expected");
                        message.posts[i] = $root.openvk.v1.WallPost.fromObject(object.posts[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a WallPostList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.WallPostList
             * @static
             * @param {openvk.v1.WallPostList} message WallPostList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WallPostList.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.posts = [];
                if (message.posts && message.posts.length) {
                    object.posts = $Array(message.posts.length);
                    for (let j = 0; j < message.posts.length; ++j)
                        object.posts[j] = $root.openvk.v1.WallPost.toObject(message.posts[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this WallPostList to JSON.
             * @function toJSON
             * @memberof openvk.v1.WallPostList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WallPostList.prototype.toJSON = function() {
                return WallPostList.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for WallPostList
             * @function getTypeUrl
             * @memberof openvk.v1.WallPostList
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            WallPostList.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.WallPostList";
            };

            return WallPostList;
        })();

        v1.WriteWall = (function() {

            /**
             * Properties of a WriteWall.
             * @typedef {Object} openvk.v1.WriteWall.$Properties
             * @property {string|null} [content] WriteWall content
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a WriteWall.
             * @memberof openvk.v1
             * @interface IWriteWall
             * @augments openvk.v1.WriteWall.$Properties
             * @deprecated Use openvk.v1.WriteWall.$Properties instead.
             */

            /**
             * Shape of a WriteWall.
             * @typedef {openvk.v1.WriteWall.$Properties} openvk.v1.WriteWall.$Shape
             */

            /**
             * Constructs a new WriteWall.
             * @memberof openvk.v1
             * @classdesc Represents a WriteWall.
             * @constructor
             * @param {openvk.v1.WriteWall.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const WriteWall = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * WriteWall content.
             * @member {string} content
             * @memberof openvk.v1.WriteWall
             * @instance
             */
            WriteWall.prototype.content = "";

            /**
             * Creates a new WriteWall instance using the specified properties.
             * @function create
             * @memberof openvk.v1.WriteWall
             * @static
             * @param {openvk.v1.WriteWall.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.WriteWall} WriteWall instance
             * @type {{
             *   (properties: openvk.v1.WriteWall.$Shape): openvk.v1.WriteWall & openvk.v1.WriteWall.$Shape;
             *   (properties?: openvk.v1.WriteWall.$Properties): openvk.v1.WriteWall;
             * }}
             */
            WriteWall.create = function(properties) {
                return new WriteWall(properties);
            };

            /**
             * Encodes the specified WriteWall message. Does not implicitly {@link openvk.v1.WriteWall.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.WriteWall
             * @static
             * @param {openvk.v1.WriteWall.$Properties} message WriteWall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WriteWall.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.content != null && $Object.hasOwnProperty.call(message, "content") && message.content !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified WriteWall message, length delimited. Does not implicitly {@link openvk.v1.WriteWall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.WriteWall
             * @static
             * @param {openvk.v1.WriteWall.$Properties} message WriteWall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WriteWall.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a WriteWall message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.WriteWall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.WriteWall & openvk.v1.WriteWall.$Shape} WriteWall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WriteWall.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.WriteWall();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.content = value;
                            else
                                delete message.content;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a WriteWall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.WriteWall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.WriteWall & openvk.v1.WriteWall.$Shape} WriteWall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WriteWall.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WriteWall message.
             * @function verify
             * @memberof openvk.v1.WriteWall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WriteWall.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.content != null && $Object.hasOwnProperty.call(message, "content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a WriteWall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.WriteWall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.WriteWall} WriteWall
             */
            WriteWall.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.WriteWall)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.WriteWall: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.WriteWall();
                if (object.content != null)
                    if (typeof object.content !== "string" || object.content.length)
                        message.content = $String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a WriteWall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.WriteWall
             * @static
             * @param {openvk.v1.WriteWall} message WriteWall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WriteWall.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.content = "";
                if (message.content != null && $Object.hasOwnProperty.call(message, "content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this WriteWall to JSON.
             * @function toJSON
             * @memberof openvk.v1.WriteWall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WriteWall.prototype.toJSON = function() {
                return WriteWall.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for WriteWall
             * @function getTypeUrl
             * @memberof openvk.v1.WriteWall
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            WriteWall.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.WriteWall";
            };

            return WriteWall;
        })();

        v1.Message = (function() {

            /**
             * Properties of a Message.
             * @typedef {Object} openvk.v1.Message.$Properties
             * @property {number|Long|null} [id] Message id
             * @property {number|Long|null} [peer_id] Message peer_id
             * @property {number|Long|null} [author_id] Message author_id
             * @property {string|null} [text] Message text
             * @property {string|null} [created_at] Message created_at
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Message.
             * @memberof openvk.v1
             * @interface IMessage
             * @augments openvk.v1.Message.$Properties
             * @deprecated Use openvk.v1.Message.$Properties instead.
             */

            /**
             * Shape of a Message.
             * @typedef {openvk.v1.Message.$Properties} openvk.v1.Message.$Shape
             */

            /**
             * Constructs a new Message.
             * @memberof openvk.v1
             * @classdesc Represents a Message.
             * @constructor
             * @param {openvk.v1.Message.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Message = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Message id.
             * @member {number|Long} id
             * @memberof openvk.v1.Message
             * @instance
             */
            Message.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Message peer_id.
             * @member {number|Long} peer_id
             * @memberof openvk.v1.Message
             * @instance
             */
            Message.prototype.peer_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Message author_id.
             * @member {number|Long} author_id
             * @memberof openvk.v1.Message
             * @instance
             */
            Message.prototype.author_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Message text.
             * @member {string} text
             * @memberof openvk.v1.Message
             * @instance
             */
            Message.prototype.text = "";

            /**
             * Message created_at.
             * @member {string} created_at
             * @memberof openvk.v1.Message
             * @instance
             */
            Message.prototype.created_at = "";

            /**
             * Creates a new Message instance using the specified properties.
             * @function create
             * @memberof openvk.v1.Message
             * @static
             * @param {openvk.v1.Message.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.Message} Message instance
             * @type {{
             *   (properties: openvk.v1.Message.$Shape): openvk.v1.Message & openvk.v1.Message.$Shape;
             *   (properties?: openvk.v1.Message.$Properties): openvk.v1.Message;
             * }}
             */
            Message.create = function(properties) {
                return new Message(properties);
            };

            /**
             * Encodes the specified Message message. Does not implicitly {@link openvk.v1.Message.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.Message
             * @static
             * @param {openvk.v1.Message.$Properties} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && (typeof message.id === "object" ? message.id.low || message.id.high : message.id !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.peer_id != null && $Object.hasOwnProperty.call(message, "peer_id") && (typeof message.peer_id === "object" ? message.peer_id.low || message.peer_id.high : message.peer_id !== 0))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.peer_id);
                if (message.author_id != null && $Object.hasOwnProperty.call(message, "author_id") && (typeof message.author_id === "object" ? message.author_id.low || message.author_id.high : message.author_id !== 0))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.author_id);
                if (message.text != null && $Object.hasOwnProperty.call(message, "text") && message.text !== "")
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.text);
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at") && message.created_at !== "")
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.created_at);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link openvk.v1.Message.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.Message
             * @static
             * @param {openvk.v1.Message.$Properties} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.Message & openvk.v1.Message.$Shape} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.Message();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.peer_id = value;
                            else
                                delete message.peer_id;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.author_id = value;
                            else
                                delete message.author_id;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.text = value;
                            else
                                delete message.text;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.created_at = value;
                            else
                                delete message.created_at;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.Message & openvk.v1.Message.$Shape} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Message message.
             * @function verify
             * @memberof openvk.v1.Message
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.peer_id != null && $Object.hasOwnProperty.call(message, "peer_id"))
                    if (!$util.isInteger(message.peer_id) && !(message.peer_id && $util.isInteger(message.peer_id.low) && $util.isInteger(message.peer_id.high)))
                        return "peer_id: integer|Long expected";
                if (message.author_id != null && $Object.hasOwnProperty.call(message, "author_id"))
                    if (!$util.isInteger(message.author_id) && !(message.author_id && $util.isInteger(message.author_id.low) && $util.isInteger(message.author_id.high)))
                        return "author_id: integer|Long expected";
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    if (!$util.isString(message.created_at))
                        return "created_at: string expected";
                return null;
            };

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.Message
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.Message} Message
             */
            Message.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.Message)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.Message: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.Message();
                if (object.id != null)
                    if (typeof object.id === "object" ? object.id.low || object.id.high : $Number(object.id) !== 0)
                        if ($util.Long)
                            message.id = $util.Long.fromValue(object.id, false);
                        else if (typeof object.id === "string")
                            message.id = $parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.peer_id != null)
                    if (typeof object.peer_id === "object" ? object.peer_id.low || object.peer_id.high : $Number(object.peer_id) !== 0)
                        if ($util.Long)
                            message.peer_id = $util.Long.fromValue(object.peer_id, false);
                        else if (typeof object.peer_id === "string")
                            message.peer_id = $parseInt(object.peer_id, 10);
                        else if (typeof object.peer_id === "number")
                            message.peer_id = object.peer_id;
                        else if (typeof object.peer_id === "object")
                            message.peer_id = new $util.LongBits(object.peer_id.low >>> 0, object.peer_id.high >>> 0).toNumber();
                if (object.author_id != null)
                    if (typeof object.author_id === "object" ? object.author_id.low || object.author_id.high : $Number(object.author_id) !== 0)
                        if ($util.Long)
                            message.author_id = $util.Long.fromValue(object.author_id, false);
                        else if (typeof object.author_id === "string")
                            message.author_id = $parseInt(object.author_id, 10);
                        else if (typeof object.author_id === "number")
                            message.author_id = object.author_id;
                        else if (typeof object.author_id === "object")
                            message.author_id = new $util.LongBits(object.author_id.low >>> 0, object.author_id.high >>> 0).toNumber();
                if (object.text != null)
                    if (typeof object.text !== "string" || object.text.length)
                        message.text = $String(object.text);
                if (object.created_at != null)
                    if (typeof object.created_at !== "string" || object.created_at.length)
                        message.created_at = $String(object.created_at);
                return message;
            };

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.Message
             * @static
             * @param {openvk.v1.Message} message Message
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.peer_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.peer_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.author_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.author_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.text = "";
                    object.created_at = "";
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.id = typeof message.id === "number" ? $BigInt(message.id) : $util.Long.fromBits(message.id.low >>> 0, message.id.high >>> 0, false).toBigInt();
                    else if (typeof message.id === "number")
                        object.id = options.longs === $String ? $String(message.id) : message.id;
                    else
                        object.id = options.longs === $String ? $util.Long.prototype.toString.call(message.id) : options.longs === $Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.peer_id != null && $Object.hasOwnProperty.call(message, "peer_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.peer_id = typeof message.peer_id === "number" ? $BigInt(message.peer_id) : $util.Long.fromBits(message.peer_id.low >>> 0, message.peer_id.high >>> 0, false).toBigInt();
                    else if (typeof message.peer_id === "number")
                        object.peer_id = options.longs === $String ? $String(message.peer_id) : message.peer_id;
                    else
                        object.peer_id = options.longs === $String ? $util.Long.prototype.toString.call(message.peer_id) : options.longs === $Number ? new $util.LongBits(message.peer_id.low >>> 0, message.peer_id.high >>> 0).toNumber() : message.peer_id;
                if (message.author_id != null && $Object.hasOwnProperty.call(message, "author_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.author_id = typeof message.author_id === "number" ? $BigInt(message.author_id) : $util.Long.fromBits(message.author_id.low >>> 0, message.author_id.high >>> 0, false).toBigInt();
                    else if (typeof message.author_id === "number")
                        object.author_id = options.longs === $String ? $String(message.author_id) : message.author_id;
                    else
                        object.author_id = options.longs === $String ? $util.Long.prototype.toString.call(message.author_id) : options.longs === $Number ? new $util.LongBits(message.author_id.low >>> 0, message.author_id.high >>> 0).toNumber() : message.author_id;
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    object.text = message.text;
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    object.created_at = message.created_at;
                return object;
            };

            /**
             * Converts this Message to JSON.
             * @function toJSON
             * @memberof openvk.v1.Message
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message.prototype.toJSON = function() {
                return Message.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Message
             * @function getTypeUrl
             * @memberof openvk.v1.Message
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Message.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.Message";
            };

            return Message;
        })();

        v1.MessageList = (function() {

            /**
             * Properties of a MessageList.
             * @typedef {Object} openvk.v1.MessageList.$Properties
             * @property {Array.<openvk.v1.Message.$Properties>|null} [messages] MessageList messages
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a MessageList.
             * @memberof openvk.v1
             * @interface IMessageList
             * @augments openvk.v1.MessageList.$Properties
             * @deprecated Use openvk.v1.MessageList.$Properties instead.
             */

            /**
             * Shape of a MessageList.
             * @typedef {openvk.v1.MessageList.$Properties} openvk.v1.MessageList.$Shape
             */

            /**
             * Constructs a new MessageList.
             * @memberof openvk.v1
             * @classdesc Represents a MessageList.
             * @constructor
             * @param {openvk.v1.MessageList.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const MessageList = function (properties) {
                this.messages = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * MessageList messages.
             * @member {Array.<openvk.v1.Message.$Properties>} messages
             * @memberof openvk.v1.MessageList
             * @instance
             */
            MessageList.prototype.messages = $util.emptyArray;

            /**
             * Creates a new MessageList instance using the specified properties.
             * @function create
             * @memberof openvk.v1.MessageList
             * @static
             * @param {openvk.v1.MessageList.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.MessageList} MessageList instance
             * @type {{
             *   (properties: openvk.v1.MessageList.$Shape): openvk.v1.MessageList & openvk.v1.MessageList.$Shape;
             *   (properties?: openvk.v1.MessageList.$Properties): openvk.v1.MessageList;
             * }}
             */
            MessageList.create = function(properties) {
                return new MessageList(properties);
            };

            /**
             * Encodes the specified MessageList message. Does not implicitly {@link openvk.v1.MessageList.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.MessageList
             * @static
             * @param {openvk.v1.MessageList.$Properties} message MessageList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageList.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.messages != null && message.messages.length)
                    for (let i = 0; i < message.messages.length; ++i)
                        $root.openvk.v1.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified MessageList message, length delimited. Does not implicitly {@link openvk.v1.MessageList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.MessageList
             * @static
             * @param {openvk.v1.MessageList.$Properties} message MessageList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageList.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a MessageList message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.MessageList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.MessageList & openvk.v1.MessageList.$Shape} MessageList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageList.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.MessageList();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.messages && message.messages.length))
                                message.messages = [];
                            message.messages.push($root.openvk.v1.Message.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a MessageList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.MessageList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.MessageList & openvk.v1.MessageList.$Shape} MessageList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageList.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageList message.
             * @function verify
             * @memberof openvk.v1.MessageList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageList.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.messages != null && $Object.hasOwnProperty.call(message, "messages")) {
                    if (!$Array.isArray(message.messages))
                        return "messages: array expected";
                    for (let i = 0; i < message.messages.length; ++i) {
                        let error = $root.openvk.v1.Message.verify(message.messages[i], _depth + 1);
                        if (error)
                            return "messages." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.MessageList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.MessageList} MessageList
             */
            MessageList.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.MessageList)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.MessageList: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.MessageList();
                if (object.messages) {
                    if (!$Array.isArray(object.messages))
                        throw $TypeError(".openvk.v1.MessageList.messages: array expected");
                    message.messages = $Array(object.messages.length);
                    for (let i = 0; i < object.messages.length; ++i) {
                        if (!$util.isObject(object.messages[i]))
                            throw $TypeError(".openvk.v1.MessageList.messages: object expected");
                        message.messages[i] = $root.openvk.v1.Message.fromObject(object.messages[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.MessageList
             * @static
             * @param {openvk.v1.MessageList} message MessageList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageList.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.messages = [];
                if (message.messages && message.messages.length) {
                    object.messages = $Array(message.messages.length);
                    for (let j = 0; j < message.messages.length; ++j)
                        object.messages[j] = $root.openvk.v1.Message.toObject(message.messages[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this MessageList to JSON.
             * @function toJSON
             * @memberof openvk.v1.MessageList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageList.prototype.toJSON = function() {
                return MessageList.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for MessageList
             * @function getTypeUrl
             * @memberof openvk.v1.MessageList
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            MessageList.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.MessageList";
            };

            return MessageList;
        })();

        v1.SendMessage = (function() {

            /**
             * Properties of a SendMessage.
             * @typedef {Object} openvk.v1.SendMessage.$Properties
             * @property {number|Long|null} [peer_id] SendMessage peer_id
             * @property {string|null} [text] SendMessage text
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SendMessage.
             * @memberof openvk.v1
             * @interface ISendMessage
             * @augments openvk.v1.SendMessage.$Properties
             * @deprecated Use openvk.v1.SendMessage.$Properties instead.
             */

            /**
             * Shape of a SendMessage.
             * @typedef {openvk.v1.SendMessage.$Properties} openvk.v1.SendMessage.$Shape
             */

            /**
             * Constructs a new SendMessage.
             * @memberof openvk.v1
             * @classdesc Represents a SendMessage.
             * @constructor
             * @param {openvk.v1.SendMessage.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SendMessage = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SendMessage peer_id.
             * @member {number|Long} peer_id
             * @memberof openvk.v1.SendMessage
             * @instance
             */
            SendMessage.prototype.peer_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SendMessage text.
             * @member {string} text
             * @memberof openvk.v1.SendMessage
             * @instance
             */
            SendMessage.prototype.text = "";

            /**
             * Creates a new SendMessage instance using the specified properties.
             * @function create
             * @memberof openvk.v1.SendMessage
             * @static
             * @param {openvk.v1.SendMessage.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.SendMessage} SendMessage instance
             * @type {{
             *   (properties: openvk.v1.SendMessage.$Shape): openvk.v1.SendMessage & openvk.v1.SendMessage.$Shape;
             *   (properties?: openvk.v1.SendMessage.$Properties): openvk.v1.SendMessage;
             * }}
             */
            SendMessage.create = function(properties) {
                return new SendMessage(properties);
            };

            /**
             * Encodes the specified SendMessage message. Does not implicitly {@link openvk.v1.SendMessage.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.SendMessage
             * @static
             * @param {openvk.v1.SendMessage.$Properties} message SendMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendMessage.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.peer_id != null && $Object.hasOwnProperty.call(message, "peer_id") && (typeof message.peer_id === "object" ? message.peer_id.low || message.peer_id.high : message.peer_id !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.peer_id);
                if (message.text != null && $Object.hasOwnProperty.call(message, "text") && message.text !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SendMessage message, length delimited. Does not implicitly {@link openvk.v1.SendMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.SendMessage
             * @static
             * @param {openvk.v1.SendMessage.$Properties} message SendMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendMessage.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SendMessage message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.SendMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.SendMessage & openvk.v1.SendMessage.$Shape} SendMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendMessage.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.SendMessage();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.peer_id = value;
                            else
                                delete message.peer_id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.text = value;
                            else
                                delete message.text;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a SendMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.SendMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.SendMessage & openvk.v1.SendMessage.$Shape} SendMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendMessage.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SendMessage message.
             * @function verify
             * @memberof openvk.v1.SendMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SendMessage.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.peer_id != null && $Object.hasOwnProperty.call(message, "peer_id"))
                    if (!$util.isInteger(message.peer_id) && !(message.peer_id && $util.isInteger(message.peer_id.low) && $util.isInteger(message.peer_id.high)))
                        return "peer_id: integer|Long expected";
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                return null;
            };

            /**
             * Creates a SendMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.SendMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.SendMessage} SendMessage
             */
            SendMessage.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.SendMessage)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.SendMessage: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.SendMessage();
                if (object.peer_id != null)
                    if (typeof object.peer_id === "object" ? object.peer_id.low || object.peer_id.high : $Number(object.peer_id) !== 0)
                        if ($util.Long)
                            message.peer_id = $util.Long.fromValue(object.peer_id, false);
                        else if (typeof object.peer_id === "string")
                            message.peer_id = $parseInt(object.peer_id, 10);
                        else if (typeof object.peer_id === "number")
                            message.peer_id = object.peer_id;
                        else if (typeof object.peer_id === "object")
                            message.peer_id = new $util.LongBits(object.peer_id.low >>> 0, object.peer_id.high >>> 0).toNumber();
                if (object.text != null)
                    if (typeof object.text !== "string" || object.text.length)
                        message.text = $String(object.text);
                return message;
            };

            /**
             * Creates a plain object from a SendMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.SendMessage
             * @static
             * @param {openvk.v1.SendMessage} message SendMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SendMessage.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.peer_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.peer_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.text = "";
                }
                if (message.peer_id != null && $Object.hasOwnProperty.call(message, "peer_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.peer_id = typeof message.peer_id === "number" ? $BigInt(message.peer_id) : $util.Long.fromBits(message.peer_id.low >>> 0, message.peer_id.high >>> 0, false).toBigInt();
                    else if (typeof message.peer_id === "number")
                        object.peer_id = options.longs === $String ? $String(message.peer_id) : message.peer_id;
                    else
                        object.peer_id = options.longs === $String ? $util.Long.prototype.toString.call(message.peer_id) : options.longs === $Number ? new $util.LongBits(message.peer_id.low >>> 0, message.peer_id.high >>> 0).toNumber() : message.peer_id;
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    object.text = message.text;
                return object;
            };

            /**
             * Converts this SendMessage to JSON.
             * @function toJSON
             * @memberof openvk.v1.SendMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SendMessage.prototype.toJSON = function() {
                return SendMessage.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SendMessage
             * @function getTypeUrl
             * @memberof openvk.v1.SendMessage
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SendMessage.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.SendMessage";
            };

            return SendMessage;
        })();

        v1.AudioTrack = (function() {

            /**
             * Properties of an AudioTrack.
             * @typedef {Object} openvk.v1.AudioTrack.$Properties
             * @property {number|Long|null} [id] AudioTrack id
             * @property {number|Long|null} [media_id] AudioTrack media_id
             * @property {string|null} [artist] AudioTrack artist
             * @property {string|null} [title] AudioTrack title
             * @property {number|null} [duration_ms] AudioTrack duration_ms
             * @property {number|Long|null} [owner_user_id] AudioTrack owner_user_id
             * @property {string|null} [src] AudioTrack src
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an AudioTrack.
             * @memberof openvk.v1
             * @interface IAudioTrack
             * @augments openvk.v1.AudioTrack.$Properties
             * @deprecated Use openvk.v1.AudioTrack.$Properties instead.
             */

            /**
             * Shape of an AudioTrack.
             * @typedef {openvk.v1.AudioTrack.$Properties} openvk.v1.AudioTrack.$Shape
             */

            /**
             * Constructs a new AudioTrack.
             * @memberof openvk.v1
             * @classdesc Represents an AudioTrack.
             * @constructor
             * @param {openvk.v1.AudioTrack.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const AudioTrack = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * AudioTrack id.
             * @member {number|Long} id
             * @memberof openvk.v1.AudioTrack
             * @instance
             */
            AudioTrack.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AudioTrack media_id.
             * @member {number|Long} media_id
             * @memberof openvk.v1.AudioTrack
             * @instance
             */
            AudioTrack.prototype.media_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AudioTrack artist.
             * @member {string} artist
             * @memberof openvk.v1.AudioTrack
             * @instance
             */
            AudioTrack.prototype.artist = "";

            /**
             * AudioTrack title.
             * @member {string} title
             * @memberof openvk.v1.AudioTrack
             * @instance
             */
            AudioTrack.prototype.title = "";

            /**
             * AudioTrack duration_ms.
             * @member {number} duration_ms
             * @memberof openvk.v1.AudioTrack
             * @instance
             */
            AudioTrack.prototype.duration_ms = 0;

            /**
             * AudioTrack owner_user_id.
             * @member {number|Long} owner_user_id
             * @memberof openvk.v1.AudioTrack
             * @instance
             */
            AudioTrack.prototype.owner_user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AudioTrack src.
             * @member {string} src
             * @memberof openvk.v1.AudioTrack
             * @instance
             */
            AudioTrack.prototype.src = "";

            /**
             * Creates a new AudioTrack instance using the specified properties.
             * @function create
             * @memberof openvk.v1.AudioTrack
             * @static
             * @param {openvk.v1.AudioTrack.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.AudioTrack} AudioTrack instance
             * @type {{
             *   (properties: openvk.v1.AudioTrack.$Shape): openvk.v1.AudioTrack & openvk.v1.AudioTrack.$Shape;
             *   (properties?: openvk.v1.AudioTrack.$Properties): openvk.v1.AudioTrack;
             * }}
             */
            AudioTrack.create = function(properties) {
                return new AudioTrack(properties);
            };

            /**
             * Encodes the specified AudioTrack message. Does not implicitly {@link openvk.v1.AudioTrack.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.AudioTrack
             * @static
             * @param {openvk.v1.AudioTrack.$Properties} message AudioTrack message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AudioTrack.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && (typeof message.id === "object" ? message.id.low || message.id.high : message.id !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.media_id != null && $Object.hasOwnProperty.call(message, "media_id") && (typeof message.media_id === "object" ? message.media_id.low || message.media_id.high : message.media_id !== 0))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.media_id);
                if (message.artist != null && $Object.hasOwnProperty.call(message, "artist") && message.artist !== "")
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.artist);
                if (message.title != null && $Object.hasOwnProperty.call(message, "title") && message.title !== "")
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.title);
                if (message.duration_ms != null && $Object.hasOwnProperty.call(message, "duration_ms") && message.duration_ms !== 0)
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.duration_ms);
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id") && (typeof message.owner_user_id === "object" ? message.owner_user_id.low || message.owner_user_id.high : message.owner_user_id !== 0))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.owner_user_id);
                if (message.src != null && $Object.hasOwnProperty.call(message, "src") && message.src !== "")
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.src);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AudioTrack message, length delimited. Does not implicitly {@link openvk.v1.AudioTrack.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.AudioTrack
             * @static
             * @param {openvk.v1.AudioTrack.$Properties} message AudioTrack message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AudioTrack.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an AudioTrack message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.AudioTrack
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.AudioTrack & openvk.v1.AudioTrack.$Shape} AudioTrack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AudioTrack.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.AudioTrack();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.media_id = value;
                            else
                                delete message.media_id;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.artist = value;
                            else
                                delete message.artist;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.title = value;
                            else
                                delete message.title;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.duration_ms = value;
                            else
                                delete message.duration_ms;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.owner_user_id = value;
                            else
                                delete message.owner_user_id;
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.src = value;
                            else
                                delete message.src;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an AudioTrack message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.AudioTrack
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.AudioTrack & openvk.v1.AudioTrack.$Shape} AudioTrack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AudioTrack.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AudioTrack message.
             * @function verify
             * @memberof openvk.v1.AudioTrack
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AudioTrack.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.media_id != null && $Object.hasOwnProperty.call(message, "media_id"))
                    if (!$util.isInteger(message.media_id) && !(message.media_id && $util.isInteger(message.media_id.low) && $util.isInteger(message.media_id.high)))
                        return "media_id: integer|Long expected";
                if (message.artist != null && $Object.hasOwnProperty.call(message, "artist"))
                    if (!$util.isString(message.artist))
                        return "artist: string expected";
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.duration_ms != null && $Object.hasOwnProperty.call(message, "duration_ms"))
                    if (!$util.isInteger(message.duration_ms))
                        return "duration_ms: integer expected";
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id"))
                    if (!$util.isInteger(message.owner_user_id) && !(message.owner_user_id && $util.isInteger(message.owner_user_id.low) && $util.isInteger(message.owner_user_id.high)))
                        return "owner_user_id: integer|Long expected";
                if (message.src != null && $Object.hasOwnProperty.call(message, "src"))
                    if (!$util.isString(message.src))
                        return "src: string expected";
                return null;
            };

            /**
             * Creates an AudioTrack message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.AudioTrack
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.AudioTrack} AudioTrack
             */
            AudioTrack.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.AudioTrack)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.AudioTrack: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.AudioTrack();
                if (object.id != null)
                    if (typeof object.id === "object" ? object.id.low || object.id.high : $Number(object.id) !== 0)
                        if ($util.Long)
                            message.id = $util.Long.fromValue(object.id, false);
                        else if (typeof object.id === "string")
                            message.id = $parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.media_id != null)
                    if (typeof object.media_id === "object" ? object.media_id.low || object.media_id.high : $Number(object.media_id) !== 0)
                        if ($util.Long)
                            message.media_id = $util.Long.fromValue(object.media_id, false);
                        else if (typeof object.media_id === "string")
                            message.media_id = $parseInt(object.media_id, 10);
                        else if (typeof object.media_id === "number")
                            message.media_id = object.media_id;
                        else if (typeof object.media_id === "object")
                            message.media_id = new $util.LongBits(object.media_id.low >>> 0, object.media_id.high >>> 0).toNumber();
                if (object.artist != null)
                    if (typeof object.artist !== "string" || object.artist.length)
                        message.artist = $String(object.artist);
                if (object.title != null)
                    if (typeof object.title !== "string" || object.title.length)
                        message.title = $String(object.title);
                if (object.duration_ms != null)
                    if ($Number(object.duration_ms) !== 0)
                        message.duration_ms = object.duration_ms | 0;
                if (object.owner_user_id != null)
                    if (typeof object.owner_user_id === "object" ? object.owner_user_id.low || object.owner_user_id.high : $Number(object.owner_user_id) !== 0)
                        if ($util.Long)
                            message.owner_user_id = $util.Long.fromValue(object.owner_user_id, false);
                        else if (typeof object.owner_user_id === "string")
                            message.owner_user_id = $parseInt(object.owner_user_id, 10);
                        else if (typeof object.owner_user_id === "number")
                            message.owner_user_id = object.owner_user_id;
                        else if (typeof object.owner_user_id === "object")
                            message.owner_user_id = new $util.LongBits(object.owner_user_id.low >>> 0, object.owner_user_id.high >>> 0).toNumber();
                if (object.src != null)
                    if (typeof object.src !== "string" || object.src.length)
                        message.src = $String(object.src);
                return message;
            };

            /**
             * Creates a plain object from an AudioTrack message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.AudioTrack
             * @static
             * @param {openvk.v1.AudioTrack} message AudioTrack
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AudioTrack.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.media_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.media_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.artist = "";
                    object.title = "";
                    object.duration_ms = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.owner_user_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.owner_user_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.src = "";
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.id = typeof message.id === "number" ? $BigInt(message.id) : $util.Long.fromBits(message.id.low >>> 0, message.id.high >>> 0, false).toBigInt();
                    else if (typeof message.id === "number")
                        object.id = options.longs === $String ? $String(message.id) : message.id;
                    else
                        object.id = options.longs === $String ? $util.Long.prototype.toString.call(message.id) : options.longs === $Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.media_id != null && $Object.hasOwnProperty.call(message, "media_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.media_id = typeof message.media_id === "number" ? $BigInt(message.media_id) : $util.Long.fromBits(message.media_id.low >>> 0, message.media_id.high >>> 0, false).toBigInt();
                    else if (typeof message.media_id === "number")
                        object.media_id = options.longs === $String ? $String(message.media_id) : message.media_id;
                    else
                        object.media_id = options.longs === $String ? $util.Long.prototype.toString.call(message.media_id) : options.longs === $Number ? new $util.LongBits(message.media_id.low >>> 0, message.media_id.high >>> 0).toNumber() : message.media_id;
                if (message.artist != null && $Object.hasOwnProperty.call(message, "artist"))
                    object.artist = message.artist;
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    object.title = message.title;
                if (message.duration_ms != null && $Object.hasOwnProperty.call(message, "duration_ms"))
                    object.duration_ms = message.duration_ms;
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.owner_user_id = typeof message.owner_user_id === "number" ? $BigInt(message.owner_user_id) : $util.Long.fromBits(message.owner_user_id.low >>> 0, message.owner_user_id.high >>> 0, false).toBigInt();
                    else if (typeof message.owner_user_id === "number")
                        object.owner_user_id = options.longs === $String ? $String(message.owner_user_id) : message.owner_user_id;
                    else
                        object.owner_user_id = options.longs === $String ? $util.Long.prototype.toString.call(message.owner_user_id) : options.longs === $Number ? new $util.LongBits(message.owner_user_id.low >>> 0, message.owner_user_id.high >>> 0).toNumber() : message.owner_user_id;
                if (message.src != null && $Object.hasOwnProperty.call(message, "src"))
                    object.src = message.src;
                return object;
            };

            /**
             * Converts this AudioTrack to JSON.
             * @function toJSON
             * @memberof openvk.v1.AudioTrack
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AudioTrack.prototype.toJSON = function() {
                return AudioTrack.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AudioTrack
             * @function getTypeUrl
             * @memberof openvk.v1.AudioTrack
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AudioTrack.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.AudioTrack";
            };

            return AudioTrack;
        })();

        v1.AudioList = (function() {

            /**
             * Properties of an AudioList.
             * @typedef {Object} openvk.v1.AudioList.$Properties
             * @property {Array.<openvk.v1.AudioTrack.$Properties>|null} [tracks] AudioList tracks
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an AudioList.
             * @memberof openvk.v1
             * @interface IAudioList
             * @augments openvk.v1.AudioList.$Properties
             * @deprecated Use openvk.v1.AudioList.$Properties instead.
             */

            /**
             * Shape of an AudioList.
             * @typedef {openvk.v1.AudioList.$Properties} openvk.v1.AudioList.$Shape
             */

            /**
             * Constructs a new AudioList.
             * @memberof openvk.v1
             * @classdesc Represents an AudioList.
             * @constructor
             * @param {openvk.v1.AudioList.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const AudioList = function (properties) {
                this.tracks = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * AudioList tracks.
             * @member {Array.<openvk.v1.AudioTrack.$Properties>} tracks
             * @memberof openvk.v1.AudioList
             * @instance
             */
            AudioList.prototype.tracks = $util.emptyArray;

            /**
             * Creates a new AudioList instance using the specified properties.
             * @function create
             * @memberof openvk.v1.AudioList
             * @static
             * @param {openvk.v1.AudioList.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.AudioList} AudioList instance
             * @type {{
             *   (properties: openvk.v1.AudioList.$Shape): openvk.v1.AudioList & openvk.v1.AudioList.$Shape;
             *   (properties?: openvk.v1.AudioList.$Properties): openvk.v1.AudioList;
             * }}
             */
            AudioList.create = function(properties) {
                return new AudioList(properties);
            };

            /**
             * Encodes the specified AudioList message. Does not implicitly {@link openvk.v1.AudioList.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.AudioList
             * @static
             * @param {openvk.v1.AudioList.$Properties} message AudioList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AudioList.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.tracks != null && message.tracks.length)
                    for (let i = 0; i < message.tracks.length; ++i)
                        $root.openvk.v1.AudioTrack.encode(message.tracks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AudioList message, length delimited. Does not implicitly {@link openvk.v1.AudioList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.AudioList
             * @static
             * @param {openvk.v1.AudioList.$Properties} message AudioList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AudioList.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an AudioList message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.AudioList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.AudioList & openvk.v1.AudioList.$Shape} AudioList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AudioList.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.AudioList();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.tracks && message.tracks.length))
                                message.tracks = [];
                            message.tracks.push($root.openvk.v1.AudioTrack.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an AudioList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.AudioList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.AudioList & openvk.v1.AudioList.$Shape} AudioList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AudioList.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AudioList message.
             * @function verify
             * @memberof openvk.v1.AudioList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AudioList.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.tracks != null && $Object.hasOwnProperty.call(message, "tracks")) {
                    if (!$Array.isArray(message.tracks))
                        return "tracks: array expected";
                    for (let i = 0; i < message.tracks.length; ++i) {
                        let error = $root.openvk.v1.AudioTrack.verify(message.tracks[i], _depth + 1);
                        if (error)
                            return "tracks." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an AudioList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.AudioList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.AudioList} AudioList
             */
            AudioList.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.AudioList)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.AudioList: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.AudioList();
                if (object.tracks) {
                    if (!$Array.isArray(object.tracks))
                        throw $TypeError(".openvk.v1.AudioList.tracks: array expected");
                    message.tracks = $Array(object.tracks.length);
                    for (let i = 0; i < object.tracks.length; ++i) {
                        if (!$util.isObject(object.tracks[i]))
                            throw $TypeError(".openvk.v1.AudioList.tracks: object expected");
                        message.tracks[i] = $root.openvk.v1.AudioTrack.fromObject(object.tracks[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an AudioList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.AudioList
             * @static
             * @param {openvk.v1.AudioList} message AudioList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AudioList.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.tracks = [];
                if (message.tracks && message.tracks.length) {
                    object.tracks = $Array(message.tracks.length);
                    for (let j = 0; j < message.tracks.length; ++j)
                        object.tracks[j] = $root.openvk.v1.AudioTrack.toObject(message.tracks[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this AudioList to JSON.
             * @function toJSON
             * @memberof openvk.v1.AudioList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AudioList.prototype.toJSON = function() {
                return AudioList.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AudioList
             * @function getTypeUrl
             * @memberof openvk.v1.AudioList
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AudioList.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.AudioList";
            };

            return AudioList;
        })();

        v1.Photo = (function() {

            /**
             * Properties of a Photo.
             * @typedef {Object} openvk.v1.Photo.$Properties
             * @property {number|Long|null} [id] Photo id
             * @property {number|Long|null} [album_id] Photo album_id
             * @property {number|Long|null} [owner_user_id] Photo owner_user_id
             * @property {string|null} [mime] Photo mime
             * @property {number|Long|null} [size_bytes] Photo size_bytes
             * @property {number|null} [width] Photo width
             * @property {number|null} [height] Photo height
             * @property {string|null} [original_filename] Photo original_filename
             * @property {string|null} [url] Photo url
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Photo.
             * @memberof openvk.v1
             * @interface IPhoto
             * @augments openvk.v1.Photo.$Properties
             * @deprecated Use openvk.v1.Photo.$Properties instead.
             */

            /**
             * Shape of a Photo.
             * @typedef {openvk.v1.Photo.$Properties} openvk.v1.Photo.$Shape
             */

            /**
             * Constructs a new Photo.
             * @memberof openvk.v1
             * @classdesc Represents a Photo.
             * @constructor
             * @param {openvk.v1.Photo.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Photo = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Photo id.
             * @member {number|Long} id
             * @memberof openvk.v1.Photo
             * @instance
             */
            Photo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Photo album_id.
             * @member {number|Long} album_id
             * @memberof openvk.v1.Photo
             * @instance
             */
            Photo.prototype.album_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Photo owner_user_id.
             * @member {number|Long} owner_user_id
             * @memberof openvk.v1.Photo
             * @instance
             */
            Photo.prototype.owner_user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Photo mime.
             * @member {string} mime
             * @memberof openvk.v1.Photo
             * @instance
             */
            Photo.prototype.mime = "";

            /**
             * Photo size_bytes.
             * @member {number|Long} size_bytes
             * @memberof openvk.v1.Photo
             * @instance
             */
            Photo.prototype.size_bytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Photo width.
             * @member {number|null|undefined} width
             * @memberof openvk.v1.Photo
             * @instance
             */
            Photo.prototype.width = null;

            /**
             * Photo height.
             * @member {number|null|undefined} height
             * @memberof openvk.v1.Photo
             * @instance
             */
            Photo.prototype.height = null;

            /**
             * Photo original_filename.
             * @member {string|null|undefined} original_filename
             * @memberof openvk.v1.Photo
             * @instance
             */
            Photo.prototype.original_filename = null;

            /**
             * Photo url.
             * @member {string} url
             * @memberof openvk.v1.Photo
             * @instance
             */
            Photo.prototype.url = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Photo.prototype, "_width", {
                get: $util.oneOfGetter($oneOfFields = ["width"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Photo.prototype, "_height", {
                get: $util.oneOfGetter($oneOfFields = ["height"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Photo.prototype, "_original_filename", {
                get: $util.oneOfGetter($oneOfFields = ["original_filename"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Photo instance using the specified properties.
             * @function create
             * @memberof openvk.v1.Photo
             * @static
             * @param {openvk.v1.Photo.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.Photo} Photo instance
             * @type {{
             *   (properties: openvk.v1.Photo.$Shape): openvk.v1.Photo & openvk.v1.Photo.$Shape;
             *   (properties?: openvk.v1.Photo.$Properties): openvk.v1.Photo;
             * }}
             */
            Photo.create = function(properties) {
                return new Photo(properties);
            };

            /**
             * Encodes the specified Photo message. Does not implicitly {@link openvk.v1.Photo.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.Photo
             * @static
             * @param {openvk.v1.Photo.$Properties} message Photo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Photo.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && (typeof message.id === "object" ? message.id.low || message.id.high : message.id !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.album_id != null && $Object.hasOwnProperty.call(message, "album_id") && (typeof message.album_id === "object" ? message.album_id.low || message.album_id.high : message.album_id !== 0))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.album_id);
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id") && (typeof message.owner_user_id === "object" ? message.owner_user_id.low || message.owner_user_id.high : message.owner_user_id !== 0))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.owner_user_id);
                if (message.mime != null && $Object.hasOwnProperty.call(message, "mime") && message.mime !== "")
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.mime);
                if (message.size_bytes != null && $Object.hasOwnProperty.call(message, "size_bytes") && (typeof message.size_bytes === "object" ? message.size_bytes.low || message.size_bytes.high : message.size_bytes !== 0))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.size_bytes);
                if (message.width != null && $Object.hasOwnProperty.call(message, "width"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.width);
                if (message.height != null && $Object.hasOwnProperty.call(message, "height"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.height);
                if (message.original_filename != null && $Object.hasOwnProperty.call(message, "original_filename"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.original_filename);
                if (message.url != null && $Object.hasOwnProperty.call(message, "url") && message.url !== "")
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.url);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Photo message, length delimited. Does not implicitly {@link openvk.v1.Photo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.Photo
             * @static
             * @param {openvk.v1.Photo.$Properties} message Photo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Photo.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Photo message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.Photo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.Photo & openvk.v1.Photo.$Shape} Photo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Photo.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.Photo();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.album_id = value;
                            else
                                delete message.album_id;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.owner_user_id = value;
                            else
                                delete message.owner_user_id;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.mime = value;
                            else
                                delete message.mime;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.size_bytes = value;
                            else
                                delete message.size_bytes;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            message.width = reader.int32();
                            message._width = "width";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 0)
                                break;
                            message.height = reader.int32();
                            message._height = "height";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.original_filename = reader.stringVerify();
                            message._original_filename = "original_filename";
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.url = value;
                            else
                                delete message.url;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Photo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.Photo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.Photo & openvk.v1.Photo.$Shape} Photo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Photo.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Photo message.
             * @function verify
             * @memberof openvk.v1.Photo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Photo.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.album_id != null && $Object.hasOwnProperty.call(message, "album_id"))
                    if (!$util.isInteger(message.album_id) && !(message.album_id && $util.isInteger(message.album_id.low) && $util.isInteger(message.album_id.high)))
                        return "album_id: integer|Long expected";
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id"))
                    if (!$util.isInteger(message.owner_user_id) && !(message.owner_user_id && $util.isInteger(message.owner_user_id.low) && $util.isInteger(message.owner_user_id.high)))
                        return "owner_user_id: integer|Long expected";
                if (message.mime != null && $Object.hasOwnProperty.call(message, "mime"))
                    if (!$util.isString(message.mime))
                        return "mime: string expected";
                if (message.size_bytes != null && $Object.hasOwnProperty.call(message, "size_bytes"))
                    if (!$util.isInteger(message.size_bytes) && !(message.size_bytes && $util.isInteger(message.size_bytes.low) && $util.isInteger(message.size_bytes.high)))
                        return "size_bytes: integer|Long expected";
                if (message.width != null && $Object.hasOwnProperty.call(message, "width")) {
                    properties._width = 1;
                    if (!$util.isInteger(message.width))
                        return "width: integer expected";
                }
                if (message.height != null && $Object.hasOwnProperty.call(message, "height")) {
                    properties._height = 1;
                    if (!$util.isInteger(message.height))
                        return "height: integer expected";
                }
                if (message.original_filename != null && $Object.hasOwnProperty.call(message, "original_filename")) {
                    properties._original_filename = 1;
                    if (!$util.isString(message.original_filename))
                        return "original_filename: string expected";
                }
                if (message.url != null && $Object.hasOwnProperty.call(message, "url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                return null;
            };

            /**
             * Creates a Photo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.Photo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.Photo} Photo
             */
            Photo.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.Photo)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.Photo: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.Photo();
                if (object.id != null)
                    if (typeof object.id === "object" ? object.id.low || object.id.high : $Number(object.id) !== 0)
                        if ($util.Long)
                            message.id = $util.Long.fromValue(object.id, false);
                        else if (typeof object.id === "string")
                            message.id = $parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.album_id != null)
                    if (typeof object.album_id === "object" ? object.album_id.low || object.album_id.high : $Number(object.album_id) !== 0)
                        if ($util.Long)
                            message.album_id = $util.Long.fromValue(object.album_id, false);
                        else if (typeof object.album_id === "string")
                            message.album_id = $parseInt(object.album_id, 10);
                        else if (typeof object.album_id === "number")
                            message.album_id = object.album_id;
                        else if (typeof object.album_id === "object")
                            message.album_id = new $util.LongBits(object.album_id.low >>> 0, object.album_id.high >>> 0).toNumber();
                if (object.owner_user_id != null)
                    if (typeof object.owner_user_id === "object" ? object.owner_user_id.low || object.owner_user_id.high : $Number(object.owner_user_id) !== 0)
                        if ($util.Long)
                            message.owner_user_id = $util.Long.fromValue(object.owner_user_id, false);
                        else if (typeof object.owner_user_id === "string")
                            message.owner_user_id = $parseInt(object.owner_user_id, 10);
                        else if (typeof object.owner_user_id === "number")
                            message.owner_user_id = object.owner_user_id;
                        else if (typeof object.owner_user_id === "object")
                            message.owner_user_id = new $util.LongBits(object.owner_user_id.low >>> 0, object.owner_user_id.high >>> 0).toNumber();
                if (object.mime != null)
                    if (typeof object.mime !== "string" || object.mime.length)
                        message.mime = $String(object.mime);
                if (object.size_bytes != null)
                    if (typeof object.size_bytes === "object" ? object.size_bytes.low || object.size_bytes.high : $Number(object.size_bytes) !== 0)
                        if ($util.Long)
                            message.size_bytes = $util.Long.fromValue(object.size_bytes, false);
                        else if (typeof object.size_bytes === "string")
                            message.size_bytes = $parseInt(object.size_bytes, 10);
                        else if (typeof object.size_bytes === "number")
                            message.size_bytes = object.size_bytes;
                        else if (typeof object.size_bytes === "object")
                            message.size_bytes = new $util.LongBits(object.size_bytes.low >>> 0, object.size_bytes.high >>> 0).toNumber();
                if (object.width != null)
                    message.width = object.width | 0;
                if (object.height != null)
                    message.height = object.height | 0;
                if (object.original_filename != null)
                    message.original_filename = $String(object.original_filename);
                if (object.url != null)
                    if (typeof object.url !== "string" || object.url.length)
                        message.url = $String(object.url);
                return message;
            };

            /**
             * Creates a plain object from a Photo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.Photo
             * @static
             * @param {openvk.v1.Photo} message Photo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Photo.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.album_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.album_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.owner_user_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.owner_user_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.mime = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.size_bytes = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.size_bytes = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.url = "";
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.id = typeof message.id === "number" ? $BigInt(message.id) : $util.Long.fromBits(message.id.low >>> 0, message.id.high >>> 0, false).toBigInt();
                    else if (typeof message.id === "number")
                        object.id = options.longs === $String ? $String(message.id) : message.id;
                    else
                        object.id = options.longs === $String ? $util.Long.prototype.toString.call(message.id) : options.longs === $Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.album_id != null && $Object.hasOwnProperty.call(message, "album_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.album_id = typeof message.album_id === "number" ? $BigInt(message.album_id) : $util.Long.fromBits(message.album_id.low >>> 0, message.album_id.high >>> 0, false).toBigInt();
                    else if (typeof message.album_id === "number")
                        object.album_id = options.longs === $String ? $String(message.album_id) : message.album_id;
                    else
                        object.album_id = options.longs === $String ? $util.Long.prototype.toString.call(message.album_id) : options.longs === $Number ? new $util.LongBits(message.album_id.low >>> 0, message.album_id.high >>> 0).toNumber() : message.album_id;
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.owner_user_id = typeof message.owner_user_id === "number" ? $BigInt(message.owner_user_id) : $util.Long.fromBits(message.owner_user_id.low >>> 0, message.owner_user_id.high >>> 0, false).toBigInt();
                    else if (typeof message.owner_user_id === "number")
                        object.owner_user_id = options.longs === $String ? $String(message.owner_user_id) : message.owner_user_id;
                    else
                        object.owner_user_id = options.longs === $String ? $util.Long.prototype.toString.call(message.owner_user_id) : options.longs === $Number ? new $util.LongBits(message.owner_user_id.low >>> 0, message.owner_user_id.high >>> 0).toNumber() : message.owner_user_id;
                if (message.mime != null && $Object.hasOwnProperty.call(message, "mime"))
                    object.mime = message.mime;
                if (message.size_bytes != null && $Object.hasOwnProperty.call(message, "size_bytes"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.size_bytes = typeof message.size_bytes === "number" ? $BigInt(message.size_bytes) : $util.Long.fromBits(message.size_bytes.low >>> 0, message.size_bytes.high >>> 0, false).toBigInt();
                    else if (typeof message.size_bytes === "number")
                        object.size_bytes = options.longs === $String ? $String(message.size_bytes) : message.size_bytes;
                    else
                        object.size_bytes = options.longs === $String ? $util.Long.prototype.toString.call(message.size_bytes) : options.longs === $Number ? new $util.LongBits(message.size_bytes.low >>> 0, message.size_bytes.high >>> 0).toNumber() : message.size_bytes;
                if (message.width != null && $Object.hasOwnProperty.call(message, "width"))
                    object.width = message.width;
                if (message.height != null && $Object.hasOwnProperty.call(message, "height"))
                    object.height = message.height;
                if (message.original_filename != null && $Object.hasOwnProperty.call(message, "original_filename"))
                    object.original_filename = message.original_filename;
                if (message.url != null && $Object.hasOwnProperty.call(message, "url"))
                    object.url = message.url;
                return object;
            };

            /**
             * Converts this Photo to JSON.
             * @function toJSON
             * @memberof openvk.v1.Photo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Photo.prototype.toJSON = function() {
                return Photo.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Photo
             * @function getTypeUrl
             * @memberof openvk.v1.Photo
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Photo.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.Photo";
            };

            return Photo;
        })();

        v1.Album = (function() {

            /**
             * Properties of an Album.
             * @typedef {Object} openvk.v1.Album.$Properties
             * @property {number|Long|null} [id] Album id
             * @property {string|null} [title] Album title
             * @property {string|null} [description] Album description
             * @property {number|Long|null} [owner_user_id] Album owner_user_id
             * @property {string|null} [created_at] Album created_at
             * @property {number|Long|null} [photo_count] Album photo_count
             * @property {string|null} [cover_url] Album cover_url
             * @property {Array.<openvk.v1.Photo.$Properties>|null} [photos] Album photos
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an Album.
             * @memberof openvk.v1
             * @interface IAlbum
             * @augments openvk.v1.Album.$Properties
             * @deprecated Use openvk.v1.Album.$Properties instead.
             */

            /**
             * Shape of an Album.
             * @typedef {openvk.v1.Album.$Properties} openvk.v1.Album.$Shape
             */

            /**
             * Constructs a new Album.
             * @memberof openvk.v1
             * @classdesc Represents an Album.
             * @constructor
             * @param {openvk.v1.Album.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Album = function (properties) {
                this.photos = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Album id.
             * @member {number|Long} id
             * @memberof openvk.v1.Album
             * @instance
             */
            Album.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Album title.
             * @member {string} title
             * @memberof openvk.v1.Album
             * @instance
             */
            Album.prototype.title = "";

            /**
             * Album description.
             * @member {string|null|undefined} description
             * @memberof openvk.v1.Album
             * @instance
             */
            Album.prototype.description = null;

            /**
             * Album owner_user_id.
             * @member {number|Long} owner_user_id
             * @memberof openvk.v1.Album
             * @instance
             */
            Album.prototype.owner_user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Album created_at.
             * @member {string} created_at
             * @memberof openvk.v1.Album
             * @instance
             */
            Album.prototype.created_at = "";

            /**
             * Album photo_count.
             * @member {number|Long} photo_count
             * @memberof openvk.v1.Album
             * @instance
             */
            Album.prototype.photo_count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Album cover_url.
             * @member {string|null|undefined} cover_url
             * @memberof openvk.v1.Album
             * @instance
             */
            Album.prototype.cover_url = null;

            /**
             * Album photos.
             * @member {Array.<openvk.v1.Photo.$Properties>} photos
             * @memberof openvk.v1.Album
             * @instance
             */
            Album.prototype.photos = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Album.prototype, "_description", {
                get: $util.oneOfGetter($oneOfFields = ["description"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Album.prototype, "_cover_url", {
                get: $util.oneOfGetter($oneOfFields = ["cover_url"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Album instance using the specified properties.
             * @function create
             * @memberof openvk.v1.Album
             * @static
             * @param {openvk.v1.Album.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.Album} Album instance
             * @type {{
             *   (properties: openvk.v1.Album.$Shape): openvk.v1.Album & openvk.v1.Album.$Shape;
             *   (properties?: openvk.v1.Album.$Properties): openvk.v1.Album;
             * }}
             */
            Album.create = function(properties) {
                return new Album(properties);
            };

            /**
             * Encodes the specified Album message. Does not implicitly {@link openvk.v1.Album.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.Album
             * @static
             * @param {openvk.v1.Album.$Properties} message Album message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Album.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && (typeof message.id === "object" ? message.id.low || message.id.high : message.id !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.title != null && $Object.hasOwnProperty.call(message, "title") && message.title !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id") && (typeof message.owner_user_id === "object" ? message.owner_user_id.low || message.owner_user_id.high : message.owner_user_id !== 0))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.owner_user_id);
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at") && message.created_at !== "")
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.created_at);
                if (message.photo_count != null && $Object.hasOwnProperty.call(message, "photo_count") && (typeof message.photo_count === "object" ? message.photo_count.low || message.photo_count.high : message.photo_count !== 0))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.photo_count);
                if (message.cover_url != null && $Object.hasOwnProperty.call(message, "cover_url"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.cover_url);
                if (message.photos != null && message.photos.length)
                    for (let i = 0; i < message.photos.length; ++i)
                        $root.openvk.v1.Photo.encode(message.photos[i], writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Album message, length delimited. Does not implicitly {@link openvk.v1.Album.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.Album
             * @static
             * @param {openvk.v1.Album.$Properties} message Album message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Album.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an Album message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.Album
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.Album & openvk.v1.Album.$Shape} Album
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Album.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.Album();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.title = value;
                            else
                                delete message.title;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.description = reader.stringVerify();
                            message._description = "description";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.owner_user_id = value;
                            else
                                delete message.owner_user_id;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.created_at = value;
                            else
                                delete message.created_at;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.photo_count = value;
                            else
                                delete message.photo_count;
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.cover_url = reader.stringVerify();
                            message._cover_url = "cover_url";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            if (!(message.photos && message.photos.length))
                                message.photos = [];
                            message.photos.push($root.openvk.v1.Photo.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an Album message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.Album
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.Album & openvk.v1.Album.$Shape} Album
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Album.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Album message.
             * @function verify
             * @memberof openvk.v1.Album
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Album.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.description != null && $Object.hasOwnProperty.call(message, "description")) {
                    properties._description = 1;
                    if (!$util.isString(message.description))
                        return "description: string expected";
                }
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id"))
                    if (!$util.isInteger(message.owner_user_id) && !(message.owner_user_id && $util.isInteger(message.owner_user_id.low) && $util.isInteger(message.owner_user_id.high)))
                        return "owner_user_id: integer|Long expected";
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    if (!$util.isString(message.created_at))
                        return "created_at: string expected";
                if (message.photo_count != null && $Object.hasOwnProperty.call(message, "photo_count"))
                    if (!$util.isInteger(message.photo_count) && !(message.photo_count && $util.isInteger(message.photo_count.low) && $util.isInteger(message.photo_count.high)))
                        return "photo_count: integer|Long expected";
                if (message.cover_url != null && $Object.hasOwnProperty.call(message, "cover_url")) {
                    properties._cover_url = 1;
                    if (!$util.isString(message.cover_url))
                        return "cover_url: string expected";
                }
                if (message.photos != null && $Object.hasOwnProperty.call(message, "photos")) {
                    if (!$Array.isArray(message.photos))
                        return "photos: array expected";
                    for (let i = 0; i < message.photos.length; ++i) {
                        let error = $root.openvk.v1.Photo.verify(message.photos[i], _depth + 1);
                        if (error)
                            return "photos." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Album message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.Album
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.Album} Album
             */
            Album.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.Album)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.Album: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.Album();
                if (object.id != null)
                    if (typeof object.id === "object" ? object.id.low || object.id.high : $Number(object.id) !== 0)
                        if ($util.Long)
                            message.id = $util.Long.fromValue(object.id, false);
                        else if (typeof object.id === "string")
                            message.id = $parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.title != null)
                    if (typeof object.title !== "string" || object.title.length)
                        message.title = $String(object.title);
                if (object.description != null)
                    message.description = $String(object.description);
                if (object.owner_user_id != null)
                    if (typeof object.owner_user_id === "object" ? object.owner_user_id.low || object.owner_user_id.high : $Number(object.owner_user_id) !== 0)
                        if ($util.Long)
                            message.owner_user_id = $util.Long.fromValue(object.owner_user_id, false);
                        else if (typeof object.owner_user_id === "string")
                            message.owner_user_id = $parseInt(object.owner_user_id, 10);
                        else if (typeof object.owner_user_id === "number")
                            message.owner_user_id = object.owner_user_id;
                        else if (typeof object.owner_user_id === "object")
                            message.owner_user_id = new $util.LongBits(object.owner_user_id.low >>> 0, object.owner_user_id.high >>> 0).toNumber();
                if (object.created_at != null)
                    if (typeof object.created_at !== "string" || object.created_at.length)
                        message.created_at = $String(object.created_at);
                if (object.photo_count != null)
                    if (typeof object.photo_count === "object" ? object.photo_count.low || object.photo_count.high : $Number(object.photo_count) !== 0)
                        if ($util.Long)
                            message.photo_count = $util.Long.fromValue(object.photo_count, false);
                        else if (typeof object.photo_count === "string")
                            message.photo_count = $parseInt(object.photo_count, 10);
                        else if (typeof object.photo_count === "number")
                            message.photo_count = object.photo_count;
                        else if (typeof object.photo_count === "object")
                            message.photo_count = new $util.LongBits(object.photo_count.low >>> 0, object.photo_count.high >>> 0).toNumber();
                if (object.cover_url != null)
                    message.cover_url = $String(object.cover_url);
                if (object.photos) {
                    if (!$Array.isArray(object.photos))
                        throw $TypeError(".openvk.v1.Album.photos: array expected");
                    message.photos = $Array(object.photos.length);
                    for (let i = 0; i < object.photos.length; ++i) {
                        if (!$util.isObject(object.photos[i]))
                            throw $TypeError(".openvk.v1.Album.photos: object expected");
                        message.photos[i] = $root.openvk.v1.Photo.fromObject(object.photos[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Album message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.Album
             * @static
             * @param {openvk.v1.Album} message Album
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Album.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.photos = [];
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.title = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.owner_user_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.owner_user_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.created_at = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.photo_count = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.photo_count = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.id = typeof message.id === "number" ? $BigInt(message.id) : $util.Long.fromBits(message.id.low >>> 0, message.id.high >>> 0, false).toBigInt();
                    else if (typeof message.id === "number")
                        object.id = options.longs === $String ? $String(message.id) : message.id;
                    else
                        object.id = options.longs === $String ? $util.Long.prototype.toString.call(message.id) : options.longs === $Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    object.title = message.title;
                if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                    object.description = message.description;
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.owner_user_id = typeof message.owner_user_id === "number" ? $BigInt(message.owner_user_id) : $util.Long.fromBits(message.owner_user_id.low >>> 0, message.owner_user_id.high >>> 0, false).toBigInt();
                    else if (typeof message.owner_user_id === "number")
                        object.owner_user_id = options.longs === $String ? $String(message.owner_user_id) : message.owner_user_id;
                    else
                        object.owner_user_id = options.longs === $String ? $util.Long.prototype.toString.call(message.owner_user_id) : options.longs === $Number ? new $util.LongBits(message.owner_user_id.low >>> 0, message.owner_user_id.high >>> 0).toNumber() : message.owner_user_id;
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    object.created_at = message.created_at;
                if (message.photo_count != null && $Object.hasOwnProperty.call(message, "photo_count"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.photo_count = typeof message.photo_count === "number" ? $BigInt(message.photo_count) : $util.Long.fromBits(message.photo_count.low >>> 0, message.photo_count.high >>> 0, false).toBigInt();
                    else if (typeof message.photo_count === "number")
                        object.photo_count = options.longs === $String ? $String(message.photo_count) : message.photo_count;
                    else
                        object.photo_count = options.longs === $String ? $util.Long.prototype.toString.call(message.photo_count) : options.longs === $Number ? new $util.LongBits(message.photo_count.low >>> 0, message.photo_count.high >>> 0).toNumber() : message.photo_count;
                if (message.cover_url != null && $Object.hasOwnProperty.call(message, "cover_url"))
                    object.cover_url = message.cover_url;
                if (message.photos && message.photos.length) {
                    object.photos = $Array(message.photos.length);
                    for (let j = 0; j < message.photos.length; ++j)
                        object.photos[j] = $root.openvk.v1.Photo.toObject(message.photos[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Album to JSON.
             * @function toJSON
             * @memberof openvk.v1.Album
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Album.prototype.toJSON = function() {
                return Album.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Album
             * @function getTypeUrl
             * @memberof openvk.v1.Album
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Album.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.Album";
            };

            return Album;
        })();

        v1.AlbumList = (function() {

            /**
             * Properties of an AlbumList.
             * @typedef {Object} openvk.v1.AlbumList.$Properties
             * @property {Array.<openvk.v1.Album.$Properties>|null} [albums] AlbumList albums
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an AlbumList.
             * @memberof openvk.v1
             * @interface IAlbumList
             * @augments openvk.v1.AlbumList.$Properties
             * @deprecated Use openvk.v1.AlbumList.$Properties instead.
             */

            /**
             * Shape of an AlbumList.
             * @typedef {openvk.v1.AlbumList.$Properties} openvk.v1.AlbumList.$Shape
             */

            /**
             * Constructs a new AlbumList.
             * @memberof openvk.v1
             * @classdesc Represents an AlbumList.
             * @constructor
             * @param {openvk.v1.AlbumList.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const AlbumList = function (properties) {
                this.albums = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * AlbumList albums.
             * @member {Array.<openvk.v1.Album.$Properties>} albums
             * @memberof openvk.v1.AlbumList
             * @instance
             */
            AlbumList.prototype.albums = $util.emptyArray;

            /**
             * Creates a new AlbumList instance using the specified properties.
             * @function create
             * @memberof openvk.v1.AlbumList
             * @static
             * @param {openvk.v1.AlbumList.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.AlbumList} AlbumList instance
             * @type {{
             *   (properties: openvk.v1.AlbumList.$Shape): openvk.v1.AlbumList & openvk.v1.AlbumList.$Shape;
             *   (properties?: openvk.v1.AlbumList.$Properties): openvk.v1.AlbumList;
             * }}
             */
            AlbumList.create = function(properties) {
                return new AlbumList(properties);
            };

            /**
             * Encodes the specified AlbumList message. Does not implicitly {@link openvk.v1.AlbumList.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.AlbumList
             * @static
             * @param {openvk.v1.AlbumList.$Properties} message AlbumList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AlbumList.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.albums != null && message.albums.length)
                    for (let i = 0; i < message.albums.length; ++i)
                        $root.openvk.v1.Album.encode(message.albums[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AlbumList message, length delimited. Does not implicitly {@link openvk.v1.AlbumList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.AlbumList
             * @static
             * @param {openvk.v1.AlbumList.$Properties} message AlbumList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AlbumList.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an AlbumList message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.AlbumList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.AlbumList & openvk.v1.AlbumList.$Shape} AlbumList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AlbumList.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.AlbumList();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.albums && message.albums.length))
                                message.albums = [];
                            message.albums.push($root.openvk.v1.Album.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an AlbumList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.AlbumList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.AlbumList & openvk.v1.AlbumList.$Shape} AlbumList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AlbumList.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AlbumList message.
             * @function verify
             * @memberof openvk.v1.AlbumList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AlbumList.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.albums != null && $Object.hasOwnProperty.call(message, "albums")) {
                    if (!$Array.isArray(message.albums))
                        return "albums: array expected";
                    for (let i = 0; i < message.albums.length; ++i) {
                        let error = $root.openvk.v1.Album.verify(message.albums[i], _depth + 1);
                        if (error)
                            return "albums." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an AlbumList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.AlbumList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.AlbumList} AlbumList
             */
            AlbumList.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.AlbumList)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.AlbumList: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.AlbumList();
                if (object.albums) {
                    if (!$Array.isArray(object.albums))
                        throw $TypeError(".openvk.v1.AlbumList.albums: array expected");
                    message.albums = $Array(object.albums.length);
                    for (let i = 0; i < object.albums.length; ++i) {
                        if (!$util.isObject(object.albums[i]))
                            throw $TypeError(".openvk.v1.AlbumList.albums: object expected");
                        message.albums[i] = $root.openvk.v1.Album.fromObject(object.albums[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an AlbumList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.AlbumList
             * @static
             * @param {openvk.v1.AlbumList} message AlbumList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AlbumList.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.albums = [];
                if (message.albums && message.albums.length) {
                    object.albums = $Array(message.albums.length);
                    for (let j = 0; j < message.albums.length; ++j)
                        object.albums[j] = $root.openvk.v1.Album.toObject(message.albums[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this AlbumList to JSON.
             * @function toJSON
             * @memberof openvk.v1.AlbumList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AlbumList.prototype.toJSON = function() {
                return AlbumList.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AlbumList
             * @function getTypeUrl
             * @memberof openvk.v1.AlbumList
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AlbumList.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.AlbumList";
            };

            return AlbumList;
        })();

        v1.CreateAlbum = (function() {

            /**
             * Properties of a CreateAlbum.
             * @typedef {Object} openvk.v1.CreateAlbum.$Properties
             * @property {string|null} [title] CreateAlbum title
             * @property {string|null} [description] CreateAlbum description
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a CreateAlbum.
             * @memberof openvk.v1
             * @interface ICreateAlbum
             * @augments openvk.v1.CreateAlbum.$Properties
             * @deprecated Use openvk.v1.CreateAlbum.$Properties instead.
             */

            /**
             * Shape of a CreateAlbum.
             * @typedef {openvk.v1.CreateAlbum.$Properties} openvk.v1.CreateAlbum.$Shape
             */

            /**
             * Constructs a new CreateAlbum.
             * @memberof openvk.v1
             * @classdesc Represents a CreateAlbum.
             * @constructor
             * @param {openvk.v1.CreateAlbum.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const CreateAlbum = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * CreateAlbum title.
             * @member {string} title
             * @memberof openvk.v1.CreateAlbum
             * @instance
             */
            CreateAlbum.prototype.title = "";

            /**
             * CreateAlbum description.
             * @member {string|null|undefined} description
             * @memberof openvk.v1.CreateAlbum
             * @instance
             */
            CreateAlbum.prototype.description = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(CreateAlbum.prototype, "_description", {
                get: $util.oneOfGetter($oneOfFields = ["description"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new CreateAlbum instance using the specified properties.
             * @function create
             * @memberof openvk.v1.CreateAlbum
             * @static
             * @param {openvk.v1.CreateAlbum.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.CreateAlbum} CreateAlbum instance
             * @type {{
             *   (properties: openvk.v1.CreateAlbum.$Shape): openvk.v1.CreateAlbum & openvk.v1.CreateAlbum.$Shape;
             *   (properties?: openvk.v1.CreateAlbum.$Properties): openvk.v1.CreateAlbum;
             * }}
             */
            CreateAlbum.create = function(properties) {
                return new CreateAlbum(properties);
            };

            /**
             * Encodes the specified CreateAlbum message. Does not implicitly {@link openvk.v1.CreateAlbum.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.CreateAlbum
             * @static
             * @param {openvk.v1.CreateAlbum.$Properties} message CreateAlbum message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateAlbum.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.title != null && $Object.hasOwnProperty.call(message, "title") && message.title !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified CreateAlbum message, length delimited. Does not implicitly {@link openvk.v1.CreateAlbum.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.CreateAlbum
             * @static
             * @param {openvk.v1.CreateAlbum.$Properties} message CreateAlbum message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateAlbum.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a CreateAlbum message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.CreateAlbum
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.CreateAlbum & openvk.v1.CreateAlbum.$Shape} CreateAlbum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateAlbum.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.CreateAlbum();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.title = value;
                            else
                                delete message.title;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.description = reader.stringVerify();
                            message._description = "description";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a CreateAlbum message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.CreateAlbum
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.CreateAlbum & openvk.v1.CreateAlbum.$Shape} CreateAlbum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateAlbum.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateAlbum message.
             * @function verify
             * @memberof openvk.v1.CreateAlbum
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateAlbum.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.description != null && $Object.hasOwnProperty.call(message, "description")) {
                    properties._description = 1;
                    if (!$util.isString(message.description))
                        return "description: string expected";
                }
                return null;
            };

            /**
             * Creates a CreateAlbum message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.CreateAlbum
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.CreateAlbum} CreateAlbum
             */
            CreateAlbum.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.CreateAlbum)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.CreateAlbum: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.CreateAlbum();
                if (object.title != null)
                    if (typeof object.title !== "string" || object.title.length)
                        message.title = $String(object.title);
                if (object.description != null)
                    message.description = $String(object.description);
                return message;
            };

            /**
             * Creates a plain object from a CreateAlbum message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.CreateAlbum
             * @static
             * @param {openvk.v1.CreateAlbum} message CreateAlbum
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateAlbum.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.title = "";
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    object.title = message.title;
                if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                    object.description = message.description;
                return object;
            };

            /**
             * Converts this CreateAlbum to JSON.
             * @function toJSON
             * @memberof openvk.v1.CreateAlbum
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateAlbum.prototype.toJSON = function() {
                return CreateAlbum.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for CreateAlbum
             * @function getTypeUrl
             * @memberof openvk.v1.CreateAlbum
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            CreateAlbum.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.CreateAlbum";
            };

            return CreateAlbum;
        })();

        v1.Video = (function() {

            /**
             * Properties of a Video.
             * @typedef {Object} openvk.v1.Video.$Properties
             * @property {number|Long|null} [id] Video id
             * @property {number|Long|null} [media_id] Video media_id
             * @property {string|null} [title] Video title
             * @property {string|null} [description] Video description
             * @property {string|null} [status] Video status
             * @property {number|Long|null} [owner_user_id] Video owner_user_id
             * @property {string|null} [src] Video src
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Video.
             * @memberof openvk.v1
             * @interface IVideo
             * @augments openvk.v1.Video.$Properties
             * @deprecated Use openvk.v1.Video.$Properties instead.
             */

            /**
             * Shape of a Video.
             * @typedef {openvk.v1.Video.$Properties} openvk.v1.Video.$Shape
             */

            /**
             * Constructs a new Video.
             * @memberof openvk.v1
             * @classdesc Represents a Video.
             * @constructor
             * @param {openvk.v1.Video.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Video = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Video id.
             * @member {number|Long} id
             * @memberof openvk.v1.Video
             * @instance
             */
            Video.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Video media_id.
             * @member {number|Long|null|undefined} media_id
             * @memberof openvk.v1.Video
             * @instance
             */
            Video.prototype.media_id = null;

            /**
             * Video title.
             * @member {string} title
             * @memberof openvk.v1.Video
             * @instance
             */
            Video.prototype.title = "";

            /**
             * Video description.
             * @member {string|null|undefined} description
             * @memberof openvk.v1.Video
             * @instance
             */
            Video.prototype.description = null;

            /**
             * Video status.
             * @member {string} status
             * @memberof openvk.v1.Video
             * @instance
             */
            Video.prototype.status = "";

            /**
             * Video owner_user_id.
             * @member {number|Long} owner_user_id
             * @memberof openvk.v1.Video
             * @instance
             */
            Video.prototype.owner_user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Video src.
             * @member {string|null|undefined} src
             * @memberof openvk.v1.Video
             * @instance
             */
            Video.prototype.src = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Video.prototype, "_media_id", {
                get: $util.oneOfGetter($oneOfFields = ["media_id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Video.prototype, "_description", {
                get: $util.oneOfGetter($oneOfFields = ["description"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Video.prototype, "_src", {
                get: $util.oneOfGetter($oneOfFields = ["src"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Video instance using the specified properties.
             * @function create
             * @memberof openvk.v1.Video
             * @static
             * @param {openvk.v1.Video.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.Video} Video instance
             * @type {{
             *   (properties: openvk.v1.Video.$Shape): openvk.v1.Video & openvk.v1.Video.$Shape;
             *   (properties?: openvk.v1.Video.$Properties): openvk.v1.Video;
             * }}
             */
            Video.create = function(properties) {
                return new Video(properties);
            };

            /**
             * Encodes the specified Video message. Does not implicitly {@link openvk.v1.Video.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.Video
             * @static
             * @param {openvk.v1.Video.$Properties} message Video message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Video.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && (typeof message.id === "object" ? message.id.low || message.id.high : message.id !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.media_id != null && $Object.hasOwnProperty.call(message, "media_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.media_id);
                if (message.title != null && $Object.hasOwnProperty.call(message, "title") && message.title !== "")
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
                if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
                if (message.status != null && $Object.hasOwnProperty.call(message, "status") && message.status !== "")
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.status);
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id") && (typeof message.owner_user_id === "object" ? message.owner_user_id.low || message.owner_user_id.high : message.owner_user_id !== 0))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.owner_user_id);
                if (message.src != null && $Object.hasOwnProperty.call(message, "src"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.src);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Video message, length delimited. Does not implicitly {@link openvk.v1.Video.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.Video
             * @static
             * @param {openvk.v1.Video.$Properties} message Video message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Video.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Video message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.Video
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.Video & openvk.v1.Video.$Shape} Video
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Video.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.Video();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.media_id = reader.int64();
                            message._media_id = "media_id";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.title = value;
                            else
                                delete message.title;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.description = reader.stringVerify();
                            message._description = "description";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.status = value;
                            else
                                delete message.status;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.owner_user_id = value;
                            else
                                delete message.owner_user_id;
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.src = reader.stringVerify();
                            message._src = "src";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Video message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.Video
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.Video & openvk.v1.Video.$Shape} Video
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Video.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Video message.
             * @function verify
             * @memberof openvk.v1.Video
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Video.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.media_id != null && $Object.hasOwnProperty.call(message, "media_id")) {
                    properties._media_id = 1;
                    if (!$util.isInteger(message.media_id) && !(message.media_id && $util.isInteger(message.media_id.low) && $util.isInteger(message.media_id.high)))
                        return "media_id: integer|Long expected";
                }
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.description != null && $Object.hasOwnProperty.call(message, "description")) {
                    properties._description = 1;
                    if (!$util.isString(message.description))
                        return "description: string expected";
                }
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    if (!$util.isString(message.status))
                        return "status: string expected";
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id"))
                    if (!$util.isInteger(message.owner_user_id) && !(message.owner_user_id && $util.isInteger(message.owner_user_id.low) && $util.isInteger(message.owner_user_id.high)))
                        return "owner_user_id: integer|Long expected";
                if (message.src != null && $Object.hasOwnProperty.call(message, "src")) {
                    properties._src = 1;
                    if (!$util.isString(message.src))
                        return "src: string expected";
                }
                return null;
            };

            /**
             * Creates a Video message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.Video
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.Video} Video
             */
            Video.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.Video)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.Video: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.Video();
                if (object.id != null)
                    if (typeof object.id === "object" ? object.id.low || object.id.high : $Number(object.id) !== 0)
                        if ($util.Long)
                            message.id = $util.Long.fromValue(object.id, false);
                        else if (typeof object.id === "string")
                            message.id = $parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.media_id != null)
                    if ($util.Long)
                        message.media_id = $util.Long.fromValue(object.media_id, false);
                    else if (typeof object.media_id === "string")
                        message.media_id = $parseInt(object.media_id, 10);
                    else if (typeof object.media_id === "number")
                        message.media_id = object.media_id;
                    else if (typeof object.media_id === "object")
                        message.media_id = new $util.LongBits(object.media_id.low >>> 0, object.media_id.high >>> 0).toNumber();
                if (object.title != null)
                    if (typeof object.title !== "string" || object.title.length)
                        message.title = $String(object.title);
                if (object.description != null)
                    message.description = $String(object.description);
                if (object.status != null)
                    if (typeof object.status !== "string" || object.status.length)
                        message.status = $String(object.status);
                if (object.owner_user_id != null)
                    if (typeof object.owner_user_id === "object" ? object.owner_user_id.low || object.owner_user_id.high : $Number(object.owner_user_id) !== 0)
                        if ($util.Long)
                            message.owner_user_id = $util.Long.fromValue(object.owner_user_id, false);
                        else if (typeof object.owner_user_id === "string")
                            message.owner_user_id = $parseInt(object.owner_user_id, 10);
                        else if (typeof object.owner_user_id === "number")
                            message.owner_user_id = object.owner_user_id;
                        else if (typeof object.owner_user_id === "object")
                            message.owner_user_id = new $util.LongBits(object.owner_user_id.low >>> 0, object.owner_user_id.high >>> 0).toNumber();
                if (object.src != null)
                    message.src = $String(object.src);
                return message;
            };

            /**
             * Creates a plain object from a Video message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.Video
             * @static
             * @param {openvk.v1.Video} message Video
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Video.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.title = "";
                    object.status = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.owner_user_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.owner_user_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.id = typeof message.id === "number" ? $BigInt(message.id) : $util.Long.fromBits(message.id.low >>> 0, message.id.high >>> 0, false).toBigInt();
                    else if (typeof message.id === "number")
                        object.id = options.longs === $String ? $String(message.id) : message.id;
                    else
                        object.id = options.longs === $String ? $util.Long.prototype.toString.call(message.id) : options.longs === $Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.media_id != null && $Object.hasOwnProperty.call(message, "media_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.media_id = typeof message.media_id === "number" ? $BigInt(message.media_id) : $util.Long.fromBits(message.media_id.low >>> 0, message.media_id.high >>> 0, false).toBigInt();
                    else if (typeof message.media_id === "number")
                        object.media_id = options.longs === $String ? $String(message.media_id) : message.media_id;
                    else
                        object.media_id = options.longs === $String ? $util.Long.prototype.toString.call(message.media_id) : options.longs === $Number ? new $util.LongBits(message.media_id.low >>> 0, message.media_id.high >>> 0).toNumber() : message.media_id;
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    object.title = message.title;
                if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                    object.description = message.description;
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                if (message.owner_user_id != null && $Object.hasOwnProperty.call(message, "owner_user_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.owner_user_id = typeof message.owner_user_id === "number" ? $BigInt(message.owner_user_id) : $util.Long.fromBits(message.owner_user_id.low >>> 0, message.owner_user_id.high >>> 0, false).toBigInt();
                    else if (typeof message.owner_user_id === "number")
                        object.owner_user_id = options.longs === $String ? $String(message.owner_user_id) : message.owner_user_id;
                    else
                        object.owner_user_id = options.longs === $String ? $util.Long.prototype.toString.call(message.owner_user_id) : options.longs === $Number ? new $util.LongBits(message.owner_user_id.low >>> 0, message.owner_user_id.high >>> 0).toNumber() : message.owner_user_id;
                if (message.src != null && $Object.hasOwnProperty.call(message, "src"))
                    object.src = message.src;
                return object;
            };

            /**
             * Converts this Video to JSON.
             * @function toJSON
             * @memberof openvk.v1.Video
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Video.prototype.toJSON = function() {
                return Video.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Video
             * @function getTypeUrl
             * @memberof openvk.v1.Video
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Video.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.Video";
            };

            return Video;
        })();

        v1.VideoList = (function() {

            /**
             * Properties of a VideoList.
             * @typedef {Object} openvk.v1.VideoList.$Properties
             * @property {Array.<openvk.v1.Video.$Properties>|null} [videos] VideoList videos
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a VideoList.
             * @memberof openvk.v1
             * @interface IVideoList
             * @augments openvk.v1.VideoList.$Properties
             * @deprecated Use openvk.v1.VideoList.$Properties instead.
             */

            /**
             * Shape of a VideoList.
             * @typedef {openvk.v1.VideoList.$Properties} openvk.v1.VideoList.$Shape
             */

            /**
             * Constructs a new VideoList.
             * @memberof openvk.v1
             * @classdesc Represents a VideoList.
             * @constructor
             * @param {openvk.v1.VideoList.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const VideoList = function (properties) {
                this.videos = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * VideoList videos.
             * @member {Array.<openvk.v1.Video.$Properties>} videos
             * @memberof openvk.v1.VideoList
             * @instance
             */
            VideoList.prototype.videos = $util.emptyArray;

            /**
             * Creates a new VideoList instance using the specified properties.
             * @function create
             * @memberof openvk.v1.VideoList
             * @static
             * @param {openvk.v1.VideoList.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.VideoList} VideoList instance
             * @type {{
             *   (properties: openvk.v1.VideoList.$Shape): openvk.v1.VideoList & openvk.v1.VideoList.$Shape;
             *   (properties?: openvk.v1.VideoList.$Properties): openvk.v1.VideoList;
             * }}
             */
            VideoList.create = function(properties) {
                return new VideoList(properties);
            };

            /**
             * Encodes the specified VideoList message. Does not implicitly {@link openvk.v1.VideoList.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.VideoList
             * @static
             * @param {openvk.v1.VideoList.$Properties} message VideoList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VideoList.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.videos != null && message.videos.length)
                    for (let i = 0; i < message.videos.length; ++i)
                        $root.openvk.v1.Video.encode(message.videos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified VideoList message, length delimited. Does not implicitly {@link openvk.v1.VideoList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.VideoList
             * @static
             * @param {openvk.v1.VideoList.$Properties} message VideoList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VideoList.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a VideoList message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.VideoList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.VideoList & openvk.v1.VideoList.$Shape} VideoList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VideoList.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.VideoList();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.videos && message.videos.length))
                                message.videos = [];
                            message.videos.push($root.openvk.v1.Video.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a VideoList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.VideoList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.VideoList & openvk.v1.VideoList.$Shape} VideoList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VideoList.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VideoList message.
             * @function verify
             * @memberof openvk.v1.VideoList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VideoList.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.videos != null && $Object.hasOwnProperty.call(message, "videos")) {
                    if (!$Array.isArray(message.videos))
                        return "videos: array expected";
                    for (let i = 0; i < message.videos.length; ++i) {
                        let error = $root.openvk.v1.Video.verify(message.videos[i], _depth + 1);
                        if (error)
                            return "videos." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a VideoList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.VideoList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.VideoList} VideoList
             */
            VideoList.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.VideoList)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.VideoList: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.VideoList();
                if (object.videos) {
                    if (!$Array.isArray(object.videos))
                        throw $TypeError(".openvk.v1.VideoList.videos: array expected");
                    message.videos = $Array(object.videos.length);
                    for (let i = 0; i < object.videos.length; ++i) {
                        if (!$util.isObject(object.videos[i]))
                            throw $TypeError(".openvk.v1.VideoList.videos: object expected");
                        message.videos[i] = $root.openvk.v1.Video.fromObject(object.videos[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a VideoList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.VideoList
             * @static
             * @param {openvk.v1.VideoList} message VideoList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VideoList.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.videos = [];
                if (message.videos && message.videos.length) {
                    object.videos = $Array(message.videos.length);
                    for (let j = 0; j < message.videos.length; ++j)
                        object.videos[j] = $root.openvk.v1.Video.toObject(message.videos[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this VideoList to JSON.
             * @function toJSON
             * @memberof openvk.v1.VideoList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VideoList.prototype.toJSON = function() {
                return VideoList.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for VideoList
             * @function getTypeUrl
             * @memberof openvk.v1.VideoList
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            VideoList.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.VideoList";
            };

            return VideoList;
        })();

        v1.Group = (function() {

            /**
             * Properties of a Group.
             * @typedef {Object} openvk.v1.Group.$Properties
             * @property {number|Long|null} [id] Group id
             * @property {string|null} [slug] Group slug
             * @property {string|null} [name] Group name
             * @property {string|null} [about] Group about
             * @property {string|null} [kind] Group kind
             * @property {number|Long|null} [owner_id] Group owner_id
             * @property {string|null} [created_at] Group created_at
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Group.
             * @memberof openvk.v1
             * @interface IGroup
             * @augments openvk.v1.Group.$Properties
             * @deprecated Use openvk.v1.Group.$Properties instead.
             */

            /**
             * Shape of a Group.
             * @typedef {openvk.v1.Group.$Properties} openvk.v1.Group.$Shape
             */

            /**
             * Constructs a new Group.
             * @memberof openvk.v1
             * @classdesc Represents a Group.
             * @constructor
             * @param {openvk.v1.Group.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Group = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Group id.
             * @member {number|Long} id
             * @memberof openvk.v1.Group
             * @instance
             */
            Group.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Group slug.
             * @member {string} slug
             * @memberof openvk.v1.Group
             * @instance
             */
            Group.prototype.slug = "";

            /**
             * Group name.
             * @member {string} name
             * @memberof openvk.v1.Group
             * @instance
             */
            Group.prototype.name = "";

            /**
             * Group about.
             * @member {string|null|undefined} about
             * @memberof openvk.v1.Group
             * @instance
             */
            Group.prototype.about = null;

            /**
             * Group kind.
             * @member {string} kind
             * @memberof openvk.v1.Group
             * @instance
             */
            Group.prototype.kind = "";

            /**
             * Group owner_id.
             * @member {number|Long} owner_id
             * @memberof openvk.v1.Group
             * @instance
             */
            Group.prototype.owner_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Group created_at.
             * @member {string} created_at
             * @memberof openvk.v1.Group
             * @instance
             */
            Group.prototype.created_at = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Group.prototype, "_about", {
                get: $util.oneOfGetter($oneOfFields = ["about"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Group instance using the specified properties.
             * @function create
             * @memberof openvk.v1.Group
             * @static
             * @param {openvk.v1.Group.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.Group} Group instance
             * @type {{
             *   (properties: openvk.v1.Group.$Shape): openvk.v1.Group & openvk.v1.Group.$Shape;
             *   (properties?: openvk.v1.Group.$Properties): openvk.v1.Group;
             * }}
             */
            Group.create = function(properties) {
                return new Group(properties);
            };

            /**
             * Encodes the specified Group message. Does not implicitly {@link openvk.v1.Group.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.Group
             * @static
             * @param {openvk.v1.Group.$Properties} message Group message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Group.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && (typeof message.id === "object" ? message.id.low || message.id.high : message.id !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.slug != null && $Object.hasOwnProperty.call(message, "slug") && message.slug !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.slug);
                if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.about != null && $Object.hasOwnProperty.call(message, "about"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.about);
                if (message.kind != null && $Object.hasOwnProperty.call(message, "kind") && message.kind !== "")
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.kind);
                if (message.owner_id != null && $Object.hasOwnProperty.call(message, "owner_id") && (typeof message.owner_id === "object" ? message.owner_id.low || message.owner_id.high : message.owner_id !== 0))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.owner_id);
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at") && message.created_at !== "")
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.created_at);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Group message, length delimited. Does not implicitly {@link openvk.v1.Group.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.Group
             * @static
             * @param {openvk.v1.Group.$Properties} message Group message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Group.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Group message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.Group
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.Group & openvk.v1.Group.$Shape} Group
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Group.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.Group();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.slug = value;
                            else
                                delete message.slug;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.about = reader.stringVerify();
                            message._about = "about";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.kind = value;
                            else
                                delete message.kind;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.owner_id = value;
                            else
                                delete message.owner_id;
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.created_at = value;
                            else
                                delete message.created_at;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Group message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.Group
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.Group & openvk.v1.Group.$Shape} Group
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Group.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Group message.
             * @function verify
             * @memberof openvk.v1.Group
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Group.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.slug != null && $Object.hasOwnProperty.call(message, "slug"))
                    if (!$util.isString(message.slug))
                        return "slug: string expected";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.about != null && $Object.hasOwnProperty.call(message, "about")) {
                    properties._about = 1;
                    if (!$util.isString(message.about))
                        return "about: string expected";
                }
                if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                    if (!$util.isString(message.kind))
                        return "kind: string expected";
                if (message.owner_id != null && $Object.hasOwnProperty.call(message, "owner_id"))
                    if (!$util.isInteger(message.owner_id) && !(message.owner_id && $util.isInteger(message.owner_id.low) && $util.isInteger(message.owner_id.high)))
                        return "owner_id: integer|Long expected";
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    if (!$util.isString(message.created_at))
                        return "created_at: string expected";
                return null;
            };

            /**
             * Creates a Group message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.Group
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.Group} Group
             */
            Group.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.Group)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.Group: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.Group();
                if (object.id != null)
                    if (typeof object.id === "object" ? object.id.low || object.id.high : $Number(object.id) !== 0)
                        if ($util.Long)
                            message.id = $util.Long.fromValue(object.id, false);
                        else if (typeof object.id === "string")
                            message.id = $parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.slug != null)
                    if (typeof object.slug !== "string" || object.slug.length)
                        message.slug = $String(object.slug);
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = $String(object.name);
                if (object.about != null)
                    message.about = $String(object.about);
                if (object.kind != null)
                    if (typeof object.kind !== "string" || object.kind.length)
                        message.kind = $String(object.kind);
                if (object.owner_id != null)
                    if (typeof object.owner_id === "object" ? object.owner_id.low || object.owner_id.high : $Number(object.owner_id) !== 0)
                        if ($util.Long)
                            message.owner_id = $util.Long.fromValue(object.owner_id, false);
                        else if (typeof object.owner_id === "string")
                            message.owner_id = $parseInt(object.owner_id, 10);
                        else if (typeof object.owner_id === "number")
                            message.owner_id = object.owner_id;
                        else if (typeof object.owner_id === "object")
                            message.owner_id = new $util.LongBits(object.owner_id.low >>> 0, object.owner_id.high >>> 0).toNumber();
                if (object.created_at != null)
                    if (typeof object.created_at !== "string" || object.created_at.length)
                        message.created_at = $String(object.created_at);
                return message;
            };

            /**
             * Creates a plain object from a Group message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.Group
             * @static
             * @param {openvk.v1.Group} message Group
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Group.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.slug = "";
                    object.name = "";
                    object.kind = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.owner_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.owner_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.created_at = "";
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.id = typeof message.id === "number" ? $BigInt(message.id) : $util.Long.fromBits(message.id.low >>> 0, message.id.high >>> 0, false).toBigInt();
                    else if (typeof message.id === "number")
                        object.id = options.longs === $String ? $String(message.id) : message.id;
                    else
                        object.id = options.longs === $String ? $util.Long.prototype.toString.call(message.id) : options.longs === $Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.slug != null && $Object.hasOwnProperty.call(message, "slug"))
                    object.slug = message.slug;
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.about != null && $Object.hasOwnProperty.call(message, "about"))
                    object.about = message.about;
                if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                    object.kind = message.kind;
                if (message.owner_id != null && $Object.hasOwnProperty.call(message, "owner_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.owner_id = typeof message.owner_id === "number" ? $BigInt(message.owner_id) : $util.Long.fromBits(message.owner_id.low >>> 0, message.owner_id.high >>> 0, false).toBigInt();
                    else if (typeof message.owner_id === "number")
                        object.owner_id = options.longs === $String ? $String(message.owner_id) : message.owner_id;
                    else
                        object.owner_id = options.longs === $String ? $util.Long.prototype.toString.call(message.owner_id) : options.longs === $Number ? new $util.LongBits(message.owner_id.low >>> 0, message.owner_id.high >>> 0).toNumber() : message.owner_id;
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    object.created_at = message.created_at;
                return object;
            };

            /**
             * Converts this Group to JSON.
             * @function toJSON
             * @memberof openvk.v1.Group
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Group.prototype.toJSON = function() {
                return Group.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Group
             * @function getTypeUrl
             * @memberof openvk.v1.Group
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Group.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.Group";
            };

            return Group;
        })();

        v1.GroupList = (function() {

            /**
             * Properties of a GroupList.
             * @typedef {Object} openvk.v1.GroupList.$Properties
             * @property {Array.<openvk.v1.Group.$Properties>|null} [groups] GroupList groups
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a GroupList.
             * @memberof openvk.v1
             * @interface IGroupList
             * @augments openvk.v1.GroupList.$Properties
             * @deprecated Use openvk.v1.GroupList.$Properties instead.
             */

            /**
             * Shape of a GroupList.
             * @typedef {openvk.v1.GroupList.$Properties} openvk.v1.GroupList.$Shape
             */

            /**
             * Constructs a new GroupList.
             * @memberof openvk.v1
             * @classdesc Represents a GroupList.
             * @constructor
             * @param {openvk.v1.GroupList.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const GroupList = function (properties) {
                this.groups = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * GroupList groups.
             * @member {Array.<openvk.v1.Group.$Properties>} groups
             * @memberof openvk.v1.GroupList
             * @instance
             */
            GroupList.prototype.groups = $util.emptyArray;

            /**
             * Creates a new GroupList instance using the specified properties.
             * @function create
             * @memberof openvk.v1.GroupList
             * @static
             * @param {openvk.v1.GroupList.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.GroupList} GroupList instance
             * @type {{
             *   (properties: openvk.v1.GroupList.$Shape): openvk.v1.GroupList & openvk.v1.GroupList.$Shape;
             *   (properties?: openvk.v1.GroupList.$Properties): openvk.v1.GroupList;
             * }}
             */
            GroupList.create = function(properties) {
                return new GroupList(properties);
            };

            /**
             * Encodes the specified GroupList message. Does not implicitly {@link openvk.v1.GroupList.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.GroupList
             * @static
             * @param {openvk.v1.GroupList.$Properties} message GroupList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupList.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.groups != null && message.groups.length)
                    for (let i = 0; i < message.groups.length; ++i)
                        $root.openvk.v1.Group.encode(message.groups[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified GroupList message, length delimited. Does not implicitly {@link openvk.v1.GroupList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.GroupList
             * @static
             * @param {openvk.v1.GroupList.$Properties} message GroupList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupList.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a GroupList message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.GroupList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.GroupList & openvk.v1.GroupList.$Shape} GroupList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupList.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.GroupList();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.groups && message.groups.length))
                                message.groups = [];
                            message.groups.push($root.openvk.v1.Group.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a GroupList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.GroupList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.GroupList & openvk.v1.GroupList.$Shape} GroupList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupList.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GroupList message.
             * @function verify
             * @memberof openvk.v1.GroupList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GroupList.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.groups != null && $Object.hasOwnProperty.call(message, "groups")) {
                    if (!$Array.isArray(message.groups))
                        return "groups: array expected";
                    for (let i = 0; i < message.groups.length; ++i) {
                        let error = $root.openvk.v1.Group.verify(message.groups[i], _depth + 1);
                        if (error)
                            return "groups." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GroupList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.GroupList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.GroupList} GroupList
             */
            GroupList.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.GroupList)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.GroupList: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.GroupList();
                if (object.groups) {
                    if (!$Array.isArray(object.groups))
                        throw $TypeError(".openvk.v1.GroupList.groups: array expected");
                    message.groups = $Array(object.groups.length);
                    for (let i = 0; i < object.groups.length; ++i) {
                        if (!$util.isObject(object.groups[i]))
                            throw $TypeError(".openvk.v1.GroupList.groups: object expected");
                        message.groups[i] = $root.openvk.v1.Group.fromObject(object.groups[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GroupList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.GroupList
             * @static
             * @param {openvk.v1.GroupList} message GroupList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GroupList.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.groups = [];
                if (message.groups && message.groups.length) {
                    object.groups = $Array(message.groups.length);
                    for (let j = 0; j < message.groups.length; ++j)
                        object.groups[j] = $root.openvk.v1.Group.toObject(message.groups[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this GroupList to JSON.
             * @function toJSON
             * @memberof openvk.v1.GroupList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GroupList.prototype.toJSON = function() {
                return GroupList.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for GroupList
             * @function getTypeUrl
             * @memberof openvk.v1.GroupList
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            GroupList.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.GroupList";
            };

            return GroupList;
        })();

        v1.Notification = (function() {

            /**
             * Properties of a Notification.
             * @typedef {Object} openvk.v1.Notification.$Properties
             * @property {number|Long|null} [id] Notification id
             * @property {string|null} [kind] Notification kind
             * @property {number|Long|null} [actor_id] Notification actor_id
             * @property {string|null} [entity_type] Notification entity_type
             * @property {number|Long|null} [entity_id] Notification entity_id
             * @property {string|null} [payload_json] Notification payload_json
             * @property {string|null} [read_at] Notification read_at
             * @property {string|null} [created_at] Notification created_at
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Notification.
             * @memberof openvk.v1
             * @interface INotification
             * @augments openvk.v1.Notification.$Properties
             * @deprecated Use openvk.v1.Notification.$Properties instead.
             */

            /**
             * Shape of a Notification.
             * @typedef {openvk.v1.Notification.$Properties} openvk.v1.Notification.$Shape
             */

            /**
             * Constructs a new Notification.
             * @memberof openvk.v1
             * @classdesc Represents a Notification.
             * @constructor
             * @param {openvk.v1.Notification.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Notification = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Notification id.
             * @member {number|Long} id
             * @memberof openvk.v1.Notification
             * @instance
             */
            Notification.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Notification kind.
             * @member {string} kind
             * @memberof openvk.v1.Notification
             * @instance
             */
            Notification.prototype.kind = "";

            /**
             * Notification actor_id.
             * @member {number|Long|null|undefined} actor_id
             * @memberof openvk.v1.Notification
             * @instance
             */
            Notification.prototype.actor_id = null;

            /**
             * Notification entity_type.
             * @member {string|null|undefined} entity_type
             * @memberof openvk.v1.Notification
             * @instance
             */
            Notification.prototype.entity_type = null;

            /**
             * Notification entity_id.
             * @member {number|Long|null|undefined} entity_id
             * @memberof openvk.v1.Notification
             * @instance
             */
            Notification.prototype.entity_id = null;

            /**
             * Notification payload_json.
             * @member {string} payload_json
             * @memberof openvk.v1.Notification
             * @instance
             */
            Notification.prototype.payload_json = "";

            /**
             * Notification read_at.
             * @member {string|null|undefined} read_at
             * @memberof openvk.v1.Notification
             * @instance
             */
            Notification.prototype.read_at = null;

            /**
             * Notification created_at.
             * @member {string} created_at
             * @memberof openvk.v1.Notification
             * @instance
             */
            Notification.prototype.created_at = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Notification.prototype, "_actor_id", {
                get: $util.oneOfGetter($oneOfFields = ["actor_id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Notification.prototype, "_entity_type", {
                get: $util.oneOfGetter($oneOfFields = ["entity_type"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Notification.prototype, "_entity_id", {
                get: $util.oneOfGetter($oneOfFields = ["entity_id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Notification.prototype, "_read_at", {
                get: $util.oneOfGetter($oneOfFields = ["read_at"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Notification instance using the specified properties.
             * @function create
             * @memberof openvk.v1.Notification
             * @static
             * @param {openvk.v1.Notification.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.Notification} Notification instance
             * @type {{
             *   (properties: openvk.v1.Notification.$Shape): openvk.v1.Notification & openvk.v1.Notification.$Shape;
             *   (properties?: openvk.v1.Notification.$Properties): openvk.v1.Notification;
             * }}
             */
            Notification.create = function(properties) {
                return new Notification(properties);
            };

            /**
             * Encodes the specified Notification message. Does not implicitly {@link openvk.v1.Notification.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.Notification
             * @static
             * @param {openvk.v1.Notification.$Properties} message Notification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Notification.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && (typeof message.id === "object" ? message.id.low || message.id.high : message.id !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.kind != null && $Object.hasOwnProperty.call(message, "kind") && message.kind !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.kind);
                if (message.actor_id != null && $Object.hasOwnProperty.call(message, "actor_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.actor_id);
                if (message.entity_type != null && $Object.hasOwnProperty.call(message, "entity_type"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.entity_type);
                if (message.entity_id != null && $Object.hasOwnProperty.call(message, "entity_id"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.entity_id);
                if (message.payload_json != null && $Object.hasOwnProperty.call(message, "payload_json") && message.payload_json !== "")
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.payload_json);
                if (message.read_at != null && $Object.hasOwnProperty.call(message, "read_at"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.read_at);
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at") && message.created_at !== "")
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.created_at);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Notification message, length delimited. Does not implicitly {@link openvk.v1.Notification.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.Notification
             * @static
             * @param {openvk.v1.Notification.$Properties} message Notification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Notification.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.Notification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.Notification & openvk.v1.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Notification.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.Notification();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.kind = value;
                            else
                                delete message.kind;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.actor_id = reader.int64();
                            message._actor_id = "actor_id";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.entity_type = reader.stringVerify();
                            message._entity_type = "entity_type";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.entity_id = reader.int64();
                            message._entity_id = "entity_id";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.payload_json = value;
                            else
                                delete message.payload_json;
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.read_at = reader.stringVerify();
                            message._read_at = "read_at";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.created_at = value;
                            else
                                delete message.created_at;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Notification message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.Notification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.Notification & openvk.v1.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Notification.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Notification message.
             * @function verify
             * @memberof openvk.v1.Notification
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Notification.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                    if (!$util.isString(message.kind))
                        return "kind: string expected";
                if (message.actor_id != null && $Object.hasOwnProperty.call(message, "actor_id")) {
                    properties._actor_id = 1;
                    if (!$util.isInteger(message.actor_id) && !(message.actor_id && $util.isInteger(message.actor_id.low) && $util.isInteger(message.actor_id.high)))
                        return "actor_id: integer|Long expected";
                }
                if (message.entity_type != null && $Object.hasOwnProperty.call(message, "entity_type")) {
                    properties._entity_type = 1;
                    if (!$util.isString(message.entity_type))
                        return "entity_type: string expected";
                }
                if (message.entity_id != null && $Object.hasOwnProperty.call(message, "entity_id")) {
                    properties._entity_id = 1;
                    if (!$util.isInteger(message.entity_id) && !(message.entity_id && $util.isInteger(message.entity_id.low) && $util.isInteger(message.entity_id.high)))
                        return "entity_id: integer|Long expected";
                }
                if (message.payload_json != null && $Object.hasOwnProperty.call(message, "payload_json"))
                    if (!$util.isString(message.payload_json))
                        return "payload_json: string expected";
                if (message.read_at != null && $Object.hasOwnProperty.call(message, "read_at")) {
                    properties._read_at = 1;
                    if (!$util.isString(message.read_at))
                        return "read_at: string expected";
                }
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    if (!$util.isString(message.created_at))
                        return "created_at: string expected";
                return null;
            };

            /**
             * Creates a Notification message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.Notification
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.Notification} Notification
             */
            Notification.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.Notification)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.Notification: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.Notification();
                if (object.id != null)
                    if (typeof object.id === "object" ? object.id.low || object.id.high : $Number(object.id) !== 0)
                        if ($util.Long)
                            message.id = $util.Long.fromValue(object.id, false);
                        else if (typeof object.id === "string")
                            message.id = $parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.kind != null)
                    if (typeof object.kind !== "string" || object.kind.length)
                        message.kind = $String(object.kind);
                if (object.actor_id != null)
                    if ($util.Long)
                        message.actor_id = $util.Long.fromValue(object.actor_id, false);
                    else if (typeof object.actor_id === "string")
                        message.actor_id = $parseInt(object.actor_id, 10);
                    else if (typeof object.actor_id === "number")
                        message.actor_id = object.actor_id;
                    else if (typeof object.actor_id === "object")
                        message.actor_id = new $util.LongBits(object.actor_id.low >>> 0, object.actor_id.high >>> 0).toNumber();
                if (object.entity_type != null)
                    message.entity_type = $String(object.entity_type);
                if (object.entity_id != null)
                    if ($util.Long)
                        message.entity_id = $util.Long.fromValue(object.entity_id, false);
                    else if (typeof object.entity_id === "string")
                        message.entity_id = $parseInt(object.entity_id, 10);
                    else if (typeof object.entity_id === "number")
                        message.entity_id = object.entity_id;
                    else if (typeof object.entity_id === "object")
                        message.entity_id = new $util.LongBits(object.entity_id.low >>> 0, object.entity_id.high >>> 0).toNumber();
                if (object.payload_json != null)
                    if (typeof object.payload_json !== "string" || object.payload_json.length)
                        message.payload_json = $String(object.payload_json);
                if (object.read_at != null)
                    message.read_at = $String(object.read_at);
                if (object.created_at != null)
                    if (typeof object.created_at !== "string" || object.created_at.length)
                        message.created_at = $String(object.created_at);
                return message;
            };

            /**
             * Creates a plain object from a Notification message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.Notification
             * @static
             * @param {openvk.v1.Notification} message Notification
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Notification.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.kind = "";
                    object.payload_json = "";
                    object.created_at = "";
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.id = typeof message.id === "number" ? $BigInt(message.id) : $util.Long.fromBits(message.id.low >>> 0, message.id.high >>> 0, false).toBigInt();
                    else if (typeof message.id === "number")
                        object.id = options.longs === $String ? $String(message.id) : message.id;
                    else
                        object.id = options.longs === $String ? $util.Long.prototype.toString.call(message.id) : options.longs === $Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                    object.kind = message.kind;
                if (message.actor_id != null && $Object.hasOwnProperty.call(message, "actor_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.actor_id = typeof message.actor_id === "number" ? $BigInt(message.actor_id) : $util.Long.fromBits(message.actor_id.low >>> 0, message.actor_id.high >>> 0, false).toBigInt();
                    else if (typeof message.actor_id === "number")
                        object.actor_id = options.longs === $String ? $String(message.actor_id) : message.actor_id;
                    else
                        object.actor_id = options.longs === $String ? $util.Long.prototype.toString.call(message.actor_id) : options.longs === $Number ? new $util.LongBits(message.actor_id.low >>> 0, message.actor_id.high >>> 0).toNumber() : message.actor_id;
                if (message.entity_type != null && $Object.hasOwnProperty.call(message, "entity_type"))
                    object.entity_type = message.entity_type;
                if (message.entity_id != null && $Object.hasOwnProperty.call(message, "entity_id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.entity_id = typeof message.entity_id === "number" ? $BigInt(message.entity_id) : $util.Long.fromBits(message.entity_id.low >>> 0, message.entity_id.high >>> 0, false).toBigInt();
                    else if (typeof message.entity_id === "number")
                        object.entity_id = options.longs === $String ? $String(message.entity_id) : message.entity_id;
                    else
                        object.entity_id = options.longs === $String ? $util.Long.prototype.toString.call(message.entity_id) : options.longs === $Number ? new $util.LongBits(message.entity_id.low >>> 0, message.entity_id.high >>> 0).toNumber() : message.entity_id;
                if (message.payload_json != null && $Object.hasOwnProperty.call(message, "payload_json"))
                    object.payload_json = message.payload_json;
                if (message.read_at != null && $Object.hasOwnProperty.call(message, "read_at"))
                    object.read_at = message.read_at;
                if (message.created_at != null && $Object.hasOwnProperty.call(message, "created_at"))
                    object.created_at = message.created_at;
                return object;
            };

            /**
             * Converts this Notification to JSON.
             * @function toJSON
             * @memberof openvk.v1.Notification
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Notification.prototype.toJSON = function() {
                return Notification.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Notification
             * @function getTypeUrl
             * @memberof openvk.v1.Notification
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Notification.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.Notification";
            };

            return Notification;
        })();

        v1.NotificationList = (function() {

            /**
             * Properties of a NotificationList.
             * @typedef {Object} openvk.v1.NotificationList.$Properties
             * @property {Array.<openvk.v1.Notification.$Properties>|null} [notifications] NotificationList notifications
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a NotificationList.
             * @memberof openvk.v1
             * @interface INotificationList
             * @augments openvk.v1.NotificationList.$Properties
             * @deprecated Use openvk.v1.NotificationList.$Properties instead.
             */

            /**
             * Shape of a NotificationList.
             * @typedef {openvk.v1.NotificationList.$Properties} openvk.v1.NotificationList.$Shape
             */

            /**
             * Constructs a new NotificationList.
             * @memberof openvk.v1
             * @classdesc Represents a NotificationList.
             * @constructor
             * @param {openvk.v1.NotificationList.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const NotificationList = function (properties) {
                this.notifications = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * NotificationList notifications.
             * @member {Array.<openvk.v1.Notification.$Properties>} notifications
             * @memberof openvk.v1.NotificationList
             * @instance
             */
            NotificationList.prototype.notifications = $util.emptyArray;

            /**
             * Creates a new NotificationList instance using the specified properties.
             * @function create
             * @memberof openvk.v1.NotificationList
             * @static
             * @param {openvk.v1.NotificationList.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.NotificationList} NotificationList instance
             * @type {{
             *   (properties: openvk.v1.NotificationList.$Shape): openvk.v1.NotificationList & openvk.v1.NotificationList.$Shape;
             *   (properties?: openvk.v1.NotificationList.$Properties): openvk.v1.NotificationList;
             * }}
             */
            NotificationList.create = function(properties) {
                return new NotificationList(properties);
            };

            /**
             * Encodes the specified NotificationList message. Does not implicitly {@link openvk.v1.NotificationList.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.NotificationList
             * @static
             * @param {openvk.v1.NotificationList.$Properties} message NotificationList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotificationList.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.notifications != null && message.notifications.length)
                    for (let i = 0; i < message.notifications.length; ++i)
                        $root.openvk.v1.Notification.encode(message.notifications[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified NotificationList message, length delimited. Does not implicitly {@link openvk.v1.NotificationList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.NotificationList
             * @static
             * @param {openvk.v1.NotificationList.$Properties} message NotificationList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotificationList.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a NotificationList message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.NotificationList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.NotificationList & openvk.v1.NotificationList.$Shape} NotificationList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotificationList.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.NotificationList();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.notifications && message.notifications.length))
                                message.notifications = [];
                            message.notifications.push($root.openvk.v1.Notification.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a NotificationList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.NotificationList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.NotificationList & openvk.v1.NotificationList.$Shape} NotificationList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotificationList.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NotificationList message.
             * @function verify
             * @memberof openvk.v1.NotificationList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NotificationList.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.notifications != null && $Object.hasOwnProperty.call(message, "notifications")) {
                    if (!$Array.isArray(message.notifications))
                        return "notifications: array expected";
                    for (let i = 0; i < message.notifications.length; ++i) {
                        let error = $root.openvk.v1.Notification.verify(message.notifications[i], _depth + 1);
                        if (error)
                            return "notifications." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a NotificationList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.NotificationList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.NotificationList} NotificationList
             */
            NotificationList.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.NotificationList)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.NotificationList: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.NotificationList();
                if (object.notifications) {
                    if (!$Array.isArray(object.notifications))
                        throw $TypeError(".openvk.v1.NotificationList.notifications: array expected");
                    message.notifications = $Array(object.notifications.length);
                    for (let i = 0; i < object.notifications.length; ++i) {
                        if (!$util.isObject(object.notifications[i]))
                            throw $TypeError(".openvk.v1.NotificationList.notifications: object expected");
                        message.notifications[i] = $root.openvk.v1.Notification.fromObject(object.notifications[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a NotificationList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.NotificationList
             * @static
             * @param {openvk.v1.NotificationList} message NotificationList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotificationList.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.notifications = [];
                if (message.notifications && message.notifications.length) {
                    object.notifications = $Array(message.notifications.length);
                    for (let j = 0; j < message.notifications.length; ++j)
                        object.notifications[j] = $root.openvk.v1.Notification.toObject(message.notifications[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this NotificationList to JSON.
             * @function toJSON
             * @memberof openvk.v1.NotificationList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NotificationList.prototype.toJSON = function() {
                return NotificationList.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for NotificationList
             * @function getTypeUrl
             * @memberof openvk.v1.NotificationList
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            NotificationList.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.NotificationList";
            };

            return NotificationList;
        })();

        v1.SocketEvent = (function() {

            /**
             * Properties of a SocketEvent.
             * @typedef {Object} openvk.v1.SocketEvent.$Properties
             * @property {string|null} [type] SocketEvent type
             * @property {number|Long|null} [ts] SocketEvent ts
             * @property {string|null} [payload] SocketEvent payload
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SocketEvent.
             * @memberof openvk.v1
             * @interface ISocketEvent
             * @augments openvk.v1.SocketEvent.$Properties
             * @deprecated Use openvk.v1.SocketEvent.$Properties instead.
             */

            /**
             * Shape of a SocketEvent.
             * @typedef {openvk.v1.SocketEvent.$Properties} openvk.v1.SocketEvent.$Shape
             */

            /**
             * Constructs a new SocketEvent.
             * @memberof openvk.v1
             * @classdesc Represents a SocketEvent.
             * @constructor
             * @param {openvk.v1.SocketEvent.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SocketEvent = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SocketEvent type.
             * @member {string} type
             * @memberof openvk.v1.SocketEvent
             * @instance
             */
            SocketEvent.prototype.type = "";

            /**
             * SocketEvent ts.
             * @member {number|Long} ts
             * @memberof openvk.v1.SocketEvent
             * @instance
             */
            SocketEvent.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SocketEvent payload.
             * @member {string} payload
             * @memberof openvk.v1.SocketEvent
             * @instance
             */
            SocketEvent.prototype.payload = "";

            /**
             * Creates a new SocketEvent instance using the specified properties.
             * @function create
             * @memberof openvk.v1.SocketEvent
             * @static
             * @param {openvk.v1.SocketEvent.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.SocketEvent} SocketEvent instance
             * @type {{
             *   (properties: openvk.v1.SocketEvent.$Shape): openvk.v1.SocketEvent & openvk.v1.SocketEvent.$Shape;
             *   (properties?: openvk.v1.SocketEvent.$Properties): openvk.v1.SocketEvent;
             * }}
             */
            SocketEvent.create = function(properties) {
                return new SocketEvent(properties);
            };

            /**
             * Encodes the specified SocketEvent message. Does not implicitly {@link openvk.v1.SocketEvent.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.SocketEvent
             * @static
             * @param {openvk.v1.SocketEvent.$Properties} message SocketEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SocketEvent.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.type != null && $Object.hasOwnProperty.call(message, "type") && message.type !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.ts != null && $Object.hasOwnProperty.call(message, "ts") && (typeof message.ts === "object" ? message.ts.low || message.ts.high : message.ts !== 0))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.ts);
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload") && message.payload !== "")
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.payload);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SocketEvent message, length delimited. Does not implicitly {@link openvk.v1.SocketEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.SocketEvent
             * @static
             * @param {openvk.v1.SocketEvent.$Properties} message SocketEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SocketEvent.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SocketEvent message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.SocketEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.SocketEvent & openvk.v1.SocketEvent.$Shape} SocketEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SocketEvent.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.SocketEvent();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.type = value;
                            else
                                delete message.type;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.ts = value;
                            else
                                delete message.ts;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.payload = value;
                            else
                                delete message.payload;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a SocketEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.SocketEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.SocketEvent & openvk.v1.SocketEvent.$Shape} SocketEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SocketEvent.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SocketEvent message.
             * @function verify
             * @memberof openvk.v1.SocketEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SocketEvent.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.ts != null && $Object.hasOwnProperty.call(message, "ts"))
                    if (!$util.isInteger(message.ts) && !(message.ts && $util.isInteger(message.ts.low) && $util.isInteger(message.ts.high)))
                        return "ts: integer|Long expected";
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                    if (!$util.isString(message.payload))
                        return "payload: string expected";
                return null;
            };

            /**
             * Creates a SocketEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.SocketEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.SocketEvent} SocketEvent
             */
            SocketEvent.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.SocketEvent)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.SocketEvent: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.SocketEvent();
                if (object.type != null)
                    if (typeof object.type !== "string" || object.type.length)
                        message.type = $String(object.type);
                if (object.ts != null)
                    if (typeof object.ts === "object" ? object.ts.low || object.ts.high : $Number(object.ts) !== 0)
                        if ($util.Long)
                            message.ts = $util.Long.fromValue(object.ts, false);
                        else if (typeof object.ts === "string")
                            message.ts = $parseInt(object.ts, 10);
                        else if (typeof object.ts === "number")
                            message.ts = object.ts;
                        else if (typeof object.ts === "object")
                            message.ts = new $util.LongBits(object.ts.low >>> 0, object.ts.high >>> 0).toNumber();
                if (object.payload != null)
                    if (typeof object.payload !== "string" || object.payload.length)
                        message.payload = $String(object.payload);
                return message;
            };

            /**
             * Creates a plain object from a SocketEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.SocketEvent
             * @static
             * @param {openvk.v1.SocketEvent} message SocketEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SocketEvent.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.type = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.ts = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.ts = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.payload = "";
                }
                if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                    object.type = message.type;
                if (message.ts != null && $Object.hasOwnProperty.call(message, "ts"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.ts = typeof message.ts === "number" ? $BigInt(message.ts) : $util.Long.fromBits(message.ts.low >>> 0, message.ts.high >>> 0, false).toBigInt();
                    else if (typeof message.ts === "number")
                        object.ts = options.longs === $String ? $String(message.ts) : message.ts;
                    else
                        object.ts = options.longs === $String ? $util.Long.prototype.toString.call(message.ts) : options.longs === $Number ? new $util.LongBits(message.ts.low >>> 0, message.ts.high >>> 0).toNumber() : message.ts;
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                    object.payload = message.payload;
                return object;
            };

            /**
             * Converts this SocketEvent to JSON.
             * @function toJSON
             * @memberof openvk.v1.SocketEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SocketEvent.prototype.toJSON = function() {
                return SocketEvent.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SocketEvent
             * @function getTypeUrl
             * @memberof openvk.v1.SocketEvent
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SocketEvent.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.SocketEvent";
            };

            return SocketEvent;
        })();

        v1.PopularGroup = (function() {

            /**
             * Properties of a PopularGroup.
             * @typedef {Object} openvk.v1.PopularGroup.$Properties
             * @property {number|Long|null} [id] PopularGroup id
             * @property {string|null} [name] PopularGroup name
             * @property {number|Long|null} [members] PopularGroup members
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PopularGroup.
             * @memberof openvk.v1
             * @interface IPopularGroup
             * @augments openvk.v1.PopularGroup.$Properties
             * @deprecated Use openvk.v1.PopularGroup.$Properties instead.
             */

            /**
             * Shape of a PopularGroup.
             * @typedef {openvk.v1.PopularGroup.$Properties} openvk.v1.PopularGroup.$Shape
             */

            /**
             * Constructs a new PopularGroup.
             * @memberof openvk.v1
             * @classdesc Represents a PopularGroup.
             * @constructor
             * @param {openvk.v1.PopularGroup.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PopularGroup = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PopularGroup id.
             * @member {number|Long} id
             * @memberof openvk.v1.PopularGroup
             * @instance
             */
            PopularGroup.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PopularGroup name.
             * @member {string} name
             * @memberof openvk.v1.PopularGroup
             * @instance
             */
            PopularGroup.prototype.name = "";

            /**
             * PopularGroup members.
             * @member {number|Long} members
             * @memberof openvk.v1.PopularGroup
             * @instance
             */
            PopularGroup.prototype.members = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new PopularGroup instance using the specified properties.
             * @function create
             * @memberof openvk.v1.PopularGroup
             * @static
             * @param {openvk.v1.PopularGroup.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.PopularGroup} PopularGroup instance
             * @type {{
             *   (properties: openvk.v1.PopularGroup.$Shape): openvk.v1.PopularGroup & openvk.v1.PopularGroup.$Shape;
             *   (properties?: openvk.v1.PopularGroup.$Properties): openvk.v1.PopularGroup;
             * }}
             */
            PopularGroup.create = function(properties) {
                return new PopularGroup(properties);
            };

            /**
             * Encodes the specified PopularGroup message. Does not implicitly {@link openvk.v1.PopularGroup.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.PopularGroup
             * @static
             * @param {openvk.v1.PopularGroup.$Properties} message PopularGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PopularGroup.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id") && (typeof message.id === "object" ? message.id.low || message.id.high : message.id !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.members != null && $Object.hasOwnProperty.call(message, "members") && (typeof message.members === "object" ? message.members.low || message.members.high : message.members !== 0))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.members);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PopularGroup message, length delimited. Does not implicitly {@link openvk.v1.PopularGroup.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.PopularGroup
             * @static
             * @param {openvk.v1.PopularGroup.$Properties} message PopularGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PopularGroup.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a PopularGroup message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.PopularGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.PopularGroup & openvk.v1.PopularGroup.$Shape} PopularGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PopularGroup.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.PopularGroup();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.members = value;
                            else
                                delete message.members;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a PopularGroup message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.PopularGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.PopularGroup & openvk.v1.PopularGroup.$Shape} PopularGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PopularGroup.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PopularGroup message.
             * @function verify
             * @memberof openvk.v1.PopularGroup
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PopularGroup.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.members != null && $Object.hasOwnProperty.call(message, "members"))
                    if (!$util.isInteger(message.members) && !(message.members && $util.isInteger(message.members.low) && $util.isInteger(message.members.high)))
                        return "members: integer|Long expected";
                return null;
            };

            /**
             * Creates a PopularGroup message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.PopularGroup
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.PopularGroup} PopularGroup
             */
            PopularGroup.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.PopularGroup)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.PopularGroup: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.PopularGroup();
                if (object.id != null)
                    if (typeof object.id === "object" ? object.id.low || object.id.high : $Number(object.id) !== 0)
                        if ($util.Long)
                            message.id = $util.Long.fromValue(object.id, false);
                        else if (typeof object.id === "string")
                            message.id = $parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = $String(object.name);
                if (object.members != null)
                    if (typeof object.members === "object" ? object.members.low || object.members.high : $Number(object.members) !== 0)
                        if ($util.Long)
                            message.members = $util.Long.fromValue(object.members, false);
                        else if (typeof object.members === "string")
                            message.members = $parseInt(object.members, 10);
                        else if (typeof object.members === "number")
                            message.members = object.members;
                        else if (typeof object.members === "object")
                            message.members = new $util.LongBits(object.members.low >>> 0, object.members.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a PopularGroup message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.PopularGroup
             * @static
             * @param {openvk.v1.PopularGroup} message PopularGroup
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PopularGroup.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.name = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.members = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.members = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.id = typeof message.id === "number" ? $BigInt(message.id) : $util.Long.fromBits(message.id.low >>> 0, message.id.high >>> 0, false).toBigInt();
                    else if (typeof message.id === "number")
                        object.id = options.longs === $String ? $String(message.id) : message.id;
                    else
                        object.id = options.longs === $String ? $util.Long.prototype.toString.call(message.id) : options.longs === $Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.members != null && $Object.hasOwnProperty.call(message, "members"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.members = typeof message.members === "number" ? $BigInt(message.members) : $util.Long.fromBits(message.members.low >>> 0, message.members.high >>> 0, false).toBigInt();
                    else if (typeof message.members === "number")
                        object.members = options.longs === $String ? $String(message.members) : message.members;
                    else
                        object.members = options.longs === $String ? $util.Long.prototype.toString.call(message.members) : options.longs === $Number ? new $util.LongBits(message.members.low >>> 0, message.members.high >>> 0).toNumber() : message.members;
                return object;
            };

            /**
             * Converts this PopularGroup to JSON.
             * @function toJSON
             * @memberof openvk.v1.PopularGroup
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PopularGroup.prototype.toJSON = function() {
                return PopularGroup.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PopularGroup
             * @function getTypeUrl
             * @memberof openvk.v1.PopularGroup
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PopularGroup.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.PopularGroup";
            };

            return PopularGroup;
        })();

        v1.InstanceAbout = (function() {

            /**
             * Properties of an InstanceAbout.
             * @typedef {Object} openvk.v1.InstanceAbout.$Properties
             * @property {number|Long|null} [users] InstanceAbout users
             * @property {number|Long|null} [online_users] InstanceAbout online_users
             * @property {number|Long|null} [active_users] InstanceAbout active_users
             * @property {number|Long|null} [groups] InstanceAbout groups
             * @property {number|Long|null} [wall_posts] InstanceAbout wall_posts
             * @property {Array.<openvk.v1.PopularGroup.$Properties>|null} [popular_groups] InstanceAbout popular_groups
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an InstanceAbout.
             * @memberof openvk.v1
             * @interface IInstanceAbout
             * @augments openvk.v1.InstanceAbout.$Properties
             * @deprecated Use openvk.v1.InstanceAbout.$Properties instead.
             */

            /**
             * Shape of an InstanceAbout.
             * @typedef {openvk.v1.InstanceAbout.$Properties} openvk.v1.InstanceAbout.$Shape
             */

            /**
             * Constructs a new InstanceAbout.
             * @memberof openvk.v1
             * @classdesc Represents an InstanceAbout.
             * @constructor
             * @param {openvk.v1.InstanceAbout.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const InstanceAbout = function (properties) {
                this.popular_groups = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * InstanceAbout users.
             * @member {number|Long} users
             * @memberof openvk.v1.InstanceAbout
             * @instance
             */
            InstanceAbout.prototype.users = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * InstanceAbout online_users.
             * @member {number|Long} online_users
             * @memberof openvk.v1.InstanceAbout
             * @instance
             */
            InstanceAbout.prototype.online_users = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * InstanceAbout active_users.
             * @member {number|Long} active_users
             * @memberof openvk.v1.InstanceAbout
             * @instance
             */
            InstanceAbout.prototype.active_users = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * InstanceAbout groups.
             * @member {number|Long} groups
             * @memberof openvk.v1.InstanceAbout
             * @instance
             */
            InstanceAbout.prototype.groups = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * InstanceAbout wall_posts.
             * @member {number|Long} wall_posts
             * @memberof openvk.v1.InstanceAbout
             * @instance
             */
            InstanceAbout.prototype.wall_posts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * InstanceAbout popular_groups.
             * @member {Array.<openvk.v1.PopularGroup.$Properties>} popular_groups
             * @memberof openvk.v1.InstanceAbout
             * @instance
             */
            InstanceAbout.prototype.popular_groups = $util.emptyArray;

            /**
             * Creates a new InstanceAbout instance using the specified properties.
             * @function create
             * @memberof openvk.v1.InstanceAbout
             * @static
             * @param {openvk.v1.InstanceAbout.$Properties=} [properties] Properties to set
             * @returns {openvk.v1.InstanceAbout} InstanceAbout instance
             * @type {{
             *   (properties: openvk.v1.InstanceAbout.$Shape): openvk.v1.InstanceAbout & openvk.v1.InstanceAbout.$Shape;
             *   (properties?: openvk.v1.InstanceAbout.$Properties): openvk.v1.InstanceAbout;
             * }}
             */
            InstanceAbout.create = function(properties) {
                return new InstanceAbout(properties);
            };

            /**
             * Encodes the specified InstanceAbout message. Does not implicitly {@link openvk.v1.InstanceAbout.verify|verify} messages.
             * @function encode
             * @memberof openvk.v1.InstanceAbout
             * @static
             * @param {openvk.v1.InstanceAbout.$Properties} message InstanceAbout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InstanceAbout.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.users != null && $Object.hasOwnProperty.call(message, "users") && (typeof message.users === "object" ? message.users.low || message.users.high : message.users !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.users);
                if (message.online_users != null && $Object.hasOwnProperty.call(message, "online_users") && (typeof message.online_users === "object" ? message.online_users.low || message.online_users.high : message.online_users !== 0))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.online_users);
                if (message.active_users != null && $Object.hasOwnProperty.call(message, "active_users") && (typeof message.active_users === "object" ? message.active_users.low || message.active_users.high : message.active_users !== 0))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.active_users);
                if (message.groups != null && $Object.hasOwnProperty.call(message, "groups") && (typeof message.groups === "object" ? message.groups.low || message.groups.high : message.groups !== 0))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.groups);
                if (message.wall_posts != null && $Object.hasOwnProperty.call(message, "wall_posts") && (typeof message.wall_posts === "object" ? message.wall_posts.low || message.wall_posts.high : message.wall_posts !== 0))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.wall_posts);
                if (message.popular_groups != null && message.popular_groups.length)
                    for (let i = 0; i < message.popular_groups.length; ++i)
                        $root.openvk.v1.PopularGroup.encode(message.popular_groups[i], writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified InstanceAbout message, length delimited. Does not implicitly {@link openvk.v1.InstanceAbout.verify|verify} messages.
             * @function encodeDelimited
             * @memberof openvk.v1.InstanceAbout
             * @static
             * @param {openvk.v1.InstanceAbout.$Properties} message InstanceAbout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InstanceAbout.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an InstanceAbout message from the specified reader or buffer.
             * @function decode
             * @memberof openvk.v1.InstanceAbout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {openvk.v1.InstanceAbout & openvk.v1.InstanceAbout.$Shape} InstanceAbout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InstanceAbout.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.openvk.v1.InstanceAbout();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.users = value;
                            else
                                delete message.users;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.online_users = value;
                            else
                                delete message.online_users;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.active_users = value;
                            else
                                delete message.active_users;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.groups = value;
                            else
                                delete message.groups;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.wall_posts = value;
                            else
                                delete message.wall_posts;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            if (!(message.popular_groups && message.popular_groups.length))
                                message.popular_groups = [];
                            message.popular_groups.push($root.openvk.v1.PopularGroup.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an InstanceAbout message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof openvk.v1.InstanceAbout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {openvk.v1.InstanceAbout & openvk.v1.InstanceAbout.$Shape} InstanceAbout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InstanceAbout.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InstanceAbout message.
             * @function verify
             * @memberof openvk.v1.InstanceAbout
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InstanceAbout.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.users != null && $Object.hasOwnProperty.call(message, "users"))
                    if (!$util.isInteger(message.users) && !(message.users && $util.isInteger(message.users.low) && $util.isInteger(message.users.high)))
                        return "users: integer|Long expected";
                if (message.online_users != null && $Object.hasOwnProperty.call(message, "online_users"))
                    if (!$util.isInteger(message.online_users) && !(message.online_users && $util.isInteger(message.online_users.low) && $util.isInteger(message.online_users.high)))
                        return "online_users: integer|Long expected";
                if (message.active_users != null && $Object.hasOwnProperty.call(message, "active_users"))
                    if (!$util.isInteger(message.active_users) && !(message.active_users && $util.isInteger(message.active_users.low) && $util.isInteger(message.active_users.high)))
                        return "active_users: integer|Long expected";
                if (message.groups != null && $Object.hasOwnProperty.call(message, "groups"))
                    if (!$util.isInteger(message.groups) && !(message.groups && $util.isInteger(message.groups.low) && $util.isInteger(message.groups.high)))
                        return "groups: integer|Long expected";
                if (message.wall_posts != null && $Object.hasOwnProperty.call(message, "wall_posts"))
                    if (!$util.isInteger(message.wall_posts) && !(message.wall_posts && $util.isInteger(message.wall_posts.low) && $util.isInteger(message.wall_posts.high)))
                        return "wall_posts: integer|Long expected";
                if (message.popular_groups != null && $Object.hasOwnProperty.call(message, "popular_groups")) {
                    if (!$Array.isArray(message.popular_groups))
                        return "popular_groups: array expected";
                    for (let i = 0; i < message.popular_groups.length; ++i) {
                        let error = $root.openvk.v1.PopularGroup.verify(message.popular_groups[i], _depth + 1);
                        if (error)
                            return "popular_groups." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an InstanceAbout message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof openvk.v1.InstanceAbout
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {openvk.v1.InstanceAbout} InstanceAbout
             */
            InstanceAbout.fromObject = function (object, _depth) {
                if (object instanceof $root.openvk.v1.InstanceAbout)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".openvk.v1.InstanceAbout: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.openvk.v1.InstanceAbout();
                if (object.users != null)
                    if (typeof object.users === "object" ? object.users.low || object.users.high : $Number(object.users) !== 0)
                        if ($util.Long)
                            message.users = $util.Long.fromValue(object.users, false);
                        else if (typeof object.users === "string")
                            message.users = $parseInt(object.users, 10);
                        else if (typeof object.users === "number")
                            message.users = object.users;
                        else if (typeof object.users === "object")
                            message.users = new $util.LongBits(object.users.low >>> 0, object.users.high >>> 0).toNumber();
                if (object.online_users != null)
                    if (typeof object.online_users === "object" ? object.online_users.low || object.online_users.high : $Number(object.online_users) !== 0)
                        if ($util.Long)
                            message.online_users = $util.Long.fromValue(object.online_users, false);
                        else if (typeof object.online_users === "string")
                            message.online_users = $parseInt(object.online_users, 10);
                        else if (typeof object.online_users === "number")
                            message.online_users = object.online_users;
                        else if (typeof object.online_users === "object")
                            message.online_users = new $util.LongBits(object.online_users.low >>> 0, object.online_users.high >>> 0).toNumber();
                if (object.active_users != null)
                    if (typeof object.active_users === "object" ? object.active_users.low || object.active_users.high : $Number(object.active_users) !== 0)
                        if ($util.Long)
                            message.active_users = $util.Long.fromValue(object.active_users, false);
                        else if (typeof object.active_users === "string")
                            message.active_users = $parseInt(object.active_users, 10);
                        else if (typeof object.active_users === "number")
                            message.active_users = object.active_users;
                        else if (typeof object.active_users === "object")
                            message.active_users = new $util.LongBits(object.active_users.low >>> 0, object.active_users.high >>> 0).toNumber();
                if (object.groups != null)
                    if (typeof object.groups === "object" ? object.groups.low || object.groups.high : $Number(object.groups) !== 0)
                        if ($util.Long)
                            message.groups = $util.Long.fromValue(object.groups, false);
                        else if (typeof object.groups === "string")
                            message.groups = $parseInt(object.groups, 10);
                        else if (typeof object.groups === "number")
                            message.groups = object.groups;
                        else if (typeof object.groups === "object")
                            message.groups = new $util.LongBits(object.groups.low >>> 0, object.groups.high >>> 0).toNumber();
                if (object.wall_posts != null)
                    if (typeof object.wall_posts === "object" ? object.wall_posts.low || object.wall_posts.high : $Number(object.wall_posts) !== 0)
                        if ($util.Long)
                            message.wall_posts = $util.Long.fromValue(object.wall_posts, false);
                        else if (typeof object.wall_posts === "string")
                            message.wall_posts = $parseInt(object.wall_posts, 10);
                        else if (typeof object.wall_posts === "number")
                            message.wall_posts = object.wall_posts;
                        else if (typeof object.wall_posts === "object")
                            message.wall_posts = new $util.LongBits(object.wall_posts.low >>> 0, object.wall_posts.high >>> 0).toNumber();
                if (object.popular_groups) {
                    if (!$Array.isArray(object.popular_groups))
                        throw $TypeError(".openvk.v1.InstanceAbout.popular_groups: array expected");
                    message.popular_groups = $Array(object.popular_groups.length);
                    for (let i = 0; i < object.popular_groups.length; ++i) {
                        if (!$util.isObject(object.popular_groups[i]))
                            throw $TypeError(".openvk.v1.InstanceAbout.popular_groups: object expected");
                        message.popular_groups[i] = $root.openvk.v1.PopularGroup.fromObject(object.popular_groups[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an InstanceAbout message. Also converts values to other types if specified.
             * @function toObject
             * @memberof openvk.v1.InstanceAbout
             * @static
             * @param {openvk.v1.InstanceAbout} message InstanceAbout
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InstanceAbout.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.popular_groups = [];
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.users = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.users = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.online_users = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.online_users = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.active_users = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.active_users = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.groups = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.groups = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.wall_posts = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.wall_posts = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (message.users != null && $Object.hasOwnProperty.call(message, "users"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.users = typeof message.users === "number" ? $BigInt(message.users) : $util.Long.fromBits(message.users.low >>> 0, message.users.high >>> 0, false).toBigInt();
                    else if (typeof message.users === "number")
                        object.users = options.longs === $String ? $String(message.users) : message.users;
                    else
                        object.users = options.longs === $String ? $util.Long.prototype.toString.call(message.users) : options.longs === $Number ? new $util.LongBits(message.users.low >>> 0, message.users.high >>> 0).toNumber() : message.users;
                if (message.online_users != null && $Object.hasOwnProperty.call(message, "online_users"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.online_users = typeof message.online_users === "number" ? $BigInt(message.online_users) : $util.Long.fromBits(message.online_users.low >>> 0, message.online_users.high >>> 0, false).toBigInt();
                    else if (typeof message.online_users === "number")
                        object.online_users = options.longs === $String ? $String(message.online_users) : message.online_users;
                    else
                        object.online_users = options.longs === $String ? $util.Long.prototype.toString.call(message.online_users) : options.longs === $Number ? new $util.LongBits(message.online_users.low >>> 0, message.online_users.high >>> 0).toNumber() : message.online_users;
                if (message.active_users != null && $Object.hasOwnProperty.call(message, "active_users"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.active_users = typeof message.active_users === "number" ? $BigInt(message.active_users) : $util.Long.fromBits(message.active_users.low >>> 0, message.active_users.high >>> 0, false).toBigInt();
                    else if (typeof message.active_users === "number")
                        object.active_users = options.longs === $String ? $String(message.active_users) : message.active_users;
                    else
                        object.active_users = options.longs === $String ? $util.Long.prototype.toString.call(message.active_users) : options.longs === $Number ? new $util.LongBits(message.active_users.low >>> 0, message.active_users.high >>> 0).toNumber() : message.active_users;
                if (message.groups != null && $Object.hasOwnProperty.call(message, "groups"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.groups = typeof message.groups === "number" ? $BigInt(message.groups) : $util.Long.fromBits(message.groups.low >>> 0, message.groups.high >>> 0, false).toBigInt();
                    else if (typeof message.groups === "number")
                        object.groups = options.longs === $String ? $String(message.groups) : message.groups;
                    else
                        object.groups = options.longs === $String ? $util.Long.prototype.toString.call(message.groups) : options.longs === $Number ? new $util.LongBits(message.groups.low >>> 0, message.groups.high >>> 0).toNumber() : message.groups;
                if (message.wall_posts != null && $Object.hasOwnProperty.call(message, "wall_posts"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.wall_posts = typeof message.wall_posts === "number" ? $BigInt(message.wall_posts) : $util.Long.fromBits(message.wall_posts.low >>> 0, message.wall_posts.high >>> 0, false).toBigInt();
                    else if (typeof message.wall_posts === "number")
                        object.wall_posts = options.longs === $String ? $String(message.wall_posts) : message.wall_posts;
                    else
                        object.wall_posts = options.longs === $String ? $util.Long.prototype.toString.call(message.wall_posts) : options.longs === $Number ? new $util.LongBits(message.wall_posts.low >>> 0, message.wall_posts.high >>> 0).toNumber() : message.wall_posts;
                if (message.popular_groups && message.popular_groups.length) {
                    object.popular_groups = $Array(message.popular_groups.length);
                    for (let j = 0; j < message.popular_groups.length; ++j)
                        object.popular_groups[j] = $root.openvk.v1.PopularGroup.toObject(message.popular_groups[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this InstanceAbout to JSON.
             * @function toJSON
             * @memberof openvk.v1.InstanceAbout
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InstanceAbout.prototype.toJSON = function() {
                return InstanceAbout.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for InstanceAbout
             * @function getTypeUrl
             * @memberof openvk.v1.InstanceAbout
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            InstanceAbout.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/openvk.v1.InstanceAbout";
            };

            return InstanceAbout;
        })();

        return v1;
    })();

    return openvk;
})();

export {
  $root as default
};
