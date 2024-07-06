import { Optional } from "@nestjs/common";
import { IsBoolean, IsDate, IsIn, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

/*
    Dto para crear el token consumiendo la api de IZIPAY
*/
export class GenerateTokenIzipayApiDto {
    @IsString()
    @MinLength(1)
    transactionId: string;

    @IsString()
    @MinLength(1)
    requestSource: string;

    @IsString()
    @MinLength(1)
    merchantCode: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    orderNumber: string;

    @IsString()
    @MinLength(1)
    publicKey: string;

    @IsString()
    amount: string;
}

export class ValidateAccountDto {
    @IsString()
    @MinLength(1)
    transactionId: string;

    @IsString()
    @MinLength(7)
    @MaxLength(15)
    merchantCode: string;

    @IsString()
    @MinLength(7)
    @MaxLength(15)
    facilitatorCode: string;

    /* order */
    @IsString()
    @MinLength(6)
    @MaxLength(15)
    orderNumber: string;

    @IsString()
    @MinLength(3)
    @MaxLength(3)
    currency: string;

    @IsString()
    amount: string;

    @IsString()
    @Optional()
    @MinLength(2)
    @MaxLength(2)
    installments: string;

    @IsString()
    @MaxLength(1)
    deferred: string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    payMethod: string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    channel: string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    processType: string;

    @IsString()
    @MinLength(10)
    @MaxLength(40)
    datetimeTerminalTransaction: string;

    /* card */
    @IsString()
    @MinLength(2)
    @MaxLength(2)
    brand: string;

    @IsString()
    @MinLength(1)
    @MaxLength(400)
    pan: string;

    @IsString()
    expirationMonth: string;

    @IsString()
    expirationYear: string;

    @IsString()
    @MinLength(1)
    @MaxLength(400)
    cvc: string;

    @IsString()
    @MinLength(2)
    @MaxLength(2)
    cvcPresent: string;

    /* Cardholder */
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    firstname: string;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    lastname: string;

    @IsString()
    @MinLength(5)
    @MaxLength(50)
    email: string;

    @IsString()
    @MinLength(9)
    @MaxLength(11)
    phoneNumber: string;

    @IsString()
    @MinLength(2)
    @MaxLength(9)
    documentType: string;

    @IsString()
    @MinLength(8)
    @MaxLength(15)
    document: string;

    /* Is Last parameters out */
    @IsString()
    @MaxLength(3)
    language: string;
}

export class GetCuotesDto {
    @IsString()
    @MinLength(1)
    @IsOptional()
    transactionId: string;

    @IsString()
    @MinLength(1)
    bin: string;

    @IsString()
    @MinLength(7)
    @MaxLength(15)
    @IsOptional()
    merchantCode: string;

    @IsString()
    @MaxLength(3)
    language: string;
}

export class GetOrderDto {
    @IsString()
    @MinLength(1)
    @IsOptional()
    transactionId: string;

    @IsString()
    @MinLength(7)
    @MaxLength(15)
    @IsOptional()
    merchantCode: string;

    @IsString()
    @MinLength(5)
    @MaxLength(15)
    numberOrden: string;

    @IsString()
    @MaxLength(3)
    language: string;

    @IsBoolean()
    isInternal: boolean;
}

export class AnnulmentDto {
    @IsString()
    @MinLength(1)
    @IsOptional()
    transactionId: string;

    @IsString()
    @MinLength(7)
    @MaxLength(15)
    @IsOptional()
    merchantCode: string;

    @IsString()
    @MinLength(5)
    @MaxLength(15)
    orderNumber: string;

    @IsString()
    @MinLength(3)
    @MaxLength(3)
    currency: string;

    @IsString()
    amount: string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    payMethod: string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    channel: string;

    @IsString()
    @MaxLength(40)
    uniqueId: string;

    @IsString()
    @MaxLength(10)
    authorizationCode: string;

    @IsString()
    @MinLength(10)
    @MaxLength(40)
    transactionDatetime: string;

    @IsString()
    @MaxLength(3)
    language: string;
}

export class RefundDto {
    @IsString()
    @MinLength(1)
    @IsOptional()
    transactionId: string;

    @IsString()
    @MinLength(7)
    @MaxLength(15)
    @IsOptional()
    merchantCode: string;

    @IsString()
    @MinLength(7)
    @MaxLength(15)
    ruc: string;

    @IsString()
    @MinLength(17)
    @MaxLength(17)
    idUnique: string;

    @IsString()
    @MinLength(5)
    @MaxLength(15)
    orderNumber: string;

    @IsString()
    amount: string;

    @IsString()
    @MinLength(2)
    @MaxLength(2)
    installments: string;

    @IsString()
    @MinLength(1)
    @MaxLength(1)
    deferred: string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    payMethod: string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    channel: string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    processType: string;

    @IsString()
    @MinLength(10)
    @MaxLength(40)
    datetimeTerminalTransaction: string;

    @IsString()
    @MinLength(2)
    @MaxLength(2)
    brand: string;

    @IsString()
    @MinLength(1)
    @MaxLength(400)
    pan: string;

    @IsString()
    expirationMonth: string;

    @IsString()
    expirationYear: string;

    @IsString()
    @MinLength(1)
    @MaxLength(400)
    cvc: string;

    @IsString()
    @MinLength(2)
    @MaxLength(2)
    cvcPresent: string;

    @IsString()
    @MinLength(3)
    @MaxLength(3)
    language: string;

}

export class CardTokenCreationDto {
    @IsString()
    transactionId: string;

    @IsString()
    @MinLength(7)
    @MaxLength(15)
    merchantCode: string;

    @IsString()
    @MinLength(7)
    @MaxLength(15)
    facilitatorCode: string;

    @IsString()
    @MinLength(5)
    @MaxLength(15)
    orderNumber: string;

    @IsString()
    @MinLength(10)
    @MaxLength(30)
    datetimeTerminalTransaction: string;

    @IsString()
    pan: string;

    @IsString()
    expirationMonth: string;

    @IsString()
    expirationYear: string;

    @IsString()
    cvc: string;

    @IsString()
    @MinLength(2)
    @MaxLength(2)
    brand: string;

    @IsString()
    @MaxLength(20)
    alias: string;

    @IsString()
    @MinLength(5)
    @MaxLength(100)
    merchantBuyerId: string;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    firstname: string;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    lastname: string;

    @IsString()
    @MinLength(5)
    @MaxLength(50)
    email: string;

    @IsString()
    @MinLength(9)
    @MaxLength(9)
    phoneNumber: string;

    @IsString()
    @MinLength(2)
    @MaxLength(9)
    documentType: string;

    @IsString()
    @MinLength(8)
    @MaxLength(15)
    document: string;

    @IsString()
    @MinLength(5)
    @MaxLength(40)
    street: string;

    @IsString()
    @MinLength(3)
    @MaxLength(40)
    city: string;

    @IsString()
    @MinLength(3)
    @MaxLength(40)
    state: string;

    @IsString()
    @MinLength(2)
    @MaxLength(2)
    country: string;

    @IsString()
    @MinLength(5)
    @MaxLength(10)
    postalCode: string;

    @IsString()
    @MaxLength(10)
    language: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    clientIp: string;
}

export class GetTokenInfoDto {
    @IsString()
    transactionId: string;

    @IsString()
    @MinLength(7)
    @MaxLength(15)
    merchantCode: string;

    @IsString()
    @MinLength(7)
    @MaxLength(15)
    facilitatorCode: string;

    @IsString()
    @MinLength(10)
    @MaxLength(30)
    datetimeTerminalTransiction: string;

    @IsString()
    @MaxLength(3)
    language: string;

    @IsBoolean()
    isInternal: boolean;

    @IsString()
    @MinLength(5)
    @MaxLength(100)
    merchantBuyerId: string;

    @IsString()
    @MinLength(64)
    @MaxLength(64)
    buyerToken: string;
}

export class GenerateLinkPaymentDto{
    @IsString()
    @MinLength(1)
    @MaxLength(16)
    merchantCode: string;

    @IsString()
    @MinLength(1)
    @MaxLength(100)
    productDescription: string;

    @IsString()
    @MinLength(4)
    @MaxLength(13)
    amount: string;

    @IsString()
    @MinLength(3)
    @MaxLength(3)
    currency: string;

    @IsString()
    expirationDate: string;

    @IsString()
    @IsIn(['INDIVIDUAL', 'GENERAL'], {
        message: 'wayOfUse must be either INDIVIDUAL or GENERAL',
    })
    wayOfUse: string;

    @IsString()
    @MinLength(1)
    @MaxLength(60)
    email_Notification: string;

    @IsString()
    @MinLength(2)
    @MaxLength(60)
    @IsIn(['CARD', 'QR', 'APPLE_PAY', 'MILLAS', 'YAPE_CODE'], {
        message: 'payMethod must be either CARD or QR or APPLE_PAY or MILLAS or YAPE_CODE',
    })
    payMethod: string;

    @IsString()
    @MinLength(1)
    @MaxLength(64)
    referenceCode: string;

    @IsString()
    @MinLength(3)
    @MaxLength(3)
    @IsIn(['ESP', 'ENG'], {
        message: 'languageUsed must be either ESP or ENG',
    })
    languageUsed: string;

    @IsString()
    @MinLength(8)
    @MaxLength(255)
    urL_Terms_and_Conditions: string;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    firstNameBilling: string;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    lastNameBilling: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    emailBilling: string;

    @IsString()
    @MinLength(7)
    @MaxLength(16)
    phoneNumberBilling: string;

    @IsString()
    @MinLength(5)
    @MaxLength(40)
    streetBilling: string;

    @IsString()
    @MinLength(5)
    @MaxLength(10)
    postalCodeBilling: string;

    @IsString()
    @MinLength(3)
    @MaxLength(40)
    cityBilling: string;

    @IsString()
    @MinLength(3)
    @MaxLength(40)
    stateBilling: string;

    @IsString()
    @MinLength(2)
    @MaxLength(2)
    countryBilling: string;

    @IsString()
    @MinLength(2)
    @MaxLength(9)
    documentTypeBilling: string;

    @IsString()
    @MinLength(8)
    @MaxLength(15)
    documentBilling: string;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    @IsOptional()
    firstNameShipping: string;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    @IsOptional()
    lastNameShipping: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @IsOptional()
    emailShipping: string;

    @IsString()
    @MinLength(7)
    @MaxLength(16)
    @IsOptional()
    phoneNumberShipping: string;

    @IsString()
    @MinLength(5)
    @MaxLength(40)
    @IsOptional()
    streetShipping: string;

    @IsString()
    @MinLength(5)
    @MaxLength(10)
    @IsOptional()
    postalCodeShipping: string;

    @IsString()
    @MinLength(3)
    @MaxLength(40)
    @IsOptional()
    cityShipping: string;

    @IsString()
    @MinLength(3)
    @MaxLength(40)
    @IsOptional()
    stateShipping: string;

    @IsString()
    @MinLength(2)
    @MaxLength(2)
    @IsOptional()
    countryShipping: string;

    @IsString()
    @MinLength(2)
    @MaxLength(9)
    @IsOptional()
    documentTypeShipping: string;

    @IsString()
    @MinLength(8)
    @MaxLength(15)
    @IsOptional()
    documentShipping: string;
}
