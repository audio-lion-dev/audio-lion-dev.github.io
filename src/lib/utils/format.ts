export function formatFileSize(sizeInBytes: number): string {
	const kb = 1024;
	const mb = kb * 1024;
	const gb = mb * 1024;
	const tb = gb * 1024;

	if (sizeInBytes < kb) {
		return sizeInBytes + " B";
	} else if (sizeInBytes < mb) {
		return (sizeInBytes / kb).toFixed(2) + " KB";
	} else if (sizeInBytes < gb) {
		return (sizeInBytes / mb).toFixed(2) + " MB";
	} else if (sizeInBytes < tb) {
		return (sizeInBytes / gb).toFixed(2) + " GB";
	} else {
		return (sizeInBytes / tb).toFixed(2) + " TB";
	}
}

export function capitalizeFirstLetter(str: string): string {
	if (str.length === 0) {
		return str;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export type ValidPlatforms = "windows" | "mac" | "linux" | "unknown";

export function getCurrentPlatform(): ValidPlatforms {
	const userAgent = window.navigator.userAgent;
	if (userAgent.indexOf("Windows") !== -1) {
		return "windows";
	} else if (userAgent.indexOf("Linux") !== -1) {
		return "linux";
	} else if (userAgent.indexOf("Mac") !== -1) {
		return "mac";
	} else {
		return "unknown";
	}
}