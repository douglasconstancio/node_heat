import prismaClient from "../prisma";

class ProfileUserService {
  async execute(id: string) {
    return prismaClient.user.findFirst({ where: { id } });
  }
}

export { ProfileUserService };
