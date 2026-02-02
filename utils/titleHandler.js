module.exports = {

    ConvertTitleToSlug: function (title) {
        if (!title) return "";
        
        let slug = title.toLowerCase();

        // Xóa dấu tiếng Việt
        slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        // Thay thế chữ đ/Đ
        slug = slug.replace(/[đĐ]/g, 'd');
        // Loại bỏ các ký tự đặc biệt (chỉ giữ lại chữ cái, số và khoảng trắng)
        slug = slug.replace(/([^0-9a-z\s])/g, '');
        // Xóa khoảng trắng thừa ở đầu và cuối
        slug = slug.trim();
        // Thay thế một hoặc nhiều khoảng trắng bằng dấu gạch ngang
        slug = slug.replace(/\s+/g, '-');
        // Loại bỏ các dấu gạch ngang trùng lặp
        slug = slug.replace(/-+/g, '-');

        return slug;
    }
}