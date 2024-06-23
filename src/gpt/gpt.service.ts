import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './entities/gpt.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GptService {

    constructor(
        @InjectRepository(Chat)
        private readonly chatRepository: Repository<Chat>
    ){}

    async getCompretion(docker: string) {

        const genAI = new GoogleGenerativeAI(process.env.CHAT_GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const prompt = `Creame un docker compose a partir de este repositorio de dockerhub ${docker}, solo quiero que me pases el código no quiero que devuelvas otra cosa más`;
        const result = await model.generateContent(prompt);

        await this.chatRepository.save({
            prompt: prompt,
            response: result.response.text(),
            status: '200 Ok'
        });
        const response = result.response.text();

        return response;
    }
}
