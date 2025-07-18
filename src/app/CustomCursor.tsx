"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const follower = document.createElement('div');
    follower.className = 'custom-cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(follower);
    document.body.classList.add('hide-default-cursor');

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animateFollower);
    };
    window.addEventListener('mousemove', moveCursor);
    animateFollower();
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.classList.remove('hide-default-cursor');
      cursor.remove();
      follower.remove();
    };
  }, []);
  return null;
} 