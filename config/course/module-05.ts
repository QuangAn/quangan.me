import type { CourseDocModule } from "@/types/course";

/** Module 5: Website bán hàng — bản tinh gọn, mỗi bài kết bằng 1 prompt copy dùng ngay. */
export const module05: CourseDocModule = {
  id: "module-5",
  order: 5,
  title: "Module 5: Tạo Website bán hàng",
  shortTitle: "05. Website bán hàng",
  tagline: "Danh mục · Chi tiết sản phẩm · Đặt hàng",
  description:
    "Dựng website bán hàng thật: danh mục sản phẩm, trang chi tiết và form đặt hàng — khách xem hàng rồi đặt mua ngay trên web. Vẫn đi đúng quy trình Module 2, mỗi bài có 1 prompt copy dùng ngay.",
  outcome:
    "Có website bán hàng chạy được với danh mục, chi tiết sản phẩm, form đặt hàng — và biết tự thêm/sửa/xóa sản phẩm mà không lo vỡ giao diện.",
  lessons: [
    {
      id: "m5-b1",
      title: "Bài 5.1 — Website bán hàng cần những gì?",
      description: "Đi theo bước chân khách mua hàng để biết web cần 4 phần.",
      duration: "6 phút",
      videoLabel: "Đi một vòng như khách vào shop",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Hiểu khách đi mua thế nào, để biết web cần đúng 4 phần.",
        },
        {
          type: "card",
          title: "Đi theo bước chân khách — như dạo một cửa hàng",
          ordered: true,
          list: [
            "Vào trang chủ, liếc thấy vài món nổi bật (như tủ kính ngoài cửa hàng).",
            "Bấm vào danh mục để xem hết hàng (như đi vào từng kệ).",
            "Bấm một món để xem kỹ: ảnh lớn, giá, mô tả (như cầm lên xem).",
            "Ưng thì bấm nút Đặt hàng.",
            "Điền tên, số điện thoại, địa chỉ rồi gửi đơn (như đưa hàng ra quầy).",
          ],
        },
        {
          type: "card",
          title: "Vậy web cần đúng 4 phần",
          list: [
            "Trang chủ: món nổi bật + lối vào các danh mục.",
            "Trang danh mục: lưới sản phẩm có ảnh, tên, giá.",
            "Trang chi tiết: ảnh lớn, giá, mô tả, nút đặt hàng.",
            "Form đặt hàng: tên, SĐT, địa chỉ, sản phẩm muốn mua.",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Lao vào bảo AI làm ngay, chưa hình dung khách bấm những gì.",
            "Bỏ trang danh mục, nhét hết sản phẩm vào trang chủ cho rối.",
            "Nghĩ phải có thanh toán online mới bán được — chưa cần (xem ghi chú bên phải).",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Chưa cần thanh toán online",
          content:
            "Module này khách đặt qua form hoặc Zalo — đúng cách phần lớn shop nhỏ Việt Nam đang bán. Cổng thanh toán để dành khi shop đã chạy ổn.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Kể được 5 bước khách đi từ vào web tới gửi đơn.",
            "✓ Nhớ web cần 4 phần: trang chủ, danh mục, chi tiết, form đặt hàng.",
            "✓ Chọn được một shop để thực hành (mỹ phẩm, quần áo, handmade, cây cảnh, đặc sản…).",
          ],
        },
      ],
    },
    {
      id: "m5-b2",
      title: "Bài 5.2 — Chuẩn bị dữ liệu sản phẩm",
      description: "Liệt kê sẵn sản phẩm để AI khỏi bịa dữ liệu.",
      duration: "12 phút",
      videoLabel: "Danh sách sản phẩm — nguyên liệu đầu vào",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có sẵn danh sách 6–8 sản phẩm để AI dựng web bằng hàng thật, không bịa.",
        },
        {
          type: "card",
          title: "Mỗi sản phẩm ghi đủ 5 thứ — như tờ giá dán trên món hàng",
          list: [
            "Tên sản phẩm.",
            "Giá bán (thêm giá gốc nếu muốn hiện giảm giá).",
            "Danh mục (vd Chăm sóc da, Trang điểm) — để lát nữa lọc cho gọn.",
            "Mô tả ngắn 2–3 câu: món này là gì, dùng để làm gì.",
            "Ảnh — chưa có ảnh thật thì cứ ghi “chưa có”, AI để ô ảnh trống tạm.",
          ],
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Mở Ghi chú (hoặc Word) trên máy, điền theo mẫu prompt bên dưới.",
            "Gõ ít nhất 6–8 sản phẩm để lưới nhìn đầy đặn, chia vào 2 danh mục.",
            "Chưa gọi AI ở bài này — đây là bước gom nguyên liệu, để dành dán cho AI ở bài 5.3.",
          ],
        },
        {
          type: "prompt",
          title: "Mẫu danh sách sản phẩm — điền rồi để dành",
          intro:
            "Đây là MẪU để bạn tự điền vào Ghi chú, chưa dán cho AI vội. Điền các chỗ [trong ngoặc], mỗi dòng một sản phẩm:",
          copyLabel: "Copy mẫu danh sách",
          prompt: `Danh mục sản phẩm của shop:
1. [Tên danh mục 1]
2. [Tên danh mục 2]

Danh sách sản phẩm (mỗi dòng một sản phẩm):
- Tên: [tên] | Giá: [vd 250.000đ] | Danh mục: [tên danh mục] | Mô tả ngắn: [2–3 câu]
- Tên: [tên] | Giá: [giá] | Danh mục: [danh mục] | Mô tả ngắn: [mô tả]
- Tên: [tên] | Giá: [giá] | Danh mục: [danh mục] | Mô tả ngắn: [mô tả]

(Điền tối thiểu 6–8 dòng để web nhìn đầy đặn.)`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bỏ qua bước này, để AI tự bịa — rồi ngồi sửa từng tên, từng giá, lâu hơn nhiều.",
            "Chỉ ghi 2–3 món, web trống trơn nhìn như chưa làm xong.",
            "Quên gắn danh mục cho từng món, tới lúc lọc sản phẩm thì loạn.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Đây là bước hay bị bỏ nhất",
          content:
            "Không có danh sách thật, AI bịa dữ liệu và bạn phải sửa lại từng chỗ. Mươi phút chuẩn bị ở đây tiết kiệm hàng giờ về sau.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Có file danh sách 6–8 sản phẩm, mỗi món đủ 5 thứ.",
            "✓ Chia sản phẩm vào ít nhất 2 danh mục.",
            "✓ File để sẵn, chờ dán cho AI ở bài 5.3.",
          ],
        },
      ],
    },
    {
      id: "m5-b3",
      title: "Bài 5.3 — Tạo bộ tài liệu cho web bán hàng",
      description: "Dựng 6 file — lần này DATABASE.md phải mô tả Sản phẩm và Đơn hàng.",
      duration: "15 phút",
      videoLabel: "Bộ 6 file cho shop, tách dữ liệu ra file riêng",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Có bộ 6 file cho shop, trong đó dữ liệu sản phẩm nằm riêng một file để sau này thêm hàng chỉ sửa một chỗ.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Tạo thư mục riêng cho shop (vd shop-my-pham), mở bằng VS Code (giống bài 3.3).",
            "Mở Terminal (Ctrl + `), gõ claude rồi Enter để mở Claude.",
            "Dán prompt bên dưới vào khung chat Claude đang mở trong Terminal, nhớ thay 2 chỗ [Dán…].",
            "Claude hỏi cho phép tạo file thì bấm đồng ý; nhìn cột file bên trái VS Code sẽ thấy 6 file .md hiện ra.",
            "Mở 6 file đọc lướt, chỉnh chỗ chưa đúng ý.",
          ],
        },
        {
          type: "files",
          title: "Vẫn là bộ 6 file lõi của Module 2 — điểm khác nằm ở DATABASE.md",
          items: [
            { emoji: "📄", name: "PROJECT.md", description: "Giới thiệu shop: bán gì, cho ai." },
            { emoji: "🎯", name: "PRD.md", description: "4 phần: trang chủ, danh mục, chi tiết, form đặt hàng." },
            { emoji: "🎨", name: "UI_UX_SPEC.md", description: "Màu sắc, phong cách; thẻ sản phẩm có ảnh, tên, giá, nút xem." },
            { emoji: "🗂", name: "DATABASE.md", description: "2 loại dữ liệu: SẢN PHẨM và ĐƠN HÀNG — quan trọng nhất ở đây." },
            { emoji: "✅", name: "TASKS.md", description: "Chia việc từng bước nhỏ." },
            { emoji: "🤖", name: "CLAUDE.md", description: "Luật cho AI (nó tự đọc mỗi phiên)." },
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — dựng 6 file cho web bán hàng",
          intro:
            "Dán vào khung chat Claude đang mở trong Terminal. Thay [Dán thông tin shop] và [Dán danh sách sản phẩm] bằng những gì đã chuẩn bị ở bài 5.2:",
          copyLabel: "Copy prompt 6 file bán hàng",
          prompt: `Bạn là Product Manager kiêm Senior Frontend. Tôi muốn làm website bán hàng. Dựa trên thông tin shop và danh sách sản phẩm dưới đây, hãy tạo đủ 6 file tài liệu:

- PROJECT.md — giới thiệu shop và mục tiêu website
- PRD.md — mô tả rõ: trang chủ, trang danh mục, trang chi tiết sản phẩm, form đặt hàng
- UI_UX_SPEC.md — màu sắc, phong cách; thẻ sản phẩm có ảnh, tên, giá, nút xem chi tiết
- DATABASE.md — mô tả 2 loại dữ liệu: SẢN PHẨM (tên, giá, danh mục, mô tả, ảnh) và ĐƠN HÀNG (tên khách, SĐT, địa chỉ, sản phẩm đặt, số lượng, ghi chú)
- TASKS.md — chia việc thành các bước nhỏ, đánh số thứ tự
- CLAUDE.md — luật: làm từng task, không tự thêm tính năng ngoài tài liệu, trả lời tiếng Việt, báo cáo ngắn sau mỗi bước

Yêu cầu quan trọng:
- Để dữ liệu sản phẩm trong MỘT file riêng (vd data/products) để dễ thêm/sửa, KHÔNG rải rác trong code giao diện
- Chưa cần đăng nhập, chưa cần thanh toán online; đặt hàng qua form, chưa cần database

Viết bằng tiếng Việt, đơn giản cho người không biết code.

Thông tin shop:
[Dán thông tin shop]

Danh sách sản phẩm:
[Dán danh sách sản phẩm đã chuẩn bị ở bài 5.2]`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bỏ bước tài liệu, bảo AI code luôn cho “nhanh” — y như Module 2 đã cảnh báo.",
            "Để dữ liệu sản phẩm nằm lẫn trong code giao diện, sau này sửa một giá là sợ vỡ cả trang.",
            "Nhận 6 file xong không đọc, tài liệu sai ý mà không biết.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Điểm mấu chốt của module",
          content:
            "Bắt AI tách dữ liệu sản phẩm ra file riêng. Sau này thêm hàng, đổi giá chỉ sửa một file — giao diện không đụng tới. Đây là lý do có cả bài 5.7.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Có thư mục riêng, đã mở trong VS Code, đã gõ claude.",
            "✓ Chạy prompt ra đủ 6 file .md, đọc lướt chỉnh lại.",
            "✓ DATABASE.md có mô tả cả SẢN PHẨM và ĐƠN HÀNG.",
          ],
        },
      ],
    },
    {
      id: "m5-b4",
      title: "Bài 5.4 — Dựng trang chủ và trang danh mục",
      description: "Nơi khách “dạo chợ” — lưới sản phẩm đều, giá đúng tiền Việt.",
      duration: "20 phút",
      videoLabel: "Trang chủ và lưới sản phẩm",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Có trang chủ và trang danh mục lấy hàng từ file dữ liệu, giá hiện đúng kiểu 250.000đ.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Bật plan mode: bấm Shift + Tab tới khi thấy dòng “plan mode” gần ô chat, rồi dán prompt “Đọc & lập kế hoạch” bên dưới — AI chỉ đọc và đề xuất, chưa đụng file.",
            "Đọc kế hoạch; ổn thì bấm Shift + Tab lần nữa để THOÁT plan mode.",
            "Dán tiếp prompt “Trang chủ + danh mục” bên dưới để AI bắt đầu làm.",
            "AI làm xong, nhờ nó: “Chạy web lên cho tôi xem thử.” Bấm vào danh mục, xem lưới ảnh–tên–giá; thu nhỏ cửa sổ hoặc mở trên điện thoại xem lưới có đều không.",
            "Ổn rồi thì để AI commit (lưu điểm): “Nếu dự án chưa có Git thì khởi tạo giúp tôi, rồi commit kèm ghi chú: xong-trang-chu-danh-muc.”",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — đọc tài liệu & lập kế hoạch",
          intro: "Bật plan mode (Shift + Tab) rồi dán vào khung chat Claude:",
          copyLabel: "Copy prompt Lập kế hoạch",
          prompt: `Hãy đọc các tài liệu dự án (PROJECT.md, PRD.md, UI_UX_SPEC.md, DATABASE.md, TASKS.md).

Sau đó:
1. Tóm tắt lại dự án bằng vài câu để tôi chắc bạn hiểu đúng.
2. Hỏi lại nếu còn điểm chưa rõ.
3. Đề xuất kế hoạch làm theo từng bước, đúng thứ tự trong TASKS.md.

CHƯA code gì cả. Trình kế hoạch xong thì dừng chờ tôi duyệt.`,
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — trang chủ + trang danh mục",
          intro:
            "Sau khi duyệt kế hoạch và thoát plan mode (Shift + Tab), dán vào khung chat Claude:",
          copyLabel: "Copy prompt trang chủ + danh mục",
          prompt: `Hãy làm task tiếp theo: trang chủ và trang danh mục sản phẩm.

Trang chủ gồm:
- Hero giới thiệu shop + nút "Xem sản phẩm"
- Khu sản phẩm nổi bật (4–8 sản phẩm)
- Khu danh mục để khách chọn nhanh
- Lý do mua tại shop (cam kết, ưu đãi giao hàng…)

Trang danh mục gồm:
- Lưới sản phẩm: ảnh, tên, giá, nút xem chi tiết
- Bộ lọc theo danh mục
- Giá hiển thị theo định dạng tiền Việt (vd 250.000đ)

Lấy dữ liệu từ file sản phẩm đã tạo, KHÔNG hard-code trong giao diện. Làm xong dừng lại, chạy web lên cho tôi xem thử.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Cho AI code ngay, bỏ bước duyệt kế hoạch — sai thì đập đi làm lại cả trang.",
            "Không xem trên điện thoại, tới lúc khách vào bằng điện thoại mới thấy lưới vỡ.",
            "Thấy giá hiện 250000 mà mặc kệ — nhìn thiếu chuyên nghiệp (cách sửa ở ô bên phải).",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Mẹo lưới sản phẩm cho đều",
          content:
            "Điện thoại 2 cột, máy tính 3–4 cột. Bảo AI để ảnh sản phẩm cùng tỉ lệ (vuông hoặc 4:5) thì lưới mới đều và gọn.",
        },
        {
          type: "faq",
          title: "Lỗi hay gặp",
          items: [
            {
              question: "Giá hiện 250000 thay vì 250.000đ?",
              answer:
                "Bảo AI: “Hiển thị mọi giá theo định dạng tiền Việt, có dấu chấm ngăn cách hàng nghìn và chữ đ ở cuối.”",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Trang chủ có hero, sản phẩm nổi bật, lối vào danh mục.",
            "✓ Danh mục là lưới ảnh–tên–giá, lọc được theo danh mục.",
            "✓ Giá đúng kiểu 250.000đ; lưới đều trên điện thoại; đã commit.",
          ],
        },
      ],
    },
    {
      id: "m5-b5",
      title: "Bài 5.5 — Trang chi tiết sản phẩm",
      description: "Trang quyết định khách có bấm mua hay không.",
      duration: "20 phút",
      videoLabel: "Trang chi tiết sản phẩm",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Bấm bất kỳ sản phẩm nào ở danh mục đều mở đúng trang chi tiết của nó, có nút Đặt hàng nổi bật.",
        },
        {
          type: "card",
          title: "Trang chi tiết chuẩn gồm — như khi khách cầm món hàng lên xem",
          list: [
            "Ảnh sản phẩm lớn, rõ.",
            "Tên + giá (giá gốc gạch ngang nếu đang giảm).",
            "Mô tả chi tiết: chất liệu, công dụng, cách dùng.",
            "Nút “Đặt hàng ngay” nổi bật, dễ thấy.",
            "Vài sản phẩm liên quan ở cuối trang để khách xem thêm.",
          ],
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Dán prompt bên dưới vào khung chat Claude, để AI làm trang chi tiết.",
            "Nhờ AI “chạy web lên cho tôi xem thử”.",
            "Từ trang danh mục, bấm thử 3–4 sản phẩm KHÁC nhau — mỗi lần phải ra đúng ảnh, đúng tên, đúng giá của món đó.",
            "Bấm thử nút “Đặt hàng ngay” xem có mở form không.",
            "Ổn thì để AI commit kèm ghi chú: xong-trang-chi-tiet.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — trang chi tiết sản phẩm",
          intro: "Dán vào khung chat Claude đang mở trong Terminal:",
          copyLabel: "Copy prompt trang chi tiết",
          prompt: `Hãy làm task tiếp theo: trang chi tiết sản phẩm.

Yêu cầu:
- Bấm vào bất kỳ sản phẩm nào ở danh mục sẽ mở ĐÚNG trang chi tiết của sản phẩm đó
- Trang chi tiết gồm: ảnh lớn, tên, giá, mô tả, nút "Đặt hàng ngay"
- Nút "Đặt hàng ngay" mở form đặt hàng và tự điền sẵn tên sản phẩm khách đang xem
- Cuối trang có 3–4 sản phẩm liên quan cùng danh mục
- Trên điện thoại, nút Đặt hàng luôn dễ thấy

Làm xong dừng lại, chạy web lên cho tôi xem thử.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Chỉ thử đúng một sản phẩm, không biết các món khác mở nhầm.",
            "Nút Đặt hàng nhạt nhòa, khách không thấy đâu mà bấm.",
            "Quên kiểm tra trên điện thoại — nút Đặt hàng bị đẩy tuốt xuống dưới.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Kiểm tra quan trọng nhất",
          content:
            "Bấm 3–4 sản phẩm khác nhau từ danh mục. Mỗi lần phải ra đúng ảnh, đúng tên, đúng giá. Mở nhầm thì báo AI: dán tên món bấm và tên món hiện ra, bảo sửa đúng chỗ này thôi.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Bấm 3–4 món khác nhau đều mở đúng chi tiết của món đó.",
            "✓ Có đủ ảnh lớn, tên, giá, mô tả, nút Đặt hàng nổi bật.",
            "✓ Có sản phẩm liên quan cuối trang; nút Đặt hàng dễ thấy trên điện thoại; đã commit.",
          ],
        },
      ],
    },
    {
      id: "m5-b6",
      title: "Bài 5.6 — Form đặt hàng và luồng chốt đơn",
      description: "Nhận đơn rõ ràng, không sót thông tin, có thêm nút Zalo.",
      duration: "15 phút",
      videoLabel: "Form đặt hàng hoàn chỉnh",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Có form đặt hàng đủ thông tin, chặn SĐT sai, và một nút đặt nhanh qua Zalo cho khách ngại điền.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Dán prompt bên dưới vào khung chat Claude, để AI làm form theo DATABASE.md.",
            "Nhờ AI “chạy web lên cho tôi xem thử”, rồi từ trang chi tiết bấm “Đặt hàng ngay”.",
            "Thử điền số điện thoại thiếu số — form phải chặn, không cho gửi.",
            "Điền đủ và đúng rồi gửi — phải hiện lời cảm ơn xác nhận.",
            "Ổn thì để AI commit kèm ghi chú: xong-form-dat-hang.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — thêm form đặt hàng",
          intro: "Dán vào khung chat Claude đang mở trong Terminal:",
          copyLabel: "Copy prompt form đặt hàng",
          prompt: `Hãy làm task tiếp theo: form đặt hàng theo DATABASE.md.

Form gồm:
- Họ tên
- Số điện thoại
- Địa chỉ nhận hàng
- Sản phẩm đặt mua (tự điền sẵn nếu khách bấm từ trang chi tiết)
- Số lượng
- Ghi chú (không bắt buộc)

Yêu cầu:
- Số điện thoại phải hợp lệ mới cho gửi (9–11 chữ số; bỏ qua khoảng trắng, chấp nhận đầu +84); sai thì báo lỗi ngay dưới ô nhập
- Gửi xong hiện: "Đặt hàng thành công! Shop sẽ gọi xác nhận trong hôm nay."
- Chưa cần lưu database, nhưng thiết kế đúng theo DATABASE.md để Module 7 nối Supabase
- Thêm nút "Đặt nhanh qua Zalo" bên cạnh nút gửi form, trỏ tới Zalo của shop: [số điện thoại hoặc link Zalo của bạn]

Làm xong dừng lại, chạy web lên cho tôi xem thử.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bỏ kiểm tra SĐT, khách gõ nhầm là mất cách gọi lại.",
            "Không thử gửi thử một đơn, không biết sau khi gửi hiện ra gì.",
            "Đặt số điện thoại Zalo sai, nút bấm vào không ra đúng tài khoản shop.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Vì sao có nút Zalo?",
          content:
            "Nhiều khách Việt thích nhắn Zalo hơn điền form. Có cả hai lựa chọn thì bạn không mất đơn nào.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Form đủ: tên, SĐT, địa chỉ, sản phẩm, số lượng, ghi chú.",
            "✓ SĐT sai bị chặn; gửi đúng thì hiện lời xác nhận.",
            "✓ Có nút Đặt nhanh qua Zalo; đã commit.",
          ],
        },
      ],
    },
    {
      id: "m5-b7",
      title: "Bài 5.7 — Thêm, sửa, xóa sản phẩm khi web đã xong",
      description: "Kỹ năng vận hành shop hằng ngày — chỉ động vào một file dữ liệu.",
      duration: "10 phút",
      videoLabel: "Quản lý dữ liệu sản phẩm",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Tự thêm/sửa/xóa sản phẩm chỉ bằng một câu, chỉ đụng vào file dữ liệu — giao diện không bao giờ vỡ.",
        },
        {
          type: "card",
          title: "Làm ngay — thêm một sản phẩm thử",
          ordered: true,
          list: [
            "Dán prompt “thêm sản phẩm” bên dưới vào khung chat Claude, điền các chỗ [ngoặc].",
            "Nhờ AI “chạy web lên cho tôi xem thử”, vào danh mục xem món mới đã hiện đúng chưa.",
            "Đúng rồi thì để AI commit kèm ghi chú: them-san-pham-moi.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — thêm sản phẩm mới",
          intro: "Dán vào khung chat Claude đang mở trong Terminal, điền [ngoặc]:",
          copyLabel: "Copy prompt thêm sản phẩm",
          prompt: `Hãy thêm một sản phẩm mới vào file dữ liệu sản phẩm:

- Tên: [tên sản phẩm]
- Giá: [giá, vd 250.000đ]
- Danh mục: [danh mục]
- Mô tả: [mô tả ngắn]

Chỉ thêm vào file dữ liệu, KHÔNG sửa giao diện. Thêm xong, xác nhận sản phẩm đã hiện đúng trong danh mục.`,
        },
        {
          type: "card",
          title: "Sửa và xóa cũng chỉ một câu",
          list: [
            "Đổi giá: “Đổi giá sản phẩm [tên] thành [giá mới], chỉ sửa file dữ liệu.”",
            "Hết hàng: “Ẩn sản phẩm [tên] khỏi danh mục, chỉ sửa file dữ liệu.”",
            "Xóa hẳn: “Xóa sản phẩm [tên] khỏi file dữ liệu.”",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Quên câu “chỉ sửa file dữ liệu”, AI đụng luôn cả giao diện.",
            "Sửa xong không xem lại web, không biết món đã cập nhật chưa.",
            "Làm nhiều thay đổi mà không commit, lỡ sai không có đường lùi.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Đây là phần thưởng của việc tách file",
          content:
            "Vì bài 5.3 đã bắt AI để dữ liệu ra file riêng, mọi thao tác thêm/sửa/xóa chỉ động một file — web không bao giờ “vỡ” vì đổi sản phẩm.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Thêm được sản phẩm mới, hiện đúng trong danh mục.",
            "✓ Biết câu sửa giá, ẩn hàng hết, xóa sản phẩm.",
            "✓ Luôn kèm “chỉ sửa file dữ liệu” và commit sau khi đổi.",
          ],
        },
      ],
    },
    {
      id: "m5-b8",
      title: "Bài 5.8 — Rà soát & bài tập cuối Module 5",
      description: "Đóng vai khách khó tính đi một vòng, rồi tự làm shop mới.",
      duration: "15 phút",
      videoLabel: "Test website như khách hàng thật",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Tự đóng vai khách mua hàng, đi trọn một vòng và bắt hết lỗi trước khi coi như xong.",
        },
        {
          type: "card",
          title: "Làm ngay — đi một vòng như khách khó tính",
          ordered: true,
          list: [
            "Vào trang chủ, bấm một sản phẩm nổi bật xem có mở chi tiết không.",
            "Vào danh mục, lọc thử một danh mục — phải đúng nhóm hàng đó.",
            "Bấm 3–4 sản phẩm, mỗi lần kiểm đúng ảnh–tên–giá–mô tả.",
            "Từ chi tiết bấm Đặt hàng, kiểm form tự điền sẵn tên món; gõ SĐT sai xem có bị chặn, gõ đúng gửi thử một đơn.",
            "Mở trên điện thoại xem lưới 2 cột, nút to dễ bấm, giá đúng 250.000đ.",
          ],
        },
        {
          type: "card",
          title: "Checklist hoàn thiện",
          list: [
            "Trang chủ có sản phẩm nổi bật, bấm vào xem được chi tiết.",
            "Danh mục lọc đúng sản phẩm.",
            "Chi tiết mở đúng món, đủ ảnh — tên — giá — mô tả.",
            "Form đặt hàng tự điền sẵn tên sản phẩm.",
            "SĐT sai bị chặn, nhập đúng gửi được.",
            "Giá đúng định dạng tiền Việt.",
            "Mượt trên điện thoại: lưới 2 cột, nút to dễ bấm.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — nhờ AI rà lỗi trước khi nộp",
          intro: "Dán vào khung chat Claude đang mở trong Terminal sau khi bạn đã tự đi một vòng:",
          copyLabel: "Copy prompt rà soát",
          prompt: `Tôi sắp coi website bán hàng này là hoàn thành. Hãy rà lại toàn bộ và báo cho tôi:
1. Bấm từ danh mục sang chi tiết có mở đúng sản phẩm không.
2. Giá ở mọi trang có cùng định dạng tiền Việt (vd 250.000đ) không.
3. Form đặt hàng đã chặn số điện thoại sai chưa, đã điền sẵn tên sản phẩm chưa.
4. Trên điện thoại lưới có đều, nút Đặt hàng có dễ thấy không.

Chỗ nào lỗi thì nói rõ trang nào, lỗi gì, và cách sửa. CHƯA sửa gì cả, chờ tôi duyệt.`,
        },
        {
          type: "card",
          title: "Bài tập cuối module",
          body: [
            "Tự làm một web bán hàng mới (ít nhất 8 sản phẩm, 2 danh mục) cho một trong các đề:",
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
            "Bạn có website bán hàng chạy được và biết tự vận hành: thêm sản phẩm, đổi giá, nhận đơn — không phụ thuộc ai.",
        },
        {
          type: "note",
          tone: "info",
          label: "Bước kế tiếp",
          content:
            "Form đang thiết kế đúng theo DATABASE.md. Tới Module 7, bạn nối Supabase để đơn hàng tự lưu về thay vì chỉ hiện lời cảm ơn.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Đi trọn một vòng như khách, cả trên điện thoại.",
            "✓ Qua hết checklist hoàn thiện, sửa nốt lỗi còn lại.",
            "✓ Bắt tay làm shop mới ở phần bài tập.",
          ],
        },
      ],
    },
  ],
};
