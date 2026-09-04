import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace openvk. */
export namespace openvk {

    /** Namespace v1. */
    namespace v1 {

        /** PrivacyLevel enum. */
        enum PrivacyLevel {

            /** PRIVACY_LEVEL_UNSPECIFIED value */
            PRIVACY_LEVEL_UNSPECIFIED = 0,

            /** PRIVACY_LEVEL_EVERYONE value */
            PRIVACY_LEVEL_EVERYONE = 1,

            /** PRIVACY_LEVEL_FRIENDS value */
            PRIVACY_LEVEL_FRIENDS = 2,

            /** PRIVACY_LEVEL_NOBODY value */
            PRIVACY_LEVEL_NOBODY = 3
        }

        /**
         * Properties of an Error.
         * @deprecated Use openvk.v1.Error.$Properties instead.
         */
        interface IError extends openvk.v1.Error.$Properties {
        }

        /** Represents an Error. */
        class Error {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Error.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Error error. */
            error: string;

            /** Error message. */
            message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            static create(properties: openvk.v1.Error.$Shape): openvk.v1.Error & openvk.v1.Error.$Shape;
            static create(properties?: openvk.v1.Error.$Properties): openvk.v1.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link openvk.v1.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Error.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link openvk.v1.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Error.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Error & openvk.v1.Error.$Shape} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Error & openvk.v1.Error.$Shape;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Error & openvk.v1.Error.$Shape} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Error & openvk.v1.Error.$Shape;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Error
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Error {

            /** Properties of an Error. */
            interface $Properties {

                /** Error error */
                error?: (string|null);

                /** Error message */
                message?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an Error. */
            type $Shape = openvk.v1.Error.$Properties;
        }

        /**
         * Properties of a Health.
         * @deprecated Use openvk.v1.Health.$Properties instead.
         */
        interface IHealth extends openvk.v1.Health.$Properties {
        }

        /** Represents a Health. */
        class Health {

            /**
             * Constructs a new Health.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Health.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Health status. */
            status: string;

            /** Health postgres. */
            postgres: boolean;

            /** Health redis. */
            redis: boolean;

            /** Health version. */
            version: string;

            /**
             * Creates a new Health instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Health instance
             */
            static create(properties: openvk.v1.Health.$Shape): openvk.v1.Health & openvk.v1.Health.$Shape;
            static create(properties?: openvk.v1.Health.$Properties): openvk.v1.Health;

            /**
             * Encodes the specified Health message. Does not implicitly {@link openvk.v1.Health.verify|verify} messages.
             * @param message Health message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Health.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Health message, length delimited. Does not implicitly {@link openvk.v1.Health.verify|verify} messages.
             * @param message Health message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Health.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Health message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Health & openvk.v1.Health.$Shape} Health
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Health & openvk.v1.Health.$Shape;

            /**
             * Decodes a Health message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Health & openvk.v1.Health.$Shape} Health
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Health & openvk.v1.Health.$Shape;

            /**
             * Verifies a Health message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Health message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Health
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Health;

            /**
             * Creates a plain object from a Health message. Also converts values to other types if specified.
             * @param message Health
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Health, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Health to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Health
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Health {

            /** Properties of a Health. */
            interface $Properties {

                /** Health status */
                status?: (string|null);

                /** Health postgres */
                postgres?: (boolean|null);

                /** Health redis */
                redis?: (boolean|null);

                /** Health version */
                version?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Health. */
            type $Shape = openvk.v1.Health.$Properties;
        }

        /**
         * Properties of a Challenge.
         * @deprecated Use openvk.v1.Challenge.$Properties instead.
         */
        interface IChallenge extends openvk.v1.Challenge.$Properties {
        }

        /** Represents a Challenge. */
        class Challenge {

            /**
             * Constructs a new Challenge.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Challenge.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Challenge csrf_token. */
            csrf_token: string;

            /** Challenge challenge_id. */
            challenge_id: string;

            /** Challenge nonce. */
            nonce: string;

            /** Challenge expires_in. */
            expires_in: (number|Long);

            /** Challenge alg. */
            alg: string;

            /** Challenge public_key. */
            public_key: string;

            /**
             * Creates a new Challenge instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Challenge instance
             */
            static create(properties: openvk.v1.Challenge.$Shape): openvk.v1.Challenge & openvk.v1.Challenge.$Shape;
            static create(properties?: openvk.v1.Challenge.$Properties): openvk.v1.Challenge;

            /**
             * Encodes the specified Challenge message. Does not implicitly {@link openvk.v1.Challenge.verify|verify} messages.
             * @param message Challenge message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Challenge.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Challenge message, length delimited. Does not implicitly {@link openvk.v1.Challenge.verify|verify} messages.
             * @param message Challenge message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Challenge.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Challenge message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Challenge & openvk.v1.Challenge.$Shape} Challenge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Challenge & openvk.v1.Challenge.$Shape;

            /**
             * Decodes a Challenge message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Challenge & openvk.v1.Challenge.$Shape} Challenge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Challenge & openvk.v1.Challenge.$Shape;

            /**
             * Verifies a Challenge message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Challenge message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Challenge
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Challenge;

            /**
             * Creates a plain object from a Challenge message. Also converts values to other types if specified.
             * @param message Challenge
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Challenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Challenge to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Challenge
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Challenge {

            /** Properties of a Challenge. */
            interface $Properties {

                /** Challenge csrf_token */
                csrf_token?: (string|null);

                /** Challenge challenge_id */
                challenge_id?: (string|null);

                /** Challenge nonce */
                nonce?: (string|null);

                /** Challenge expires_in */
                expires_in?: (number|Long|null);

                /** Challenge alg */
                alg?: (string|null);

                /** Challenge public_key */
                public_key?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Challenge. */
            type $Shape = openvk.v1.Challenge.$Properties;
        }

        /**
         * Properties of an AuthRequest.
         * @deprecated Use openvk.v1.AuthRequest.$Properties instead.
         */
        interface IAuthRequest extends openvk.v1.AuthRequest.$Properties {
        }

        /** Represents an AuthRequest. */
        class AuthRequest {

            /**
             * Constructs a new AuthRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.AuthRequest.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AuthRequest login. */
            login: string;

            /** AuthRequest challenge_id. */
            challenge_id: string;

            /** AuthRequest password_sealed. */
            password_sealed: string;

            /** AuthRequest turnstile_token. */
            turnstile_token: string;

            /**
             * Creates a new AuthRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthRequest instance
             */
            static create(properties: openvk.v1.AuthRequest.$Shape): openvk.v1.AuthRequest & openvk.v1.AuthRequest.$Shape;
            static create(properties?: openvk.v1.AuthRequest.$Properties): openvk.v1.AuthRequest;

            /**
             * Encodes the specified AuthRequest message. Does not implicitly {@link openvk.v1.AuthRequest.verify|verify} messages.
             * @param message AuthRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.AuthRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AuthRequest message, length delimited. Does not implicitly {@link openvk.v1.AuthRequest.verify|verify} messages.
             * @param message AuthRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.AuthRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuthRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.AuthRequest & openvk.v1.AuthRequest.$Shape} AuthRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.AuthRequest & openvk.v1.AuthRequest.$Shape;

            /**
             * Decodes an AuthRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.AuthRequest & openvk.v1.AuthRequest.$Shape} AuthRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.AuthRequest & openvk.v1.AuthRequest.$Shape;

            /**
             * Verifies an AuthRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuthRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuthRequest
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.AuthRequest;

            /**
             * Creates a plain object from an AuthRequest message. Also converts values to other types if specified.
             * @param message AuthRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.AuthRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuthRequest to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AuthRequest
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AuthRequest {

            /** Properties of an AuthRequest. */
            interface $Properties {

                /** AuthRequest login */
                login?: (string|null);

                /** AuthRequest challenge_id */
                challenge_id?: (string|null);

                /** AuthRequest password_sealed */
                password_sealed?: (string|null);

                /** AuthRequest turnstile_token */
                turnstile_token?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AuthRequest. */
            type $Shape = openvk.v1.AuthRequest.$Properties;
        }

        /**
         * Properties of a Token.
         * @deprecated Use openvk.v1.Token.$Properties instead.
         */
        interface IToken extends openvk.v1.Token.$Properties {
        }

        /** Represents a Token. */
        class Token {

            /**
             * Constructs a new Token.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Token.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Token token. */
            token: string;

            /** Token token_type. */
            token_type: string;

            /** Token user_id. */
            user_id: (number|Long);

            /**
             * Creates a new Token instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Token instance
             */
            static create(properties: openvk.v1.Token.$Shape): openvk.v1.Token & openvk.v1.Token.$Shape;
            static create(properties?: openvk.v1.Token.$Properties): openvk.v1.Token;

            /**
             * Encodes the specified Token message. Does not implicitly {@link openvk.v1.Token.verify|verify} messages.
             * @param message Token message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Token.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Token message, length delimited. Does not implicitly {@link openvk.v1.Token.verify|verify} messages.
             * @param message Token message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Token.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Token message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Token & openvk.v1.Token.$Shape} Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Token & openvk.v1.Token.$Shape;

            /**
             * Decodes a Token message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Token & openvk.v1.Token.$Shape} Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Token & openvk.v1.Token.$Shape;

            /**
             * Verifies a Token message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Token message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Token
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Token;

            /**
             * Creates a plain object from a Token message. Also converts values to other types if specified.
             * @param message Token
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Token to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Token
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Token {

            /** Properties of a Token. */
            interface $Properties {

                /** Token token */
                token?: (string|null);

                /** Token token_type */
                token_type?: (string|null);

                /** Token user_id */
                user_id?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Token. */
            type $Shape = openvk.v1.Token.$Properties;
        }

        /**
         * Properties of a SealedPassword.
         * @deprecated Use openvk.v1.SealedPassword.$Properties instead.
         */
        interface ISealedPassword extends openvk.v1.SealedPassword.$Properties {
        }

        /** Represents a SealedPassword. */
        class SealedPassword {

            /**
             * Constructs a new SealedPassword.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.SealedPassword.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SealedPassword challenge_id. */
            challenge_id: string;

            /** SealedPassword password_sealed. */
            password_sealed: string;

            /**
             * Creates a new SealedPassword instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SealedPassword instance
             */
            static create(properties: openvk.v1.SealedPassword.$Shape): openvk.v1.SealedPassword & openvk.v1.SealedPassword.$Shape;
            static create(properties?: openvk.v1.SealedPassword.$Properties): openvk.v1.SealedPassword;

            /**
             * Encodes the specified SealedPassword message. Does not implicitly {@link openvk.v1.SealedPassword.verify|verify} messages.
             * @param message SealedPassword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.SealedPassword.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SealedPassword message, length delimited. Does not implicitly {@link openvk.v1.SealedPassword.verify|verify} messages.
             * @param message SealedPassword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.SealedPassword.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SealedPassword message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.SealedPassword & openvk.v1.SealedPassword.$Shape} SealedPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.SealedPassword & openvk.v1.SealedPassword.$Shape;

            /**
             * Decodes a SealedPassword message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.SealedPassword & openvk.v1.SealedPassword.$Shape} SealedPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.SealedPassword & openvk.v1.SealedPassword.$Shape;

            /**
             * Verifies a SealedPassword message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SealedPassword message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SealedPassword
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.SealedPassword;

            /**
             * Creates a plain object from a SealedPassword message. Also converts values to other types if specified.
             * @param message SealedPassword
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.SealedPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SealedPassword to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SealedPassword
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SealedPassword {

            /** Properties of a SealedPassword. */
            interface $Properties {

                /** SealedPassword challenge_id */
                challenge_id?: (string|null);

                /** SealedPassword password_sealed */
                password_sealed?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SealedPassword. */
            type $Shape = openvk.v1.SealedPassword.$Properties;
        }

        /**
         * Properties of a User.
         * @deprecated Use openvk.v1.User.$Properties instead.
         */
        interface IUser extends openvk.v1.User.$Properties {
        }

        /** Represents a User. */
        class User {

            /**
             * Constructs a new User.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.User.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** User id. */
            id: (number|Long);

            /** User first_name. */
            first_name: string;

            /** User last_name. */
            last_name: string;

            /** User screen_name. */
            screen_name?: (string|null);

            /** User status. */
            status?: (string|null);

            /** User city. */
            city?: (string|null);

            /** User email. */
            email?: (string|null);

            /** User phone. */
            phone?: (string|null);

            /** User avatar_url. */
            avatar_url?: (string|null);

            /** User verified. */
            verified: boolean;

            /** User privacy_wall. */
            privacy_wall: openvk.v1.PrivacyLevel;

            /** User privacy_messages. */
            privacy_messages: openvk.v1.PrivacyLevel;

            /** User privacy_photos. */
            privacy_photos: openvk.v1.PrivacyLevel;

            /** User privacy_audio. */
            privacy_audio: openvk.v1.PrivacyLevel;

            /** User created_at. */
            created_at: string;

            /**
             * Creates a new User instance using the specified properties.
             * @param [properties] Properties to set
             * @returns User instance
             */
            static create(properties: openvk.v1.User.$Shape): openvk.v1.User & openvk.v1.User.$Shape;
            static create(properties?: openvk.v1.User.$Properties): openvk.v1.User;

            /**
             * Encodes the specified User message. Does not implicitly {@link openvk.v1.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.User.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link openvk.v1.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.User.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a User message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.User & openvk.v1.User.$Shape} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.User & openvk.v1.User.$Shape;

            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.User & openvk.v1.User.$Shape} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.User & openvk.v1.User.$Shape;

            /**
             * Verifies a User message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns User
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.User;

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param message User
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this User to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for User
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace User {

            /** Properties of a User. */
            interface $Properties {

                /** User id */
                id?: (number|Long|null);

                /** User first_name */
                first_name?: (string|null);

                /** User last_name */
                last_name?: (string|null);

                /** User screen_name */
                screen_name?: (string|null);

                /** User status */
                status?: (string|null);

                /** User city */
                city?: (string|null);

                /** User email */
                email?: (string|null);

                /** User phone */
                phone?: (string|null);

                /** User avatar_url */
                avatar_url?: (string|null);

                /** User verified */
                verified?: (boolean|null);

                /** User privacy_wall */
                privacy_wall?: (openvk.v1.PrivacyLevel|null);

                /** User privacy_messages */
                privacy_messages?: (openvk.v1.PrivacyLevel|null);

                /** User privacy_photos */
                privacy_photos?: (openvk.v1.PrivacyLevel|null);

                /** User privacy_audio */
                privacy_audio?: (openvk.v1.PrivacyLevel|null);

                /** User created_at */
                created_at?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a User. */
            type $Shape = openvk.v1.User.$Properties;
        }

        /**
         * Properties of a UserList.
         * @deprecated Use openvk.v1.UserList.$Properties instead.
         */
        interface IUserList extends openvk.v1.UserList.$Properties {
        }

        /** Represents a UserList. */
        class UserList {

            /**
             * Constructs a new UserList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.UserList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UserList users. */
            users: openvk.v1.User.$Properties[];

            /**
             * Creates a new UserList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserList instance
             */
            static create(properties: openvk.v1.UserList.$Shape): openvk.v1.UserList & openvk.v1.UserList.$Shape;
            static create(properties?: openvk.v1.UserList.$Properties): openvk.v1.UserList;

            /**
             * Encodes the specified UserList message. Does not implicitly {@link openvk.v1.UserList.verify|verify} messages.
             * @param message UserList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.UserList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserList message, length delimited. Does not implicitly {@link openvk.v1.UserList.verify|verify} messages.
             * @param message UserList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.UserList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.UserList & openvk.v1.UserList.$Shape} UserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.UserList & openvk.v1.UserList.$Shape;

            /**
             * Decodes a UserList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.UserList & openvk.v1.UserList.$Shape} UserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.UserList & openvk.v1.UserList.$Shape;

            /**
             * Verifies a UserList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.UserList;

            /**
             * Creates a plain object from a UserList message. Also converts values to other types if specified.
             * @param message UserList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.UserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UserList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UserList {

            /** Properties of a UserList. */
            interface $Properties {

                /** UserList users */
                users?: (openvk.v1.User.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a UserList. */
            type $Shape = openvk.v1.UserList.$Properties;
        }

        /**
         * Properties of an UpdateAccount.
         * @deprecated Use openvk.v1.UpdateAccount.$Properties instead.
         */
        interface IUpdateAccount extends openvk.v1.UpdateAccount.$Properties {
        }

        /** Represents an UpdateAccount. */
        class UpdateAccount {

            /**
             * Constructs a new UpdateAccount.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.UpdateAccount.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UpdateAccount first_name. */
            first_name: string;

            /** UpdateAccount last_name. */
            last_name: string;

            /** UpdateAccount email. */
            email?: (string|null);

            /** UpdateAccount phone. */
            phone?: (string|null);

            /** UpdateAccount city. */
            city?: (string|null);

            /** UpdateAccount privacy_wall. */
            privacy_wall: openvk.v1.PrivacyLevel;

            /** UpdateAccount privacy_messages. */
            privacy_messages: openvk.v1.PrivacyLevel;

            /**
             * Creates a new UpdateAccount instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateAccount instance
             */
            static create(properties: openvk.v1.UpdateAccount.$Shape): openvk.v1.UpdateAccount & openvk.v1.UpdateAccount.$Shape;
            static create(properties?: openvk.v1.UpdateAccount.$Properties): openvk.v1.UpdateAccount;

            /**
             * Encodes the specified UpdateAccount message. Does not implicitly {@link openvk.v1.UpdateAccount.verify|verify} messages.
             * @param message UpdateAccount message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.UpdateAccount.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateAccount message, length delimited. Does not implicitly {@link openvk.v1.UpdateAccount.verify|verify} messages.
             * @param message UpdateAccount message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.UpdateAccount.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateAccount message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.UpdateAccount & openvk.v1.UpdateAccount.$Shape} UpdateAccount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.UpdateAccount & openvk.v1.UpdateAccount.$Shape;

            /**
             * Decodes an UpdateAccount message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.UpdateAccount & openvk.v1.UpdateAccount.$Shape} UpdateAccount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.UpdateAccount & openvk.v1.UpdateAccount.$Shape;

            /**
             * Verifies an UpdateAccount message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateAccount message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateAccount
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.UpdateAccount;

            /**
             * Creates a plain object from an UpdateAccount message. Also converts values to other types if specified.
             * @param message UpdateAccount
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.UpdateAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateAccount to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UpdateAccount
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UpdateAccount {

            /** Properties of an UpdateAccount. */
            interface $Properties {

                /** UpdateAccount first_name */
                first_name?: (string|null);

                /** UpdateAccount last_name */
                last_name?: (string|null);

                /** UpdateAccount email */
                email?: (string|null);

                /** UpdateAccount phone */
                phone?: (string|null);

                /** UpdateAccount city */
                city?: (string|null);

                /** UpdateAccount privacy_wall */
                privacy_wall?: (openvk.v1.PrivacyLevel|null);

                /** UpdateAccount privacy_messages */
                privacy_messages?: (openvk.v1.PrivacyLevel|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an UpdateAccount. */
            type $Shape = openvk.v1.UpdateAccount.$Properties;
        }

        /**
         * Properties of a WallPost.
         * @deprecated Use openvk.v1.WallPost.$Properties instead.
         */
        interface IWallPost extends openvk.v1.WallPost.$Properties {
        }

        /** Represents a WallPost. */
        class WallPost {

            /**
             * Constructs a new WallPost.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.WallPost.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WallPost id. */
            id: (number|Long);

            /** WallPost target_id. */
            target_id: (number|Long);

            /** WallPost author_id. */
            author_id: (number|Long);

            /** WallPost author. */
            author?: (openvk.v1.User.$Properties|null);

            /** WallPost target. */
            target?: (openvk.v1.User.$Properties|null);

            /** WallPost content. */
            content: string;

            /** WallPost permalink. */
            permalink: string;

            /** WallPost created_at. */
            created_at: string;

            /**
             * Creates a new WallPost instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WallPost instance
             */
            static create(properties: openvk.v1.WallPost.$Shape): openvk.v1.WallPost & openvk.v1.WallPost.$Shape;
            static create(properties?: openvk.v1.WallPost.$Properties): openvk.v1.WallPost;

            /**
             * Encodes the specified WallPost message. Does not implicitly {@link openvk.v1.WallPost.verify|verify} messages.
             * @param message WallPost message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.WallPost.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WallPost message, length delimited. Does not implicitly {@link openvk.v1.WallPost.verify|verify} messages.
             * @param message WallPost message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.WallPost.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WallPost message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.WallPost & openvk.v1.WallPost.$Shape} WallPost
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.WallPost & openvk.v1.WallPost.$Shape;

            /**
             * Decodes a WallPost message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.WallPost & openvk.v1.WallPost.$Shape} WallPost
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.WallPost & openvk.v1.WallPost.$Shape;

            /**
             * Verifies a WallPost message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WallPost message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WallPost
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.WallPost;

            /**
             * Creates a plain object from a WallPost message. Also converts values to other types if specified.
             * @param message WallPost
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.WallPost, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WallPost to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WallPost
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WallPost {

            /** Properties of a WallPost. */
            interface $Properties {

                /** WallPost id */
                id?: (number|Long|null);

                /** WallPost target_id */
                target_id?: (number|Long|null);

                /** WallPost author_id */
                author_id?: (number|Long|null);

                /** WallPost author */
                author?: (openvk.v1.User.$Properties|null);

                /** WallPost target */
                target?: (openvk.v1.User.$Properties|null);

                /** WallPost content */
                content?: (string|null);

                /** WallPost permalink */
                permalink?: (string|null);

                /** WallPost created_at */
                created_at?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WallPost. */
            type $Shape = openvk.v1.WallPost.$Properties;
        }

        /**
         * Properties of a WallPostList.
         * @deprecated Use openvk.v1.WallPostList.$Properties instead.
         */
        interface IWallPostList extends openvk.v1.WallPostList.$Properties {
        }

        /** Represents a WallPostList. */
        class WallPostList {

            /**
             * Constructs a new WallPostList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.WallPostList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WallPostList posts. */
            posts: openvk.v1.WallPost.$Properties[];

            /**
             * Creates a new WallPostList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WallPostList instance
             */
            static create(properties: openvk.v1.WallPostList.$Shape): openvk.v1.WallPostList & openvk.v1.WallPostList.$Shape;
            static create(properties?: openvk.v1.WallPostList.$Properties): openvk.v1.WallPostList;

            /**
             * Encodes the specified WallPostList message. Does not implicitly {@link openvk.v1.WallPostList.verify|verify} messages.
             * @param message WallPostList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.WallPostList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WallPostList message, length delimited. Does not implicitly {@link openvk.v1.WallPostList.verify|verify} messages.
             * @param message WallPostList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.WallPostList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WallPostList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.WallPostList & openvk.v1.WallPostList.$Shape} WallPostList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.WallPostList & openvk.v1.WallPostList.$Shape;

            /**
             * Decodes a WallPostList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.WallPostList & openvk.v1.WallPostList.$Shape} WallPostList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.WallPostList & openvk.v1.WallPostList.$Shape;

            /**
             * Verifies a WallPostList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WallPostList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WallPostList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.WallPostList;

            /**
             * Creates a plain object from a WallPostList message. Also converts values to other types if specified.
             * @param message WallPostList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.WallPostList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WallPostList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WallPostList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WallPostList {

            /** Properties of a WallPostList. */
            interface $Properties {

                /** WallPostList posts */
                posts?: (openvk.v1.WallPost.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WallPostList. */
            type $Shape = openvk.v1.WallPostList.$Properties;
        }

        /**
         * Properties of a WriteWall.
         * @deprecated Use openvk.v1.WriteWall.$Properties instead.
         */
        interface IWriteWall extends openvk.v1.WriteWall.$Properties {
        }

        /** Represents a WriteWall. */
        class WriteWall {

            /**
             * Constructs a new WriteWall.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.WriteWall.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WriteWall content. */
            content: string;

            /**
             * Creates a new WriteWall instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteWall instance
             */
            static create(properties: openvk.v1.WriteWall.$Shape): openvk.v1.WriteWall & openvk.v1.WriteWall.$Shape;
            static create(properties?: openvk.v1.WriteWall.$Properties): openvk.v1.WriteWall;

            /**
             * Encodes the specified WriteWall message. Does not implicitly {@link openvk.v1.WriteWall.verify|verify} messages.
             * @param message WriteWall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.WriteWall.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteWall message, length delimited. Does not implicitly {@link openvk.v1.WriteWall.verify|verify} messages.
             * @param message WriteWall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.WriteWall.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteWall message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.WriteWall & openvk.v1.WriteWall.$Shape} WriteWall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.WriteWall & openvk.v1.WriteWall.$Shape;

            /**
             * Decodes a WriteWall message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.WriteWall & openvk.v1.WriteWall.$Shape} WriteWall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.WriteWall & openvk.v1.WriteWall.$Shape;

            /**
             * Verifies a WriteWall message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteWall message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteWall
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.WriteWall;

            /**
             * Creates a plain object from a WriteWall message. Also converts values to other types if specified.
             * @param message WriteWall
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.WriteWall, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteWall to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WriteWall
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WriteWall {

            /** Properties of a WriteWall. */
            interface $Properties {

                /** WriteWall content */
                content?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WriteWall. */
            type $Shape = openvk.v1.WriteWall.$Properties;
        }

        /**
         * Properties of a Message.
         * @deprecated Use openvk.v1.Message.$Properties instead.
         */
        interface IMessage extends openvk.v1.Message.$Properties {
        }

        /** Represents a Message. */
        class Message {

            /**
             * Constructs a new Message.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Message.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Message id. */
            id: (number|Long);

            /** Message peer_id. */
            peer_id: (number|Long);

            /** Message author_id. */
            author_id: (number|Long);

            /** Message text. */
            text: string;

            /** Message created_at. */
            created_at: string;

            /**
             * Creates a new Message instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Message instance
             */
            static create(properties: openvk.v1.Message.$Shape): openvk.v1.Message & openvk.v1.Message.$Shape;
            static create(properties?: openvk.v1.Message.$Properties): openvk.v1.Message;

            /**
             * Encodes the specified Message message. Does not implicitly {@link openvk.v1.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Message.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link openvk.v1.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Message.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Message & openvk.v1.Message.$Shape} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Message & openvk.v1.Message.$Shape;

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Message & openvk.v1.Message.$Shape} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Message & openvk.v1.Message.$Shape;

            /**
             * Verifies a Message message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Message
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Message;

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @param message Message
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Message to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Message
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Message {

            /** Properties of a Message. */
            interface $Properties {

                /** Message id */
                id?: (number|Long|null);

                /** Message peer_id */
                peer_id?: (number|Long|null);

                /** Message author_id */
                author_id?: (number|Long|null);

                /** Message text */
                text?: (string|null);

                /** Message created_at */
                created_at?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Message. */
            type $Shape = openvk.v1.Message.$Properties;
        }

        /**
         * Properties of a MessageList.
         * @deprecated Use openvk.v1.MessageList.$Properties instead.
         */
        interface IMessageList extends openvk.v1.MessageList.$Properties {
        }

        /** Represents a MessageList. */
        class MessageList {

            /**
             * Constructs a new MessageList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.MessageList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MessageList messages. */
            messages: openvk.v1.Message.$Properties[];

            /**
             * Creates a new MessageList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageList instance
             */
            static create(properties: openvk.v1.MessageList.$Shape): openvk.v1.MessageList & openvk.v1.MessageList.$Shape;
            static create(properties?: openvk.v1.MessageList.$Properties): openvk.v1.MessageList;

            /**
             * Encodes the specified MessageList message. Does not implicitly {@link openvk.v1.MessageList.verify|verify} messages.
             * @param message MessageList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.MessageList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageList message, length delimited. Does not implicitly {@link openvk.v1.MessageList.verify|verify} messages.
             * @param message MessageList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.MessageList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.MessageList & openvk.v1.MessageList.$Shape} MessageList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.MessageList & openvk.v1.MessageList.$Shape;

            /**
             * Decodes a MessageList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.MessageList & openvk.v1.MessageList.$Shape} MessageList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.MessageList & openvk.v1.MessageList.$Shape;

            /**
             * Verifies a MessageList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.MessageList;

            /**
             * Creates a plain object from a MessageList message. Also converts values to other types if specified.
             * @param message MessageList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.MessageList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MessageList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MessageList {

            /** Properties of a MessageList. */
            interface $Properties {

                /** MessageList messages */
                messages?: (openvk.v1.Message.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MessageList. */
            type $Shape = openvk.v1.MessageList.$Properties;
        }

        /**
         * Properties of a SendMessage.
         * @deprecated Use openvk.v1.SendMessage.$Properties instead.
         */
        interface ISendMessage extends openvk.v1.SendMessage.$Properties {
        }

        /** Represents a SendMessage. */
        class SendMessage {

            /**
             * Constructs a new SendMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.SendMessage.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SendMessage peer_id. */
            peer_id: (number|Long);

            /** SendMessage text. */
            text: string;

            /**
             * Creates a new SendMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SendMessage instance
             */
            static create(properties: openvk.v1.SendMessage.$Shape): openvk.v1.SendMessage & openvk.v1.SendMessage.$Shape;
            static create(properties?: openvk.v1.SendMessage.$Properties): openvk.v1.SendMessage;

            /**
             * Encodes the specified SendMessage message. Does not implicitly {@link openvk.v1.SendMessage.verify|verify} messages.
             * @param message SendMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.SendMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SendMessage message, length delimited. Does not implicitly {@link openvk.v1.SendMessage.verify|verify} messages.
             * @param message SendMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.SendMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SendMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.SendMessage & openvk.v1.SendMessage.$Shape} SendMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.SendMessage & openvk.v1.SendMessage.$Shape;

            /**
             * Decodes a SendMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.SendMessage & openvk.v1.SendMessage.$Shape} SendMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.SendMessage & openvk.v1.SendMessage.$Shape;

            /**
             * Verifies a SendMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SendMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SendMessage
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.SendMessage;

            /**
             * Creates a plain object from a SendMessage message. Also converts values to other types if specified.
             * @param message SendMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.SendMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SendMessage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SendMessage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SendMessage {

            /** Properties of a SendMessage. */
            interface $Properties {

                /** SendMessage peer_id */
                peer_id?: (number|Long|null);

                /** SendMessage text */
                text?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SendMessage. */
            type $Shape = openvk.v1.SendMessage.$Properties;
        }

        /**
         * Properties of an AudioTrack.
         * @deprecated Use openvk.v1.AudioTrack.$Properties instead.
         */
        interface IAudioTrack extends openvk.v1.AudioTrack.$Properties {
        }

        /** Represents an AudioTrack. */
        class AudioTrack {

            /**
             * Constructs a new AudioTrack.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.AudioTrack.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AudioTrack id. */
            id: (number|Long);

            /** AudioTrack media_id. */
            media_id: (number|Long);

            /** AudioTrack artist. */
            artist: string;

            /** AudioTrack title. */
            title: string;

            /** AudioTrack duration_ms. */
            duration_ms: number;

            /** AudioTrack owner_user_id. */
            owner_user_id: (number|Long);

            /** AudioTrack src. */
            src: string;

            /**
             * Creates a new AudioTrack instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AudioTrack instance
             */
            static create(properties: openvk.v1.AudioTrack.$Shape): openvk.v1.AudioTrack & openvk.v1.AudioTrack.$Shape;
            static create(properties?: openvk.v1.AudioTrack.$Properties): openvk.v1.AudioTrack;

            /**
             * Encodes the specified AudioTrack message. Does not implicitly {@link openvk.v1.AudioTrack.verify|verify} messages.
             * @param message AudioTrack message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.AudioTrack.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AudioTrack message, length delimited. Does not implicitly {@link openvk.v1.AudioTrack.verify|verify} messages.
             * @param message AudioTrack message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.AudioTrack.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AudioTrack message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.AudioTrack & openvk.v1.AudioTrack.$Shape} AudioTrack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.AudioTrack & openvk.v1.AudioTrack.$Shape;

            /**
             * Decodes an AudioTrack message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.AudioTrack & openvk.v1.AudioTrack.$Shape} AudioTrack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.AudioTrack & openvk.v1.AudioTrack.$Shape;

            /**
             * Verifies an AudioTrack message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AudioTrack message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AudioTrack
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.AudioTrack;

            /**
             * Creates a plain object from an AudioTrack message. Also converts values to other types if specified.
             * @param message AudioTrack
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.AudioTrack, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AudioTrack to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AudioTrack
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AudioTrack {

            /** Properties of an AudioTrack. */
            interface $Properties {

                /** AudioTrack id */
                id?: (number|Long|null);

                /** AudioTrack media_id */
                media_id?: (number|Long|null);

                /** AudioTrack artist */
                artist?: (string|null);

                /** AudioTrack title */
                title?: (string|null);

                /** AudioTrack duration_ms */
                duration_ms?: (number|null);

                /** AudioTrack owner_user_id */
                owner_user_id?: (number|Long|null);

                /** AudioTrack src */
                src?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AudioTrack. */
            type $Shape = openvk.v1.AudioTrack.$Properties;
        }

        /**
         * Properties of an AudioList.
         * @deprecated Use openvk.v1.AudioList.$Properties instead.
         */
        interface IAudioList extends openvk.v1.AudioList.$Properties {
        }

        /** Represents an AudioList. */
        class AudioList {

            /**
             * Constructs a new AudioList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.AudioList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AudioList tracks. */
            tracks: openvk.v1.AudioTrack.$Properties[];

            /**
             * Creates a new AudioList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AudioList instance
             */
            static create(properties: openvk.v1.AudioList.$Shape): openvk.v1.AudioList & openvk.v1.AudioList.$Shape;
            static create(properties?: openvk.v1.AudioList.$Properties): openvk.v1.AudioList;

            /**
             * Encodes the specified AudioList message. Does not implicitly {@link openvk.v1.AudioList.verify|verify} messages.
             * @param message AudioList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.AudioList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AudioList message, length delimited. Does not implicitly {@link openvk.v1.AudioList.verify|verify} messages.
             * @param message AudioList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.AudioList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AudioList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.AudioList & openvk.v1.AudioList.$Shape} AudioList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.AudioList & openvk.v1.AudioList.$Shape;

            /**
             * Decodes an AudioList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.AudioList & openvk.v1.AudioList.$Shape} AudioList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.AudioList & openvk.v1.AudioList.$Shape;

            /**
             * Verifies an AudioList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AudioList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AudioList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.AudioList;

            /**
             * Creates a plain object from an AudioList message. Also converts values to other types if specified.
             * @param message AudioList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.AudioList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AudioList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AudioList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AudioList {

            /** Properties of an AudioList. */
            interface $Properties {

                /** AudioList tracks */
                tracks?: (openvk.v1.AudioTrack.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AudioList. */
            type $Shape = openvk.v1.AudioList.$Properties;
        }

        /**
         * Properties of a Photo.
         * @deprecated Use openvk.v1.Photo.$Properties instead.
         */
        interface IPhoto extends openvk.v1.Photo.$Properties {
        }

        /** Represents a Photo. */
        class Photo {

            /**
             * Constructs a new Photo.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Photo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Photo id. */
            id: (number|Long);

            /** Photo album_id. */
            album_id: (number|Long);

            /** Photo owner_user_id. */
            owner_user_id: (number|Long);

            /** Photo mime. */
            mime: string;

            /** Photo size_bytes. */
            size_bytes: (number|Long);

            /** Photo width. */
            width?: (number|null);

            /** Photo height. */
            height?: (number|null);

            /** Photo original_filename. */
            original_filename?: (string|null);

            /** Photo url. */
            url: string;

            /**
             * Creates a new Photo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Photo instance
             */
            static create(properties: openvk.v1.Photo.$Shape): openvk.v1.Photo & openvk.v1.Photo.$Shape;
            static create(properties?: openvk.v1.Photo.$Properties): openvk.v1.Photo;

            /**
             * Encodes the specified Photo message. Does not implicitly {@link openvk.v1.Photo.verify|verify} messages.
             * @param message Photo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Photo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Photo message, length delimited. Does not implicitly {@link openvk.v1.Photo.verify|verify} messages.
             * @param message Photo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Photo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Photo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Photo & openvk.v1.Photo.$Shape} Photo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Photo & openvk.v1.Photo.$Shape;

            /**
             * Decodes a Photo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Photo & openvk.v1.Photo.$Shape} Photo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Photo & openvk.v1.Photo.$Shape;

            /**
             * Verifies a Photo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Photo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Photo
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Photo;

            /**
             * Creates a plain object from a Photo message. Also converts values to other types if specified.
             * @param message Photo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Photo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Photo to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Photo
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Photo {

            /** Properties of a Photo. */
            interface $Properties {

                /** Photo id */
                id?: (number|Long|null);

                /** Photo album_id */
                album_id?: (number|Long|null);

                /** Photo owner_user_id */
                owner_user_id?: (number|Long|null);

                /** Photo mime */
                mime?: (string|null);

                /** Photo size_bytes */
                size_bytes?: (number|Long|null);

                /** Photo width */
                width?: (number|null);

                /** Photo height */
                height?: (number|null);

                /** Photo original_filename */
                original_filename?: (string|null);

                /** Photo url */
                url?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Photo. */
            type $Shape = openvk.v1.Photo.$Properties;
        }

        /**
         * Properties of an Album.
         * @deprecated Use openvk.v1.Album.$Properties instead.
         */
        interface IAlbum extends openvk.v1.Album.$Properties {
        }

        /** Represents an Album. */
        class Album {

            /**
             * Constructs a new Album.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Album.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Album id. */
            id: (number|Long);

            /** Album title. */
            title: string;

            /** Album description. */
            description?: (string|null);

            /** Album owner_user_id. */
            owner_user_id: (number|Long);

            /** Album created_at. */
            created_at: string;

            /** Album photo_count. */
            photo_count: (number|Long);

            /** Album cover_url. */
            cover_url?: (string|null);

            /** Album photos. */
            photos: openvk.v1.Photo.$Properties[];

            /**
             * Creates a new Album instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Album instance
             */
            static create(properties: openvk.v1.Album.$Shape): openvk.v1.Album & openvk.v1.Album.$Shape;
            static create(properties?: openvk.v1.Album.$Properties): openvk.v1.Album;

            /**
             * Encodes the specified Album message. Does not implicitly {@link openvk.v1.Album.verify|verify} messages.
             * @param message Album message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Album.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Album message, length delimited. Does not implicitly {@link openvk.v1.Album.verify|verify} messages.
             * @param message Album message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Album.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Album message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Album & openvk.v1.Album.$Shape} Album
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Album & openvk.v1.Album.$Shape;

            /**
             * Decodes an Album message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Album & openvk.v1.Album.$Shape} Album
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Album & openvk.v1.Album.$Shape;

            /**
             * Verifies an Album message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Album message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Album
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Album;

            /**
             * Creates a plain object from an Album message. Also converts values to other types if specified.
             * @param message Album
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Album, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Album to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Album
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Album {

            /** Properties of an Album. */
            interface $Properties {

                /** Album id */
                id?: (number|Long|null);

                /** Album title */
                title?: (string|null);

                /** Album description */
                description?: (string|null);

                /** Album owner_user_id */
                owner_user_id?: (number|Long|null);

                /** Album created_at */
                created_at?: (string|null);

                /** Album photo_count */
                photo_count?: (number|Long|null);

                /** Album cover_url */
                cover_url?: (string|null);

                /** Album photos */
                photos?: (openvk.v1.Photo.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an Album. */
            type $Shape = openvk.v1.Album.$Properties;
        }

        /**
         * Properties of an AlbumList.
         * @deprecated Use openvk.v1.AlbumList.$Properties instead.
         */
        interface IAlbumList extends openvk.v1.AlbumList.$Properties {
        }

        /** Represents an AlbumList. */
        class AlbumList {

            /**
             * Constructs a new AlbumList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.AlbumList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AlbumList albums. */
            albums: openvk.v1.Album.$Properties[];

            /**
             * Creates a new AlbumList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AlbumList instance
             */
            static create(properties: openvk.v1.AlbumList.$Shape): openvk.v1.AlbumList & openvk.v1.AlbumList.$Shape;
            static create(properties?: openvk.v1.AlbumList.$Properties): openvk.v1.AlbumList;

            /**
             * Encodes the specified AlbumList message. Does not implicitly {@link openvk.v1.AlbumList.verify|verify} messages.
             * @param message AlbumList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.AlbumList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AlbumList message, length delimited. Does not implicitly {@link openvk.v1.AlbumList.verify|verify} messages.
             * @param message AlbumList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.AlbumList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AlbumList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.AlbumList & openvk.v1.AlbumList.$Shape} AlbumList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.AlbumList & openvk.v1.AlbumList.$Shape;

            /**
             * Decodes an AlbumList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.AlbumList & openvk.v1.AlbumList.$Shape} AlbumList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.AlbumList & openvk.v1.AlbumList.$Shape;

            /**
             * Verifies an AlbumList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AlbumList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AlbumList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.AlbumList;

            /**
             * Creates a plain object from an AlbumList message. Also converts values to other types if specified.
             * @param message AlbumList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.AlbumList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AlbumList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AlbumList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AlbumList {

            /** Properties of an AlbumList. */
            interface $Properties {

                /** AlbumList albums */
                albums?: (openvk.v1.Album.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AlbumList. */
            type $Shape = openvk.v1.AlbumList.$Properties;
        }

        /**
         * Properties of a CreateAlbum.
         * @deprecated Use openvk.v1.CreateAlbum.$Properties instead.
         */
        interface ICreateAlbum extends openvk.v1.CreateAlbum.$Properties {
        }

        /** Represents a CreateAlbum. */
        class CreateAlbum {

            /**
             * Constructs a new CreateAlbum.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.CreateAlbum.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CreateAlbum title. */
            title: string;

            /** CreateAlbum description. */
            description?: (string|null);

            /**
             * Creates a new CreateAlbum instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateAlbum instance
             */
            static create(properties: openvk.v1.CreateAlbum.$Shape): openvk.v1.CreateAlbum & openvk.v1.CreateAlbum.$Shape;
            static create(properties?: openvk.v1.CreateAlbum.$Properties): openvk.v1.CreateAlbum;

            /**
             * Encodes the specified CreateAlbum message. Does not implicitly {@link openvk.v1.CreateAlbum.verify|verify} messages.
             * @param message CreateAlbum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.CreateAlbum.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateAlbum message, length delimited. Does not implicitly {@link openvk.v1.CreateAlbum.verify|verify} messages.
             * @param message CreateAlbum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.CreateAlbum.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateAlbum message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.CreateAlbum & openvk.v1.CreateAlbum.$Shape} CreateAlbum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.CreateAlbum & openvk.v1.CreateAlbum.$Shape;

            /**
             * Decodes a CreateAlbum message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.CreateAlbum & openvk.v1.CreateAlbum.$Shape} CreateAlbum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.CreateAlbum & openvk.v1.CreateAlbum.$Shape;

            /**
             * Verifies a CreateAlbum message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateAlbum message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateAlbum
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.CreateAlbum;

            /**
             * Creates a plain object from a CreateAlbum message. Also converts values to other types if specified.
             * @param message CreateAlbum
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.CreateAlbum, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateAlbum to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CreateAlbum
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CreateAlbum {

            /** Properties of a CreateAlbum. */
            interface $Properties {

                /** CreateAlbum title */
                title?: (string|null);

                /** CreateAlbum description */
                description?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CreateAlbum. */
            type $Shape = openvk.v1.CreateAlbum.$Properties;
        }

        /**
         * Properties of a Video.
         * @deprecated Use openvk.v1.Video.$Properties instead.
         */
        interface IVideo extends openvk.v1.Video.$Properties {
        }

        /** Represents a Video. */
        class Video {

            /**
             * Constructs a new Video.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Video.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Video id. */
            id: (number|Long);

            /** Video media_id. */
            media_id?: (number|Long|null);

            /** Video title. */
            title: string;

            /** Video description. */
            description?: (string|null);

            /** Video status. */
            status: string;

            /** Video owner_user_id. */
            owner_user_id: (number|Long);

            /** Video src. */
            src?: (string|null);

            /**
             * Creates a new Video instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Video instance
             */
            static create(properties: openvk.v1.Video.$Shape): openvk.v1.Video & openvk.v1.Video.$Shape;
            static create(properties?: openvk.v1.Video.$Properties): openvk.v1.Video;

            /**
             * Encodes the specified Video message. Does not implicitly {@link openvk.v1.Video.verify|verify} messages.
             * @param message Video message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Video.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Video message, length delimited. Does not implicitly {@link openvk.v1.Video.verify|verify} messages.
             * @param message Video message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Video.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Video message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Video & openvk.v1.Video.$Shape} Video
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Video & openvk.v1.Video.$Shape;

            /**
             * Decodes a Video message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Video & openvk.v1.Video.$Shape} Video
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Video & openvk.v1.Video.$Shape;

            /**
             * Verifies a Video message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Video message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Video
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Video;

            /**
             * Creates a plain object from a Video message. Also converts values to other types if specified.
             * @param message Video
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Video, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Video to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Video
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Video {

            /** Properties of a Video. */
            interface $Properties {

                /** Video id */
                id?: (number|Long|null);

                /** Video media_id */
                media_id?: (number|Long|null);

                /** Video title */
                title?: (string|null);

                /** Video description */
                description?: (string|null);

                /** Video status */
                status?: (string|null);

                /** Video owner_user_id */
                owner_user_id?: (number|Long|null);

                /** Video src */
                src?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Video. */
            type $Shape = openvk.v1.Video.$Properties;
        }

        /**
         * Properties of a VideoList.
         * @deprecated Use openvk.v1.VideoList.$Properties instead.
         */
        interface IVideoList extends openvk.v1.VideoList.$Properties {
        }

        /** Represents a VideoList. */
        class VideoList {

            /**
             * Constructs a new VideoList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.VideoList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** VideoList videos. */
            videos: openvk.v1.Video.$Properties[];

            /**
             * Creates a new VideoList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VideoList instance
             */
            static create(properties: openvk.v1.VideoList.$Shape): openvk.v1.VideoList & openvk.v1.VideoList.$Shape;
            static create(properties?: openvk.v1.VideoList.$Properties): openvk.v1.VideoList;

            /**
             * Encodes the specified VideoList message. Does not implicitly {@link openvk.v1.VideoList.verify|verify} messages.
             * @param message VideoList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.VideoList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VideoList message, length delimited. Does not implicitly {@link openvk.v1.VideoList.verify|verify} messages.
             * @param message VideoList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.VideoList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VideoList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.VideoList & openvk.v1.VideoList.$Shape} VideoList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.VideoList & openvk.v1.VideoList.$Shape;

            /**
             * Decodes a VideoList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.VideoList & openvk.v1.VideoList.$Shape} VideoList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.VideoList & openvk.v1.VideoList.$Shape;

            /**
             * Verifies a VideoList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VideoList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VideoList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.VideoList;

            /**
             * Creates a plain object from a VideoList message. Also converts values to other types if specified.
             * @param message VideoList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.VideoList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VideoList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for VideoList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace VideoList {

            /** Properties of a VideoList. */
            interface $Properties {

                /** VideoList videos */
                videos?: (openvk.v1.Video.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a VideoList. */
            type $Shape = openvk.v1.VideoList.$Properties;
        }

        /**
         * Properties of a Group.
         * @deprecated Use openvk.v1.Group.$Properties instead.
         */
        interface IGroup extends openvk.v1.Group.$Properties {
        }

        /** Represents a Group. */
        class Group {

            /**
             * Constructs a new Group.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Group.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Group id. */
            id: (number|Long);

            /** Group slug. */
            slug: string;

            /** Group name. */
            name: string;

            /** Group about. */
            about?: (string|null);

            /** Group kind. */
            kind: string;

            /** Group owner_id. */
            owner_id: (number|Long);

            /** Group created_at. */
            created_at: string;

            /**
             * Creates a new Group instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Group instance
             */
            static create(properties: openvk.v1.Group.$Shape): openvk.v1.Group & openvk.v1.Group.$Shape;
            static create(properties?: openvk.v1.Group.$Properties): openvk.v1.Group;

            /**
             * Encodes the specified Group message. Does not implicitly {@link openvk.v1.Group.verify|verify} messages.
             * @param message Group message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Group.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Group message, length delimited. Does not implicitly {@link openvk.v1.Group.verify|verify} messages.
             * @param message Group message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Group.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Group message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Group & openvk.v1.Group.$Shape} Group
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Group & openvk.v1.Group.$Shape;

            /**
             * Decodes a Group message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Group & openvk.v1.Group.$Shape} Group
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Group & openvk.v1.Group.$Shape;

            /**
             * Verifies a Group message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Group message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Group
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Group;

            /**
             * Creates a plain object from a Group message. Also converts values to other types if specified.
             * @param message Group
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Group to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Group
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Group {

            /** Properties of a Group. */
            interface $Properties {

                /** Group id */
                id?: (number|Long|null);

                /** Group slug */
                slug?: (string|null);

                /** Group name */
                name?: (string|null);

                /** Group about */
                about?: (string|null);

                /** Group kind */
                kind?: (string|null);

                /** Group owner_id */
                owner_id?: (number|Long|null);

                /** Group created_at */
                created_at?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Group. */
            type $Shape = openvk.v1.Group.$Properties;
        }

        /**
         * Properties of a GroupList.
         * @deprecated Use openvk.v1.GroupList.$Properties instead.
         */
        interface IGroupList extends openvk.v1.GroupList.$Properties {
        }

        /** Represents a GroupList. */
        class GroupList {

            /**
             * Constructs a new GroupList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.GroupList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GroupList groups. */
            groups: openvk.v1.Group.$Properties[];

            /**
             * Creates a new GroupList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupList instance
             */
            static create(properties: openvk.v1.GroupList.$Shape): openvk.v1.GroupList & openvk.v1.GroupList.$Shape;
            static create(properties?: openvk.v1.GroupList.$Properties): openvk.v1.GroupList;

            /**
             * Encodes the specified GroupList message. Does not implicitly {@link openvk.v1.GroupList.verify|verify} messages.
             * @param message GroupList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.GroupList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupList message, length delimited. Does not implicitly {@link openvk.v1.GroupList.verify|verify} messages.
             * @param message GroupList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.GroupList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.GroupList & openvk.v1.GroupList.$Shape} GroupList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.GroupList & openvk.v1.GroupList.$Shape;

            /**
             * Decodes a GroupList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.GroupList & openvk.v1.GroupList.$Shape} GroupList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.GroupList & openvk.v1.GroupList.$Shape;

            /**
             * Verifies a GroupList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.GroupList;

            /**
             * Creates a plain object from a GroupList message. Also converts values to other types if specified.
             * @param message GroupList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.GroupList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GroupList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GroupList {

            /** Properties of a GroupList. */
            interface $Properties {

                /** GroupList groups */
                groups?: (openvk.v1.Group.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GroupList. */
            type $Shape = openvk.v1.GroupList.$Properties;
        }

        /**
         * Properties of a Notification.
         * @deprecated Use openvk.v1.Notification.$Properties instead.
         */
        interface INotification extends openvk.v1.Notification.$Properties {
        }

        /** Represents a Notification. */
        class Notification {

            /**
             * Constructs a new Notification.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Notification.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Notification id. */
            id: (number|Long);

            /** Notification kind. */
            kind: string;

            /** Notification actor_id. */
            actor_id?: (number|Long|null);

            /** Notification entity_type. */
            entity_type?: (string|null);

            /** Notification entity_id. */
            entity_id?: (number|Long|null);

            /** Notification payload_json. */
            payload_json: string;

            /** Notification read_at. */
            read_at?: (string|null);

            /** Notification created_at. */
            created_at: string;

            /**
             * Creates a new Notification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Notification instance
             */
            static create(properties: openvk.v1.Notification.$Shape): openvk.v1.Notification & openvk.v1.Notification.$Shape;
            static create(properties?: openvk.v1.Notification.$Properties): openvk.v1.Notification;

            /**
             * Encodes the specified Notification message. Does not implicitly {@link openvk.v1.Notification.verify|verify} messages.
             * @param message Notification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Notification.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Notification message, length delimited. Does not implicitly {@link openvk.v1.Notification.verify|verify} messages.
             * @param message Notification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Notification.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Notification & openvk.v1.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Notification & openvk.v1.Notification.$Shape;

            /**
             * Decodes a Notification message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Notification & openvk.v1.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Notification & openvk.v1.Notification.$Shape;

            /**
             * Verifies a Notification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Notification message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Notification
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Notification;

            /**
             * Creates a plain object from a Notification message. Also converts values to other types if specified.
             * @param message Notification
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Notification, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Notification to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Notification
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Notification {

            /** Properties of a Notification. */
            interface $Properties {

                /** Notification id */
                id?: (number|Long|null);

                /** Notification kind */
                kind?: (string|null);

                /** Notification actor_id */
                actor_id?: (number|Long|null);

                /** Notification entity_type */
                entity_type?: (string|null);

                /** Notification entity_id */
                entity_id?: (number|Long|null);

                /** Notification payload_json */
                payload_json?: (string|null);

                /** Notification read_at */
                read_at?: (string|null);

                /** Notification created_at */
                created_at?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Notification. */
            type $Shape = openvk.v1.Notification.$Properties;
        }

        /**
         * Properties of a NotificationList.
         * @deprecated Use openvk.v1.NotificationList.$Properties instead.
         */
        interface INotificationList extends openvk.v1.NotificationList.$Properties {
        }

        /** Represents a NotificationList. */
        class NotificationList {

            /**
             * Constructs a new NotificationList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.NotificationList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** NotificationList notifications. */
            notifications: openvk.v1.Notification.$Properties[];

            /**
             * Creates a new NotificationList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotificationList instance
             */
            static create(properties: openvk.v1.NotificationList.$Shape): openvk.v1.NotificationList & openvk.v1.NotificationList.$Shape;
            static create(properties?: openvk.v1.NotificationList.$Properties): openvk.v1.NotificationList;

            /**
             * Encodes the specified NotificationList message. Does not implicitly {@link openvk.v1.NotificationList.verify|verify} messages.
             * @param message NotificationList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.NotificationList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotificationList message, length delimited. Does not implicitly {@link openvk.v1.NotificationList.verify|verify} messages.
             * @param message NotificationList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.NotificationList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotificationList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.NotificationList & openvk.v1.NotificationList.$Shape} NotificationList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.NotificationList & openvk.v1.NotificationList.$Shape;

            /**
             * Decodes a NotificationList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.NotificationList & openvk.v1.NotificationList.$Shape} NotificationList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.NotificationList & openvk.v1.NotificationList.$Shape;

            /**
             * Verifies a NotificationList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NotificationList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NotificationList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.NotificationList;

            /**
             * Creates a plain object from a NotificationList message. Also converts values to other types if specified.
             * @param message NotificationList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.NotificationList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NotificationList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NotificationList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NotificationList {

            /** Properties of a NotificationList. */
            interface $Properties {

                /** NotificationList notifications */
                notifications?: (openvk.v1.Notification.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NotificationList. */
            type $Shape = openvk.v1.NotificationList.$Properties;
        }

        /**
         * Properties of a SocketEvent.
         * @deprecated Use openvk.v1.SocketEvent.$Properties instead.
         */
        interface ISocketEvent extends openvk.v1.SocketEvent.$Properties {
        }

        /** Represents a SocketEvent. */
        class SocketEvent {

            /**
             * Constructs a new SocketEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.SocketEvent.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SocketEvent type. */
            type: string;

            /** SocketEvent ts. */
            ts: (number|Long);

            /** SocketEvent payload. */
            payload: string;

            /**
             * Creates a new SocketEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SocketEvent instance
             */
            static create(properties: openvk.v1.SocketEvent.$Shape): openvk.v1.SocketEvent & openvk.v1.SocketEvent.$Shape;
            static create(properties?: openvk.v1.SocketEvent.$Properties): openvk.v1.SocketEvent;

            /**
             * Encodes the specified SocketEvent message. Does not implicitly {@link openvk.v1.SocketEvent.verify|verify} messages.
             * @param message SocketEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.SocketEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SocketEvent message, length delimited. Does not implicitly {@link openvk.v1.SocketEvent.verify|verify} messages.
             * @param message SocketEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.SocketEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SocketEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.SocketEvent & openvk.v1.SocketEvent.$Shape} SocketEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.SocketEvent & openvk.v1.SocketEvent.$Shape;

            /**
             * Decodes a SocketEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.SocketEvent & openvk.v1.SocketEvent.$Shape} SocketEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.SocketEvent & openvk.v1.SocketEvent.$Shape;

            /**
             * Verifies a SocketEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SocketEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SocketEvent
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.SocketEvent;

            /**
             * Creates a plain object from a SocketEvent message. Also converts values to other types if specified.
             * @param message SocketEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.SocketEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SocketEvent to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SocketEvent
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SocketEvent {

            /** Properties of a SocketEvent. */
            interface $Properties {

                /** SocketEvent type */
                type?: (string|null);

                /** SocketEvent ts */
                ts?: (number|Long|null);

                /** SocketEvent payload */
                payload?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SocketEvent. */
            type $Shape = openvk.v1.SocketEvent.$Properties;
        }

        /**
         * Properties of a PopularGroup.
         * @deprecated Use openvk.v1.PopularGroup.$Properties instead.
         */
        interface IPopularGroup extends openvk.v1.PopularGroup.$Properties {
        }

        /** Represents a PopularGroup. */
        class PopularGroup {

            /**
             * Constructs a new PopularGroup.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.PopularGroup.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PopularGroup id. */
            id: (number|Long);

            /** PopularGroup name. */
            name: string;

            /** PopularGroup members. */
            members: (number|Long);

            /**
             * Creates a new PopularGroup instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PopularGroup instance
             */
            static create(properties: openvk.v1.PopularGroup.$Shape): openvk.v1.PopularGroup & openvk.v1.PopularGroup.$Shape;
            static create(properties?: openvk.v1.PopularGroup.$Properties): openvk.v1.PopularGroup;

            /**
             * Encodes the specified PopularGroup message. Does not implicitly {@link openvk.v1.PopularGroup.verify|verify} messages.
             * @param message PopularGroup message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.PopularGroup.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PopularGroup message, length delimited. Does not implicitly {@link openvk.v1.PopularGroup.verify|verify} messages.
             * @param message PopularGroup message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.PopularGroup.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PopularGroup message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.PopularGroup & openvk.v1.PopularGroup.$Shape} PopularGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.PopularGroup & openvk.v1.PopularGroup.$Shape;

            /**
             * Decodes a PopularGroup message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.PopularGroup & openvk.v1.PopularGroup.$Shape} PopularGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.PopularGroup & openvk.v1.PopularGroup.$Shape;

            /**
             * Verifies a PopularGroup message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PopularGroup message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PopularGroup
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.PopularGroup;

            /**
             * Creates a plain object from a PopularGroup message. Also converts values to other types if specified.
             * @param message PopularGroup
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.PopularGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PopularGroup to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PopularGroup
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PopularGroup {

            /** Properties of a PopularGroup. */
            interface $Properties {

                /** PopularGroup id */
                id?: (number|Long|null);

                /** PopularGroup name */
                name?: (string|null);

                /** PopularGroup members */
                members?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PopularGroup. */
            type $Shape = openvk.v1.PopularGroup.$Properties;
        }

        /**
         * Properties of an InstanceAbout.
         * @deprecated Use openvk.v1.InstanceAbout.$Properties instead.
         */
        interface IInstanceAbout extends openvk.v1.InstanceAbout.$Properties {
        }

        /** Represents an InstanceAbout. */
        class InstanceAbout {

            /**
             * Constructs a new InstanceAbout.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.InstanceAbout.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** InstanceAbout users. */
            users: (number|Long);

            /** InstanceAbout online_users. */
            online_users: (number|Long);

            /** InstanceAbout active_users. */
            active_users: (number|Long);

            /** InstanceAbout groups. */
            groups: (number|Long);

            /** InstanceAbout wall_posts. */
            wall_posts: (number|Long);

            /** InstanceAbout popular_groups. */
            popular_groups: openvk.v1.PopularGroup.$Properties[];

            /**
             * Creates a new InstanceAbout instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InstanceAbout instance
             */
            static create(properties: openvk.v1.InstanceAbout.$Shape): openvk.v1.InstanceAbout & openvk.v1.InstanceAbout.$Shape;
            static create(properties?: openvk.v1.InstanceAbout.$Properties): openvk.v1.InstanceAbout;

            /**
             * Encodes the specified InstanceAbout message. Does not implicitly {@link openvk.v1.InstanceAbout.verify|verify} messages.
             * @param message InstanceAbout message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.InstanceAbout.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InstanceAbout message, length delimited. Does not implicitly {@link openvk.v1.InstanceAbout.verify|verify} messages.
             * @param message InstanceAbout message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.InstanceAbout.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InstanceAbout message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.InstanceAbout & openvk.v1.InstanceAbout.$Shape} InstanceAbout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.InstanceAbout & openvk.v1.InstanceAbout.$Shape;

            /**
             * Decodes an InstanceAbout message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.InstanceAbout & openvk.v1.InstanceAbout.$Shape} InstanceAbout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.InstanceAbout & openvk.v1.InstanceAbout.$Shape;

            /**
             * Verifies an InstanceAbout message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InstanceAbout message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InstanceAbout
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.InstanceAbout;

            /**
             * Creates a plain object from an InstanceAbout message. Also converts values to other types if specified.
             * @param message InstanceAbout
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.InstanceAbout, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InstanceAbout to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for InstanceAbout
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace InstanceAbout {

            /** Properties of an InstanceAbout. */
            interface $Properties {

                /** InstanceAbout users */
                users?: (number|Long|null);

                /** InstanceAbout online_users */
                online_users?: (number|Long|null);

                /** InstanceAbout active_users */
                active_users?: (number|Long|null);

                /** InstanceAbout groups */
                groups?: (number|Long|null);

                /** InstanceAbout wall_posts */
                wall_posts?: (number|Long|null);

                /** InstanceAbout popular_groups */
                popular_groups?: (openvk.v1.PopularGroup.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an InstanceAbout. */
            type $Shape = openvk.v1.InstanceAbout.$Properties;
        }
    }
}
