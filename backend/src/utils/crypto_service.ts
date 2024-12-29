import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import * as CryptoJS from 'crypto-js';
@Injectable()
export class CryptoService {
  async encrypt(text: string): Promise<string> {
    console.log('encrytp');
    return CryptoJS.AES.encrypt(text, process.env.CRYPTO_KEY).toString();
  }

  decrypt(text: string): string {
    const bytes = CryptoJS.AES.decrypt(text, process.env.CRYPTO_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
  createHash(data: string): string {
    const hash = CryptoJS.SHA256(data);
    // Convert the hash to a hexadecimal string
    const hashString = hash.toString(CryptoJS.enc.Hex);
    return hashString;
  }
}
