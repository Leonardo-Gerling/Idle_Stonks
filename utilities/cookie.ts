export function setCookie(name: string, value: string | number, expireMs?: number): void {
    const date = new Date();
    date.setTime(date.getTime() + (expireMs ?? 31536000000)); // One year

    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/;`
}

export function getCookie(name: string): string {
    const cookieName = `${name}=`
    const decodedCookie = decodeURIComponent(document.cookie)
    const cookieArray = decodedCookie.split(";")

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i]

        while (cookie.charAt(0) == " ") {
            cookie = cookie.substring(1);
        }

        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }

    return ""
}
