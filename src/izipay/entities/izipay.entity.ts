import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";


@Entity()
export class LoginIzipay {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    transactionId: string;

    @Column()
    merchantCode: string;

    @Column({ type: "text"})
    token: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userEmail', referencedColumnName: 'email',  })
    user: User;

    @Column()
    userEmail: string;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
