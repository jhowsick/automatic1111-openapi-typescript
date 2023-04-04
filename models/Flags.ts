/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Flags
 */
export interface Flags {
    /**
     * base path where all user data is stored
     * @type {string}
     * @memberof Flags
     */
    dataDir?: string;
    /**
     * path to config which constructs model
     * @type {string}
     * @memberof Flags
     */
    config?: string;
    /**
     * path to checkpoint of stable diffusion model; if specified, this checkpoint will be added to the list of checkpoints and loaded
     * @type {string}
     * @memberof Flags
     */
    ckpt?: string;
    /**
     * Path to directory with stable diffusion checkpoints
     * @type {string}
     * @memberof Flags
     */
    ckptDir?: string;
    /**
     * Path to directory with VAE files
     * @type {string}
     * @memberof Flags
     */
    vaeDir?: string;
    /**
     * GFPGAN directory
     * @type {string}
     * @memberof Flags
     */
    gfpganDir?: string;
    /**
     * GFPGAN model file name
     * @type {string}
     * @memberof Flags
     */
    gfpganModel?: string;
    /**
     * do not switch the model to 16-bit floats
     * @type {boolean}
     * @memberof Flags
     */
    noHalf?: boolean;
    /**
     * do not switch the VAE model to 16-bit floats
     * @type {boolean}
     * @memberof Flags
     */
    noHalfVae?: boolean;
    /**
     * do not hide progressbar in gradio UI (we hide it because it slows down ML if you have hardware acceleration in browser)
     * @type {boolean}
     * @memberof Flags
     */
    noProgressbarHiding?: boolean;
    /**
     * maximum batch count value for the UI
     * @type {number}
     * @memberof Flags
     */
    maxBatchCount?: number;
    /**
     * embeddings directory for textual inversion (default: embeddings)
     * @type {string}
     * @memberof Flags
     */
    embeddingsDir?: string;
    /**
     * directory with textual inversion templates
     * @type {string}
     * @memberof Flags
     */
    textualInversionTemplatesDir?: string;
    /**
     * hypernetwork directory
     * @type {string}
     * @memberof Flags
     */
    hypernetworkDir?: string;
    /**
     * localizations directory
     * @type {string}
     * @memberof Flags
     */
    localizationsDir?: string;
    /**
     * allow custom script execution from webui
     * @type {boolean}
     * @memberof Flags
     */
    allowCode?: boolean;
    /**
     * enable stable diffusion model optimizations for sacrificing a little speed for low VRM usage
     * @type {boolean}
     * @memberof Flags
     */
    medvram?: boolean;
    /**
     * enable stable diffusion model optimizations for sacrificing a lot of speed for very low VRM usage
     * @type {boolean}
     * @memberof Flags
     */
    lowvram?: boolean;
    /**
     * load stable diffusion checkpoint weights to VRAM instead of RAM
     * @type {boolean}
     * @memberof Flags
     */
    lowram?: boolean;
    /**
     * disables cond/uncond batching that is enabled to save memory with --medvram or --lowvram
     * @type {boolean}
     * @memberof Flags
     */
    alwaysBatchCondUncond?: boolean;
    /**
     * does not do anything.
     * @type {boolean}
     * @memberof Flags
     */
    unloadGfpgan?: boolean;
    /**
     * evaluate at this precision
     * @type {string}
     * @memberof Flags
     */
    precision?: string;
    /**
     * upcast sampling. No effect with --no-half. Usually produces similar results to --no-half with better performance while using less memory.
     * @type {boolean}
     * @memberof Flags
     */
    upcastSampling?: boolean;
    /**
     * use share=True for gradio and make the UI accessible through their site
     * @type {boolean}
     * @memberof Flags
     */
    share?: boolean;
    /**
     * ngrok authtoken, alternative to gradio --share
     * @type {string}
     * @memberof Flags
     */
    ngrok?: string;
    /**
     * The region in which ngrok should start.
     * @type {string}
     * @memberof Flags
     */
    ngrokRegion?: string;
    /**
     * enable extensions tab regardless of other options
     * @type {boolean}
     * @memberof Flags
     */
    enableInsecureExtensionAccess?: boolean;
    /**
     * Path to directory with codeformer model file(s).
     * @type {string}
     * @memberof Flags
     */
    codeformerModelsPath?: string;
    /**
     * Path to directory with GFPGAN model file(s).
     * @type {string}
     * @memberof Flags
     */
    gfpganModelsPath?: string;
    /**
     * Path to directory with ESRGAN model file(s).
     * @type {string}
     * @memberof Flags
     */
    esrganModelsPath?: string;
    /**
     * Path to directory with BSRGAN model file(s).
     * @type {string}
     * @memberof Flags
     */
    bsrganModelsPath?: string;
    /**
     * Path to directory with RealESRGAN model file(s).
     * @type {string}
     * @memberof Flags
     */
    realesrganModelsPath?: string;
    /**
     * Path to directory with CLIP model file(s).
     * @type {string}
     * @memberof Flags
     */
    clipModelsPath?: string;
    /**
     * enable xformers for cross attention layers
     * @type {boolean}
     * @memberof Flags
     */
    xformers?: boolean;
    /**
     * enable xformers for cross attention layers regardless of whether the checking code thinks you can run it; do not make bug reports if this fails to work
     * @type {boolean}
     * @memberof Flags
     */
    forceEnableXformers?: boolean;
    /**
     * enable xformers with Flash Attention to improve reproducibility (supported for SD2.x or variant only)
     * @type {boolean}
     * @memberof Flags
     */
    xformersFlashAttention?: boolean;
    /**
     * does not do anything
     * @type {boolean}
     * @memberof Flags
     */
    deepdanbooru?: boolean;
    /**
     * force-enables Doggettx's cross-attention layer optimization. By default, it's on for torch cuda.
     * @type {boolean}
     * @memberof Flags
     */
    optSplitAttention?: boolean;
    /**
     * enable memory efficient sub-quadratic cross-attention layer optimization
     * @type {boolean}
     * @memberof Flags
     */
    optSubQuadAttention?: boolean;
    /**
     * query chunk size for the sub-quadratic cross-attention layer optimization to use
     * @type {number}
     * @memberof Flags
     */
    subQuadQChunkSize?: number;
    /**
     * kv chunk size for the sub-quadratic cross-attention layer optimization to use
     * @type {string}
     * @memberof Flags
     */
    subQuadKvChunkSize?: string;
    /**
     * the percentage of VRAM threshold for the sub-quadratic cross-attention layer optimization to use chunking
     * @type {string}
     * @memberof Flags
     */
    subQuadChunkThreshold?: string;
    /**
     * force-enables InvokeAI's cross-attention layer optimization. By default, it's on when cuda is unavailable.
     * @type {boolean}
     * @memberof Flags
     */
    optSplitAttentionInvokeai?: boolean;
    /**
     * enable older version of split attention optimization that does not consume all the VRAM it can find
     * @type {boolean}
     * @memberof Flags
     */
    optSplitAttentionV1?: boolean;
    /**
     * enable scaled dot product cross-attention layer optimization; requires PyTorch 2.*
     * @type {boolean}
     * @memberof Flags
     */
    optSdpAttention?: boolean;
    /**
     * enable scaled dot product cross-attention layer optimization without memory efficient attention, makes image generation deterministic; requires PyTorch 2.*
     * @type {boolean}
     * @memberof Flags
     */
    optSdpNoMemAttention?: boolean;
    /**
     * force-disables cross-attention layer optimization
     * @type {boolean}
     * @memberof Flags
     */
    disableOptSplitAttention?: boolean;
    /**
     * do not check if produced images/latent spaces have nans; useful for running without a checkpoint in CI
     * @type {boolean}
     * @memberof Flags
     */
    disableNanCheck?: boolean;
    /**
     * use CPU as torch device for specified modules
     * @type {Array<any>}
     * @memberof Flags
     */
    useCpu?: Array<any>;
    /**
     * launch gradio with 0.0.0.0 as server name, allowing to respond to network requests
     * @type {boolean}
     * @memberof Flags
     */
    listen?: boolean;
    /**
     * launch gradio with given server port, you need root/admin rights for ports < 1024, defaults to 7860 if available
     * @type {string}
     * @memberof Flags
     */
    port?: string;
    /**
     * does not do anything
     * @type {boolean}
     * @memberof Flags
     */
    showNegativePrompt?: boolean;
    /**
     * filename to use for ui configuration
     * @type {string}
     * @memberof Flags
     */
    uiConfigFile?: string;
    /**
     * hide directory configuration from webui
     * @type {boolean}
     * @memberof Flags
     */
    hideUiDirConfig?: boolean;
    /**
     * disable editing settings
     * @type {boolean}
     * @memberof Flags
     */
    freezeSettings?: boolean;
    /**
     * filename to use for ui settings
     * @type {string}
     * @memberof Flags
     */
    uiSettingsFile?: string;
    /**
     * launch gradio with --debug option
     * @type {boolean}
     * @memberof Flags
     */
    gradioDebug?: boolean;
    /**
     * set gradio authentication like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
     * @type {string}
     * @memberof Flags
     */
    gradioAuth?: string;
    /**
     * set gradio authentication file path ex. "/path/to/auth/file" same auth format as --gradio-auth
     * @type {string}
     * @memberof Flags
     */
    gradioAuthPath?: string;
    /**
     * does not do anything
     * @type {string}
     * @memberof Flags
     */
    gradioImg2imgTool?: string;
    /**
     * does not do anything
     * @type {string}
     * @memberof Flags
     */
    gradioInpaintTool?: string;
    /**
     * change memory type for stable diffusion to channels last
     * @type {boolean}
     * @memberof Flags
     */
    optChannelslast?: boolean;
    /**
     * filename to use for styles
     * @type {string}
     * @memberof Flags
     */
    stylesFile?: string;
    /**
     * open the webui URL in the system's default browser upon launch
     * @type {boolean}
     * @memberof Flags
     */
    autolaunch?: boolean;
    /**
     * launches the UI with light or dark theme
     * @type {string}
     * @memberof Flags
     */
    theme?: string;
    /**
     * use textbox for seeds in UI (no up/down, but possible to input long seeds)
     * @type {boolean}
     * @memberof Flags
     */
    useTextboxSeed?: boolean;
    /**
     * do not output progressbars to console
     * @type {boolean}
     * @memberof Flags
     */
    disableConsoleProgressbars?: boolean;
    /**
     * print prompts to console when generating with txt2img and img2img
     * @type {boolean}
     * @memberof Flags
     */
    enableConsolePrompts?: boolean;
    /**
     * Checkpoint to use as VAE; setting this argument disables all settings related to VAE
     * @type {string}
     * @memberof Flags
     */
    vaePath?: string;
    /**
     * disable checking pytorch models for malicious code
     * @type {boolean}
     * @memberof Flags
     */
    disableSafeUnpickle?: boolean;
    /**
     * use api=True to launch the API together with the webui (use --nowebui instead for only the API)
     * @type {boolean}
     * @memberof Flags
     */
    api?: boolean;
    /**
     * Set authentication for API like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
     * @type {string}
     * @memberof Flags
     */
    apiAuth?: string;
    /**
     * use api-log=True to enable logging of all API requests
     * @type {boolean}
     * @memberof Flags
     */
    apiLog?: boolean;
    /**
     * use api=True to launch the API instead of the webui
     * @type {boolean}
     * @memberof Flags
     */
    nowebui?: boolean;
    /**
     * Don't load model to quickly launch UI
     * @type {boolean}
     * @memberof Flags
     */
    uiDebugMode?: boolean;
    /**
     * Select the default CUDA device to use (export CUDA_VISIBLE_DEVICES=0,1,etc might be needed before)
     * @type {string}
     * @memberof Flags
     */
    deviceId?: string;
    /**
     * Administrator rights
     * @type {boolean}
     * @memberof Flags
     */
    administrator?: boolean;
    /**
     * Allowed CORS origin(s) in the form of a comma-separated list (no spaces)
     * @type {string}
     * @memberof Flags
     */
    corsAllowOrigins?: string;
    /**
     * Allowed CORS origin(s) in the form of a single regular expression
     * @type {string}
     * @memberof Flags
     */
    corsAllowOriginsRegex?: string;
    /**
     * Partially enables TLS, requires --tls-certfile to fully function
     * @type {string}
     * @memberof Flags
     */
    tlsKeyfile?: string;
    /**
     * Partially enables TLS, requires --tls-keyfile to fully function
     * @type {string}
     * @memberof Flags
     */
    tlsCertfile?: string;
    /**
     * Sets hostname of server
     * @type {string}
     * @memberof Flags
     */
    serverName?: string;
    /**
     * Uses gradio queue; experimental option; breaks restart UI button
     * @type {boolean}
     * @memberof Flags
     */
    gradioQueue?: boolean;
    /**
     * Do not check versions of torch and xformers
     * @type {boolean}
     * @memberof Flags
     */
    skipVersionCheck?: boolean;
    /**
     * disable sha256 hashing of checkpoints to help loading performance
     * @type {boolean}
     * @memberof Flags
     */
    noHashing?: boolean;
    /**
     * don't download SD1.5 model even if no model is found in --ckpt-dir
     * @type {boolean}
     * @memberof Flags
     */
    noDownloadSdModel?: boolean;
    /**
     * The maximum number of additional network model can be used.
     * @type {number}
     * @memberof Flags
     */
    addnetMaxModelCount?: number;
    /**
     * Path to directory with ControlNet models
     * @type {string}
     * @memberof Flags
     */
    controlnetDir?: string;
    /**
     * do not switch the ControlNet models to 16-bit floats (only needed without --no-half)
     * @type {string}
     * @memberof Flags
     */
    noHalfControlnet?: string;
    /**
     * Path to directory with LDSR model file(s).
     * @type {string}
     * @memberof Flags
     */
    ldsrModelsPath?: string;
    /**
     * Path to directory with Lora networks.
     * @type {string}
     * @memberof Flags
     */
    loraDir?: string;
    /**
     * Path to directory with ScuNET model file(s).
     * @type {string}
     * @memberof Flags
     */
    scunetModelsPath?: string;
    /**
     * Path to directory with SwinIR model file(s).
     * @type {string}
     * @memberof Flags
     */
    swinirModelsPath?: string;
}

/**
 * Check if a given object implements the Flags interface.
 */
export function instanceOfFlags(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FlagsFromJSON(json: any): Flags {
    return FlagsFromJSONTyped(json, false);
}

export function FlagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Flags {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataDir': !exists(json, 'data_dir') ? undefined : json['data_dir'],
        'config': !exists(json, 'config') ? undefined : json['config'],
        'ckpt': !exists(json, 'ckpt') ? undefined : json['ckpt'],
        'ckptDir': !exists(json, 'ckpt_dir') ? undefined : json['ckpt_dir'],
        'vaeDir': !exists(json, 'vae_dir') ? undefined : json['vae_dir'],
        'gfpganDir': !exists(json, 'gfpgan_dir') ? undefined : json['gfpgan_dir'],
        'gfpganModel': !exists(json, 'gfpgan_model') ? undefined : json['gfpgan_model'],
        'noHalf': !exists(json, 'no_half') ? undefined : json['no_half'],
        'noHalfVae': !exists(json, 'no_half_vae') ? undefined : json['no_half_vae'],
        'noProgressbarHiding': !exists(json, 'no_progressbar_hiding') ? undefined : json['no_progressbar_hiding'],
        'maxBatchCount': !exists(json, 'max_batch_count') ? undefined : json['max_batch_count'],
        'embeddingsDir': !exists(json, 'embeddings_dir') ? undefined : json['embeddings_dir'],
        'textualInversionTemplatesDir': !exists(json, 'textual_inversion_templates_dir') ? undefined : json['textual_inversion_templates_dir'],
        'hypernetworkDir': !exists(json, 'hypernetwork_dir') ? undefined : json['hypernetwork_dir'],
        'localizationsDir': !exists(json, 'localizations_dir') ? undefined : json['localizations_dir'],
        'allowCode': !exists(json, 'allow_code') ? undefined : json['allow_code'],
        'medvram': !exists(json, 'medvram') ? undefined : json['medvram'],
        'lowvram': !exists(json, 'lowvram') ? undefined : json['lowvram'],
        'lowram': !exists(json, 'lowram') ? undefined : json['lowram'],
        'alwaysBatchCondUncond': !exists(json, 'always_batch_cond_uncond') ? undefined : json['always_batch_cond_uncond'],
        'unloadGfpgan': !exists(json, 'unload_gfpgan') ? undefined : json['unload_gfpgan'],
        'precision': !exists(json, 'precision') ? undefined : json['precision'],
        'upcastSampling': !exists(json, 'upcast_sampling') ? undefined : json['upcast_sampling'],
        'share': !exists(json, 'share') ? undefined : json['share'],
        'ngrok': !exists(json, 'ngrok') ? undefined : json['ngrok'],
        'ngrokRegion': !exists(json, 'ngrok_region') ? undefined : json['ngrok_region'],
        'enableInsecureExtensionAccess': !exists(json, 'enable_insecure_extension_access') ? undefined : json['enable_insecure_extension_access'],
        'codeformerModelsPath': !exists(json, 'codeformer_models_path') ? undefined : json['codeformer_models_path'],
        'gfpganModelsPath': !exists(json, 'gfpgan_models_path') ? undefined : json['gfpgan_models_path'],
        'esrganModelsPath': !exists(json, 'esrgan_models_path') ? undefined : json['esrgan_models_path'],
        'bsrganModelsPath': !exists(json, 'bsrgan_models_path') ? undefined : json['bsrgan_models_path'],
        'realesrganModelsPath': !exists(json, 'realesrgan_models_path') ? undefined : json['realesrgan_models_path'],
        'clipModelsPath': !exists(json, 'clip_models_path') ? undefined : json['clip_models_path'],
        'xformers': !exists(json, 'xformers') ? undefined : json['xformers'],
        'forceEnableXformers': !exists(json, 'force_enable_xformers') ? undefined : json['force_enable_xformers'],
        'xformersFlashAttention': !exists(json, 'xformers_flash_attention') ? undefined : json['xformers_flash_attention'],
        'deepdanbooru': !exists(json, 'deepdanbooru') ? undefined : json['deepdanbooru'],
        'optSplitAttention': !exists(json, 'opt_split_attention') ? undefined : json['opt_split_attention'],
        'optSubQuadAttention': !exists(json, 'opt_sub_quad_attention') ? undefined : json['opt_sub_quad_attention'],
        'subQuadQChunkSize': !exists(json, 'sub_quad_q_chunk_size') ? undefined : json['sub_quad_q_chunk_size'],
        'subQuadKvChunkSize': !exists(json, 'sub_quad_kv_chunk_size') ? undefined : json['sub_quad_kv_chunk_size'],
        'subQuadChunkThreshold': !exists(json, 'sub_quad_chunk_threshold') ? undefined : json['sub_quad_chunk_threshold'],
        'optSplitAttentionInvokeai': !exists(json, 'opt_split_attention_invokeai') ? undefined : json['opt_split_attention_invokeai'],
        'optSplitAttentionV1': !exists(json, 'opt_split_attention_v1') ? undefined : json['opt_split_attention_v1'],
        'optSdpAttention': !exists(json, 'opt_sdp_attention') ? undefined : json['opt_sdp_attention'],
        'optSdpNoMemAttention': !exists(json, 'opt_sdp_no_mem_attention') ? undefined : json['opt_sdp_no_mem_attention'],
        'disableOptSplitAttention': !exists(json, 'disable_opt_split_attention') ? undefined : json['disable_opt_split_attention'],
        'disableNanCheck': !exists(json, 'disable_nan_check') ? undefined : json['disable_nan_check'],
        'useCpu': !exists(json, 'use_cpu') ? undefined : json['use_cpu'],
        'listen': !exists(json, 'listen') ? undefined : json['listen'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'showNegativePrompt': !exists(json, 'show_negative_prompt') ? undefined : json['show_negative_prompt'],
        'uiConfigFile': !exists(json, 'ui_config_file') ? undefined : json['ui_config_file'],
        'hideUiDirConfig': !exists(json, 'hide_ui_dir_config') ? undefined : json['hide_ui_dir_config'],
        'freezeSettings': !exists(json, 'freeze_settings') ? undefined : json['freeze_settings'],
        'uiSettingsFile': !exists(json, 'ui_settings_file') ? undefined : json['ui_settings_file'],
        'gradioDebug': !exists(json, 'gradio_debug') ? undefined : json['gradio_debug'],
        'gradioAuth': !exists(json, 'gradio_auth') ? undefined : json['gradio_auth'],
        'gradioAuthPath': !exists(json, 'gradio_auth_path') ? undefined : json['gradio_auth_path'],
        'gradioImg2imgTool': !exists(json, 'gradio_img2img_tool') ? undefined : json['gradio_img2img_tool'],
        'gradioInpaintTool': !exists(json, 'gradio_inpaint_tool') ? undefined : json['gradio_inpaint_tool'],
        'optChannelslast': !exists(json, 'opt_channelslast') ? undefined : json['opt_channelslast'],
        'stylesFile': !exists(json, 'styles_file') ? undefined : json['styles_file'],
        'autolaunch': !exists(json, 'autolaunch') ? undefined : json['autolaunch'],
        'theme': !exists(json, 'theme') ? undefined : json['theme'],
        'useTextboxSeed': !exists(json, 'use_textbox_seed') ? undefined : json['use_textbox_seed'],
        'disableConsoleProgressbars': !exists(json, 'disable_console_progressbars') ? undefined : json['disable_console_progressbars'],
        'enableConsolePrompts': !exists(json, 'enable_console_prompts') ? undefined : json['enable_console_prompts'],
        'vaePath': !exists(json, 'vae_path') ? undefined : json['vae_path'],
        'disableSafeUnpickle': !exists(json, 'disable_safe_unpickle') ? undefined : json['disable_safe_unpickle'],
        'api': !exists(json, 'api') ? undefined : json['api'],
        'apiAuth': !exists(json, 'api_auth') ? undefined : json['api_auth'],
        'apiLog': !exists(json, 'api_log') ? undefined : json['api_log'],
        'nowebui': !exists(json, 'nowebui') ? undefined : json['nowebui'],
        'uiDebugMode': !exists(json, 'ui_debug_mode') ? undefined : json['ui_debug_mode'],
        'deviceId': !exists(json, 'device_id') ? undefined : json['device_id'],
        'administrator': !exists(json, 'administrator') ? undefined : json['administrator'],
        'corsAllowOrigins': !exists(json, 'cors_allow_origins') ? undefined : json['cors_allow_origins'],
        'corsAllowOriginsRegex': !exists(json, 'cors_allow_origins_regex') ? undefined : json['cors_allow_origins_regex'],
        'tlsKeyfile': !exists(json, 'tls_keyfile') ? undefined : json['tls_keyfile'],
        'tlsCertfile': !exists(json, 'tls_certfile') ? undefined : json['tls_certfile'],
        'serverName': !exists(json, 'server_name') ? undefined : json['server_name'],
        'gradioQueue': !exists(json, 'gradio_queue') ? undefined : json['gradio_queue'],
        'skipVersionCheck': !exists(json, 'skip_version_check') ? undefined : json['skip_version_check'],
        'noHashing': !exists(json, 'no_hashing') ? undefined : json['no_hashing'],
        'noDownloadSdModel': !exists(json, 'no_download_sd_model') ? undefined : json['no_download_sd_model'],
        'addnetMaxModelCount': !exists(json, 'addnet_max_model_count') ? undefined : json['addnet_max_model_count'],
        'controlnetDir': !exists(json, 'controlnet_dir') ? undefined : json['controlnet_dir'],
        'noHalfControlnet': !exists(json, 'no_half_controlnet') ? undefined : json['no_half_controlnet'],
        'ldsrModelsPath': !exists(json, 'ldsr_models_path') ? undefined : json['ldsr_models_path'],
        'loraDir': !exists(json, 'lora_dir') ? undefined : json['lora_dir'],
        'scunetModelsPath': !exists(json, 'scunet_models_path') ? undefined : json['scunet_models_path'],
        'swinirModelsPath': !exists(json, 'swinir_models_path') ? undefined : json['swinir_models_path'],
    };
}

export function FlagsToJSON(value?: Flags | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data_dir': value.dataDir,
        'config': value.config,
        'ckpt': value.ckpt,
        'ckpt_dir': value.ckptDir,
        'vae_dir': value.vaeDir,
        'gfpgan_dir': value.gfpganDir,
        'gfpgan_model': value.gfpganModel,
        'no_half': value.noHalf,
        'no_half_vae': value.noHalfVae,
        'no_progressbar_hiding': value.noProgressbarHiding,
        'max_batch_count': value.maxBatchCount,
        'embeddings_dir': value.embeddingsDir,
        'textual_inversion_templates_dir': value.textualInversionTemplatesDir,
        'hypernetwork_dir': value.hypernetworkDir,
        'localizations_dir': value.localizationsDir,
        'allow_code': value.allowCode,
        'medvram': value.medvram,
        'lowvram': value.lowvram,
        'lowram': value.lowram,
        'always_batch_cond_uncond': value.alwaysBatchCondUncond,
        'unload_gfpgan': value.unloadGfpgan,
        'precision': value.precision,
        'upcast_sampling': value.upcastSampling,
        'share': value.share,
        'ngrok': value.ngrok,
        'ngrok_region': value.ngrokRegion,
        'enable_insecure_extension_access': value.enableInsecureExtensionAccess,
        'codeformer_models_path': value.codeformerModelsPath,
        'gfpgan_models_path': value.gfpganModelsPath,
        'esrgan_models_path': value.esrganModelsPath,
        'bsrgan_models_path': value.bsrganModelsPath,
        'realesrgan_models_path': value.realesrganModelsPath,
        'clip_models_path': value.clipModelsPath,
        'xformers': value.xformers,
        'force_enable_xformers': value.forceEnableXformers,
        'xformers_flash_attention': value.xformersFlashAttention,
        'deepdanbooru': value.deepdanbooru,
        'opt_split_attention': value.optSplitAttention,
        'opt_sub_quad_attention': value.optSubQuadAttention,
        'sub_quad_q_chunk_size': value.subQuadQChunkSize,
        'sub_quad_kv_chunk_size': value.subQuadKvChunkSize,
        'sub_quad_chunk_threshold': value.subQuadChunkThreshold,
        'opt_split_attention_invokeai': value.optSplitAttentionInvokeai,
        'opt_split_attention_v1': value.optSplitAttentionV1,
        'opt_sdp_attention': value.optSdpAttention,
        'opt_sdp_no_mem_attention': value.optSdpNoMemAttention,
        'disable_opt_split_attention': value.disableOptSplitAttention,
        'disable_nan_check': value.disableNanCheck,
        'use_cpu': value.useCpu,
        'listen': value.listen,
        'port': value.port,
        'show_negative_prompt': value.showNegativePrompt,
        'ui_config_file': value.uiConfigFile,
        'hide_ui_dir_config': value.hideUiDirConfig,
        'freeze_settings': value.freezeSettings,
        'ui_settings_file': value.uiSettingsFile,
        'gradio_debug': value.gradioDebug,
        'gradio_auth': value.gradioAuth,
        'gradio_auth_path': value.gradioAuthPath,
        'gradio_img2img_tool': value.gradioImg2imgTool,
        'gradio_inpaint_tool': value.gradioInpaintTool,
        'opt_channelslast': value.optChannelslast,
        'styles_file': value.stylesFile,
        'autolaunch': value.autolaunch,
        'theme': value.theme,
        'use_textbox_seed': value.useTextboxSeed,
        'disable_console_progressbars': value.disableConsoleProgressbars,
        'enable_console_prompts': value.enableConsolePrompts,
        'vae_path': value.vaePath,
        'disable_safe_unpickle': value.disableSafeUnpickle,
        'api': value.api,
        'api_auth': value.apiAuth,
        'api_log': value.apiLog,
        'nowebui': value.nowebui,
        'ui_debug_mode': value.uiDebugMode,
        'device_id': value.deviceId,
        'administrator': value.administrator,
        'cors_allow_origins': value.corsAllowOrigins,
        'cors_allow_origins_regex': value.corsAllowOriginsRegex,
        'tls_keyfile': value.tlsKeyfile,
        'tls_certfile': value.tlsCertfile,
        'server_name': value.serverName,
        'gradio_queue': value.gradioQueue,
        'skip_version_check': value.skipVersionCheck,
        'no_hashing': value.noHashing,
        'no_download_sd_model': value.noDownloadSdModel,
        'addnet_max_model_count': value.addnetMaxModelCount,
        'controlnet_dir': value.controlnetDir,
        'no_half_controlnet': value.noHalfControlnet,
        'ldsr_models_path': value.ldsrModelsPath,
        'lora_dir': value.loraDir,
        'scunet_models_path': value.scunetModelsPath,
        'swinir_models_path': value.swinirModelsPath,
    };
}

