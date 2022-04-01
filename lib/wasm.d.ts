/* tslint:disable */
/* eslint-disable */
/**
 * @param {any} request
 * @returns {any}
 */
export function sign(request: any): any;
/**
 * @param {any} request
 * @returns {any}
 */
export function verify(request: any): any;
/**
 * @param {any} request
 * @returns {any}
 */
export function blindSignCommitment(request: any): any;
/**
 * @param {any} request
 * @returns {any}
 */
export function verifyBlind(request: any): any;
/**
 * @param {any} request
 * @returns {any}
 */
export function blindSign(request: any): any;
/**
 * @param {any} request
 * @returns {any}
 */
export function unBlind(request: any): any;
/**
 * @param {any} request
 * @returns {any}
 */
export function createProof(request: any): any;
/**
 * @param {any} request
 * @returns {any}
 */
export function verifyProof(request: any): any;
/**
 * Generate a BLS 12-381 key pair.
 *
 * * seed: UIntArray with 32 element
 *
 * returned vector is the concatenation of first the private key (32 bytes)
 * followed by the public key (96) bytes.
 * @param {Uint8Array | undefined} seed
 * @returns {any}
 */
export function generateBls12381G2KeyPair(seed?: Uint8Array): any;
/**
 * Generate a BLS 12-381 key pair.
 *
 * * seed: UIntArray with 32 element
 *
 * returned vector is the concatenation of first the private key (32 bytes)
 * followed by the public key (48) bytes.
 * @param {Uint8Array | undefined} seed
 * @returns {any}
 */
export function generateBls12381G1KeyPair(seed?: Uint8Array): any;
/**
 * Get the BBS public key associated with the private key
 * @param {any} request
 * @returns {any}
 */
export function bls12381toBbs(request: any): any;
/**
 * Signs a set of messages with a BLS 12-381 key pair and produces a BBS signature
 * @param {any} request
 * @returns {any}
 */
export function blsSign(request: any): any;
/**
 * Verifies a BBS+ signature for a set of messages with a with a BLS 12-381 public key
 * @param {any} request
 * @returns {any}
 */
export function blsVerify(request: any): any;
/**
 * Creates a BBS+ PoK
 * @param {any} request
 * @returns {any}
 */
export function blsCreateProof(request: any): any;
/**
 * Verify a BBS+ PoK
 * @param {any} request
 * @returns {any}
 */
export function blsVerifyProof(request: any): any;
/**
 * Indicates the status returned from `PoKOfSignatureProof`
 */
export enum PoKOfSignatureProofStatus {
  /**
   * The proof verified
   */
  Success,
  /**
   * The proof failed because the signature proof of knowledge failed
   */
  BadSignature,
  /**
   * The proof failed because a hidden message was invalid when the proof was created
   */
  BadHiddenMessage,
  /**
   * The proof failed because a revealed message was invalid
   */
  BadRevealedMessage,
}

export type InitInput =
  | RequestInfo
  | URL
  | Response
  | BufferSource
  | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly sign: (a: number) => number;
  readonly verify: (a: number) => number;
  readonly blindSignCommitment: (a: number) => number;
  readonly verifyBlind: (a: number) => number;
  readonly blindSign: (a: number) => number;
  readonly unBlind: (a: number) => number;
  readonly createProof: (a: number) => number;
  readonly verifyProof: (a: number) => number;
  readonly generateBls12381G2KeyPair: (a: number, b: number) => number;
  readonly generateBls12381G1KeyPair: (a: number, b: number) => number;
  readonly bls12381toBbs: (a: number) => number;
  readonly blsSign: (a: number) => number;
  readonly blsVerify: (a: number) => number;
  readonly blsCreateProof: (a: number) => number;
  readonly blsVerifyProof: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h7ba1c0a7f917f195: (
    a: number,
    b: number,
    c: number
  ) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__hda40cf6b76a3e736: (
    a: number,
    b: number,
    c: number,
    d: number
  ) => void;
}

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {InitInput | Promise<InitInput>} module_or_path
 *
 * @returns {Promise<InitOutput>}
 */
export default function init(
  module_or_path?: InitInput | Promise<InitInput>
): Promise<InitOutput>;
