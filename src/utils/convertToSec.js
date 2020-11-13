export default function convertToSec(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
}