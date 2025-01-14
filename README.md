# Ha Trong Nhan
MSV: 22810310279
1. Mục đích sử dụng
FlatList:
Dùng khi bạn chỉ cần hiển thị danh sách đơn giản, ví dụ: danh sách sản phẩm, người dùng, bài viết.
SectionList:
Dùng khi bạn cần nhóm dữ liệu theo một tiêu chí cụ thể, ví dụ: danh sách danh bạ (phân nhóm theo chữ cái), danh sách các sản phẩm (phân nhóm theo loại sản phẩm).
2. Cấu trúc dữ liệu
FlatList:
Dữ liệu là một mảng đơn giản.
SectionList:
Dữ liệu được tổ chức thành các nhóm với thuộc tính title và data.
3. Hiệu năng
Cả hai đều có tính năng ảo hóa (virtualization), chỉ hiển thị các mục hiện tại trên màn hình, giúp tối ưu hiệu năng khi danh sách dài.
FlatList có hiệu năng tốt hơn nếu không cần hiển thị danh sách phân nhóm.
SectionList tốn thêm tài nguyên để xử lý các tiêu đề nhóm (renderSectionHeader), nhưng vẫn đủ nhanh cho hầu hết các trường hợp thông thường.
4. Tính dễ sử dụng
FlatList:
Thích hợp cho người mới bắt đầu do cấu trúc dữ liệu và cách triển khai đơn giản.
SectionList:
Cần nhiều logic hơn để quản lý các nhóm và hiển thị tiêu đề.
