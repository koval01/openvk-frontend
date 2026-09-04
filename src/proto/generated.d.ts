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

            /** Error trace_id. */
            trace_id: string;

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

                /** Error trace_id */
                trace_id?: (string|null);

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

            /** User privacy_profile. */
            privacy_profile: openvk.v1.PrivacyLevel;

            /** User privacy_friends. */
            privacy_friends: openvk.v1.PrivacyLevel;

            /** User coins. */
            coins: (number|Long);

            /** User rating. */
            rating: number;

            /** User role. */
            role: string;

            /** User banned. */
            banned: boolean;

            /** User ban_reason. */
            ban_reason?: (string|null);

            /** User banned_until. */
            banned_until?: (string|null);

            /** User support_banned. */
            support_banned: boolean;

            /** User support_ban_reason. */
            support_ban_reason?: (string|null);

            /** User posting_allowed. */
            posting_allowed: boolean;

            /** User messaging_allowed. */
            messaging_allowed: boolean;

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

                /** User privacy_profile */
                privacy_profile?: (openvk.v1.PrivacyLevel|null);

                /** User privacy_friends */
                privacy_friends?: (openvk.v1.PrivacyLevel|null);

                /** User coins */
                coins?: (number|Long|null);

                /** User rating */
                rating?: (number|null);

                /** User role */
                role?: (string|null);

                /** User banned */
                banned?: (boolean|null);

                /** User ban_reason */
                ban_reason?: (string|null);

                /** User banned_until */
                banned_until?: (string|null);

                /** User support_banned */
                support_banned?: (boolean|null);

                /** User support_ban_reason */
                support_ban_reason?: (string|null);

                /** User posting_allowed */
                posting_allowed?: (boolean|null);

                /** User messaging_allowed */
                messaging_allowed?: (boolean|null);

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

            /** UpdateAccount privacy_photos. */
            privacy_photos: openvk.v1.PrivacyLevel;

            /** UpdateAccount privacy_audio. */
            privacy_audio: openvk.v1.PrivacyLevel;

            /** UpdateAccount privacy_profile. */
            privacy_profile: openvk.v1.PrivacyLevel;

            /** UpdateAccount privacy_friends. */
            privacy_friends: openvk.v1.PrivacyLevel;

            /** UpdateAccount status. */
            status?: (string|null);

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

                /** UpdateAccount privacy_photos */
                privacy_photos?: (openvk.v1.PrivacyLevel|null);

                /** UpdateAccount privacy_audio */
                privacy_audio?: (openvk.v1.PrivacyLevel|null);

                /** UpdateAccount privacy_profile */
                privacy_profile?: (openvk.v1.PrivacyLevel|null);

                /** UpdateAccount privacy_friends */
                privacy_friends?: (openvk.v1.PrivacyLevel|null);

                /** UpdateAccount status */
                status?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an UpdateAccount. */
            type $Shape = openvk.v1.UpdateAccount.$Properties;
        }

        /**
         * Properties of a GeoPoint.
         * @deprecated Use openvk.v1.GeoPoint.$Properties instead.
         */
        interface IGeoPoint extends openvk.v1.GeoPoint.$Properties {
        }

        /** Represents a GeoPoint. */
        class GeoPoint {

            /**
             * Constructs a new GeoPoint.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.GeoPoint.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GeoPoint lat. */
            lat: number;

            /** GeoPoint lng. */
            lng: number;

            /** GeoPoint name. */
            name: string;

            /**
             * Creates a new GeoPoint instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeoPoint instance
             */
            static create(properties: openvk.v1.GeoPoint.$Shape): openvk.v1.GeoPoint & openvk.v1.GeoPoint.$Shape;
            static create(properties?: openvk.v1.GeoPoint.$Properties): openvk.v1.GeoPoint;

            /**
             * Encodes the specified GeoPoint message. Does not implicitly {@link openvk.v1.GeoPoint.verify|verify} messages.
             * @param message GeoPoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.GeoPoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeoPoint message, length delimited. Does not implicitly {@link openvk.v1.GeoPoint.verify|verify} messages.
             * @param message GeoPoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.GeoPoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeoPoint message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.GeoPoint & openvk.v1.GeoPoint.$Shape} GeoPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.GeoPoint & openvk.v1.GeoPoint.$Shape;

            /**
             * Decodes a GeoPoint message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.GeoPoint & openvk.v1.GeoPoint.$Shape} GeoPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.GeoPoint & openvk.v1.GeoPoint.$Shape;

            /**
             * Verifies a GeoPoint message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeoPoint message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeoPoint
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.GeoPoint;

            /**
             * Creates a plain object from a GeoPoint message. Also converts values to other types if specified.
             * @param message GeoPoint
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.GeoPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeoPoint to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GeoPoint
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GeoPoint {

            /** Properties of a GeoPoint. */
            interface $Properties {

                /** GeoPoint lat */
                lat?: (number|null);

                /** GeoPoint lng */
                lng?: (number|null);

                /** GeoPoint name */
                name?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GeoPoint. */
            type $Shape = openvk.v1.GeoPoint.$Properties;
        }

        /**
         * Properties of a WallAttachment.
         * @deprecated Use openvk.v1.WallAttachment.$Properties instead.
         */
        interface IWallAttachment extends openvk.v1.WallAttachment.$Properties {
        }

        /** Represents a WallAttachment. */
        class WallAttachment {

            /**
             * Constructs a new WallAttachment.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.WallAttachment.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WallAttachment kind. */
            kind: string;

            /** WallAttachment owner_id. */
            owner_id: (number|Long);

            /** WallAttachment object_id. */
            object_id: (number|Long);

            /** WallAttachment url. */
            url: string;

            /** WallAttachment title. */
            title: string;

            /** WallAttachment src. */
            src: string;

            /**
             * Creates a new WallAttachment instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WallAttachment instance
             */
            static create(properties: openvk.v1.WallAttachment.$Shape): openvk.v1.WallAttachment & openvk.v1.WallAttachment.$Shape;
            static create(properties?: openvk.v1.WallAttachment.$Properties): openvk.v1.WallAttachment;

            /**
             * Encodes the specified WallAttachment message. Does not implicitly {@link openvk.v1.WallAttachment.verify|verify} messages.
             * @param message WallAttachment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.WallAttachment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WallAttachment message, length delimited. Does not implicitly {@link openvk.v1.WallAttachment.verify|verify} messages.
             * @param message WallAttachment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.WallAttachment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WallAttachment message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.WallAttachment & openvk.v1.WallAttachment.$Shape} WallAttachment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.WallAttachment & openvk.v1.WallAttachment.$Shape;

            /**
             * Decodes a WallAttachment message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.WallAttachment & openvk.v1.WallAttachment.$Shape} WallAttachment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.WallAttachment & openvk.v1.WallAttachment.$Shape;

            /**
             * Verifies a WallAttachment message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WallAttachment message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WallAttachment
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.WallAttachment;

            /**
             * Creates a plain object from a WallAttachment message. Also converts values to other types if specified.
             * @param message WallAttachment
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.WallAttachment, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WallAttachment to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WallAttachment
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WallAttachment {

            /** Properties of a WallAttachment. */
            interface $Properties {

                /** WallAttachment kind */
                kind?: (string|null);

                /** WallAttachment owner_id */
                owner_id?: (number|Long|null);

                /** WallAttachment object_id */
                object_id?: (number|Long|null);

                /** WallAttachment url */
                url?: (string|null);

                /** WallAttachment title */
                title?: (string|null);

                /** WallAttachment src */
                src?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WallAttachment. */
            type $Shape = openvk.v1.WallAttachment.$Properties;
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

            /** WallPost attachments. */
            attachments: openvk.v1.WallAttachment.$Properties[];

            /** WallPost geo. */
            geo?: (openvk.v1.GeoPoint.$Properties|null);

            /** WallPost source. */
            source?: (string|null);

            /** WallPost nsfw. */
            nsfw: boolean;

            /** WallPost comment_count. */
            comment_count: number;

            /** WallPost club. */
            club?: (openvk.v1.Group.$Properties|null);

            /** WallPost like_count. */
            like_count: number;

            /** WallPost liked. */
            liked: boolean;

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

                /** WallPost attachments */
                attachments?: (openvk.v1.WallAttachment.$Properties[]|null);

                /** WallPost geo */
                geo?: (openvk.v1.GeoPoint.$Properties|null);

                /** WallPost source */
                source?: (string|null);

                /** WallPost nsfw */
                nsfw?: (boolean|null);

                /** WallPost comment_count */
                comment_count?: (number|null);

                /** WallPost club */
                club?: (openvk.v1.Group.$Properties|null);

                /** WallPost like_count */
                like_count?: (number|null);

                /** WallPost liked */
                liked?: (boolean|null);

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

            /** WriteWall attachments. */
            attachments: openvk.v1.WallAttachment.$Properties[];

            /** WriteWall geo. */
            geo?: (openvk.v1.GeoPoint.$Properties|null);

            /** WriteWall source. */
            source?: (string|null);

            /** WriteWall nsfw. */
            nsfw: boolean;

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

                /** WriteWall attachments */
                attachments?: (openvk.v1.WallAttachment.$Properties[]|null);

                /** WriteWall geo */
                geo?: (openvk.v1.GeoPoint.$Properties|null);

                /** WriteWall source */
                source?: (string|null);

                /** WriteWall nsfw */
                nsfw?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WriteWall. */
            type $Shape = openvk.v1.WriteWall.$Properties;
        }

        /**
         * Properties of a Comment.
         * @deprecated Use openvk.v1.Comment.$Properties instead.
         */
        interface IComment extends openvk.v1.Comment.$Properties {
        }

        /** Represents a Comment. */
        class Comment {

            /**
             * Constructs a new Comment.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Comment.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Comment id. */
            id: (number|Long);

            /** Comment author_id. */
            author_id: (number|Long);

            /** Comment author. */
            author?: (openvk.v1.User.$Properties|null);

            /** Comment content. */
            content: string;

            /** Comment created_at. */
            created_at: string;

            /** Comment like_count. */
            like_count: number;

            /** Comment liked. */
            liked: boolean;

            /**
             * Creates a new Comment instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Comment instance
             */
            static create(properties: openvk.v1.Comment.$Shape): openvk.v1.Comment & openvk.v1.Comment.$Shape;
            static create(properties?: openvk.v1.Comment.$Properties): openvk.v1.Comment;

            /**
             * Encodes the specified Comment message. Does not implicitly {@link openvk.v1.Comment.verify|verify} messages.
             * @param message Comment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Comment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Comment message, length delimited. Does not implicitly {@link openvk.v1.Comment.verify|verify} messages.
             * @param message Comment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Comment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Comment message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Comment & openvk.v1.Comment.$Shape} Comment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Comment & openvk.v1.Comment.$Shape;

            /**
             * Decodes a Comment message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Comment & openvk.v1.Comment.$Shape} Comment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Comment & openvk.v1.Comment.$Shape;

            /**
             * Verifies a Comment message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Comment message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Comment
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Comment;

            /**
             * Creates a plain object from a Comment message. Also converts values to other types if specified.
             * @param message Comment
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Comment, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Comment to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Comment
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Comment {

            /** Properties of a Comment. */
            interface $Properties {

                /** Comment id */
                id?: (number|Long|null);

                /** Comment author_id */
                author_id?: (number|Long|null);

                /** Comment author */
                author?: (openvk.v1.User.$Properties|null);

                /** Comment content */
                content?: (string|null);

                /** Comment created_at */
                created_at?: (string|null);

                /** Comment like_count */
                like_count?: (number|null);

                /** Comment liked */
                liked?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Comment. */
            type $Shape = openvk.v1.Comment.$Properties;
        }

        /**
         * Properties of a CommentList.
         * @deprecated Use openvk.v1.CommentList.$Properties instead.
         */
        interface ICommentList extends openvk.v1.CommentList.$Properties {
        }

        /** Represents a CommentList. */
        class CommentList {

            /**
             * Constructs a new CommentList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.CommentList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CommentList comments. */
            comments: openvk.v1.Comment.$Properties[];

            /**
             * Creates a new CommentList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommentList instance
             */
            static create(properties: openvk.v1.CommentList.$Shape): openvk.v1.CommentList & openvk.v1.CommentList.$Shape;
            static create(properties?: openvk.v1.CommentList.$Properties): openvk.v1.CommentList;

            /**
             * Encodes the specified CommentList message. Does not implicitly {@link openvk.v1.CommentList.verify|verify} messages.
             * @param message CommentList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.CommentList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommentList message, length delimited. Does not implicitly {@link openvk.v1.CommentList.verify|verify} messages.
             * @param message CommentList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.CommentList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommentList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.CommentList & openvk.v1.CommentList.$Shape} CommentList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.CommentList & openvk.v1.CommentList.$Shape;

            /**
             * Decodes a CommentList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.CommentList & openvk.v1.CommentList.$Shape} CommentList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.CommentList & openvk.v1.CommentList.$Shape;

            /**
             * Verifies a CommentList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommentList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommentList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.CommentList;

            /**
             * Creates a plain object from a CommentList message. Also converts values to other types if specified.
             * @param message CommentList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.CommentList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommentList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CommentList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CommentList {

            /** Properties of a CommentList. */
            interface $Properties {

                /** CommentList comments */
                comments?: (openvk.v1.Comment.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CommentList. */
            type $Shape = openvk.v1.CommentList.$Properties;
        }

        /**
         * Properties of a WriteComment.
         * @deprecated Use openvk.v1.WriteComment.$Properties instead.
         */
        interface IWriteComment extends openvk.v1.WriteComment.$Properties {
        }

        /** Represents a WriteComment. */
        class WriteComment {

            /**
             * Constructs a new WriteComment.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.WriteComment.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WriteComment content. */
            content: string;

            /**
             * Creates a new WriteComment instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteComment instance
             */
            static create(properties: openvk.v1.WriteComment.$Shape): openvk.v1.WriteComment & openvk.v1.WriteComment.$Shape;
            static create(properties?: openvk.v1.WriteComment.$Properties): openvk.v1.WriteComment;

            /**
             * Encodes the specified WriteComment message. Does not implicitly {@link openvk.v1.WriteComment.verify|verify} messages.
             * @param message WriteComment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.WriteComment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteComment message, length delimited. Does not implicitly {@link openvk.v1.WriteComment.verify|verify} messages.
             * @param message WriteComment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.WriteComment.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteComment message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.WriteComment & openvk.v1.WriteComment.$Shape} WriteComment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.WriteComment & openvk.v1.WriteComment.$Shape;

            /**
             * Decodes a WriteComment message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.WriteComment & openvk.v1.WriteComment.$Shape} WriteComment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.WriteComment & openvk.v1.WriteComment.$Shape;

            /**
             * Verifies a WriteComment message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteComment message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteComment
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.WriteComment;

            /**
             * Creates a plain object from a WriteComment message. Also converts values to other types if specified.
             * @param message WriteComment
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.WriteComment, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteComment to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WriteComment
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WriteComment {

            /** Properties of a WriteComment. */
            interface $Properties {

                /** WriteComment content */
                content?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WriteComment. */
            type $Shape = openvk.v1.WriteComment.$Properties;
        }

        /**
         * Properties of a LikeState.
         * @deprecated Use openvk.v1.LikeState.$Properties instead.
         */
        interface ILikeState extends openvk.v1.LikeState.$Properties {
        }

        /** Represents a LikeState. */
        class LikeState {

            /**
             * Constructs a new LikeState.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.LikeState.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** LikeState liked. */
            liked: boolean;

            /** LikeState count. */
            count: number;

            /**
             * Creates a new LikeState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LikeState instance
             */
            static create(properties: openvk.v1.LikeState.$Shape): openvk.v1.LikeState & openvk.v1.LikeState.$Shape;
            static create(properties?: openvk.v1.LikeState.$Properties): openvk.v1.LikeState;

            /**
             * Encodes the specified LikeState message. Does not implicitly {@link openvk.v1.LikeState.verify|verify} messages.
             * @param message LikeState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.LikeState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LikeState message, length delimited. Does not implicitly {@link openvk.v1.LikeState.verify|verify} messages.
             * @param message LikeState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.LikeState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LikeState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.LikeState & openvk.v1.LikeState.$Shape} LikeState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.LikeState & openvk.v1.LikeState.$Shape;

            /**
             * Decodes a LikeState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.LikeState & openvk.v1.LikeState.$Shape} LikeState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.LikeState & openvk.v1.LikeState.$Shape;

            /**
             * Verifies a LikeState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LikeState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LikeState
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.LikeState;

            /**
             * Creates a plain object from a LikeState message. Also converts values to other types if specified.
             * @param message LikeState
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.LikeState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LikeState to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LikeState
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace LikeState {

            /** Properties of a LikeState. */
            interface $Properties {

                /** LikeState liked */
                liked?: (boolean|null);

                /** LikeState count */
                count?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a LikeState. */
            type $Shape = openvk.v1.LikeState.$Properties;
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

            /** Photo like_count. */
            like_count: number;

            /** Photo liked. */
            liked: boolean;

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

                /** Photo like_count */
                like_count?: (number|null);

                /** Photo liked */
                liked?: (boolean|null);

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

            /** Video like_count. */
            like_count: number;

            /** Video liked. */
            liked: boolean;

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

                /** Video like_count */
                like_count?: (number|null);

                /** Video liked */
                liked?: (boolean|null);

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

            /** Group avatar_url. */
            avatar_url?: (string|null);

            /** Group members. */
            members: (number|Long);

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

                /** Group avatar_url */
                avatar_url?: (string|null);

                /** Group members */
                members?: (number|Long|null);

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

            /** Notification actor. */
            actor?: (openvk.v1.User.$Properties|null);

            /** Notification href. */
            href: string;

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

                /** Notification actor */
                actor?: (openvk.v1.User.$Properties|null);

                /** Notification href */
                href?: (string|null);

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

        /**
         * Properties of a Gift.
         * @deprecated Use openvk.v1.Gift.$Properties instead.
         */
        interface IGift extends openvk.v1.Gift.$Properties {
        }

        /** Represents a Gift. */
        class Gift {

            /**
             * Constructs a new Gift.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Gift.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Gift id. */
            id: (number|Long);

            /** Gift category_id. */
            category_id: (number|Long);

            /** Gift name. */
            name: string;

            /** Gift description. */
            description: string;

            /** Gift price. */
            price: (number|Long);

            /** Gift image_url. */
            image_url: string;

            /**
             * Creates a new Gift instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Gift instance
             */
            static create(properties: openvk.v1.Gift.$Shape): openvk.v1.Gift & openvk.v1.Gift.$Shape;
            static create(properties?: openvk.v1.Gift.$Properties): openvk.v1.Gift;

            /**
             * Encodes the specified Gift message. Does not implicitly {@link openvk.v1.Gift.verify|verify} messages.
             * @param message Gift message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Gift.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Gift message, length delimited. Does not implicitly {@link openvk.v1.Gift.verify|verify} messages.
             * @param message Gift message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Gift.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Gift message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Gift & openvk.v1.Gift.$Shape} Gift
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Gift & openvk.v1.Gift.$Shape;

            /**
             * Decodes a Gift message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Gift & openvk.v1.Gift.$Shape} Gift
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Gift & openvk.v1.Gift.$Shape;

            /**
             * Verifies a Gift message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Gift message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Gift
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Gift;

            /**
             * Creates a plain object from a Gift message. Also converts values to other types if specified.
             * @param message Gift
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Gift, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Gift to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Gift
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Gift {

            /** Properties of a Gift. */
            interface $Properties {

                /** Gift id */
                id?: (number|Long|null);

                /** Gift category_id */
                category_id?: (number|Long|null);

                /** Gift name */
                name?: (string|null);

                /** Gift description */
                description?: (string|null);

                /** Gift price */
                price?: (number|Long|null);

                /** Gift image_url */
                image_url?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Gift. */
            type $Shape = openvk.v1.Gift.$Properties;
        }

        /**
         * Properties of a GiftCategory.
         * @deprecated Use openvk.v1.GiftCategory.$Properties instead.
         */
        interface IGiftCategory extends openvk.v1.GiftCategory.$Properties {
        }

        /** Represents a GiftCategory. */
        class GiftCategory {

            /**
             * Constructs a new GiftCategory.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.GiftCategory.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GiftCategory id. */
            id: (number|Long);

            /** GiftCategory slug. */
            slug: string;

            /** GiftCategory name. */
            name: string;

            /** GiftCategory description. */
            description: string;

            /** GiftCategory gifts. */
            gifts: openvk.v1.Gift.$Properties[];

            /**
             * Creates a new GiftCategory instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GiftCategory instance
             */
            static create(properties: openvk.v1.GiftCategory.$Shape): openvk.v1.GiftCategory & openvk.v1.GiftCategory.$Shape;
            static create(properties?: openvk.v1.GiftCategory.$Properties): openvk.v1.GiftCategory;

            /**
             * Encodes the specified GiftCategory message. Does not implicitly {@link openvk.v1.GiftCategory.verify|verify} messages.
             * @param message GiftCategory message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.GiftCategory.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GiftCategory message, length delimited. Does not implicitly {@link openvk.v1.GiftCategory.verify|verify} messages.
             * @param message GiftCategory message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.GiftCategory.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GiftCategory message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.GiftCategory & openvk.v1.GiftCategory.$Shape} GiftCategory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.GiftCategory & openvk.v1.GiftCategory.$Shape;

            /**
             * Decodes a GiftCategory message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.GiftCategory & openvk.v1.GiftCategory.$Shape} GiftCategory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.GiftCategory & openvk.v1.GiftCategory.$Shape;

            /**
             * Verifies a GiftCategory message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GiftCategory message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GiftCategory
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.GiftCategory;

            /**
             * Creates a plain object from a GiftCategory message. Also converts values to other types if specified.
             * @param message GiftCategory
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.GiftCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GiftCategory to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GiftCategory
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GiftCategory {

            /** Properties of a GiftCategory. */
            interface $Properties {

                /** GiftCategory id */
                id?: (number|Long|null);

                /** GiftCategory slug */
                slug?: (string|null);

                /** GiftCategory name */
                name?: (string|null);

                /** GiftCategory description */
                description?: (string|null);

                /** GiftCategory gifts */
                gifts?: (openvk.v1.Gift.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GiftCategory. */
            type $Shape = openvk.v1.GiftCategory.$Properties;
        }

        /**
         * Properties of a GiftCatalog.
         * @deprecated Use openvk.v1.GiftCatalog.$Properties instead.
         */
        interface IGiftCatalog extends openvk.v1.GiftCatalog.$Properties {
        }

        /** Represents a GiftCatalog. */
        class GiftCatalog {

            /**
             * Constructs a new GiftCatalog.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.GiftCatalog.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GiftCatalog categories. */
            categories: openvk.v1.GiftCategory.$Properties[];

            /**
             * Creates a new GiftCatalog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GiftCatalog instance
             */
            static create(properties: openvk.v1.GiftCatalog.$Shape): openvk.v1.GiftCatalog & openvk.v1.GiftCatalog.$Shape;
            static create(properties?: openvk.v1.GiftCatalog.$Properties): openvk.v1.GiftCatalog;

            /**
             * Encodes the specified GiftCatalog message. Does not implicitly {@link openvk.v1.GiftCatalog.verify|verify} messages.
             * @param message GiftCatalog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.GiftCatalog.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GiftCatalog message, length delimited. Does not implicitly {@link openvk.v1.GiftCatalog.verify|verify} messages.
             * @param message GiftCatalog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.GiftCatalog.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GiftCatalog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.GiftCatalog & openvk.v1.GiftCatalog.$Shape} GiftCatalog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.GiftCatalog & openvk.v1.GiftCatalog.$Shape;

            /**
             * Decodes a GiftCatalog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.GiftCatalog & openvk.v1.GiftCatalog.$Shape} GiftCatalog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.GiftCatalog & openvk.v1.GiftCatalog.$Shape;

            /**
             * Verifies a GiftCatalog message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GiftCatalog message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GiftCatalog
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.GiftCatalog;

            /**
             * Creates a plain object from a GiftCatalog message. Also converts values to other types if specified.
             * @param message GiftCatalog
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.GiftCatalog, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GiftCatalog to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GiftCatalog
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GiftCatalog {

            /** Properties of a GiftCatalog. */
            interface $Properties {

                /** GiftCatalog categories */
                categories?: (openvk.v1.GiftCategory.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GiftCatalog. */
            type $Shape = openvk.v1.GiftCatalog.$Properties;
        }

        /**
         * Properties of a UserGift.
         * @deprecated Use openvk.v1.UserGift.$Properties instead.
         */
        interface IUserGift extends openvk.v1.UserGift.$Properties {
        }

        /** Represents a UserGift. */
        class UserGift {

            /**
             * Constructs a new UserGift.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.UserGift.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UserGift id. */
            id: (number|Long);

            /** UserGift gift_id. */
            gift_id: (number|Long);

            /** UserGift gift. */
            gift?: (openvk.v1.Gift.$Properties|null);

            /** UserGift sender_id. */
            sender_id: (number|Long);

            /** UserGift sender. */
            sender?: (openvk.v1.User.$Properties|null);

            /** UserGift receiver_id. */
            receiver_id: (number|Long);

            /** UserGift caption. */
            caption?: (string|null);

            /** UserGift anonymous. */
            anonymous: boolean;

            /** UserGift created_at. */
            created_at: string;

            /**
             * Creates a new UserGift instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserGift instance
             */
            static create(properties: openvk.v1.UserGift.$Shape): openvk.v1.UserGift & openvk.v1.UserGift.$Shape;
            static create(properties?: openvk.v1.UserGift.$Properties): openvk.v1.UserGift;

            /**
             * Encodes the specified UserGift message. Does not implicitly {@link openvk.v1.UserGift.verify|verify} messages.
             * @param message UserGift message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.UserGift.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserGift message, length delimited. Does not implicitly {@link openvk.v1.UserGift.verify|verify} messages.
             * @param message UserGift message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.UserGift.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserGift message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.UserGift & openvk.v1.UserGift.$Shape} UserGift
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.UserGift & openvk.v1.UserGift.$Shape;

            /**
             * Decodes a UserGift message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.UserGift & openvk.v1.UserGift.$Shape} UserGift
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.UserGift & openvk.v1.UserGift.$Shape;

            /**
             * Verifies a UserGift message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserGift message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserGift
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.UserGift;

            /**
             * Creates a plain object from a UserGift message. Also converts values to other types if specified.
             * @param message UserGift
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.UserGift, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserGift to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UserGift
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UserGift {

            /** Properties of a UserGift. */
            interface $Properties {

                /** UserGift id */
                id?: (number|Long|null);

                /** UserGift gift_id */
                gift_id?: (number|Long|null);

                /** UserGift gift */
                gift?: (openvk.v1.Gift.$Properties|null);

                /** UserGift sender_id */
                sender_id?: (number|Long|null);

                /** UserGift sender */
                sender?: (openvk.v1.User.$Properties|null);

                /** UserGift receiver_id */
                receiver_id?: (number|Long|null);

                /** UserGift caption */
                caption?: (string|null);

                /** UserGift anonymous */
                anonymous?: (boolean|null);

                /** UserGift created_at */
                created_at?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a UserGift. */
            type $Shape = openvk.v1.UserGift.$Properties;
        }

        /**
         * Properties of a UserGiftList.
         * @deprecated Use openvk.v1.UserGiftList.$Properties instead.
         */
        interface IUserGiftList extends openvk.v1.UserGiftList.$Properties {
        }

        /** Represents a UserGiftList. */
        class UserGiftList {

            /**
             * Constructs a new UserGiftList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.UserGiftList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UserGiftList gifts. */
            gifts: openvk.v1.UserGift.$Properties[];

            /**
             * Creates a new UserGiftList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserGiftList instance
             */
            static create(properties: openvk.v1.UserGiftList.$Shape): openvk.v1.UserGiftList & openvk.v1.UserGiftList.$Shape;
            static create(properties?: openvk.v1.UserGiftList.$Properties): openvk.v1.UserGiftList;

            /**
             * Encodes the specified UserGiftList message. Does not implicitly {@link openvk.v1.UserGiftList.verify|verify} messages.
             * @param message UserGiftList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.UserGiftList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserGiftList message, length delimited. Does not implicitly {@link openvk.v1.UserGiftList.verify|verify} messages.
             * @param message UserGiftList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.UserGiftList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserGiftList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.UserGiftList & openvk.v1.UserGiftList.$Shape} UserGiftList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.UserGiftList & openvk.v1.UserGiftList.$Shape;

            /**
             * Decodes a UserGiftList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.UserGiftList & openvk.v1.UserGiftList.$Shape} UserGiftList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.UserGiftList & openvk.v1.UserGiftList.$Shape;

            /**
             * Verifies a UserGiftList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserGiftList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserGiftList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.UserGiftList;

            /**
             * Creates a plain object from a UserGiftList message. Also converts values to other types if specified.
             * @param message UserGiftList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.UserGiftList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserGiftList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UserGiftList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UserGiftList {

            /** Properties of a UserGiftList. */
            interface $Properties {

                /** UserGiftList gifts */
                gifts?: (openvk.v1.UserGift.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a UserGiftList. */
            type $Shape = openvk.v1.UserGiftList.$Properties;
        }

        /**
         * Properties of a SendGift.
         * @deprecated Use openvk.v1.SendGift.$Properties instead.
         */
        interface ISendGift extends openvk.v1.SendGift.$Properties {
        }

        /** Represents a SendGift. */
        class SendGift {

            /**
             * Constructs a new SendGift.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.SendGift.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SendGift gift_id. */
            gift_id: (number|Long);

            /** SendGift receiver_id. */
            receiver_id: (number|Long);

            /** SendGift caption. */
            caption?: (string|null);

            /** SendGift anonymous. */
            anonymous: boolean;

            /**
             * Creates a new SendGift instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SendGift instance
             */
            static create(properties: openvk.v1.SendGift.$Shape): openvk.v1.SendGift & openvk.v1.SendGift.$Shape;
            static create(properties?: openvk.v1.SendGift.$Properties): openvk.v1.SendGift;

            /**
             * Encodes the specified SendGift message. Does not implicitly {@link openvk.v1.SendGift.verify|verify} messages.
             * @param message SendGift message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.SendGift.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SendGift message, length delimited. Does not implicitly {@link openvk.v1.SendGift.verify|verify} messages.
             * @param message SendGift message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.SendGift.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SendGift message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.SendGift & openvk.v1.SendGift.$Shape} SendGift
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.SendGift & openvk.v1.SendGift.$Shape;

            /**
             * Decodes a SendGift message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.SendGift & openvk.v1.SendGift.$Shape} SendGift
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.SendGift & openvk.v1.SendGift.$Shape;

            /**
             * Verifies a SendGift message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SendGift message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SendGift
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.SendGift;

            /**
             * Creates a plain object from a SendGift message. Also converts values to other types if specified.
             * @param message SendGift
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.SendGift, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SendGift to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SendGift
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SendGift {

            /** Properties of a SendGift. */
            interface $Properties {

                /** SendGift gift_id */
                gift_id?: (number|Long|null);

                /** SendGift receiver_id */
                receiver_id?: (number|Long|null);

                /** SendGift caption */
                caption?: (string|null);

                /** SendGift anonymous */
                anonymous?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SendGift. */
            type $Shape = openvk.v1.SendGift.$Properties;
        }

        /**
         * Properties of a TicketReply.
         * @deprecated Use openvk.v1.TicketReply.$Properties instead.
         */
        interface ITicketReply extends openvk.v1.TicketReply.$Properties {
        }

        /** Represents a TicketReply. */
        class TicketReply {

            /**
             * Constructs a new TicketReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.TicketReply.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** TicketReply id. */
            id: (number|Long);

            /** TicketReply ticket_id. */
            ticket_id: (number|Long);

            /** TicketReply author_id. */
            author_id: (number|Long);

            /** TicketReply author. */
            author?: (openvk.v1.User.$Properties|null);

            /** TicketReply content. */
            content: string;

            /** TicketReply from_agent. */
            from_agent: boolean;

            /** TicketReply created_at. */
            created_at: string;

            /**
             * Creates a new TicketReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TicketReply instance
             */
            static create(properties: openvk.v1.TicketReply.$Shape): openvk.v1.TicketReply & openvk.v1.TicketReply.$Shape;
            static create(properties?: openvk.v1.TicketReply.$Properties): openvk.v1.TicketReply;

            /**
             * Encodes the specified TicketReply message. Does not implicitly {@link openvk.v1.TicketReply.verify|verify} messages.
             * @param message TicketReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.TicketReply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TicketReply message, length delimited. Does not implicitly {@link openvk.v1.TicketReply.verify|verify} messages.
             * @param message TicketReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.TicketReply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TicketReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.TicketReply & openvk.v1.TicketReply.$Shape} TicketReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.TicketReply & openvk.v1.TicketReply.$Shape;

            /**
             * Decodes a TicketReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.TicketReply & openvk.v1.TicketReply.$Shape} TicketReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.TicketReply & openvk.v1.TicketReply.$Shape;

            /**
             * Verifies a TicketReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TicketReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TicketReply
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.TicketReply;

            /**
             * Creates a plain object from a TicketReply message. Also converts values to other types if specified.
             * @param message TicketReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.TicketReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TicketReply to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for TicketReply
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace TicketReply {

            /** Properties of a TicketReply. */
            interface $Properties {

                /** TicketReply id */
                id?: (number|Long|null);

                /** TicketReply ticket_id */
                ticket_id?: (number|Long|null);

                /** TicketReply author_id */
                author_id?: (number|Long|null);

                /** TicketReply author */
                author?: (openvk.v1.User.$Properties|null);

                /** TicketReply content */
                content?: (string|null);

                /** TicketReply from_agent */
                from_agent?: (boolean|null);

                /** TicketReply created_at */
                created_at?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a TicketReply. */
            type $Shape = openvk.v1.TicketReply.$Properties;
        }

        /**
         * Properties of a Ticket.
         * @deprecated Use openvk.v1.Ticket.$Properties instead.
         */
        interface ITicket extends openvk.v1.Ticket.$Properties {
        }

        /** Represents a Ticket. */
        class Ticket {

            /**
             * Constructs a new Ticket.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Ticket.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Ticket id. */
            id: (number|Long);

            /** Ticket author_id. */
            author_id: (number|Long);

            /** Ticket author. */
            author?: (openvk.v1.User.$Properties|null);

            /** Ticket subject. */
            subject: string;

            /** Ticket content. */
            content: string;

            /** Ticket status. */
            status: string;

            /** Ticket created_at. */
            created_at: string;

            /** Ticket replies. */
            replies: openvk.v1.TicketReply.$Properties[];

            /**
             * Creates a new Ticket instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ticket instance
             */
            static create(properties: openvk.v1.Ticket.$Shape): openvk.v1.Ticket & openvk.v1.Ticket.$Shape;
            static create(properties?: openvk.v1.Ticket.$Properties): openvk.v1.Ticket;

            /**
             * Encodes the specified Ticket message. Does not implicitly {@link openvk.v1.Ticket.verify|verify} messages.
             * @param message Ticket message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Ticket.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ticket message, length delimited. Does not implicitly {@link openvk.v1.Ticket.verify|verify} messages.
             * @param message Ticket message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Ticket.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Ticket message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Ticket & openvk.v1.Ticket.$Shape} Ticket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Ticket & openvk.v1.Ticket.$Shape;

            /**
             * Decodes a Ticket message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Ticket & openvk.v1.Ticket.$Shape} Ticket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Ticket & openvk.v1.Ticket.$Shape;

            /**
             * Verifies a Ticket message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Ticket message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Ticket
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Ticket;

            /**
             * Creates a plain object from a Ticket message. Also converts values to other types if specified.
             * @param message Ticket
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Ticket, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Ticket to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Ticket
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Ticket {

            /** Properties of a Ticket. */
            interface $Properties {

                /** Ticket id */
                id?: (number|Long|null);

                /** Ticket author_id */
                author_id?: (number|Long|null);

                /** Ticket author */
                author?: (openvk.v1.User.$Properties|null);

                /** Ticket subject */
                subject?: (string|null);

                /** Ticket content */
                content?: (string|null);

                /** Ticket status */
                status?: (string|null);

                /** Ticket created_at */
                created_at?: (string|null);

                /** Ticket replies */
                replies?: (openvk.v1.TicketReply.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Ticket. */
            type $Shape = openvk.v1.Ticket.$Properties;
        }

        /**
         * Properties of a TicketList.
         * @deprecated Use openvk.v1.TicketList.$Properties instead.
         */
        interface ITicketList extends openvk.v1.TicketList.$Properties {
        }

        /** Represents a TicketList. */
        class TicketList {

            /**
             * Constructs a new TicketList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.TicketList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** TicketList tickets. */
            tickets: openvk.v1.Ticket.$Properties[];

            /**
             * Creates a new TicketList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TicketList instance
             */
            static create(properties: openvk.v1.TicketList.$Shape): openvk.v1.TicketList & openvk.v1.TicketList.$Shape;
            static create(properties?: openvk.v1.TicketList.$Properties): openvk.v1.TicketList;

            /**
             * Encodes the specified TicketList message. Does not implicitly {@link openvk.v1.TicketList.verify|verify} messages.
             * @param message TicketList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.TicketList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TicketList message, length delimited. Does not implicitly {@link openvk.v1.TicketList.verify|verify} messages.
             * @param message TicketList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.TicketList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TicketList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.TicketList & openvk.v1.TicketList.$Shape} TicketList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.TicketList & openvk.v1.TicketList.$Shape;

            /**
             * Decodes a TicketList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.TicketList & openvk.v1.TicketList.$Shape} TicketList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.TicketList & openvk.v1.TicketList.$Shape;

            /**
             * Verifies a TicketList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TicketList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TicketList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.TicketList;

            /**
             * Creates a plain object from a TicketList message. Also converts values to other types if specified.
             * @param message TicketList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.TicketList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TicketList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for TicketList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace TicketList {

            /** Properties of a TicketList. */
            interface $Properties {

                /** TicketList tickets */
                tickets?: (openvk.v1.Ticket.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a TicketList. */
            type $Shape = openvk.v1.TicketList.$Properties;
        }

        /**
         * Properties of a WriteTicket.
         * @deprecated Use openvk.v1.WriteTicket.$Properties instead.
         */
        interface IWriteTicket extends openvk.v1.WriteTicket.$Properties {
        }

        /** Represents a WriteTicket. */
        class WriteTicket {

            /**
             * Constructs a new WriteTicket.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.WriteTicket.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WriteTicket subject. */
            subject: string;

            /** WriteTicket content. */
            content: string;

            /**
             * Creates a new WriteTicket instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteTicket instance
             */
            static create(properties: openvk.v1.WriteTicket.$Shape): openvk.v1.WriteTicket & openvk.v1.WriteTicket.$Shape;
            static create(properties?: openvk.v1.WriteTicket.$Properties): openvk.v1.WriteTicket;

            /**
             * Encodes the specified WriteTicket message. Does not implicitly {@link openvk.v1.WriteTicket.verify|verify} messages.
             * @param message WriteTicket message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.WriteTicket.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteTicket message, length delimited. Does not implicitly {@link openvk.v1.WriteTicket.verify|verify} messages.
             * @param message WriteTicket message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.WriteTicket.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteTicket message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.WriteTicket & openvk.v1.WriteTicket.$Shape} WriteTicket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.WriteTicket & openvk.v1.WriteTicket.$Shape;

            /**
             * Decodes a WriteTicket message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.WriteTicket & openvk.v1.WriteTicket.$Shape} WriteTicket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.WriteTicket & openvk.v1.WriteTicket.$Shape;

            /**
             * Verifies a WriteTicket message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteTicket message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteTicket
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.WriteTicket;

            /**
             * Creates a plain object from a WriteTicket message. Also converts values to other types if specified.
             * @param message WriteTicket
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.WriteTicket, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteTicket to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WriteTicket
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WriteTicket {

            /** Properties of a WriteTicket. */
            interface $Properties {

                /** WriteTicket subject */
                subject?: (string|null);

                /** WriteTicket content */
                content?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WriteTicket. */
            type $Shape = openvk.v1.WriteTicket.$Properties;
        }

        /**
         * Properties of a WriteTicketReply.
         * @deprecated Use openvk.v1.WriteTicketReply.$Properties instead.
         */
        interface IWriteTicketReply extends openvk.v1.WriteTicketReply.$Properties {
        }

        /** Represents a WriteTicketReply. */
        class WriteTicketReply {

            /**
             * Constructs a new WriteTicketReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.WriteTicketReply.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WriteTicketReply content. */
            content: string;

            /**
             * Creates a new WriteTicketReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteTicketReply instance
             */
            static create(properties: openvk.v1.WriteTicketReply.$Shape): openvk.v1.WriteTicketReply & openvk.v1.WriteTicketReply.$Shape;
            static create(properties?: openvk.v1.WriteTicketReply.$Properties): openvk.v1.WriteTicketReply;

            /**
             * Encodes the specified WriteTicketReply message. Does not implicitly {@link openvk.v1.WriteTicketReply.verify|verify} messages.
             * @param message WriteTicketReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.WriteTicketReply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteTicketReply message, length delimited. Does not implicitly {@link openvk.v1.WriteTicketReply.verify|verify} messages.
             * @param message WriteTicketReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.WriteTicketReply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteTicketReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.WriteTicketReply & openvk.v1.WriteTicketReply.$Shape} WriteTicketReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.WriteTicketReply & openvk.v1.WriteTicketReply.$Shape;

            /**
             * Decodes a WriteTicketReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.WriteTicketReply & openvk.v1.WriteTicketReply.$Shape} WriteTicketReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.WriteTicketReply & openvk.v1.WriteTicketReply.$Shape;

            /**
             * Verifies a WriteTicketReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteTicketReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteTicketReply
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.WriteTicketReply;

            /**
             * Creates a plain object from a WriteTicketReply message. Also converts values to other types if specified.
             * @param message WriteTicketReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.WriteTicketReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteTicketReply to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WriteTicketReply
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WriteTicketReply {

            /** Properties of a WriteTicketReply. */
            interface $Properties {

                /** WriteTicketReply content */
                content?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WriteTicketReply. */
            type $Shape = openvk.v1.WriteTicketReply.$Properties;
        }

        /**
         * Properties of a Report.
         * @deprecated Use openvk.v1.Report.$Properties instead.
         */
        interface IReport extends openvk.v1.Report.$Properties {
        }

        /** Represents a Report. */
        class Report {

            /**
             * Constructs a new Report.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Report.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Report id. */
            id: (number|Long);

            /** Report author_id. */
            author_id: (number|Long);

            /** Report author. */
            author?: (openvk.v1.User.$Properties|null);

            /** Report target_type. */
            target_type: string;

            /** Report target_id. */
            target_id: (number|Long);

            /** Report reason. */
            reason: string;

            /** Report status. */
            status: string;

            /** Report created_at. */
            created_at: string;

            /**
             * Creates a new Report instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Report instance
             */
            static create(properties: openvk.v1.Report.$Shape): openvk.v1.Report & openvk.v1.Report.$Shape;
            static create(properties?: openvk.v1.Report.$Properties): openvk.v1.Report;

            /**
             * Encodes the specified Report message. Does not implicitly {@link openvk.v1.Report.verify|verify} messages.
             * @param message Report message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Report.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Report message, length delimited. Does not implicitly {@link openvk.v1.Report.verify|verify} messages.
             * @param message Report message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Report.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Report message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Report & openvk.v1.Report.$Shape} Report
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Report & openvk.v1.Report.$Shape;

            /**
             * Decodes a Report message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Report & openvk.v1.Report.$Shape} Report
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Report & openvk.v1.Report.$Shape;

            /**
             * Verifies a Report message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Report message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Report
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Report;

            /**
             * Creates a plain object from a Report message. Also converts values to other types if specified.
             * @param message Report
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Report, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Report to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Report
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Report {

            /** Properties of a Report. */
            interface $Properties {

                /** Report id */
                id?: (number|Long|null);

                /** Report author_id */
                author_id?: (number|Long|null);

                /** Report author */
                author?: (openvk.v1.User.$Properties|null);

                /** Report target_type */
                target_type?: (string|null);

                /** Report target_id */
                target_id?: (number|Long|null);

                /** Report reason */
                reason?: (string|null);

                /** Report status */
                status?: (string|null);

                /** Report created_at */
                created_at?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Report. */
            type $Shape = openvk.v1.Report.$Properties;
        }

        /**
         * Properties of a ReportList.
         * @deprecated Use openvk.v1.ReportList.$Properties instead.
         */
        interface IReportList extends openvk.v1.ReportList.$Properties {
        }

        /** Represents a ReportList. */
        class ReportList {

            /**
             * Constructs a new ReportList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.ReportList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ReportList reports. */
            reports: openvk.v1.Report.$Properties[];

            /**
             * Creates a new ReportList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReportList instance
             */
            static create(properties: openvk.v1.ReportList.$Shape): openvk.v1.ReportList & openvk.v1.ReportList.$Shape;
            static create(properties?: openvk.v1.ReportList.$Properties): openvk.v1.ReportList;

            /**
             * Encodes the specified ReportList message. Does not implicitly {@link openvk.v1.ReportList.verify|verify} messages.
             * @param message ReportList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.ReportList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReportList message, length delimited. Does not implicitly {@link openvk.v1.ReportList.verify|verify} messages.
             * @param message ReportList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.ReportList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReportList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.ReportList & openvk.v1.ReportList.$Shape} ReportList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.ReportList & openvk.v1.ReportList.$Shape;

            /**
             * Decodes a ReportList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.ReportList & openvk.v1.ReportList.$Shape} ReportList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.ReportList & openvk.v1.ReportList.$Shape;

            /**
             * Verifies a ReportList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReportList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReportList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.ReportList;

            /**
             * Creates a plain object from a ReportList message. Also converts values to other types if specified.
             * @param message ReportList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.ReportList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReportList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ReportList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ReportList {

            /** Properties of a ReportList. */
            interface $Properties {

                /** ReportList reports */
                reports?: (openvk.v1.Report.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ReportList. */
            type $Shape = openvk.v1.ReportList.$Properties;
        }

        /**
         * Properties of a WriteReport.
         * @deprecated Use openvk.v1.WriteReport.$Properties instead.
         */
        interface IWriteReport extends openvk.v1.WriteReport.$Properties {
        }

        /** Represents a WriteReport. */
        class WriteReport {

            /**
             * Constructs a new WriteReport.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.WriteReport.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WriteReport target_type. */
            target_type: string;

            /** WriteReport target_id. */
            target_id: (number|Long);

            /** WriteReport reason. */
            reason: string;

            /** WriteReport owner_id. */
            owner_id?: (number|Long|null);

            /**
             * Creates a new WriteReport instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteReport instance
             */
            static create(properties: openvk.v1.WriteReport.$Shape): openvk.v1.WriteReport & openvk.v1.WriteReport.$Shape;
            static create(properties?: openvk.v1.WriteReport.$Properties): openvk.v1.WriteReport;

            /**
             * Encodes the specified WriteReport message. Does not implicitly {@link openvk.v1.WriteReport.verify|verify} messages.
             * @param message WriteReport message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.WriteReport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteReport message, length delimited. Does not implicitly {@link openvk.v1.WriteReport.verify|verify} messages.
             * @param message WriteReport message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.WriteReport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteReport message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.WriteReport & openvk.v1.WriteReport.$Shape} WriteReport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.WriteReport & openvk.v1.WriteReport.$Shape;

            /**
             * Decodes a WriteReport message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.WriteReport & openvk.v1.WriteReport.$Shape} WriteReport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.WriteReport & openvk.v1.WriteReport.$Shape;

            /**
             * Verifies a WriteReport message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteReport message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteReport
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.WriteReport;

            /**
             * Creates a plain object from a WriteReport message. Also converts values to other types if specified.
             * @param message WriteReport
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.WriteReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteReport to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WriteReport
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WriteReport {

            /** Properties of a WriteReport. */
            interface $Properties {

                /** WriteReport target_type */
                target_type?: (string|null);

                /** WriteReport target_id */
                target_id?: (number|Long|null);

                /** WriteReport reason */
                reason?: (string|null);

                /** WriteReport owner_id */
                owner_id?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WriteReport. */
            type $Shape = openvk.v1.WriteReport.$Properties;
        }

        /**
         * Properties of a ReportAction.
         * @deprecated Use openvk.v1.ReportAction.$Properties instead.
         */
        interface IReportAction extends openvk.v1.ReportAction.$Properties {
        }

        /** Represents a ReportAction. */
        class ReportAction {

            /**
             * Constructs a new ReportAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.ReportAction.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ReportAction action. */
            action: string;

            /** ReportAction reason. */
            reason?: (string|null);

            /**
             * Creates a new ReportAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReportAction instance
             */
            static create(properties: openvk.v1.ReportAction.$Shape): openvk.v1.ReportAction & openvk.v1.ReportAction.$Shape;
            static create(properties?: openvk.v1.ReportAction.$Properties): openvk.v1.ReportAction;

            /**
             * Encodes the specified ReportAction message. Does not implicitly {@link openvk.v1.ReportAction.verify|verify} messages.
             * @param message ReportAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.ReportAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReportAction message, length delimited. Does not implicitly {@link openvk.v1.ReportAction.verify|verify} messages.
             * @param message ReportAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.ReportAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReportAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.ReportAction & openvk.v1.ReportAction.$Shape} ReportAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.ReportAction & openvk.v1.ReportAction.$Shape;

            /**
             * Decodes a ReportAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.ReportAction & openvk.v1.ReportAction.$Shape} ReportAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.ReportAction & openvk.v1.ReportAction.$Shape;

            /**
             * Verifies a ReportAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReportAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReportAction
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.ReportAction;

            /**
             * Creates a plain object from a ReportAction message. Also converts values to other types if specified.
             * @param message ReportAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.ReportAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReportAction to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ReportAction
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ReportAction {

            /** Properties of a ReportAction. */
            interface $Properties {

                /** ReportAction action */
                action?: (string|null);

                /** ReportAction reason */
                reason?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ReportAction. */
            type $Shape = openvk.v1.ReportAction.$Properties;
        }

        /**
         * Properties of a Voucher.
         * @deprecated Use openvk.v1.Voucher.$Properties instead.
         */
        interface IVoucher extends openvk.v1.Voucher.$Properties {
        }

        /** Represents a Voucher. */
        class Voucher {

            /**
             * Constructs a new Voucher.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Voucher.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Voucher id. */
            id: (number|Long);

            /** Voucher serial. */
            serial: string;

            /** Voucher coins. */
            coins: (number|Long);

            /** Voucher remaining. */
            remaining: number;

            /** Voucher total. */
            total: number;

            /** Voucher expires_at. */
            expires_at?: (string|null);

            /**
             * Creates a new Voucher instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Voucher instance
             */
            static create(properties: openvk.v1.Voucher.$Shape): openvk.v1.Voucher & openvk.v1.Voucher.$Shape;
            static create(properties?: openvk.v1.Voucher.$Properties): openvk.v1.Voucher;

            /**
             * Encodes the specified Voucher message. Does not implicitly {@link openvk.v1.Voucher.verify|verify} messages.
             * @param message Voucher message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Voucher.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Voucher message, length delimited. Does not implicitly {@link openvk.v1.Voucher.verify|verify} messages.
             * @param message Voucher message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Voucher.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Voucher message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Voucher & openvk.v1.Voucher.$Shape} Voucher
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Voucher & openvk.v1.Voucher.$Shape;

            /**
             * Decodes a Voucher message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Voucher & openvk.v1.Voucher.$Shape} Voucher
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Voucher & openvk.v1.Voucher.$Shape;

            /**
             * Verifies a Voucher message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Voucher message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Voucher
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Voucher;

            /**
             * Creates a plain object from a Voucher message. Also converts values to other types if specified.
             * @param message Voucher
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Voucher, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Voucher to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Voucher
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Voucher {

            /** Properties of a Voucher. */
            interface $Properties {

                /** Voucher id */
                id?: (number|Long|null);

                /** Voucher serial */
                serial?: (string|null);

                /** Voucher coins */
                coins?: (number|Long|null);

                /** Voucher remaining */
                remaining?: (number|null);

                /** Voucher total */
                total?: (number|null);

                /** Voucher expires_at */
                expires_at?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Voucher. */
            type $Shape = openvk.v1.Voucher.$Properties;
        }

        /**
         * Properties of a VoucherList.
         * @deprecated Use openvk.v1.VoucherList.$Properties instead.
         */
        interface IVoucherList extends openvk.v1.VoucherList.$Properties {
        }

        /** Represents a VoucherList. */
        class VoucherList {

            /**
             * Constructs a new VoucherList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.VoucherList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** VoucherList vouchers. */
            vouchers: openvk.v1.Voucher.$Properties[];

            /**
             * Creates a new VoucherList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VoucherList instance
             */
            static create(properties: openvk.v1.VoucherList.$Shape): openvk.v1.VoucherList & openvk.v1.VoucherList.$Shape;
            static create(properties?: openvk.v1.VoucherList.$Properties): openvk.v1.VoucherList;

            /**
             * Encodes the specified VoucherList message. Does not implicitly {@link openvk.v1.VoucherList.verify|verify} messages.
             * @param message VoucherList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.VoucherList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VoucherList message, length delimited. Does not implicitly {@link openvk.v1.VoucherList.verify|verify} messages.
             * @param message VoucherList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.VoucherList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VoucherList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.VoucherList & openvk.v1.VoucherList.$Shape} VoucherList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.VoucherList & openvk.v1.VoucherList.$Shape;

            /**
             * Decodes a VoucherList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.VoucherList & openvk.v1.VoucherList.$Shape} VoucherList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.VoucherList & openvk.v1.VoucherList.$Shape;

            /**
             * Verifies a VoucherList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VoucherList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VoucherList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.VoucherList;

            /**
             * Creates a plain object from a VoucherList message. Also converts values to other types if specified.
             * @param message VoucherList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.VoucherList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VoucherList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for VoucherList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace VoucherList {

            /** Properties of a VoucherList. */
            interface $Properties {

                /** VoucherList vouchers */
                vouchers?: (openvk.v1.Voucher.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a VoucherList. */
            type $Shape = openvk.v1.VoucherList.$Properties;
        }

        /**
         * Properties of a RedeemVoucher.
         * @deprecated Use openvk.v1.RedeemVoucher.$Properties instead.
         */
        interface IRedeemVoucher extends openvk.v1.RedeemVoucher.$Properties {
        }

        /** Represents a RedeemVoucher. */
        class RedeemVoucher {

            /**
             * Constructs a new RedeemVoucher.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.RedeemVoucher.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** RedeemVoucher serial. */
            serial: string;

            /**
             * Creates a new RedeemVoucher instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RedeemVoucher instance
             */
            static create(properties: openvk.v1.RedeemVoucher.$Shape): openvk.v1.RedeemVoucher & openvk.v1.RedeemVoucher.$Shape;
            static create(properties?: openvk.v1.RedeemVoucher.$Properties): openvk.v1.RedeemVoucher;

            /**
             * Encodes the specified RedeemVoucher message. Does not implicitly {@link openvk.v1.RedeemVoucher.verify|verify} messages.
             * @param message RedeemVoucher message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.RedeemVoucher.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RedeemVoucher message, length delimited. Does not implicitly {@link openvk.v1.RedeemVoucher.verify|verify} messages.
             * @param message RedeemVoucher message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.RedeemVoucher.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RedeemVoucher message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.RedeemVoucher & openvk.v1.RedeemVoucher.$Shape} RedeemVoucher
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.RedeemVoucher & openvk.v1.RedeemVoucher.$Shape;

            /**
             * Decodes a RedeemVoucher message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.RedeemVoucher & openvk.v1.RedeemVoucher.$Shape} RedeemVoucher
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.RedeemVoucher & openvk.v1.RedeemVoucher.$Shape;

            /**
             * Verifies a RedeemVoucher message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RedeemVoucher message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RedeemVoucher
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.RedeemVoucher;

            /**
             * Creates a plain object from a RedeemVoucher message. Also converts values to other types if specified.
             * @param message RedeemVoucher
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.RedeemVoucher, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RedeemVoucher to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RedeemVoucher
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RedeemVoucher {

            /** Properties of a RedeemVoucher. */
            interface $Properties {

                /** RedeemVoucher serial */
                serial?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RedeemVoucher. */
            type $Shape = openvk.v1.RedeemVoucher.$Properties;
        }

        /**
         * Properties of a CreateVoucher.
         * @deprecated Use openvk.v1.CreateVoucher.$Properties instead.
         */
        interface ICreateVoucher extends openvk.v1.CreateVoucher.$Properties {
        }

        /** Represents a CreateVoucher. */
        class CreateVoucher {

            /**
             * Constructs a new CreateVoucher.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.CreateVoucher.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CreateVoucher coins. */
            coins: (number|Long);

            /** CreateVoucher uses. */
            uses: number;

            /**
             * Creates a new CreateVoucher instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateVoucher instance
             */
            static create(properties: openvk.v1.CreateVoucher.$Shape): openvk.v1.CreateVoucher & openvk.v1.CreateVoucher.$Shape;
            static create(properties?: openvk.v1.CreateVoucher.$Properties): openvk.v1.CreateVoucher;

            /**
             * Encodes the specified CreateVoucher message. Does not implicitly {@link openvk.v1.CreateVoucher.verify|verify} messages.
             * @param message CreateVoucher message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.CreateVoucher.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateVoucher message, length delimited. Does not implicitly {@link openvk.v1.CreateVoucher.verify|verify} messages.
             * @param message CreateVoucher message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.CreateVoucher.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateVoucher message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.CreateVoucher & openvk.v1.CreateVoucher.$Shape} CreateVoucher
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.CreateVoucher & openvk.v1.CreateVoucher.$Shape;

            /**
             * Decodes a CreateVoucher message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.CreateVoucher & openvk.v1.CreateVoucher.$Shape} CreateVoucher
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.CreateVoucher & openvk.v1.CreateVoucher.$Shape;

            /**
             * Verifies a CreateVoucher message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateVoucher message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateVoucher
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.CreateVoucher;

            /**
             * Creates a plain object from a CreateVoucher message. Also converts values to other types if specified.
             * @param message CreateVoucher
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.CreateVoucher, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateVoucher to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CreateVoucher
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CreateVoucher {

            /** Properties of a CreateVoucher. */
            interface $Properties {

                /** CreateVoucher coins */
                coins?: (number|Long|null);

                /** CreateVoucher uses */
                uses?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CreateVoucher. */
            type $Shape = openvk.v1.CreateVoucher.$Properties;
        }

        /**
         * Properties of a TransferCoins.
         * @deprecated Use openvk.v1.TransferCoins.$Properties instead.
         */
        interface ITransferCoins extends openvk.v1.TransferCoins.$Properties {
        }

        /** Represents a TransferCoins. */
        class TransferCoins {

            /**
             * Constructs a new TransferCoins.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.TransferCoins.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** TransferCoins receiver_id. */
            receiver_id: (number|Long);

            /** TransferCoins amount. */
            amount: (number|Long);

            /** TransferCoins message. */
            message?: (string|null);

            /**
             * Creates a new TransferCoins instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransferCoins instance
             */
            static create(properties: openvk.v1.TransferCoins.$Shape): openvk.v1.TransferCoins & openvk.v1.TransferCoins.$Shape;
            static create(properties?: openvk.v1.TransferCoins.$Properties): openvk.v1.TransferCoins;

            /**
             * Encodes the specified TransferCoins message. Does not implicitly {@link openvk.v1.TransferCoins.verify|verify} messages.
             * @param message TransferCoins message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.TransferCoins.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransferCoins message, length delimited. Does not implicitly {@link openvk.v1.TransferCoins.verify|verify} messages.
             * @param message TransferCoins message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.TransferCoins.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransferCoins message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.TransferCoins & openvk.v1.TransferCoins.$Shape} TransferCoins
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.TransferCoins & openvk.v1.TransferCoins.$Shape;

            /**
             * Decodes a TransferCoins message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.TransferCoins & openvk.v1.TransferCoins.$Shape} TransferCoins
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.TransferCoins & openvk.v1.TransferCoins.$Shape;

            /**
             * Verifies a TransferCoins message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransferCoins message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransferCoins
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.TransferCoins;

            /**
             * Creates a plain object from a TransferCoins message. Also converts values to other types if specified.
             * @param message TransferCoins
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.TransferCoins, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransferCoins to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for TransferCoins
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace TransferCoins {

            /** Properties of a TransferCoins. */
            interface $Properties {

                /** TransferCoins receiver_id */
                receiver_id?: (number|Long|null);

                /** TransferCoins amount */
                amount?: (number|Long|null);

                /** TransferCoins message */
                message?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a TransferCoins. */
            type $Shape = openvk.v1.TransferCoins.$Properties;
        }

        /**
         * Properties of a BannedLink.
         * @deprecated Use openvk.v1.BannedLink.$Properties instead.
         */
        interface IBannedLink extends openvk.v1.BannedLink.$Properties {
        }

        /** Represents a BannedLink. */
        class BannedLink {

            /**
             * Constructs a new BannedLink.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.BannedLink.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BannedLink id. */
            id: (number|Long);

            /** BannedLink url. */
            url: string;

            /** BannedLink reason. */
            reason: string;

            /** BannedLink created_at. */
            created_at: string;

            /**
             * Creates a new BannedLink instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BannedLink instance
             */
            static create(properties: openvk.v1.BannedLink.$Shape): openvk.v1.BannedLink & openvk.v1.BannedLink.$Shape;
            static create(properties?: openvk.v1.BannedLink.$Properties): openvk.v1.BannedLink;

            /**
             * Encodes the specified BannedLink message. Does not implicitly {@link openvk.v1.BannedLink.verify|verify} messages.
             * @param message BannedLink message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.BannedLink.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BannedLink message, length delimited. Does not implicitly {@link openvk.v1.BannedLink.verify|verify} messages.
             * @param message BannedLink message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.BannedLink.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BannedLink message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.BannedLink & openvk.v1.BannedLink.$Shape} BannedLink
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.BannedLink & openvk.v1.BannedLink.$Shape;

            /**
             * Decodes a BannedLink message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.BannedLink & openvk.v1.BannedLink.$Shape} BannedLink
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.BannedLink & openvk.v1.BannedLink.$Shape;

            /**
             * Verifies a BannedLink message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BannedLink message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BannedLink
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.BannedLink;

            /**
             * Creates a plain object from a BannedLink message. Also converts values to other types if specified.
             * @param message BannedLink
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.BannedLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BannedLink to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BannedLink
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BannedLink {

            /** Properties of a BannedLink. */
            interface $Properties {

                /** BannedLink id */
                id?: (number|Long|null);

                /** BannedLink url */
                url?: (string|null);

                /** BannedLink reason */
                reason?: (string|null);

                /** BannedLink created_at */
                created_at?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BannedLink. */
            type $Shape = openvk.v1.BannedLink.$Properties;
        }

        /**
         * Properties of a BannedLinkList.
         * @deprecated Use openvk.v1.BannedLinkList.$Properties instead.
         */
        interface IBannedLinkList extends openvk.v1.BannedLinkList.$Properties {
        }

        /** Represents a BannedLinkList. */
        class BannedLinkList {

            /**
             * Constructs a new BannedLinkList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.BannedLinkList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BannedLinkList links. */
            links: openvk.v1.BannedLink.$Properties[];

            /**
             * Creates a new BannedLinkList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BannedLinkList instance
             */
            static create(properties: openvk.v1.BannedLinkList.$Shape): openvk.v1.BannedLinkList & openvk.v1.BannedLinkList.$Shape;
            static create(properties?: openvk.v1.BannedLinkList.$Properties): openvk.v1.BannedLinkList;

            /**
             * Encodes the specified BannedLinkList message. Does not implicitly {@link openvk.v1.BannedLinkList.verify|verify} messages.
             * @param message BannedLinkList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.BannedLinkList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BannedLinkList message, length delimited. Does not implicitly {@link openvk.v1.BannedLinkList.verify|verify} messages.
             * @param message BannedLinkList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.BannedLinkList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BannedLinkList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.BannedLinkList & openvk.v1.BannedLinkList.$Shape} BannedLinkList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.BannedLinkList & openvk.v1.BannedLinkList.$Shape;

            /**
             * Decodes a BannedLinkList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.BannedLinkList & openvk.v1.BannedLinkList.$Shape} BannedLinkList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.BannedLinkList & openvk.v1.BannedLinkList.$Shape;

            /**
             * Verifies a BannedLinkList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BannedLinkList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BannedLinkList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.BannedLinkList;

            /**
             * Creates a plain object from a BannedLinkList message. Also converts values to other types if specified.
             * @param message BannedLinkList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.BannedLinkList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BannedLinkList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BannedLinkList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BannedLinkList {

            /** Properties of a BannedLinkList. */
            interface $Properties {

                /** BannedLinkList links */
                links?: (openvk.v1.BannedLink.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BannedLinkList. */
            type $Shape = openvk.v1.BannedLinkList.$Properties;
        }

        /**
         * Properties of a WriteBannedLink.
         * @deprecated Use openvk.v1.WriteBannedLink.$Properties instead.
         */
        interface IWriteBannedLink extends openvk.v1.WriteBannedLink.$Properties {
        }

        /** Represents a WriteBannedLink. */
        class WriteBannedLink {

            /**
             * Constructs a new WriteBannedLink.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.WriteBannedLink.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WriteBannedLink url. */
            url: string;

            /** WriteBannedLink reason. */
            reason: string;

            /**
             * Creates a new WriteBannedLink instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteBannedLink instance
             */
            static create(properties: openvk.v1.WriteBannedLink.$Shape): openvk.v1.WriteBannedLink & openvk.v1.WriteBannedLink.$Shape;
            static create(properties?: openvk.v1.WriteBannedLink.$Properties): openvk.v1.WriteBannedLink;

            /**
             * Encodes the specified WriteBannedLink message. Does not implicitly {@link openvk.v1.WriteBannedLink.verify|verify} messages.
             * @param message WriteBannedLink message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.WriteBannedLink.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteBannedLink message, length delimited. Does not implicitly {@link openvk.v1.WriteBannedLink.verify|verify} messages.
             * @param message WriteBannedLink message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.WriteBannedLink.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteBannedLink message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.WriteBannedLink & openvk.v1.WriteBannedLink.$Shape} WriteBannedLink
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.WriteBannedLink & openvk.v1.WriteBannedLink.$Shape;

            /**
             * Decodes a WriteBannedLink message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.WriteBannedLink & openvk.v1.WriteBannedLink.$Shape} WriteBannedLink
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.WriteBannedLink & openvk.v1.WriteBannedLink.$Shape;

            /**
             * Verifies a WriteBannedLink message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteBannedLink message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteBannedLink
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.WriteBannedLink;

            /**
             * Creates a plain object from a WriteBannedLink message. Also converts values to other types if specified.
             * @param message WriteBannedLink
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.WriteBannedLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteBannedLink to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WriteBannedLink
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WriteBannedLink {

            /** Properties of a WriteBannedLink. */
            interface $Properties {

                /** WriteBannedLink url */
                url?: (string|null);

                /** WriteBannedLink reason */
                reason?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WriteBannedLink. */
            type $Shape = openvk.v1.WriteBannedLink.$Properties;
        }

        /**
         * Properties of a BanUser.
         * @deprecated Use openvk.v1.BanUser.$Properties instead.
         */
        interface IBanUser extends openvk.v1.BanUser.$Properties {
        }

        /** Represents a BanUser. */
        class BanUser {

            /**
             * Constructs a new BanUser.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.BanUser.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** BanUser until. */
            until?: (string|null);

            /** BanUser reason. */
            reason: string;

            /**
             * Creates a new BanUser instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BanUser instance
             */
            static create(properties: openvk.v1.BanUser.$Shape): openvk.v1.BanUser & openvk.v1.BanUser.$Shape;
            static create(properties?: openvk.v1.BanUser.$Properties): openvk.v1.BanUser;

            /**
             * Encodes the specified BanUser message. Does not implicitly {@link openvk.v1.BanUser.verify|verify} messages.
             * @param message BanUser message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.BanUser.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BanUser message, length delimited. Does not implicitly {@link openvk.v1.BanUser.verify|verify} messages.
             * @param message BanUser message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.BanUser.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BanUser message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.BanUser & openvk.v1.BanUser.$Shape} BanUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.BanUser & openvk.v1.BanUser.$Shape;

            /**
             * Decodes a BanUser message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.BanUser & openvk.v1.BanUser.$Shape} BanUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.BanUser & openvk.v1.BanUser.$Shape;

            /**
             * Verifies a BanUser message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BanUser message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BanUser
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.BanUser;

            /**
             * Creates a plain object from a BanUser message. Also converts values to other types if specified.
             * @param message BanUser
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.BanUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BanUser to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BanUser
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BanUser {

            /** Properties of a BanUser. */
            interface $Properties {

                /** BanUser until */
                until?: (string|null);

                /** BanUser reason */
                reason?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BanUser. */
            type $Shape = openvk.v1.BanUser.$Properties;
        }

        /**
         * Properties of a WarnUser.
         * @deprecated Use openvk.v1.WarnUser.$Properties instead.
         */
        interface IWarnUser extends openvk.v1.WarnUser.$Properties {
        }

        /** Represents a WarnUser. */
        class WarnUser {

            /**
             * Constructs a new WarnUser.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.WarnUser.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WarnUser reason. */
            reason: string;

            /**
             * Creates a new WarnUser instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WarnUser instance
             */
            static create(properties: openvk.v1.WarnUser.$Shape): openvk.v1.WarnUser & openvk.v1.WarnUser.$Shape;
            static create(properties?: openvk.v1.WarnUser.$Properties): openvk.v1.WarnUser;

            /**
             * Encodes the specified WarnUser message. Does not implicitly {@link openvk.v1.WarnUser.verify|verify} messages.
             * @param message WarnUser message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.WarnUser.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WarnUser message, length delimited. Does not implicitly {@link openvk.v1.WarnUser.verify|verify} messages.
             * @param message WarnUser message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.WarnUser.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WarnUser message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.WarnUser & openvk.v1.WarnUser.$Shape} WarnUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.WarnUser & openvk.v1.WarnUser.$Shape;

            /**
             * Decodes a WarnUser message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.WarnUser & openvk.v1.WarnUser.$Shape} WarnUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.WarnUser & openvk.v1.WarnUser.$Shape;

            /**
             * Verifies a WarnUser message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WarnUser message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WarnUser
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.WarnUser;

            /**
             * Creates a plain object from a WarnUser message. Also converts values to other types if specified.
             * @param message WarnUser
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.WarnUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WarnUser to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WarnUser
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WarnUser {

            /** Properties of a WarnUser. */
            interface $Properties {

                /** WarnUser reason */
                reason?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WarnUser. */
            type $Shape = openvk.v1.WarnUser.$Properties;
        }

        /**
         * Properties of a Warning.
         * @deprecated Use openvk.v1.Warning.$Properties instead.
         */
        interface IWarning extends openvk.v1.Warning.$Properties {
        }

        /** Represents a Warning. */
        class Warning {

            /**
             * Constructs a new Warning.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.Warning.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Warning id. */
            id: (number|Long);

            /** Warning user_id. */
            user_id: (number|Long);

            /** Warning actor_id. */
            actor_id: (number|Long);

            /** Warning reason. */
            reason: string;

            /** Warning created_at. */
            created_at: string;

            /**
             * Creates a new Warning instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Warning instance
             */
            static create(properties: openvk.v1.Warning.$Shape): openvk.v1.Warning & openvk.v1.Warning.$Shape;
            static create(properties?: openvk.v1.Warning.$Properties): openvk.v1.Warning;

            /**
             * Encodes the specified Warning message. Does not implicitly {@link openvk.v1.Warning.verify|verify} messages.
             * @param message Warning message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.Warning.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Warning message, length delimited. Does not implicitly {@link openvk.v1.Warning.verify|verify} messages.
             * @param message Warning message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.Warning.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Warning message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.Warning & openvk.v1.Warning.$Shape} Warning
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.Warning & openvk.v1.Warning.$Shape;

            /**
             * Decodes a Warning message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.Warning & openvk.v1.Warning.$Shape} Warning
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.Warning & openvk.v1.Warning.$Shape;

            /**
             * Verifies a Warning message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Warning message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Warning
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.Warning;

            /**
             * Creates a plain object from a Warning message. Also converts values to other types if specified.
             * @param message Warning
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.Warning, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Warning to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Warning
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Warning {

            /** Properties of a Warning. */
            interface $Properties {

                /** Warning id */
                id?: (number|Long|null);

                /** Warning user_id */
                user_id?: (number|Long|null);

                /** Warning actor_id */
                actor_id?: (number|Long|null);

                /** Warning reason */
                reason?: (string|null);

                /** Warning created_at */
                created_at?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Warning. */
            type $Shape = openvk.v1.Warning.$Properties;
        }

        /**
         * Properties of a WarningList.
         * @deprecated Use openvk.v1.WarningList.$Properties instead.
         */
        interface IWarningList extends openvk.v1.WarningList.$Properties {
        }

        /** Represents a WarningList. */
        class WarningList {

            /**
             * Constructs a new WarningList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.WarningList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** WarningList warnings. */
            warnings: openvk.v1.Warning.$Properties[];

            /**
             * Creates a new WarningList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WarningList instance
             */
            static create(properties: openvk.v1.WarningList.$Shape): openvk.v1.WarningList & openvk.v1.WarningList.$Shape;
            static create(properties?: openvk.v1.WarningList.$Properties): openvk.v1.WarningList;

            /**
             * Encodes the specified WarningList message. Does not implicitly {@link openvk.v1.WarningList.verify|verify} messages.
             * @param message WarningList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.WarningList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WarningList message, length delimited. Does not implicitly {@link openvk.v1.WarningList.verify|verify} messages.
             * @param message WarningList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.WarningList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WarningList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.WarningList & openvk.v1.WarningList.$Shape} WarningList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.WarningList & openvk.v1.WarningList.$Shape;

            /**
             * Decodes a WarningList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.WarningList & openvk.v1.WarningList.$Shape} WarningList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.WarningList & openvk.v1.WarningList.$Shape;

            /**
             * Verifies a WarningList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WarningList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WarningList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.WarningList;

            /**
             * Creates a plain object from a WarningList message. Also converts values to other types if specified.
             * @param message WarningList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.WarningList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WarningList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for WarningList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace WarningList {

            /** Properties of a WarningList. */
            interface $Properties {

                /** WarningList warnings */
                warnings?: (openvk.v1.Warning.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a WarningList. */
            type $Shape = openvk.v1.WarningList.$Properties;
        }

        /**
         * Properties of a SetLimits.
         * @deprecated Use openvk.v1.SetLimits.$Properties instead.
         */
        interface ISetLimits extends openvk.v1.SetLimits.$Properties {
        }

        /** Represents a SetLimits. */
        class SetLimits {

            /**
             * Constructs a new SetLimits.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.SetLimits.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SetLimits posting_allowed. */
            posting_allowed: boolean;

            /** SetLimits messaging_allowed. */
            messaging_allowed: boolean;

            /**
             * Creates a new SetLimits instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetLimits instance
             */
            static create(properties: openvk.v1.SetLimits.$Shape): openvk.v1.SetLimits & openvk.v1.SetLimits.$Shape;
            static create(properties?: openvk.v1.SetLimits.$Properties): openvk.v1.SetLimits;

            /**
             * Encodes the specified SetLimits message. Does not implicitly {@link openvk.v1.SetLimits.verify|verify} messages.
             * @param message SetLimits message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.SetLimits.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetLimits message, length delimited. Does not implicitly {@link openvk.v1.SetLimits.verify|verify} messages.
             * @param message SetLimits message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.SetLimits.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetLimits message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.SetLimits & openvk.v1.SetLimits.$Shape} SetLimits
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.SetLimits & openvk.v1.SetLimits.$Shape;

            /**
             * Decodes a SetLimits message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.SetLimits & openvk.v1.SetLimits.$Shape} SetLimits
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.SetLimits & openvk.v1.SetLimits.$Shape;

            /**
             * Verifies a SetLimits message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetLimits message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetLimits
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.SetLimits;

            /**
             * Creates a plain object from a SetLimits message. Also converts values to other types if specified.
             * @param message SetLimits
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.SetLimits, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetLimits to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SetLimits
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SetLimits {

            /** Properties of a SetLimits. */
            interface $Properties {

                /** SetLimits posting_allowed */
                posting_allowed?: (boolean|null);

                /** SetLimits messaging_allowed */
                messaging_allowed?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SetLimits. */
            type $Shape = openvk.v1.SetLimits.$Properties;
        }

        /**
         * Properties of a NospamQuery.
         * @deprecated Use openvk.v1.NospamQuery.$Properties instead.
         */
        interface INospamQuery extends openvk.v1.NospamQuery.$Properties {
        }

        /** Represents a NospamQuery. */
        class NospamQuery {

            /**
             * Constructs a new NospamQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.NospamQuery.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** NospamQuery query. */
            query: string;

            /** NospamQuery delete_hits. */
            delete_hits: boolean;

            /** NospamQuery ban_authors. */
            ban_authors: boolean;

            /**
             * Creates a new NospamQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NospamQuery instance
             */
            static create(properties: openvk.v1.NospamQuery.$Shape): openvk.v1.NospamQuery & openvk.v1.NospamQuery.$Shape;
            static create(properties?: openvk.v1.NospamQuery.$Properties): openvk.v1.NospamQuery;

            /**
             * Encodes the specified NospamQuery message. Does not implicitly {@link openvk.v1.NospamQuery.verify|verify} messages.
             * @param message NospamQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.NospamQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NospamQuery message, length delimited. Does not implicitly {@link openvk.v1.NospamQuery.verify|verify} messages.
             * @param message NospamQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.NospamQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NospamQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.NospamQuery & openvk.v1.NospamQuery.$Shape} NospamQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.NospamQuery & openvk.v1.NospamQuery.$Shape;

            /**
             * Decodes a NospamQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.NospamQuery & openvk.v1.NospamQuery.$Shape} NospamQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.NospamQuery & openvk.v1.NospamQuery.$Shape;

            /**
             * Verifies a NospamQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NospamQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NospamQuery
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.NospamQuery;

            /**
             * Creates a plain object from a NospamQuery message. Also converts values to other types if specified.
             * @param message NospamQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.NospamQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NospamQuery to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NospamQuery
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NospamQuery {

            /** Properties of a NospamQuery. */
            interface $Properties {

                /** NospamQuery query */
                query?: (string|null);

                /** NospamQuery delete_hits */
                delete_hits?: (boolean|null);

                /** NospamQuery ban_authors */
                ban_authors?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NospamQuery. */
            type $Shape = openvk.v1.NospamQuery.$Properties;
        }

        /**
         * Properties of a NospamHit.
         * @deprecated Use openvk.v1.NospamHit.$Properties instead.
         */
        interface INospamHit extends openvk.v1.NospamHit.$Properties {
        }

        /** Represents a NospamHit. */
        class NospamHit {

            /**
             * Constructs a new NospamHit.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.NospamHit.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** NospamHit post_id. */
            post_id: (number|Long);

            /** NospamHit target_id. */
            target_id: (number|Long);

            /** NospamHit local_id. */
            local_id: (number|Long);

            /** NospamHit author_id. */
            author_id: (number|Long);

            /** NospamHit content. */
            content: string;

            /** NospamHit permalink. */
            permalink: string;

            /**
             * Creates a new NospamHit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NospamHit instance
             */
            static create(properties: openvk.v1.NospamHit.$Shape): openvk.v1.NospamHit & openvk.v1.NospamHit.$Shape;
            static create(properties?: openvk.v1.NospamHit.$Properties): openvk.v1.NospamHit;

            /**
             * Encodes the specified NospamHit message. Does not implicitly {@link openvk.v1.NospamHit.verify|verify} messages.
             * @param message NospamHit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.NospamHit.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NospamHit message, length delimited. Does not implicitly {@link openvk.v1.NospamHit.verify|verify} messages.
             * @param message NospamHit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.NospamHit.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NospamHit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.NospamHit & openvk.v1.NospamHit.$Shape} NospamHit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.NospamHit & openvk.v1.NospamHit.$Shape;

            /**
             * Decodes a NospamHit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.NospamHit & openvk.v1.NospamHit.$Shape} NospamHit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.NospamHit & openvk.v1.NospamHit.$Shape;

            /**
             * Verifies a NospamHit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NospamHit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NospamHit
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.NospamHit;

            /**
             * Creates a plain object from a NospamHit message. Also converts values to other types if specified.
             * @param message NospamHit
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.NospamHit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NospamHit to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NospamHit
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NospamHit {

            /** Properties of a NospamHit. */
            interface $Properties {

                /** NospamHit post_id */
                post_id?: (number|Long|null);

                /** NospamHit target_id */
                target_id?: (number|Long|null);

                /** NospamHit local_id */
                local_id?: (number|Long|null);

                /** NospamHit author_id */
                author_id?: (number|Long|null);

                /** NospamHit content */
                content?: (string|null);

                /** NospamHit permalink */
                permalink?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NospamHit. */
            type $Shape = openvk.v1.NospamHit.$Properties;
        }

        /**
         * Properties of a NospamResult.
         * @deprecated Use openvk.v1.NospamResult.$Properties instead.
         */
        interface INospamResult extends openvk.v1.NospamResult.$Properties {
        }

        /** Represents a NospamResult. */
        class NospamResult {

            /**
             * Constructs a new NospamResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.NospamResult.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** NospamResult action_id. */
            action_id: (number|Long);

            /** NospamResult hits. */
            hits: openvk.v1.NospamHit.$Properties[];

            /** NospamResult deleted. */
            deleted: number;

            /**
             * Creates a new NospamResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NospamResult instance
             */
            static create(properties: openvk.v1.NospamResult.$Shape): openvk.v1.NospamResult & openvk.v1.NospamResult.$Shape;
            static create(properties?: openvk.v1.NospamResult.$Properties): openvk.v1.NospamResult;

            /**
             * Encodes the specified NospamResult message. Does not implicitly {@link openvk.v1.NospamResult.verify|verify} messages.
             * @param message NospamResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.NospamResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NospamResult message, length delimited. Does not implicitly {@link openvk.v1.NospamResult.verify|verify} messages.
             * @param message NospamResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.NospamResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NospamResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.NospamResult & openvk.v1.NospamResult.$Shape} NospamResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.NospamResult & openvk.v1.NospamResult.$Shape;

            /**
             * Decodes a NospamResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.NospamResult & openvk.v1.NospamResult.$Shape} NospamResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.NospamResult & openvk.v1.NospamResult.$Shape;

            /**
             * Verifies a NospamResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NospamResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NospamResult
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.NospamResult;

            /**
             * Creates a plain object from a NospamResult message. Also converts values to other types if specified.
             * @param message NospamResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.NospamResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NospamResult to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for NospamResult
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace NospamResult {

            /** Properties of a NospamResult. */
            interface $Properties {

                /** NospamResult action_id */
                action_id?: (number|Long|null);

                /** NospamResult hits */
                hits?: (openvk.v1.NospamHit.$Properties[]|null);

                /** NospamResult deleted */
                deleted?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a NospamResult. */
            type $Shape = openvk.v1.NospamResult.$Properties;
        }

        /**
         * Properties of an AdminOverview.
         * @deprecated Use openvk.v1.AdminOverview.$Properties instead.
         */
        interface IAdminOverview extends openvk.v1.AdminOverview.$Properties {
        }

        /** Represents an AdminOverview. */
        class AdminOverview {

            /**
             * Constructs a new AdminOverview.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.AdminOverview.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AdminOverview users. */
            users: (number|Long);

            /** AdminOverview groups. */
            groups: (number|Long);

            /** AdminOverview wall_posts. */
            wall_posts: (number|Long);

            /** AdminOverview tickets_open. */
            tickets_open: (number|Long);

            /** AdminOverview reports_open. */
            reports_open: (number|Long);

            /** AdminOverview banned_users. */
            banned_users: (number|Long);

            /**
             * Creates a new AdminOverview instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AdminOverview instance
             */
            static create(properties: openvk.v1.AdminOverview.$Shape): openvk.v1.AdminOverview & openvk.v1.AdminOverview.$Shape;
            static create(properties?: openvk.v1.AdminOverview.$Properties): openvk.v1.AdminOverview;

            /**
             * Encodes the specified AdminOverview message. Does not implicitly {@link openvk.v1.AdminOverview.verify|verify} messages.
             * @param message AdminOverview message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.AdminOverview.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AdminOverview message, length delimited. Does not implicitly {@link openvk.v1.AdminOverview.verify|verify} messages.
             * @param message AdminOverview message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.AdminOverview.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AdminOverview message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.AdminOverview & openvk.v1.AdminOverview.$Shape} AdminOverview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.AdminOverview & openvk.v1.AdminOverview.$Shape;

            /**
             * Decodes an AdminOverview message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.AdminOverview & openvk.v1.AdminOverview.$Shape} AdminOverview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.AdminOverview & openvk.v1.AdminOverview.$Shape;

            /**
             * Verifies an AdminOverview message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AdminOverview message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AdminOverview
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.AdminOverview;

            /**
             * Creates a plain object from an AdminOverview message. Also converts values to other types if specified.
             * @param message AdminOverview
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.AdminOverview, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AdminOverview to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AdminOverview
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AdminOverview {

            /** Properties of an AdminOverview. */
            interface $Properties {

                /** AdminOverview users */
                users?: (number|Long|null);

                /** AdminOverview groups */
                groups?: (number|Long|null);

                /** AdminOverview wall_posts */
                wall_posts?: (number|Long|null);

                /** AdminOverview tickets_open */
                tickets_open?: (number|Long|null);

                /** AdminOverview reports_open */
                reports_open?: (number|Long|null);

                /** AdminOverview banned_users */
                banned_users?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AdminOverview. */
            type $Shape = openvk.v1.AdminOverview.$Properties;
        }

        /**
         * Properties of an AdminUserList.
         * @deprecated Use openvk.v1.AdminUserList.$Properties instead.
         */
        interface IAdminUserList extends openvk.v1.AdminUserList.$Properties {
        }

        /** Represents an AdminUserList. */
        class AdminUserList {

            /**
             * Constructs a new AdminUserList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.AdminUserList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AdminUserList users. */
            users: openvk.v1.User.$Properties[];

            /**
             * Creates a new AdminUserList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AdminUserList instance
             */
            static create(properties: openvk.v1.AdminUserList.$Shape): openvk.v1.AdminUserList & openvk.v1.AdminUserList.$Shape;
            static create(properties?: openvk.v1.AdminUserList.$Properties): openvk.v1.AdminUserList;

            /**
             * Encodes the specified AdminUserList message. Does not implicitly {@link openvk.v1.AdminUserList.verify|verify} messages.
             * @param message AdminUserList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.AdminUserList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AdminUserList message, length delimited. Does not implicitly {@link openvk.v1.AdminUserList.verify|verify} messages.
             * @param message AdminUserList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.AdminUserList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AdminUserList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.AdminUserList & openvk.v1.AdminUserList.$Shape} AdminUserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.AdminUserList & openvk.v1.AdminUserList.$Shape;

            /**
             * Decodes an AdminUserList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.AdminUserList & openvk.v1.AdminUserList.$Shape} AdminUserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.AdminUserList & openvk.v1.AdminUserList.$Shape;

            /**
             * Verifies an AdminUserList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AdminUserList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AdminUserList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.AdminUserList;

            /**
             * Creates a plain object from an AdminUserList message. Also converts values to other types if specified.
             * @param message AdminUserList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.AdminUserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AdminUserList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AdminUserList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AdminUserList {

            /** Properties of an AdminUserList. */
            interface $Properties {

                /** AdminUserList users */
                users?: (openvk.v1.User.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AdminUserList. */
            type $Shape = openvk.v1.AdminUserList.$Properties;
        }

        /**
         * Properties of an AdminClubList.
         * @deprecated Use openvk.v1.AdminClubList.$Properties instead.
         */
        interface IAdminClubList extends openvk.v1.AdminClubList.$Properties {
        }

        /** Represents an AdminClubList. */
        class AdminClubList {

            /**
             * Constructs a new AdminClubList.
             * @param [properties] Properties to set
             */
            constructor(properties?: openvk.v1.AdminClubList.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AdminClubList groups. */
            groups: openvk.v1.Group.$Properties[];

            /**
             * Creates a new AdminClubList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AdminClubList instance
             */
            static create(properties: openvk.v1.AdminClubList.$Shape): openvk.v1.AdminClubList & openvk.v1.AdminClubList.$Shape;
            static create(properties?: openvk.v1.AdminClubList.$Properties): openvk.v1.AdminClubList;

            /**
             * Encodes the specified AdminClubList message. Does not implicitly {@link openvk.v1.AdminClubList.verify|verify} messages.
             * @param message AdminClubList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: openvk.v1.AdminClubList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AdminClubList message, length delimited. Does not implicitly {@link openvk.v1.AdminClubList.verify|verify} messages.
             * @param message AdminClubList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: openvk.v1.AdminClubList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AdminClubList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {openvk.v1.AdminClubList & openvk.v1.AdminClubList.$Shape} AdminClubList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): openvk.v1.AdminClubList & openvk.v1.AdminClubList.$Shape;

            /**
             * Decodes an AdminClubList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {openvk.v1.AdminClubList & openvk.v1.AdminClubList.$Shape} AdminClubList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): openvk.v1.AdminClubList & openvk.v1.AdminClubList.$Shape;

            /**
             * Verifies an AdminClubList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AdminClubList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AdminClubList
             */
            static fromObject(object: { [k: string]: any }): openvk.v1.AdminClubList;

            /**
             * Creates a plain object from an AdminClubList message. Also converts values to other types if specified.
             * @param message AdminClubList
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: openvk.v1.AdminClubList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AdminClubList to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AdminClubList
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AdminClubList {

            /** Properties of an AdminClubList. */
            interface $Properties {

                /** AdminClubList groups */
                groups?: (openvk.v1.Group.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AdminClubList. */
            type $Shape = openvk.v1.AdminClubList.$Properties;
        }
    }
}
