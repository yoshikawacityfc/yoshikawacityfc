/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'staging' | 'production';
    readonly NEXT_PUBLIC_ENVIRONMENT: 'development' | 'staging' | 'production';
  }
}
