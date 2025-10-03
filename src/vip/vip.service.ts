import { Injectable } from "@nestjs/common";

@Injectable()
export class VipService {
  getVipLevels() {
    return [
      {
        _id: "68dce038396a19deb0074d48",
        deletedAt: null,
        level: "VIP01",
        createdAt: "2025-10-02T05:48:05.075Z",
        updatedAt: "2025-10-02T05:48:05.075Z",
      },
      {
        _id: "68dce038396a19deb0074d4",
        deletedAt: null,
        level: "VIP02",
        createdAt: "2025-10-02T05:48:05.075Z",
        updatedAt: "2025-10-02T05:48:05.075Z",
      },
      {
        _id: "68dce038396a19deb0074d49",
        deletedAt: null,
        level: "VIP03",
        createdAt: "2025-10-02T05:48:05.075Z",
        updatedAt: "2025-10-02T05:48:05.075Z",
      },
    ];
  }
}
