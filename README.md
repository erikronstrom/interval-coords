# `interval-coords`

This module makes it possible to convert music intervals in so-called "simple format",
into a coordinate in the format `[steps, semitones]`, which represents how many
diatonic steps and semitones there are between two tones, respectively.

For example `P1` means "perfect unison", and so the coordinate would be `[0, 0]`
because there's no movement.

Another example, `M3` means "major third" and the coordinate is `[2, 4]`.

An augmented fourth, `A4`, is represented by `[3, 6]`, while a diminished fifth is
`[4, 6]`. The second number is the same, which tells us that they have the same
sounding pitch.

This way of representing intervals and notes is a powerful one, and it lets us
take advantage of numeric computations instead of string-parsing and long
if/else statements

## usage

```js
var icoords = require('interval-coords');

icoords('P1')   // perfect unison -> [0, 0]
icoords('M3')   // major third -> [2, 4]
icoords('P8')   // perfect octave -> [7, 12]
icoords('m13')  // minor 13th -> [12, 20]

// You can also use "negative" intervals (going down)
icoords('m-2')  // downwards minor second -> [-1, -1]
```

### `icoords(simpleInterval) -> [steps, semitones]`

Given a `string` with a "simple format" interval, it returns the corresponding
coordinate vector of that interval.

### "simple format" interval

A simple interval is a string in the following format:

`dd, d, m, P, M, A, AA` followed by an optional `-` sign (for negative intervals), followed by the
`number` of the interval.

Not all combinations are valid, e.g. P3 (a "perfect third") doesn't make sense,
but P4 ("perfect fourth") does.
