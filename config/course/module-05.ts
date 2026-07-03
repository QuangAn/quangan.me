import type { CourseDocModule } from "@/types/course";

/** Module 5: Tạo Website bán hàng. */
export const module05: CourseDocModule = {
  id: "module-5",
  order: 5,
  title: "Module 5: Tạo Website bán hàng",
  shortTitle: "05. Website bán hàng",
  tagline: "Danh mục + chi tiết + đặt hàng",
  description:
    "Làm website bán hàng có danh mục sản phẩm, trang chi tiết từng sản phẩm và form đặt hàng — khách xem hàng và đặt mua ngay trên website của bạn.",
  duration: "150–180 phút",
  level: "Trung bình",
  outcome: "Có website bán hàng với danh mục, chi tiết sản phẩm và form đặt hàng",
  lessons: [
    {
      id: "m5-b1",
      title: "Website bán hàng cần những gì?",
      description: "Hiểu luồng mua hàng của khách trước khi làm.",
      duration: "6 phút",
      videoLabel: "Giải phẫu một website bán hàng",
      main: [
        {
          type: "card",
          title: "Luồng mua hàng của khách",
          ordered: true,
          list: [
            "Khách vào trang chủ, thấy sản phẩm nổi bật.",
            "Bấm vào danh mục để xem tất cả sản phẩm.",
            "Bấm vào một sản phẩm để xem chi tiết: ảnh, giá, mô tả.",
            "Bấm nút Mua hàng / Đặt hàng.",
            "Điền thông tin và gửi đơn.",
          ],
        },
        {
          type: "card",
          title: "Vậy website cần 4 phần",
          list: [
            "Trang chủ: sản phẩm nổi bật + danh mục.",
            "Trang danh mục: lưới sản phẩm có ảnh, tên, giá.",
            "Trang chi tiết sản phẩm: ảnh lớn, giá, mô tả, nút mua.",
            "Form đặt hàng: tên, SĐT, địa chỉ, sản phẩm muốn mua.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Chưa cần thanh toán online",
          content:
            "Module này khách đặt hàng qua form hoặc Zalo — cách phần lớn shop nhỏ ở Việt Nam đang vận hành. Thanh toán online có thể bổ sung sau khi shop đã chạy ổn.",
        },
        {
          type: "card",
          title: "Ví dụ phù hợp để thực hành",
          list: [
            "Shop mỹ phẩm.",
            "Shop quần áo.",
            "Cửa hàng đồ handmade.",
            "Shop cây cảnh mini.",
            "Đặc sản quê nhà.",
          ],
        },
      ],
    },
    {
      id: "m5-b2",
      title: "Chuẩn bị dữ liệu sản phẩm",
      description: "Sản phẩm rõ ràng thì AI mới dựng website đúng.",
      duration: "12 phút",
      videoLabel: "Lập danh sách sản phẩm",
      main: [
        {
          type: "card",
          title: "Mỗi sản phẩm cần có",
          list: [
            "Tên sản phẩm.",
            "Giá bán (và giá gốc nếu muốn hiện giảm giá).",
            "Danh mục (vd: Chăm sóc da, Trang điểm).",
            "Mô tả ngắn 2–3 câu.",
            "Ảnh (chưa có ảnh thật thì dùng placeholder).",
          ],
        },
        {
          type: "prompt",
          title: "Mẫu danh sách sản phẩm",
          copyLabel: "Copy mẫu",
          prompt: `Danh mục sản phẩm của shop:
1. [Tên danh mục 1]
2. [Tên danh mục 2]

Danh sách sản phẩm (mỗi dòng một sản phẩm):
- Tên: | Giá: | Danh mục: | Mô tả ngắn:
- Tên: | Giá: | Danh mục: | Mô tả ngắn:
- Tên: | Giá: | Danh mục: | Mô tả ngắn:

(Nên chuẩn bị ít nhất 6-8 sản phẩm để website nhìn đầy đặn)`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Đừng bỏ qua bước này",
          content:
            "Đây là bước người mới hay bỏ qua nhất. Không có danh sách sản phẩm thật, AI sẽ tự bịa dữ liệu và bạn phải sửa lại từng chỗ — mất thời gian hơn nhiều.",
        },
      ],
    },
    {
      id: "m5-b3",
      title: "Tạo bộ document cho website bán hàng",
      description: "DATABASE.md bắt đầu quan trọng: mô tả sản phẩm và đơn hàng.",
      duration: "15 phút",
      videoLabel: "Tạo bộ document website bán hàng",
      main: [
        {
          type: "prompt",
          title: "Prompt tạo đủ document",
          prompt: `Bạn là Product Manager + Senior Frontend Developer.

Tôi muốn tạo website bán hàng bằng AI.

Dựa trên thông tin shop và danh sách sản phẩm dưới đây, hãy tạo đầy đủ 6 file document:

1. PROJECT.md — giới thiệu shop và mục tiêu website
2. PRD.md — mô tả rõ: trang chủ, trang danh mục, trang chi tiết sản phẩm, form đặt hàng
3. UI_UX_SPEC.md — màu sắc, phong cách; thẻ sản phẩm phải có ảnh, tên, giá, nút xem chi tiết
4. DATABASE.md — mô tả 2 loại dữ liệu: SẢN PHẨM (tên, giá, danh mục, mô tả, ảnh) và ĐƠN HÀNG (tên khách, SĐT, địa chỉ, sản phẩm đặt, ghi chú)
5. TASKS.md — chia việc từng bước nhỏ
6. CLAUDE.md — luật làm việc cho AI

Yêu cầu:
- Dữ liệu sản phẩm để trong một file riêng (vd products.js hoặc data/products) để dễ thêm/sửa sản phẩm, KHÔNG rải rác trong code giao diện
- Chưa cần đăng nhập, chưa cần thanh toán online
- Đặt hàng qua form, chưa cần database

Thông tin shop:
[Dán thông tin shop]

Danh sách sản phẩm:
[Dán danh sách sản phẩm đã chuẩn bị]`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Điểm mấu chốt của module này",
          content:
            "Yêu cầu AI tách dữ liệu sản phẩm ra file riêng. Sau này thêm sản phẩm mới, bạn chỉ sửa một file — không cần đụng vào giao diện.",
        },
      ],
    },
    {
      id: "m5-b4",
      title: "Dựng trang chủ và trang danh mục",
      description: "Nơi khách “dạo chợ” — sản phẩm phải hấp dẫn, dễ xem.",
      duration: "20 phút",
      videoLabel: "Trang chủ và lưới sản phẩm",
      main: [
        {
          type: "prompt",
          title: "Prompt dựng trang chủ + danh mục",
          intro:
            "Sau khi AI đã đọc document và bạn duyệt kế hoạch (làm giống Module 3–4):",
          prompt: `Hãy làm task tiếp theo: trang chủ và trang danh mục sản phẩm.

Trang chủ gồm:
- Hero giới thiệu shop + nút "Xem sản phẩm"
- Khu sản phẩm nổi bật (4-8 sản phẩm)
- Khu danh mục để khách chọn nhanh
- Lý do mua tại shop (cam kết, ưu đãi giao hàng...)

Trang danh mục gồm:
- Lưới sản phẩm: ảnh, tên, giá, nút xem chi tiết
- Bộ lọc theo danh mục
- Giá hiển thị định dạng tiền Việt (vd 250.000đ)

Dữ liệu lấy từ file sản phẩm đã tạo, không hard-code trong giao diện.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Mẹo trình bày sản phẩm",
          content:
            "Trên điện thoại lưới nên 2 cột, máy tính 3–4 cột. Ảnh sản phẩm cùng tỉ lệ (vuông hoặc 4:5) thì lưới mới đều và chuyên nghiệp.",
        },
        {
          type: "faq",
          items: [
            {
              question: "Giá hiện sai định dạng (250000 thay vì 250.000đ)?",
              answer:
                "Nói với AI: “Hãy hiển thị mọi giá tiền theo định dạng tiền Việt có dấu chấm ngăn cách và chữ đ ở cuối.”",
            },
          ],
        },
      ],
    },
    {
      id: "m5-b5",
      title: "Trang chi tiết sản phẩm",
      description: "Trang quyết định khách có bấm mua hay không.",
      duration: "20 phút",
      videoLabel: "Trang chi tiết sản phẩm",
      main: [
        {
          type: "card",
          title: "Trang chi tiết chuẩn gồm",
          list: [
            "Ảnh sản phẩm lớn, rõ.",
            "Tên + giá (giá gốc gạch ngang nếu có giảm).",
            "Mô tả chi tiết: chất liệu, công dụng, cách dùng.",
            "Nút “Đặt hàng ngay” nổi bật.",
            "Sản phẩm liên quan ở cuối trang.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt làm trang chi tiết",
          prompt: `Hãy làm task tiếp theo: trang chi tiết sản phẩm.

Yêu cầu:
- Bấm vào bất kỳ sản phẩm nào ở danh mục sẽ mở đúng trang chi tiết của sản phẩm đó
- Trang chi tiết gồm: ảnh lớn, tên, giá, mô tả, nút "Đặt hàng ngay"
- Nút "Đặt hàng ngay" mở form đặt hàng và tự điền sẵn tên sản phẩm khách đang xem
- Cuối trang có 3-4 sản phẩm liên quan cùng danh mục
- Trên điện thoại, nút Đặt hàng luôn dễ thấy`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Kiểm tra quan trọng nhất",
          content:
            "Bấm 3–4 sản phẩm khác nhau từ trang danh mục. Mỗi lần phải mở đúng ảnh, đúng tên, đúng giá của sản phẩm đó. Nếu mở nhầm — báo AI sửa ngay.",
        },
      ],
    },
    {
      id: "m5-b6",
      title: "Form đặt hàng và luồng chốt đơn",
      description: "Nhận đơn của khách rõ ràng, không sót thông tin.",
      duration: "15 phút",
      videoLabel: "Form đặt hàng hoàn chỉnh",
      main: [
        {
          type: "prompt",
          title: "Prompt thêm form đặt hàng",
          prompt: `Hãy làm task tiếp theo: form đặt hàng theo DATABASE.md.

Form gồm:
- Họ tên
- Số điện thoại
- Địa chỉ nhận hàng
- Sản phẩm đặt mua (tự điền sẵn nếu khách bấm từ trang chi tiết)
- Số lượng
- Ghi chú (không bắt buộc)

Yêu cầu:
- Sau khi gửi, hiển thị: "Đặt hàng thành công! Shop sẽ gọi xác nhận trong hôm nay."
- Kiểm tra số điện thoại phải đủ 10 số mới cho gửi
- Chưa cần lưu database — thiết kế đúng theo DATABASE.md để Module 7 kết nối Supabase
- Thêm nút "Đặt nhanh qua Zalo" bên cạnh nút gửi form`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Vì sao có nút Zalo?",
          content:
            "Nhiều khách Việt thích nhắn Zalo hơn điền form. Có cả hai lựa chọn giúp bạn không mất đơn nào.",
        },
      ],
    },
    {
      id: "m5-b7",
      title: "Thêm, sửa, xóa sản phẩm sau khi website đã xong",
      description: "Kỹ năng vận hành shop — dùng hàng ngày.",
      duration: "10 phút",
      videoLabel: "Quản lý dữ liệu sản phẩm",
      main: [
        {
          type: "prompt",
          title: "Prompt thêm sản phẩm mới",
          prompt: `Hãy thêm sản phẩm mới vào file dữ liệu sản phẩm:

- Tên: [tên sản phẩm]
- Giá: [giá]
- Danh mục: [danh mục]
- Mô tả: [mô tả ngắn]

Chỉ thêm vào file dữ liệu, không sửa giao diện. Sau khi thêm, xác nhận sản phẩm đã hiện đúng trong danh mục.`,
        },
        {
          type: "card",
          title: "Tương tự cho sửa và xóa",
          list: [
            "Sửa giá: “Đổi giá sản phẩm [tên] thành [giá mới]”.",
            "Hết hàng: “Ẩn sản phẩm [tên] khỏi danh mục”.",
            "Xóa: “Xóa sản phẩm [tên] khỏi file dữ liệu”.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Đây là lý do tách dữ liệu ra file riêng",
          content:
            "Mọi thao tác thêm/sửa/xóa chỉ động vào một file dữ liệu — giao diện không bị ảnh hưởng, website không bao giờ “vỡ” vì đổi sản phẩm.",
        },
      ],
    },
    {
      id: "m5-b8",
      title: "Rà soát và bài tập cuối Module 5",
      description: "Đặt mình vào vai khách mua hàng khó tính.",
      duration: "15 phút",
      videoLabel: "Test website như khách hàng thật",
      main: [
        {
          type: "card",
          title: "Checklist hoàn thiện",
          list: [
            "Trang chủ có sản phẩm nổi bật, bấm vào xem được chi tiết.",
            "Danh mục lọc đúng sản phẩm.",
            "Trang chi tiết mở đúng sản phẩm, đủ ảnh — tên — giá — mô tả.",
            "Form đặt hàng tự điền sẵn tên sản phẩm.",
            "SĐT nhập sai bị chặn, nhập đúng gửi được.",
            "Giá hiển thị đúng định dạng tiền Việt.",
            "Mượt trên điện thoại: lưới 2 cột, nút to dễ bấm.",
          ],
        },
        {
          type: "card",
          title: "Bài tập",
          body: [
            "Tự làm một website bán hàng mới với ít nhất 8 sản phẩm, 2 danh mục, cho một trong các đề:",
          ],
          list: [
            "Shop quần áo nam/nữ.",
            "Tiệm bánh ngọt.",
            "Shop phụ kiện điện thoại.",
            "Cửa hàng đặc sản vùng miền.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Kết quả cuối module",
          content:
            "Bạn có website bán hàng hoàn chỉnh và biết tự vận hành: thêm sản phẩm, đổi giá, nhận đơn — không phụ thuộc ai.",
        },
      ],
    },
  ],
};
