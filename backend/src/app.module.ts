import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// import { ProductsController } from './user/user.controller';
// import { ProductsService } from './user/user.service';
// import { ProductSchema } from './user/user.model';

// import { ProductsModule } from './user/user.module';

import { StudentModule } from './student/student.module';
import { TutorModule } from './tutor/tutor.module';
import { PaymentModule } from './payments/payments.module';
import { PostModule } from './posts/posts.module';
import { ProposalModule } from './proposals/proposals.module';
import { TutionModule } from './tutions/tutions.module';
// import { StudentModule } from './student/student.module';
// import { StudentModule } from './student/student.module';

@Module({
  imports: [
    // ProductsModule,
    StudentModule,
    TutorModule,
    PaymentModule,
    PostModule,
    ProposalModule,
    TutionModule,
    MongooseModule.forRoot(
      // 'mongodb+srv://test:1234@cluster0.olqaw7z.mongodb.net/?retryWrites=true&w=majority',
      "mongodb+srv://test:1234@cluster0.dvmvmpu.mongodb.net/?retryWrites=true&w=majority",
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
