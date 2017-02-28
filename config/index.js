'use strict'

module.exports = {
  SSO_URL: process.env.SSO_URL || 'https://sso.router.t-fk.win',
  ORIGIN_URL: process.env.ORIGIN_URL || 'https://portalen.next.t-fk.win/login',
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  ENCRYPTOR_SECRET: process.env.ENCRYPTOR_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  YAR_SECRET: process.env.YAR_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  COOKIE_SECRET: process.env.COOKIE_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  SESSION_STORAGE_URL: process.env.SESSION_STORAGE_URL || 'https://tmp.storage.service.t-fk.no'
}
