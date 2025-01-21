function canMove(piece, from, to) {
    const [fromCol, fromRow] = [from[0].charCodeAt(0), parseInt(from[1])];
    const [toCol, toRow] = [to[0].charCodeAt(0), parseInt(to[1])];

    switch (piece.toLowerCase()) {
        case "pawn":
            // Pawn can move one square forward (or two if on the second rank)
            if (fromCol === toCol && (toRow === fromRow + 1 || (fromRow === 2 && toRow === fromRow + 2))) {
                return true;
            }
            break;

        case "knight":
            // Knight moves in an "L" shape
            if (
                (Math.abs(fromCol - toCol) === 2 && Math.abs(fromRow - toRow) === 1) ||
                (Math.abs(fromCol - toCol) === 1 && Math.abs(fromRow - toRow) === 2)
            ) {
                return true;
            }
            break;

        case "bishop":
            // Bishop moves diagonally
            if (Math.abs(fromCol - toCol) === Math.abs(fromRow - toRow)) {
                return true;
            }
            break;

        case "rook":
            // Rook moves in a straight line (either column or row)
            if (fromCol === toCol || fromRow === toRow) {
                return true;
            }
            break;

        case "queen":
            // Queen moves like a rook or a bishop
            if (
                fromCol === toCol || 
                fromRow === toRow || 
                Math.abs(fromCol - toCol) === Math.abs(fromRow - toRow)
            ) {
                return true;
            }
            break;

        case "king":
            // King moves one square in any direction
            if (Math.abs(fromCol - toCol) <= 1 && Math.abs(fromRow - toRow) <= 1) {
                return true;
            }
            break;

        default:
            return false;
    }

    return false;
}

// ตัวอย่างการใช้งาน
console.log(canMove("Rook", "A8", "H8")); // true
console.log(canMove("Bishop", "A7", "G1")); // true
console.log(canMove("Queen", "C4", "D6")); // false