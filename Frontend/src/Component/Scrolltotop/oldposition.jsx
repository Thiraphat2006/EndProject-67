import { useEffect } from "react";
import { useLocation } from "react-router";

export default function GoToTop() {
    const routePath = useLocation();

    // ฟังก์ชันเพื่อบันทึกตำแหน่ง scroll
    const saveScrollPosition = () => {
        sessionStorage.setItem(routePath.pathname, window.scrollY);
    };

    // ฟังก์ชันเพื่อเลื่อนกลับไปที่ตำแหน่งที่บันทึกไว้
    const restoreScrollPosition = () => {
        const savedPosition = sessionStorage.getItem(routePath.pathname);
        if (savedPosition !== null) {
            window.scrollTo(0, parseInt(savedPosition, 10));
        }
    };

    useEffect(() => {
        // เมื่อหน้าถูกโหลดครั้งแรก ให้เลื่อนกลับไปที่ตำแหน่งเดิม (ถ้ามี)
        restoreScrollPosition();

        // บันทึกตำแหน่ง scroll เมื่อมีการย้ายหน้า
        return () => saveScrollPosition();
    }, [routePath]);

    return null;
}