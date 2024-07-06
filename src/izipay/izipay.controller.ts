import { Body, Controller, Post, Request } from "@nestjs/common";
import { IzipayService } from "./izipay.service";
import { AnnulmentDto, CardTokenCreationDto, GenerateLinkPaymentDto, GenerateTokenIzipayApiDto, GetCuotesDto, GetOrderDto, RefundDto, ValidateAccountDto } from "./dto/create-izipay.dto";
import { Auth } from "src/auth/decorators/auth.decorator";
import { Role } from "src/common/enums/rol.enum";
import { RequestWithUser } from "src/auth/interface/req.interface";

@Auth(Role.USER)
@Controller('ch1')
export class IzipayController {
    constructor(private readonly IzipayService: IzipayService) { }

    /* Auth */
    @Post('token')
    async token(@Body() GenerateTokenIzipayApiDto: GenerateTokenIzipayApiDto, @Request() req: RequestWithUser) {
        const email = req.user.email;
        return this.IzipayService.tokenGenerate(GenerateTokenIzipayApiDto, { email });
    }

    /* Ventas */
    @Post('validate')
    async autorization(@Body() ValidateAccount: ValidateAccountDto) {
        return this.IzipayService.validateAccount(ValidateAccount);
    }

    /* Consultas */
    /*
    * El servicio de recuperación de planes y cuotas permite obtener información detallada sobre los planes de pago y cuotas asociados a un BIN
    */
    @Post('cuotes')
    async coutes(@Body() GetCuotes: GetCuotesDto) {
        return this.IzipayService.getCuotes(GetCuotes);
    }

    @Post('order')
    async order(@Body() GetOrder: GetOrderDto) {
        return this.IzipayService.getOrder(GetOrder);
    }

    /* Cancelaciones */
    @Post('annulment')
    async annulment(@Body() Annulment: AnnulmentDto) {
        return this.IzipayService.annulment(Annulment);
    }

    @Post('refund')
    async refund(@Body() Refund: RefundDto) {
        return this.IzipayService.refund(Refund);
    }

    /* Tokenización */
    @Post('token-card')
    async tokenCard(@Body() CardTokenCreation: CardTokenCreationDto) {
        return this.IzipayService.cardTokenCreation(CardTokenCreation);
    }

    @Post('generate-link')
    async generateLink(@Body() GenerateLink: GenerateLinkPaymentDto) {
        return this.IzipayService.generateLinkPayment(GenerateLink);
    }
}
