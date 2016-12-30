const $ = require('nodobjc');

$.framework('Foundation');
$.framework('AppKit');

/**
 * Retrieves the platform for the given file
 *
 * @param {String} file - The file's path
 * @return {Promise} - Resolves a base64 encoded string of the file's icon
 */
exports.getIcon = file => new Promise((resolve) => {
  const width = 32;
  const height = 32;
  const pool = $.NSAutoreleasePool('alloc')('init');
  const nsRect = $.NSMakeRect(0, 0, width, height);
  const nsFile = $.NSString('stringWithUTF8String', file);
  const nsDict = $.NSDictionary('dictionaryWithObject', $(1), 'forKey', $.NSString('stringWithUTF8String', ''));
  const nsWorkspace = $.NSWorkspace('sharedWorkspace');
  const nsImg = nsWorkspace('iconForFile', nsFile);
  const nsImgRep = nsImg('bestRepresentationForRect', nsRect, 'context', null, 'hints', null);
  const nsBestImg = $.NSImage('alloc')('init');
  nsBestImg('addRepresentation', nsImgRep);
  const nsBmp = $.NSBitmapImageRep('imageRepsWithData', nsBestImg('TIFFRepresentation'))('objectAtIndex', 0);
  const nsPng = nsBmp('representationUsingType', $.NSPNGFileType, 'properties', nsDict);
  const base64 = nsPng('base64Encoding');
  resolve(`data:image/png;base64,${base64.toString()}`);
  pool('drain');
});

